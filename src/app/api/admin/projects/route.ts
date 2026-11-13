import { getProjects, saveProjects, generateSlug } from "@/lib/projectsStore";
import type { ProjectItem } from "@/lib/projectsStore";

// GET /api/admin/projects
export async function GET() {
  const projects = getProjects();
  return Response.json(projects);
}

// POST /api/admin/projects — create new project
export async function POST(request: Request) {
  const body = await request.json() as Partial<ProjectItem>;

  if (!body.title || !body.category) {
    return Response.json({ error: "Title and category are required" }, { status: 400 });
  }

  const projects = getProjects();
  const baseSlug = generateSlug(body.title);

  // Ensure slug uniqueness
  let slug = baseSlug;
  let counter = 1;
  while (projects.some((p) => p.slug === slug)) {
    slug = `${baseSlug}-${counter++}`;
  }

  const newProject: ProjectItem = {
    title: body.title,
    slug,
    category: body.category,
    tagline: body.tagline ?? "",
    description: body.description ?? "",
    image: body.image ?? "/projects/placeholder.png",
    technologies: body.technologies ?? [],
    liveUrl: body.liveUrl ?? "",
    githubUrl: body.githubUrl ?? "",
    featured: body.featured ?? false,
    clientRegion: body.clientRegion ?? "Sri Lanka",
    overview: body.overview ?? "",
    challenge: body.challenge ?? "",
    solution: body.solution ?? "",
    keyFeatures: body.keyFeatures ?? [],
    deliverables: body.deliverables ?? [],
  };

  projects.push(newProject);
  saveProjects(projects);

  return Response.json(newProject, { status: 201 });
}
