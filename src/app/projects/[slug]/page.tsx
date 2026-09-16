import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2, ChevronRight } from "lucide-react";
import { PROJECTS } from "@/data/projects";
import { Button } from "@/components/ui/Button";
import { CTASection } from "@/components/sections/CTASection";

interface ProjectDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found | Vortexz Solutions",
    };
  }

  return {
    title: `${project.title} | Case Study`,
    description: project.description,
    openGraph: {
      title: `${project.title} - Vortexz Solutions`,
      description: project.description,
      images: [{ url: project.image, alt: project.title }],
    },
  };
}

export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  const { slug } = await params;
  const projectIndex = PROJECTS.findIndex((p) => p.slug === slug);

  if (projectIndex === -1) {
    notFound();
  }

  const project = PROJECTS[projectIndex];
  const nextProject = PROJECTS[(projectIndex + 1) % PROJECTS.length];

  return (
    <div className="flex flex-col w-full">
      {/* Header section with breadcrumbs and title */}
      <div className="relative pt-32 pb-16 lg:pt-36 lg:pb-20 border-b border-[#1E293B] bg-[#070A0F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs text-[#64748B] mb-6" aria-label="Breadcrumbs">
            <Link href="/" className="hover:text-[#94A3B8] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#1E293B]" />
            <Link href="/projects" className="hover:text-[#94A3B8] transition-colors">
              Projects
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#1E293B]" />
            <span className="text-[#94A3B8]">{project.title}</span>
          </nav>

          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-3 py-1 rounded-full bg-[#121923] border border-[#1E293B] text-xs font-semibold text-[#60A5FA]">
              {project.category}
            </span>
            <span className="px-3 py-1 rounded-full bg-[#0D121A] border border-[#1E293B] text-xs font-mono text-[#94A3B8]">
              Target Market: {project.clientRegion}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#F8FAFC] tracking-tight leading-tight max-w-4xl">
            {project.title}
          </h1>

          <p className="mt-4 text-base sm:text-lg text-[#94A3B8] max-w-3xl leading-relaxed">
            {project.tagline}
          </p>

          {project.liveUrl && (
            <div className="mt-8">
              <Button
                href={project.liveUrl}
                external
                variant="primary"
                size="md"
                showArrow
              >
                Launch Live Demonstration
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* Main Case Study Content Area */}
      <section className="py-16 lg:py-24 bg-[#070A0F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Visual Showcase Display */}
          <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden bg-[#0D121A] border border-[#1E293B] shadow-2xl mb-16">
            <Image
              src={project.image}
              alt={`${project.title} Full Architecture Interface`}
              fill
              priority
              className="object-cover object-top"
            />
          </div>

          {/* 2-Column Case Study Narrative */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left Column: Challenge & Solution */}
            <div className="lg:col-span-8 space-y-12">
              {/* Project Overview */}
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#F8FAFC] mb-4">
                  Project Overview
                </h2>
                <p className="text-base text-[#94A3B8] leading-relaxed">
                  {project.overview}
                </p>
              </div>

              {/* The Challenge */}
              <div className="p-7 rounded-xl bg-[#0D121A] border border-[#1E293B]">
                <h2 className="text-xl font-bold text-[#F8FAFC] mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-400" />
                  The Operational Challenge
                </h2>
                <p className="text-sm text-[#94A3B8] leading-relaxed">
                  {project.challenge}
                </p>
              </div>

              {/* The Solution */}
              <div className="p-7 rounded-xl bg-[#121923] border border-[#3B82F6]/30">
                <h2 className="text-xl font-bold text-[#F8FAFC] mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#3B82F6]" />
                  The Engineering Solution
                </h2>
                <p className="text-sm text-[#94A3B8] leading-relaxed">
                  {project.solution}
                </p>
              </div>

              {/* Key Features */}
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#F8FAFC] mb-6">
                  Key System Capabilities
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.keyFeatures.map((feature, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-lg bg-[#0D121A] border border-[#1E293B] flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-[#3B82F6] shrink-0 mt-0.5" />
                      <span className="text-sm text-[#94A3B8]">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Metadata Sidebar */}
            <div className="lg:col-span-4 space-y-8">
              {/* Deliverables Card */}
              <div className="p-6 rounded-xl bg-[#121923] border border-[#1E293B]">
                <h3 className="text-xs font-semibold text-[#60A5FA] uppercase tracking-wider mb-4">
                  Delivered Artifacts
                </h3>
                <ul className="space-y-2.5">
                  {project.deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-[#F8FAFC]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technology Stack */}
              <div className="p-6 rounded-xl bg-[#121923] border border-[#1E293B]">
                <h3 className="text-xs font-semibold text-[#60A5FA] uppercase tracking-wider mb-4">
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded text-xs font-mono bg-[#0D121A] text-[#94A3B8] border border-[#1E293B]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Client Region Details */}
              <div className="p-6 rounded-xl bg-[#0D121A] border border-[#1E293B]">
                <h3 className="text-xs font-semibold text-[#64748B] uppercase tracking-wider mb-2">
                  Primary Market Focus
                </h3>
                <p className="text-base font-bold text-[#F8FAFC]">
                  {project.clientRegion}
                </p>
                <p className="text-xs text-[#94A3B8] mt-1 leading-relaxed">
                  Tailored to local compliance, consumer behaviors, and payment infrastructures.
                </p>
              </div>

              {/* CTA Widget */}
              <div className="p-6 rounded-xl bg-gradient-to-br from-[#121923] to-[#182231] border border-[#3B82F6]/40 text-center">
                <h3 className="text-base font-bold text-[#F8FAFC] mb-2">
                  Need a similar solution?
                </h3>
                <p className="text-xs text-[#94A3B8] mb-4">
                  Let's discuss how we can build a tailor-made system for your business.
                </p>
                <Button href="/contact-us" variant="primary" size="sm" className="w-full">
                  Request a Consultation
                </Button>
              </div>
            </div>
          </div>

          {/* Project Navigation Footer */}
          <div className="mt-20 pt-10 border-t border-[#1E293B] flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#94A3B8] hover:text-[#F8FAFC] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to All Projects</span>
            </Link>

            <Link
              href={`/projects/${nextProject.slug}`}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#60A5FA] hover:text-[#3B82F6] transition-colors"
            >
              <span>Next Project: {nextProject.title}</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
