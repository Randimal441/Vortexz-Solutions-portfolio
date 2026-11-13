// Re-export types from the centralized store for backward compatibility.
// All project data is now managed via src/data/projects.json (admin CRUD).
export type { ProjectCategory, ProjectItem } from "@/lib/projectsStore";
export { getProjects as PROJECTS_FN } from "@/lib/projectsStore";

// Keep a static export alias for any remaining client-side references.
// Client components that need live data should use the API: GET /api/admin/projects
