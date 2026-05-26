/**
 * Google Apps Script — Portfolio Contact Form → Google Sheets
 * 
 * SETUP INSTRUCTIONS:
 * 1. Open your Google Sheet:
 *    https://docs.google.com/spreadsheets/d/1V0VtHRwAdmN5ZmAJ7smoyjKlQ9Yr7Tx3tmsjIRij1B4/edit
 * 
 * 2. Click: Extensions → Apps Script
 * 
 * 3. Delete everything in the editor and paste this entire file.
 * 
 * 4. Click "Save" (Ctrl+S), then click "Deploy" → "New deployment"
 *    - Type: "Web app"
 *    - Description: "Portfolio contact form"
 *    - Execute as: "Me"
 *    - Who has access: "Anyone"
 *    - Click "Deploy"
 * 
 * 5. Copy the Web App URL it gives you (looks like:
 *    https://script.google.com/macros/s/XXXXX.../exec)
 * 
 * 6. Paste that URL into your .env file:
 *    GOOGLE_SHEETS_WEBHOOK_URL=https://script.google.com/macros/s/XXXXX.../exec
 * 
 * 7. Restart your dev server: npm run dev
 */

const SHEET_NAME = "Sheet1"; // Change if your sheet tab has a different name

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
    
    // Auto-create headers if the sheet is empty
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(["Timestamp", "Full Name", "Email", "Message"]);
      sheet.getRange(1, 1, 1, 4).setFontWeight("bold");
    }

    var data = JSON.parse(e.postData.contents);

    sheet.appendRow([
      data.timestamp || new Date().toISOString(),
      data.fullName || "",
      data.email || "",
      data.message || "",
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: err.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Optional: test by visiting the web app URL in browser
function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ status: "Portfolio contact form webhook is live!" }))
    .setMimeType(ContentService.MimeType.JSON);
}
