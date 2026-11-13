import React from "react";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { RegionalDelivery } from "@/components/sections/RegionalDelivery";
import { CTASection } from "@/components/sections/CTASection";
import { TechStackMarquee } from "@/components/sections/TechStackMarquee";
import { EngineeringApproachSection } from "@/components/sections/EngineeringApproachSection";
import { LightCablesBackground } from "@/components/ui/LightCablesBackground";

export const metadata: Metadata = {
  title: "About Us | Building Digital Solutions With Purpose",
  description:
    "Learn about Vortexz Solutions: our engineering philosophy, business-centered approach, and cross-border capabilities serving Sri Lanka and Australia.",
};

export default function AboutUsPage() {
  const drivers = [
    {
      title: "Quality Development",
      description: "Strict typing, modular components, automated CI/CD, and performance audits to guarantee zero runtime regression.",
    },
    {
      title: "Practical Solutions",
      description: "Solving concrete operational problems with custom logic rather than over-engineering or rigid SaaS limitations.",
    },
    {
      title: "Modern Technology",
      description: "Built with Next.js App Router, TypeScript, and Node.js for sub-100ms response times and distributed edge speed.",
    },
    {
      title: "Long-Term Support",
      description: "Continuous proactive monitoring, automated security patches, and phased architectural scaling as your business grows.",
    },
  ];

  return (
    <div className="flex flex-col w-full bg-[var(--vortex-bg)] text-[var(--vortex-text)] transition-colors select-none">
      {/* Breadcrumbs Navigation */}
      <Breadcrumbs items={[{ label: "About Us" }]} />

      {/* TOP SECTION: Animated Light Cables Hero Banner (Matching Video) */}
      <section className="relative w-full pt-6 pb-6 sm:pt-8 sm:pb-8 lg:pt-10 lg:pb-10 overflow-hidden bg-[var(--vortex-bg)]">
        {/* Dynamic Glowing Light Cables Animation (Matching Video & Vortexz Theme) */}
        <LightCablesBackground />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[var(--badge-bg)]/80 backdrop-blur-md border border-[var(--badge-border)] text-xs font-bold tracking-widest text-[#3B82F6] uppercase mb-4 shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] animate-pulse" />
            WHO WE ARE
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-black text-[var(--vortex-text)] tracking-tight leading-[1.12] max-w-4xl mb-4">
            A Dedicated Software Solutions Partner to get you up and scaling on day one.
          </h1>

          {/* Secondary Lead Paragraph */}
          <p className="text-sm sm:text-base md:text-lg text-[var(--vortex-secondary-text)] leading-relaxed max-w-2xl mb-8 font-normal">
            Vortexz Solutions was founded to bridge the gap between complex software engineering and practical business needs. We combine modern web and mobile architectures with disciplined execution to build resilient digital systems.
          </p>

          {/* 4-Column Drivers Row (Horizontal layout matching Reference Image) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 pt-6 border-t border-[var(--vortex-border)]/60">
            {drivers.map((driver, idx) => (
              <div key={idx} className="flex flex-col items-start group">
                <h4 className="text-base sm:text-lg font-bold text-[var(--vortex-text)] tracking-tight mb-1.5 group-hover:text-[#3B82F6] transition-colors">
                  {driver.title}
                </h4>
                <p className="text-xs sm:text-sm text-[var(--vortex-secondary-text)] leading-relaxed font-normal">
                  {driver.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Action */}
          <div className="mt-6 sm:mt-8">
            <Button
              href="/contact-us"
              variant="primary"
              size="md"
              showArrow
              className="font-bold text-xs sm:text-sm shadow-lg shadow-blue-500/20"
            >
              Start a Conversation
            </Button>
          </div>
        </div>
      </section>

      {/* SECOND SECTION: Our Philosophy / How We Approach Engineering */}
      <EngineeringApproachSection />

      {/* Tech Stack Marquee */}
      <TechStackMarquee />

      {/* Cross-border Delivery */}
      <RegionalDelivery />

      {/* CTA Section */}
      <CTASection
        title="Looking for a Technology Partner?"
        description="Let's discuss how we can engineer a custom digital platform or software system tailored to your growth goals."
      />
    </div>
  );
}
