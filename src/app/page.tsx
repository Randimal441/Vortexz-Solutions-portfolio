import React from "react";
import Link from "next/link";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { VortexVisual } from "@/components/vortex/VortexVisual";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { RegionalDelivery } from "@/components/sections/RegionalDelivery";
import { CTASection } from "@/components/sections/CTASection";
import { SERVICES } from "@/data/services";
import { PROJECTS } from "@/data/projects";
import { TECHNOLOGIES } from "@/data/technologies";
import { DEVELOPMENT_PROCESS } from "@/data/process";

export default function HomePage() {
  // Services featured on home (01 - 06)
  const homeServices = SERVICES.filter((s) => s.featuredOnHome);
  // Featured projects
  const featuredProjects = PROJECTS.filter((p) => p.featured).slice(0, 4);

  const benefits = [
    {
      title: "Business-Focused",
      description:
        "We understand the business goal behind the technology, aligning architectural decisions with measurable commercial growth.",
    },
    {
      title: "Custom Solutions",
      description:
        "We build around your specific operational requirements instead of forcing your business into restrictive, generic templates.",
    },
    {
      title: "Modern Development",
      description:
        "We use modern technologies like Next.js, React, and TypeScript with rigorous development practices for speed and longevity.",
    },
    {
      title: "Responsive Experiences",
      description:
        "Every digital product is designed and tested for desktop, tablet, and mobile displays without compromises.",
    },
    {
      title: "Clear Communication",
      description:
        "Direct collaboration, transparent milestones, and structured updates keep you fully informed throughout the process.",
    },
    {
      title: "Long-Term Support",
      description:
        "We provide proactive ongoing maintenance, performance tuning, and incremental enhancements as your business scales.",
    },
  ];

  return (
    <div className="flex flex-col w-full">
      {/* SECTION 1: HERO */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-16 lg:py-32 overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-blue-600/10 blur-[130px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Hero Content */}
            <div className="lg:col-span-7 text-center lg:text-left">
              {/* Small label */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#121923] border border-[#1E293B] text-xs font-semibold tracking-wider text-[#60A5FA] uppercase mb-6 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] animate-pulse" />
                VORTEXZ SOLUTIONS
              </div>

              {/* Main headline */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#F8FAFC] tracking-tight leading-[1.1] mb-6">
                Digital Solutions Built for Growing Businesses.
              </h1>

              {/* Supporting text */}
              <p className="text-base sm:text-lg md:text-xl text-[#94A3B8] leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-8">
                We design and develop websites, e-commerce platforms, custom software systems and mobile applications that help businesses build, improve and scale their digital presence.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10">
                <Button
                  href="/contact-us"
                  variant="primary"
                  size="lg"
                  showArrow
                  className="w-full sm:w-auto font-semibold px-8"
                >
                  Start a Project
                </Button>
                <Button
                  href="/projects"
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto font-medium px-8"
                >
                  View Our Projects
                </Button>
              </div>

              {/* Regional trust indicator */}
              <div className="flex items-center justify-center lg:justify-start gap-6 text-xs text-[#64748B] pt-4 border-t border-[#1E293B]/70">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#3B82F6]" />
                  <span className="text-[#94A3B8]">Sri Lanka &amp; Australia Focus</span>
                </div>
                <span>•</span>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#10B981]" />
                  <span className="text-[#94A3B8]">Modern Engineering Standards</span>
                </div>
              </div>
            </div>

            {/* Right Hero Visual: Bespoke Digital Vortex */}
            <div className="lg:col-span-5 flex justify-center">
              <VortexVisual />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: SERVICES OVERVIEW */}
      <section className="py-20 lg:py-28 bg-[#070A0F] border-t border-[#1E293B]" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="SERVICES"
            title="What We Build"
            description="From business websites to custom software systems, we create digital solutions around your business needs."
            align="center"
            className="mb-14"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {homeServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button
              href="/services"
              variant="outline"
              size="md"
              showArrow
              className="font-medium"
            >
              Explore Our Services
            </Button>
          </div>
        </div>
      </section>

      {/* SECTION 3: FEATURED PROJECTS */}
      <section className="py-20 lg:py-28 bg-[#0D121A] border-t border-[#1E293B]" id="projects">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <SectionHeading
              badge="PORTFOLIO"
              title="Selected Work"
              description="A selection of digital products and solutions developed for businesses and organizations."
              align="left"
              className="mx-0"
            />
            <Button
              href="/projects"
              variant="secondary"
              size="md"
              showArrow
              className="self-start md:self-auto shrink-0"
            >
              View All Projects
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: WHY VORTEXZ */}
      <section className="py-20 lg:py-28 bg-[#070A0F] border-t border-[#1E293B]" id="why-us">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="OUR PROMISE"
            title="Built Around Your Business"
            description="We prioritize technical excellence, practical software architecture, and honest partnerships over short-term trends."
            align="center"
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="p-7 rounded-xl bg-[#121923] border border-[#1E293B] hover:border-[#3B82F6]/40 transition-colors duration-200"
              >
                <div className="w-10 h-10 rounded-lg bg-[#0D121A] border border-[#1E293B] flex items-center justify-center text-[#60A5FA] mb-5">
                  <CheckCircle className="w-5 h-5 text-[#3B82F6]" />
                </div>
                <h3 className="text-lg font-bold text-[#F8FAFC] mb-2.5">
                  {benefit.title}
                </h3>
                <p className="text-sm text-[#94A3B8] leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: DEVELOPMENT PROCESS */}
      <section className="py-20 lg:py-28 bg-[#0D121A] border-t border-[#1E293B]" id="process">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="WORKFLOW"
            title="From Idea to Launch"
            description="A structured, predictable 6-stage development lifecycle ensuring quality at every milestone."
            align="center"
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {DEVELOPMENT_PROCESS.map((step) => (
              <div
                key={step.step}
                className="relative p-7 rounded-xl bg-[#121923] border border-[#1E293B] hover:border-[#3B82F6]/40 transition-colors"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-2xl font-black text-[#60A5FA]">
                    {step.step}
                  </span>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#64748B]">
                    Stage
                  </span>
                </div>
                <h3 className="text-lg font-bold text-[#F8FAFC] mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-[#94A3B8] leading-relaxed mb-4">
                  {step.shortDescription}
                </p>
                <div className="pt-3 border-t border-[#1E293B]/70 space-y-1">
                  {step.deliverables.map((d, i) => (
                    <div key={i} className="text-xs text-[#64748B] flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-[#3B82F6]" />
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: TECHNOLOGIES */}
      <section className="py-20 lg:py-28 bg-[#070A0F] border-t border-[#1E293B]" id="technologies">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="STACK"
            title="Technologies We Work With"
            description="Battle-tested modern languages, frameworks, and database architectures suited for scalable production systems."
            align="center"
            className="mb-14"
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {TECHNOLOGIES.map((tech) => (
              <div
                key={tech.name}
                className="p-4 rounded-xl bg-[#121923] border border-[#1E293B] hover:border-[#3B82F6]/50 hover:bg-[#182231] transition-all text-center group"
              >
                <div className="text-xs font-mono text-[#64748B] uppercase mb-1">
                  {tech.category.split(" ")[0]}
                </div>
                <div className="text-base font-bold text-[#F8FAFC] group-hover:text-[#60A5FA] transition-colors">
                  {tech.name}
                </div>
                <p className="text-[11px] text-[#94A3B8] mt-1.5 leading-snug">
                  {tech.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: SRI LANKA + AUSTRALIA */}
      <RegionalDelivery />

      {/* SECTION 8: FINAL CTA */}
      <CTASection />
    </div>
  );
}
