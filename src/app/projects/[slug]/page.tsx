import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getProjects, getProjectBySlug } from "@/lib/projectsStore";
import { ProjectDetailView } from "@/components/projects/ProjectDetailView";
import { CTASection } from "@/components/sections/CTASection";

export const dynamic = "force-dynamic";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getProjects().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project Not Found" };
  return {
    title: `${project.title} | Vortexz Solutions`,
    description: project.description || project.tagline,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const projects = getProjects();
  const currentIndex = projects.findIndex((p) => p.slug === slug);
  if (currentIndex === -1) notFound();

  const project = projects[currentIndex];
  const nextProject = projects.length > 1 ? projects[(currentIndex + 1) % projects.length] : undefined;
  const prevProject = projects.length > 1 ? projects[(currentIndex - 1 + projects.length) % projects.length] : undefined;

  return (
    <div className="flex flex-col w-full bg-[var(--vortex-bg)] text-[var(--vortex-text)] transition-colors">
      <ProjectDetailView
        project={project}
        nextProject={nextProject !== project ? nextProject : undefined}
        prevProject={prevProject !== project ? prevProject : undefined}
      />

      <CTASection
        title="Ready to Build Something Similar?"
        description="Let's discuss how we can engineer a custom digital platform or software system tailored to your commercial growth goals."
      />
    </div>
  );
}
