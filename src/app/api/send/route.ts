import { z } from "zod";

const rateLimit = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_MAX = 3;
const RATE_LIMIT_WINDOW_MS = 60 * 1000;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimit.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimit.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }
  entry.count++;
  return entry.count > RATE_LIMIT_MAX;
}

const ContactSchema = z.object({
  fullName: z.string().min(2, "Full name is invalid!"),
  email: z.string().email({ message: "Email is invalid!" }),
  message: z.string().min(10, "Message is too short!"),
});

export async function POST(req: Request) {
  try {
    const ip = req.headers.get("x-forwarded-for") ?? "unknown";
    if (isRateLimited(ip)) {
      return Response.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const body = await req.json();
    const { success, data, error: zodError } = ContactSchema.safeParse(body);
    if (!success) {
      return Response.json({ error: zodError?.message }, { status: 400 });
    }

    const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
    if (!webhookUrl) {
      console.error("GOOGLE_SHEETS_WEBHOOK_URL is not set in .env");
      return Response.json(
        { error: "Server misconfiguration: webhook URL not set." },
        { status: 500 }
      );
    }

    // Send form data to Google Apps Script Web App
    const sheetRes = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        fullName: data.fullName,
        email: data.email,
        message: data.message,
        timestamp: new Date().toISOString(),
      }),
    });

    if (!sheetRes.ok) {
      const text = await sheetRes.text();
      console.error("Google Sheets webhook error:", text);
      return Response.json(
        { error: "Failed to save to Google Sheets." },
        { status: 502 }
      );
    }

    return Response.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}

