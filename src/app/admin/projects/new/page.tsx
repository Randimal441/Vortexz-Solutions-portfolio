import { AdminShell } from "@/components/admin/AdminShell";
import { ProjectForm } from "@/components/admin/ProjectForm";
import Link from "next/link";

export const metadata = { title: "New Project | Vortexz Admin" };

export default function NewProjectPage() {
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
          <span className="text-[var(--vortex-text)]">New Project</span>
        </div>

        <div className="mb-8">
          <h1 className="text-2xl font-bold text-[var(--vortex-text)]">Create New Project</h1>
          <p className="text-sm text-[var(--vortex-muted)] mt-1">
            Add a new project to the portfolio. All fields with * are required.
          </p>
        </div>

        <div className="bg-[var(--vortex-card)] border border-[var(--vortex-border)] rounded-2xl p-6 lg:p-8">
          <ProjectForm mode="create" />
        </div>
      </div>
    </AdminShell>
  );
}
