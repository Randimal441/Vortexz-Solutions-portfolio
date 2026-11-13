import React from "react";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ProjectsGrid } from "@/components/projects/ProjectsGrid";
import { CTASection } from "@/components/sections/CTASection";
import { getProjects } from "@/lib/projectsStore";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Projects | Selected Work & Systems",
  description:
    "Explore digital systems, web applications, e-commerce stores, and mobile apps built by Vortexz Solutions for clients in Sri Lanka and Australia.",
};

export default function ProjectsPage() {
  const projects = getProjects();

  return (
    <div className="flex flex-col w-full bg-[var(--vortex-bg)] text-[var(--vortex-text)] transition-colors">
      {/* Breadcrumbs Navigation */}
      <Breadcrumbs items={[{ label: "Projects" }]} />

      <section className="pt-6 pb-16 sm:pt-8 lg:pt-10 lg:pb-24 bg-[var(--vortex-bg)]" id="projects-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProjectsGrid projects={projects} />
        </div>
      </section>

      <CTASection
        title="Have a Project You'd Like to Discuss?"
        description="We can help you evaluate technical architecture, project scope, and release timelines for your software initiative."
      />
    </div>
  );
}
