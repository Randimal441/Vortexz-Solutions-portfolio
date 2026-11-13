import fs from "fs";
import path from "path";

export type ProjectCategory =
  | "Websites"
  | "E-Commerce"
  | "Web Systems"
  | "Mobile Apps"
  | "UI/UX";

export interface ProjectItem {
  title: string;
  slug: string;
  category: ProjectCategory;
  tagline: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  clientRegion: "Sri Lanka" | "Australia" | "International";
  overview: string;
  challenge: string;
  solution: string;
  keyFeatures: string[];
  deliverables: string[];
}

const DATA_FILE = path.join(process.cwd(), "src", "data", "projects.json");

// Auto-sync uploaded project assets if available
try {
  const policeSrc = "C:\\Users\\USER\\.gemini\\antigravity\\brain\\775c7d04-8e58-49de-93d5-35b848ec8f72\\.user_uploaded\\media_1794507406056_ea25681e.jpg";
  const policeDest = path.join(process.cwd(), "public", "projects", "police-app.jpg");
  if (fs.existsSync(policeSrc) && !fs.existsSync(policeDest)) {
    fs.copyFileSync(policeSrc, policeDest);
  }
} catch {
  // silent
}

export function getProjects(): ProjectItem[] {
  try {
    const raw = fs.readFileSync(DATA_FILE, "utf-8");
    return JSON.parse(raw) as ProjectItem[];
  } catch {
    return [];
  }
}

export function saveProjects(projects: ProjectItem[]): void {
  fs.writeFileSync(DATA_FILE, JSON.stringify(projects, null, 2), "utf-8");
}

export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export function getProjectBySlug(slug: string): ProjectItem | undefined {
  return getProjects().find((p) => p.slug === slug);
}
