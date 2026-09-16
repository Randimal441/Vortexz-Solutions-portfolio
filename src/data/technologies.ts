export interface TechnologyItem {
  name: string;
  category: "Frontend" | "Backend & Database" | "Mobile" | "Tools & Workflow";
  description: string;
}

export const TECHNOLOGIES: TechnologyItem[] = [
  // Frontend
  { name: "React", category: "Frontend", description: "Declarative component-driven user interfaces" },
  { name: "Next.js", category: "Frontend", description: "Production-ready full-stack React framework with App Router" },
  { name: "TypeScript", category: "Frontend", description: "Strict type safety and robust code maintainability" },
  { name: "JavaScript", category: "Frontend", description: "Modern ES6+ client and runtime scripting" },
  { name: "Tailwind CSS", category: "Frontend", description: "Utility-first CSS framework for custom responsive design" },
  { name: "HTML5", category: "Frontend", description: "Semantic markup optimized for accessibility and search engines" },
  { name: "CSS3", category: "Frontend", description: "Modern styling, animations, and fluid responsive layouts" },

  // Backend & Database
  { name: "Node.js", category: "Backend & Database", description: "Scalable asynchronous event-driven server runtime" },
  { name: "MongoDB", category: "Backend & Database", description: "Flexible document-oriented database for modern web systems" },

  // Mobile
  { name: "Flutter", category: "Mobile", description: "Cross-platform mobile apps for iOS and Android from one codebase" },
  { name: "Android", category: "Mobile", description: "Native Android app development and Google Play deployment" },

  // Tools & Workflow
  { name: "Git", category: "Tools & Workflow", description: "Distributed version control for collaborative development" },
  { name: "GitHub", category: "Tools & Workflow", description: "Code review, CI/CD pipeline automation, and repository management" },
];
