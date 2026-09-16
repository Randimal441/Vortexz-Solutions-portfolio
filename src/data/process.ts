export interface ProcessStepItem {
  step: string;
  title: string;
  shortDescription: string;
  details: string;
  deliverables: string[];
}

export const DEVELOPMENT_PROCESS: ProcessStepItem[] = [
  {
    step: "01",
    title: "Discover",
    shortDescription: "Understand the business, users and requirements.",
    details: "We begin by understanding your business goals, target audience (whether in Sri Lanka, Australia, or globally), operational pain points, and success metrics.",
    deliverables: ["Project Discovery Summary", "User Persona & Requirements Brief"],
  },
  {
    step: "02",
    title: "Plan",
    shortDescription: "Define features, technology and project scope.",
    details: "We define precise technical specifications, system architecture, database schema, milestone schedules, and tech stack choices without unnecessary complexity.",
    deliverables: ["Technical Scope Document", "Milestone Roadmap & Architecture Plan"],
  },
  {
    step: "03",
    title: "Design",
    shortDescription: "Create the UI/UX and overall experience.",
    details: "We design clean, modern, accessible interfaces tailored to your brand identity, focusing on clarity, visual hierarchy, and friction-free user flows.",
    deliverables: ["Interactive Wireframes", "Design System & Responsive Mockups"],
  },
  {
    step: "04",
    title: "Develop",
    shortDescription: "Build the solution using modern technologies.",
    details: "Our engineers build your solution using modern frameworks like Next.js, TypeScript, and Node.js, ensuring clean code, modular architecture, and high performance.",
    deliverables: ["Production-Quality Codebase", "API Integrations & Responsive Frontend"],
  },
  {
    step: "05",
    title: "Test",
    shortDescription: "Validate functionality, responsiveness and quality.",
    details: "Thorough quality assurance testing across screen sizes (from mobile phones to wide desktop monitors), browsers, accessibility compliance, and input validation.",
    deliverables: ["Cross-Browser Validation", "Performance & Security Audits"],
  },
  {
    step: "06",
    title: "Launch",
    shortDescription: "Deploy and provide ongoing support.",
    details: "Smooth deployment to cloud infrastructure, DNS configuration, search engine indexing, and handover with options for continuous maintenance and feature scaling.",
    deliverables: ["Production Deployment", "Documentation & Post-Launch Support"],
  },
];
