"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { AdminShell } from "@/components/admin/AdminShell";
import type { ProjectItem } from "@/lib/projectsStore";

const CATEGORY_COLORS: Record<string, string> = {
  Websites: "bg-purple-500/10 text-purple-400 border-purple-500/20",
  "E-Commerce": "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  "Web Systems": "bg-blue-500/10 text-blue-400 border-blue-500/20",
  "Mobile Apps": "bg-orange-500/10 text-orange-400 border-orange-500/20",
  "UI/UX": "bg-pink-500/10 text-pink-400 border-pink-500/20",
};

export default function AdminProjectsPage() {
  const [projects, setProjects] = useState<ProjectItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState<string>("All");
  const [deleteTarget, setDeleteTarget] = useState<ProjectItem | null>(null);
  const [deleting, setDeleting] = useState(false);
  const [toast, setToast] = useState("");

  const fetchProjects = useCallback(async () => {
    setLoading(true);
    const res = await fetch("/api/admin/projects");
    const data = await res.json() as ProjectItem[];
    setProjects(data);
    setLoading(false);
  }, []);

  useEffect(() => { fetchProjects(); }, [fetchProjects]);

  const filteredProjects = projects.filter((project) => {
    const query = searchQuery.toLowerCase().trim();
    const matchesSearch =
      !query ||
      project.title.toLowerCase().includes(query) ||
      project.tagline?.toLowerCase().includes(query) ||
      project.description?.toLowerCase().includes(query) ||
      project.technologies.some((tech) => tech.toLowerCase().includes(query)) ||
      project.clientRegion.toLowerCase().includes(query);

    const matchesCategory =
      selectedCategoryFilter === "All" || project.category === selectedCategoryFilter;

    return matchesSearch && matchesCategory;
  });

  async function confirmDelete() {
    if (!deleteTarget) return;
    setDeleting(true);
    const res = await fetch(`/api/admin/projects/${deleteTarget.slug}`, {
      method: "DELETE",
    });
    if (res.ok) {
      setToast(`"${deleteTarget.title}" deleted`);
      setDeleteTarget(null);
      await fetchProjects();
      setTimeout(() => setToast(""), 3000);
    }
    setDeleting(false);
  }

  return (
    <AdminShell>
      <div className="mx-auto px-6 py-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <h1 className="text-2xl font-bold text-[var(--vortex-text)]">Projects</h1>
            <p className="text-sm text-[var(--vortex-muted)] mt-0.5">
              {filteredProjects.length} of {projects.length} project{projects.length !== 1 ? "s" : ""}
            </p>
          </div>
          <Link
            href="/admin/projects/new"
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[var(--vortex-primary)] hover:bg-blue-500 text-white font-medium text-sm transition-colors shrink-0 shadow-sm"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
            New Project
          </Link>
        </div>

        {/* Search & Filter Toolbar */}
        <div className="flex flex-col sm:flex-row items-center gap-3 mb-6">
          {/* Search Input */}
          <div className="relative flex-1 w-full">
            <svg
              className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--vortex-muted)] pointer-events-none"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by project name, tech stack, region..."
              className="w-full pl-10 pr-9 py-2.5 rounded-xl bg-[var(--vortex-card)] border border-[var(--vortex-border)] text-sm text-[var(--vortex-text)] placeholder:text-[var(--vortex-muted)] focus:outline-none focus:border-[var(--vortex-primary)] focus:ring-1 focus:ring-[var(--vortex-primary)] transition-all shadow-xs"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[var(--vortex-muted)] hover:text-[var(--vortex-text)] p-0.5"
                title="Clear search"
              >
                ✕
              </button>
            )}
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0 shrink-0">
            {["All", "Websites", "E-Commerce", "Web Systems", "Mobile Apps", "UI/UX"].map((cat) => {
              const active = selectedCategoryFilter === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategoryFilter(cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${
                    active
                      ? "bg-[var(--vortex-primary)] text-white shadow-xs"
                      : "bg-[var(--vortex-card)] border border-[var(--vortex-border)] text-[var(--vortex-secondary-text)] hover:text-[var(--vortex-text)] hover:border-[var(--vortex-primary)]/40"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Table */}
        {loading ? (
          <div className="flex items-center justify-center h-64">
            <svg className="animate-spin w-8 h-8 text-[var(--vortex-primary)]" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth={4}/>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
            </svg>
          </div>
        ) : filteredProjects.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-64 text-center bg-[var(--vortex-card)] border border-[var(--vortex-border)] rounded-2xl p-8">
            <svg className="w-12 h-12 text-[var(--vortex-muted)] mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
            <p className="text-[var(--vortex-text)] font-semibold">No matching projects found</p>
            <p className="text-xs text-[var(--vortex-muted)] mt-1">
              {searchQuery || selectedCategoryFilter !== "All"
                ? "Try adjusting your search query or category filter."
                : "Get started by adding your first project."}
            </p>
            {(searchQuery || selectedCategoryFilter !== "All") && (
              <button
                type="button"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategoryFilter("All");
                }}
                className="mt-3 text-xs font-semibold text-[var(--vortex-primary)] hover:underline"
              >
                Reset filters
              </button>
            )}
          </div>
        ) : (
          <div className="bg-[var(--vortex-card)] border border-[var(--vortex-border)] rounded-2xl overflow-hidden shadow-xs">
            {/* Table header */}
            <div className="grid grid-cols-[64px_1fr_140px_120px_80px_120px] gap-4 px-5 py-3 border-b border-[var(--vortex-border)] bg-[var(--vortex-bg)]">
              <div className="text-xs font-semibold uppercase tracking-wider text-[var(--vortex-muted)]">Image</div>
              <div className="text-xs font-semibold uppercase tracking-wider text-[var(--vortex-muted)]">Project</div>
              <div className="text-xs font-semibold uppercase tracking-wider text-[var(--vortex-muted)]">Category</div>
              <div className="text-xs font-semibold uppercase tracking-wider text-[var(--vortex-muted)]">Region</div>
              <div className="text-xs font-semibold uppercase tracking-wider text-[var(--vortex-muted)] text-center">Featured</div>
              <div className="text-xs font-semibold uppercase tracking-wider text-[var(--vortex-muted)] text-right">Actions</div>
            </div>

            {/* Rows */}
            <div className="divide-y divide-[var(--vortex-border)]">
              {filteredProjects.map((project) => (
                <div
                  key={project.slug}
                  className="grid grid-cols-[64px_1fr_140px_120px_80px_120px] gap-4 items-center px-5 py-4 hover:bg-[var(--vortex-card-hover)] transition-colors"
                >
                  {/* Thumbnail */}
                  <div className="relative w-14 h-10 rounded-lg overflow-hidden border border-[var(--vortex-border)] bg-[var(--vortex-bg)] shrink-0">
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                        unoptimized
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <svg className="w-5 h-5 text-[var(--vortex-muted)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M13.5 10.5h.008v.008H13.5V10.5z" />
                        </svg>
                      </div>
                    )}
                  </div>

                  {/* Title */}
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-[var(--vortex-text)] truncate">{project.title}</p>
                    <p className="text-xs text-[var(--vortex-muted)] truncate mt-0.5">{project.tagline}</p>
                  </div>

                  {/* Category */}
                  <div>
                    <span className={`inline-flex px-2 py-0.5 rounded-full text-xs font-medium border ${CATEGORY_COLORS[project.category] ?? "bg-[var(--vortex-bg)] text-[var(--vortex-muted)] border-[var(--vortex-border)]"}`}>
                      {project.category}
                    </span>
                  </div>

                  {/* Region */}
                  <div className="text-sm text-[var(--vortex-secondary-text)] truncate">{project.clientRegion}</div>

                  {/* Featured */}
                  <div className="flex justify-center">
                    {project.featured ? (
                      <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ) : (
                      <svg className="w-4 h-4 text-[var(--vortex-muted)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-end gap-1">
                    <Link
                      href={`/projects/${project.slug}`}
                      target="_blank"
                      className="p-1.5 rounded-lg text-[var(--vortex-muted)] hover:text-[var(--vortex-text)] hover:bg-[var(--vortex-bg)] transition-colors"
                      title="View on site"
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                      </svg>
                    </Link>
                    <Link
                      href={`/admin/projects/${project.slug}/edit`}
                      className="p-1.5 rounded-lg text-[var(--vortex-muted)] hover:text-[var(--vortex-primary)] hover:bg-[var(--vortex-primary)]/10 transition-colors"
                      title="Edit"
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                      </svg>
                    </Link>
                    <button
                      onClick={() => setDeleteTarget(project)}
                      className="p-1.5 rounded-lg text-[var(--vortex-muted)] hover:text-red-400 hover:bg-red-500/10 transition-colors"
                      title="Delete"
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Delete Confirmation Modal */}
      {deleteTarget && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div className="bg-[var(--vortex-card)] border border-[var(--vortex-border)] rounded-2xl p-6 max-w-sm w-full shadow-2xl">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-red-500/10 mx-auto mb-4">
              <svg className="w-6 h-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
              </svg>
            </div>
            <h3 className="text-base font-bold text-[var(--vortex-text)] text-center mb-1">Delete Project?</h3>
            <p className="text-sm text-[var(--vortex-secondary-text)] text-center mb-6">
              <span className="font-semibold text-[var(--vortex-text)]">&ldquo;{deleteTarget.title}&rdquo;</span> will be permanently removed. This cannot be undone.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setDeleteTarget(null)}
                className="flex-1 py-2.5 rounded-lg border border-[var(--vortex-border)] text-[var(--vortex-secondary-text)] hover:text-[var(--vortex-text)] hover:bg-[var(--vortex-card-hover)] font-medium text-sm transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={confirmDelete}
                disabled={deleting}
                className="flex-1 py-2.5 rounded-lg bg-red-500 hover:bg-red-600 text-white font-medium text-sm transition-colors disabled:opacity-60 flex items-center justify-center gap-2"
              >
                {deleting ? (
                  <>
                    <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth={4}/>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                    </svg>
                    Deleting...
                  </>
                ) : "Delete"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toast */}
      {toast && (
        <div className="fixed bottom-6 right-6 z-50 bg-[var(--vortex-card)] border border-[var(--vortex-border)] rounded-xl px-4 py-3 shadow-xl flex items-center gap-2 text-sm text-[var(--vortex-text)]">
          <svg className="w-4 h-4 text-green-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          {toast}
        </div>
      )}
    </AdminShell>
  );
}
