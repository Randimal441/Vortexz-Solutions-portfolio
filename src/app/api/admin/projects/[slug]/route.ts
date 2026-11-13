import { getProjects, saveProjects } from "@/lib/projectsStore";
import type { ProjectItem } from "@/lib/projectsStore";

type RouteContext = { params: Promise<{ slug: string }> };

// GET /api/admin/projects/[slug]
export async function GET(_req: Request, context: RouteContext) {
  const { slug } = await context.params;
  const project = getProjects().find((p) => p.slug === slug);
  if (!project) {
    return Response.json({ error: "Not found" }, { status: 404 });
  }
  return Response.json(project);
}

// PUT /api/admin/projects/[slug]
export async function PUT(request: Request, context: RouteContext) {
  const { slug } = await context.params;
  const body = await request.json() as Partial<ProjectItem>;

  const projects = getProjects();
  const idx = projects.findIndex((p) => p.slug === slug);
  if (idx === -1) {
    return Response.json({ error: "Not found" }, { status: 404 });
  }

  projects[idx] = {
    ...projects[idx],
    ...body,
    slug, // prevent slug change via PUT body
  };

  saveProjects(projects);
  return Response.json(projects[idx]);
}

// DELETE /api/admin/projects/[slug]
export async function DELETE(_req: Request, context: RouteContext) {
  const { slug } = await context.params;
  const projects = getProjects();
  const idx = projects.findIndex((p) => p.slug === slug);
  if (idx === -1) {
    return Response.json({ error: "Not found" }, { status: 404 });
  }

  projects.splice(idx, 1);
  saveProjects(projects);
  return Response.json({ ok: true });
}
