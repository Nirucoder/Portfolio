import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiDocker,
  SiExpress,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPython,
  SiTailwindcss,
  SiTypescript,
  SiStreamlit,
  SiFirebase,
  SiSupabase,
} from "react-icons/si";

const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live?: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      {live && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={live}
        >
          <Button variant={"default"} size={"sm"}>
            Visit Website
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};

const PROJECT_SKILLS = {
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  mongo: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  express: {
    title: "Express",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
    firebase: {
    title: "Firebase",
    bg: "black",
    fg: "white",
    icon: <SiFirebase />,
  },
  supabase: {
    title: "Supabase",
    bg: "black",
    fg: "white",
    icon: <SiSupabase />,
  },
  oauth: {
    title: "OAuth",
    bg: "black",
    fg: "white",
    icon: <SiFirebase />,
  },
  streamlit: {
    title: "Streamlit",
    bg: "black",
    fg: "white",
    icon: <SiStreamlit />,
  },
};

export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live?: string;
};

const projects: Project[] = [
  {
    id: "striver-sheet-fine-tuned",
    category: "JavaScript / Full-Stack",
    title: "StudyOS",
    src: "/assets/projects-screenshots/striver_sheet.png",
    screenshots: ["striver_sheet.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.js,
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.firebase,
        PROJECT_SKILLS.oauth,
      ],
    },
    live: "https://striver-sheet-fine-tuned.vercel.app",
    github: "https://github.com/Nirucoder/Striver-sheet-fine-tuned",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            StudyOS
          </TypographyP>
          <TypographyP className="font-mono">
            A customized, fine-tuned platform for DSA preparation based on Striver's SDE sheet. Includes an interactive dashboard, progress tracking, and detailed analytics for tracking problem-solving journeys.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
        </div>
      );
    },
  },
  {
    id: "image-classifier",
    category: "TypeScript / Full-Stack",
    title: "MedClassify",
    src: "/assets/projects-screenshots/image_classifier.png",
    screenshots: ["image_classifier.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.supabase,
        PROJECT_SKILLS.oauth,
      ],
    },
    live: "https://image-classifier-ten.vercel.app/",
    github: "https://github.com/Nirucoder/image-classifier",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            AI-Powered Image Classifier
          </TypographyP>
          <TypographyP className="font-mono">
            An AI-powered full-stack image classification system. Upload medical documents (prescriptions, lab reports, etc.) to get high-speed, accurate predictions with a modern, responsive UI.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
        </div>
      );
    },
  },
  {
    id: "personal-portfolio",
    category: "TypeScript / Full-Stack",
    title: "Personal Portfolio",
    src: "/assets/projects-screenshots/portfolio.png",
    screenshots: ["portfolio.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [],
    },
    live: "https://nirattaybiswas.vercel.app/",
    github: "https://github.com/Nirucoder/Portfolio",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Interactive Developer Portfolio
          </TypographyP>
          <TypographyP className="font-mono">
            A modern, highly interactive personal portfolio built with Next.js, React, and Tailwind CSS. Features dynamic animations, a responsive design, and an interactive project showcase.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
        </div>
      );
    },
  },
  {
    id: "explain-ml",
    category: "Machine Learning / XAI",
    title: "EXPLAIN_ML",
    src: "/assets/projects-screenshots/explain_ml.png",
    screenshots: ["explain_ml.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.streamlit,
      ],
      backend: [
        PROJECT_SKILLS.python,
      ],
    },
    live: "https://explainml-m8tjioxm5jrsmiffjfjgtg.streamlit.app/",
    github: "https://github.com/Nirucoder/EXPLAIN_ML",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Explainable AI Dashboard
          </TypographyP>
          <TypographyP className="font-mono">
            An explainable AI dashboard designed to make black-box models transparent. Train models on custom datasets, reveal feature importance, and explain individual predictions using SHAP values.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
        </div>
      );
    },
  },
  {
    id: "swiggy-playground",
    category: "Data Science / Analysis",
    title: "Swiggy Playground",
    src: "/assets/projects-screenshots/swiggy_playground.png",
    screenshots: ["swiggy_playground.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.streamlit,
      ],
      backend: [
        PROJECT_SKILLS.python,
      ],
    },
    live: "https://swiggyplayground-rhachstnfgwrzf4wdxy35f.streamlit.app/",
    github: "https://github.com/Nirucoder/Swiggy_playground",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Interactive Swiggy Data Dashboard
          </TypographyP>
          <TypographyP className="font-mono">
            A real-time data exploration and forecasting playground. Analyzes food delivery trends, restaurant metrics, and ordering patterns using historical data and live scraping.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
        </div>
      );
    },
  },
  {
    id: "afk-drishti",
    category: "Computer Vision",
    title: "Afk Drishti",
    src: "/assets/projects-screenshots/drishti.png",
    screenshots: ["drishti.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.python,
      ],
      backend: [
        PROJECT_SKILLS.python,
      ],
    },
    github: "https://github.com/Nirucoder/Afk_Drishti",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Drishti Computer Vision
          </TypographyP>
          <TypographyP className="font-mono">
            An edge AI tactical surveillance system simulation. Integrates hardware IoT sensors with a live command dashboard for real-time threat detection and situational awareness.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
        </div>
      );
    },
  },
  {
    id: "bike-sharing-insider",
    category: "Data Science",
    title: "Bike Sharing Insider",
    src: "/assets/projects-screenshots/bike_sharing.png",
    screenshots: ["bike_sharing.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.python,
      ],
      backend: [
        PROJECT_SKILLS.python,
      ],
    },
    github: "https://github.com/Nirucoder/Bike-sharing_insider",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Bike-sharing Demand Prediction
          </TypographyP>
          <TypographyP className="font-mono">
            A data science project focusing on analyzing bike-sharing patterns and predicting demand. Uncovers usage trends, peak hours, and seasonal impacts from real-world city datasets.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
        </div>
      );
    },
  },
  {
    id: "esummit-krishisevak",
    category: "TypeScript / Full-Stack",
    title: "KrishiSevak",
    src: "/assets/projects-screenshots/krishi_sevak.png",
    screenshots: ["krishi_sevak.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [
        PROJECT_SKILLS.node,
      ],
    },
    live: "https://esummit-krishi-sevak.vercel.app",
    github: "https://github.com/Nirucoder/Esummit_KrishiSevak",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            KrishiSevak E-Summit Platform
          </TypographyP>
          <TypographyP className="font-mono">
            An agricultural tech platform built during E-Summit to empower farmers. Delivers critical agricultural services, weather updates, and farming information through a modern web interface.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
        </div>
      );
    },
  }];

export default projects;
