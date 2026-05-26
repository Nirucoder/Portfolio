const config = {
  title: "Nirattay Biswas | AI/ML Developer & Computer Science Student",
  description: {
    long: "First-year Computer Science & Engineering student at SRMIST, passionate about AI/ML systems and applied research. Building computer vision pipelines, LLM-powered applications, and full-stack prototypes. Explore projects like DRISHTI (AI drone surveillance), EXPLAIN_ML, Crisis Connect, and more.",
    short:
      "CS student at SRMIST building AI/ML systems, computer vision tools, and full-stack web apps. Open to research & internship opportunities.",
  },
  keywords: [
    "Nirattay",
    "Nirattay Biswas",
    "Nirucoder",
    "portfolio",
    "full-stack developer",
    "creative technologist",
    "web development",
    "3D animations",
    "interactive websites",
    "Swiggy Playground",
    "EXPLAIN_ML",
    "Image Classifier",
    "web design",
    "GSAP",
    "React",
    "Next.js",
    "Spline",
    "Framer Motion",
  ],
  author: "Nirattay Biswas",
  email: "nb3801@srmist.edu.in",
  phone: "+91 8697698467",
  site: "https://nirucoder.github.io",

  // for github stars button
  githubUsername: "Nirucoder",
  githubRepo: "Portfolio",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "https://x.com/NirattayB",
    linkedin: "https://www.linkedin.com/in/nirattay-biswas-729741379/",
    instagram: "https://www.instagram.com/",
    facebook: "https://www.facebook.com/",
    github: "https://github.com/Nirucoder",
  },
};
export { config };
