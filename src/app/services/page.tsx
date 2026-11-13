import React from "react";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CascadingServicesShowcase } from "@/components/sections/CascadingServicesShowcase";
import { CTASection } from "@/components/sections/CTASection";
import { DEVELOPMENT_PROCESS } from "@/data/process";
import { PipelineProcessSection } from "@/components/sections/PipelineProcessSection";

export const metadata: Metadata = {
  title: "Services | Technology Solutions",
  description:
    "Explore Vortexz Solutions services: Business Website Development, E-Commerce, Custom Web Systems, Mobile Apps, UI/UX Design, and Maintenance.",
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col w-full bg-[var(--vortex-bg)] text-[var(--vortex-text)] transition-colors">
      {/* Breadcrumbs Navigation */}
      <Breadcrumbs items={[{ label: "Services" }]} />

      {/* 8 Services in Waterfall Stepped Showcase Layout */}
      <section className="pt-6 pb-16 sm:pt-8 lg:pt-10 lg:pb-24 bg-[var(--vortex-bg)] overflow-hidden" id="all-services">
        <CascadingServicesShowcase />
      </section>

      {/* How We Work Section */}
      <PipelineProcessSection />

      <CTASection
        title="Ready to Start Your Project?"
        description="Contact our engineering team today to review your architecture requirements and project timeline."
      />
    </div>
  );
}
