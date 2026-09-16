import React from "react";
import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { ProjectsGrid } from "@/components/projects/ProjectsGrid";
import { CTASection } from "@/components/sections/CTASection";
import { PROJECTS } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects | Selected Work & Systems",
  description:
    "Explore digital systems, web applications, e-commerce stores, and mobile apps built by Vortexz Solutions for clients in Sri Lanka and Australia.",
};

export default function ProjectsPage() {
  return (
    <div className="flex flex-col w-full">
      <PageHeader
        badge="PORTFOLIO"
        title="Projects That Turn Ideas Into Digital Products."
        description="A selection of digital products, enterprise web systems, and consumer experiences engineered for real-world reliability."
        breadcrumbs={[{ label: "Projects" }]}
      />

      <section className="py-16 lg:py-24 bg-[#070A0F]" id="projects-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProjectsGrid projects={PROJECTS} />
        </div>
      </section>

      <CTASection
        title="Have a Project You'd Like to Discuss?"
        description="We can help you evaluate technical architecture, project scope, and release timelines for your software initiative."
      />
    </div>
  );
}
