import { notFound } from "next/navigation";
import Link from "next/link";
import { getProjectBySlug } from "@/lib/projectsStore";
import { AdminShell } from "@/components/admin/AdminShell";
import { ProjectForm } from "@/components/admin/ProjectForm";

export const dynamic = "force-dynamic";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  return { title: project ? `Edit: ${project.title} | Vortexz Admin` : "Edit Project | Vortexz Admin" };
}

export default async function EditProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  return (
    <AdminShell>
      <div className="mx-auto px-6 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-[var(--vortex-muted)] mb-6">
          <Link href="/admin/projects" className="hover:text-[var(--vortex-text)] transition-colors">
            Projects
          </Link>
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          <span className="text-[var(--vortex-text)] truncate max-w-[200px]">{project.title}</span>
        </div>

        <div className="mb-8">
          <h1 className="text-2xl font-bold text-[var(--vortex-text)]">Edit Project</h1>
          <p className="text-sm text-[var(--vortex-muted)] mt-1">
            Updating <span className="font-medium text-[var(--vortex-text)]">{project.title}</span>
          </p>
        </div>

        <div className="bg-[var(--vortex-card)] border border-[var(--vortex-border)] rounded-2xl p-6 lg:p-8">
          <ProjectForm mode="edit" initialData={project} slug={slug} />
        </div>
      </div>
    </AdminShell>
  );
}
