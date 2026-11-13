"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  MapPin,
  CheckCircle2,
  Sparkles,
  AlertCircle,
  Cpu,
  Layers,
} from "lucide-react";
import { ProjectItem } from "@/lib/projectsStore";

interface ProjectDetailViewProps {
  project: ProjectItem;
  nextProject?: ProjectItem;
  prevProject?: ProjectItem;
}

export function ProjectDetailView({
  project,
  nextProject,
}: ProjectDetailViewProps) {
  return (
    <div className="flex flex-col w-full bg-[var(--vortex-bg)] text-[var(--vortex-text)] transition-colors select-none">
      {/* SECTION 1: Breadcrumb & Hero Header */}
      <section className="pt-24 pb-8 sm:pt-28 sm:pb-10 lg:pt-32 lg:pb-12 bg-[var(--vortex-bg)] relative overflow-hidden border-b border-[var(--vortex-border)]/60">
        {/* Ambient atmospheric backlight glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[850px] h-[350px] bg-gradient-to-r from-blue-600/15 via-cyan-500/10 to-indigo-600/15 blur-[150px] rounded-full pointer-events-none -z-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb Navigation - Full Title, Never Truncated */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex flex-wrap items-center justify-between gap-4 mb-6"
          >
            <nav className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-[var(--vortex-secondary-text)]">
              <Link
                href="/"
                className="hover:text-[var(--vortex-text)] transition-colors"
              >
                Home
              </Link>
              <span className="text-[var(--vortex-muted)]">/</span>
              <Link
                href="/projects"
                className="hover:text-[var(--vortex-text)] transition-colors"
              >
                Projects
              </Link>
              <span className="text-[var(--vortex-muted)]">/</span>
              {/* Full title without truncate */}
              <span className="text-[var(--vortex-text)] font-semibold break-words">
                {project.title}
              </span>
            </nav>

            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--vortex-card)] border border-[var(--vortex-border)] hover:border-[#3B82F6]/50 text-xs font-semibold text-[var(--vortex-secondary-text)] hover:text-[#3B82F6] transition-all shadow-2xs group"
            >
              <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
              <span>All Projects</span>
            </Link>
          </motion.div>

          {/* Hero Header Content */}
          <div className="max-w-4xl">
            {/* Meta Badges */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-wrap items-center gap-2.5 mb-4"
            >
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#3B82F6]/10 border border-[#3B82F6]/25 text-xs font-bold text-[#3B82F6] tracking-wider uppercase shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] animate-pulse" />
                {project.category}
              </span>

              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--vortex-surface)] border border-[var(--vortex-border)] text-xs font-mono font-medium text-[var(--vortex-secondary-text)] shadow-2xs">
                <MapPin className="w-3.5 h-3.5 text-[#3B82F6]" />
                <span>{project.clientRegion}</span>
              </span>
            </motion.div>

            {/* Main Project Title - Never Truncated */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.15 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-black text-[var(--vortex-text)] tracking-tight leading-[1.12] mb-4"
            >
              {project.title}
            </motion.h1>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-[var(--vortex-secondary-text)] leading-relaxed font-normal mb-6 max-w-3xl"
            >
              {project.tagline || project.description}
            </motion.p>

            {/* CTA Action Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.25 }}
              className="flex flex-wrap items-center gap-3.5"
            >
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#3B82F6] hover:bg-blue-600 text-white font-bold text-xs sm:text-sm tracking-wider uppercase shadow-lg shadow-blue-500/25 hover:scale-105 active:scale-95 transition-all group"
                >
                  <span>Visit Live Platform</span>
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              )}

              <a
                href="#project-details"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[var(--vortex-card)] hover:bg-[var(--vortex-surface)] border border-[var(--vortex-border)] hover:border-[#3B82F6]/50 text-xs sm:text-sm font-bold text-[var(--vortex-text)] transition-all shadow-xs"
              >
                <span>Explore This Project</span>
                <ArrowRight className="w-4 h-4 text-[#3B82F6]" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 2 & 3: Clean Image Showcase Frame & Main Project Details (Streamlined seamless flow) */}
      <section className="pt-6 pb-12 sm:pt-8 sm:pb-16 bg-[var(--vortex-bg)] relative" id="project-details">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Showcase Image Frame */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.99 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-[var(--vortex-border)] bg-[var(--vortex-card)] shadow-2xl shadow-black/10 dark:shadow-black/40 group mb-8 sm:mb-10"
          >
            {/* Ambient Backlight Glow behind Showcase Image */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/15 via-cyan-500/10 to-purple-600/15 blur-3xl -z-10 rounded-3xl opacity-70 pointer-events-none" />

            {/* High-Resolution Project Showcase Image (Clean without header bar) */}
            <div className="relative w-full aspect-[16/9] sm:aspect-[16/8.5] overflow-hidden bg-slate-950">
              <Image
                src={project.image}
                alt={project.title}
                fill
                priority
                sizes="100vw"
                className="object-cover object-top group-hover:scale-101 transition-transform duration-700 ease-out"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
            </div>
          </motion.div>

          {/* Bento Narrative Details Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Column (8 cols): Structured Narrative Bento Cards */}
            <div className="lg:col-span-8 space-y-6 sm:space-y-8">
              {/* Card 1: Overview */}
              {project.overview && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5 }}
                  className="rounded-3xl bg-[var(--vortex-card)] border border-[var(--vortex-border)] hover:border-[#3B82F6]/50 transition-all duration-300 p-6 sm:p-8 shadow-lg shadow-black/5 dark:shadow-black/20 relative overflow-hidden group"
                >
                  <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500" />
                  
                  <div className="flex items-center gap-3 mb-3.5">
                    <div className="w-8 h-8 rounded-xl bg-blue-500/10 border border-blue-500/20 text-[#3B82F6] flex items-center justify-center shrink-0">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <h2 className="text-xs font-bold uppercase tracking-widest text-[#3B82F6]">
                      Project Overview
                    </h2>
                  </div>

                  <p className="text-sm sm:text-base text-[var(--vortex-text)] leading-relaxed font-normal">
                    {project.overview}
                  </p>
                </motion.div>
              )}

              {/* Card 2 & 3: The Challenge & Our Solution */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                {/* Challenge */}
                {project.challenge && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.5, delay: 0.08 }}
                    className="rounded-3xl bg-[var(--vortex-card)] border border-[var(--vortex-border)] hover:border-amber-500/40 transition-all duration-300 p-6 sm:p-7 shadow-md flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-center gap-2.5 mb-3">
                        <div className="w-7 h-7 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-500 flex items-center justify-center shrink-0">
                          <AlertCircle className="w-3.5 h-3.5" />
                        </div>
                        <h3 className="text-xs font-bold uppercase tracking-widest text-amber-500">
                          The Challenge
                        </h3>
                      </div>
                      <p className="text-xs sm:text-sm text-[var(--vortex-secondary-text)] leading-relaxed font-normal">
                        {project.challenge}
                      </p>
                    </div>
                  </motion.div>
                )}

                {/* Solution */}
                {project.solution && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.5, delay: 0.12 }}
                    className="rounded-3xl bg-[var(--vortex-card)] border border-[var(--vortex-border)] hover:border-[#3B82F6]/50 transition-all duration-300 p-6 sm:p-7 shadow-md flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-center gap-2.5 mb-3">
                        <div className="w-7 h-7 rounded-lg bg-blue-500/10 border border-blue-500/20 text-[#3B82F6] flex items-center justify-center shrink-0">
                          <Cpu className="w-3.5 h-3.5" />
                        </div>
                        <h3 className="text-xs font-bold uppercase tracking-widest text-[#3B82F6]">
                          Our Solution
                        </h3>
                      </div>
                      <p className="text-xs sm:text-sm text-[var(--vortex-secondary-text)] leading-relaxed font-normal">
                        {project.solution}
                      </p>
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Card 4: Key Features Interactive Grid */}
              {project.keyFeatures && project.keyFeatures.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: 0.15 }}
                  className="rounded-3xl bg-[var(--vortex-card)] border border-[var(--vortex-border)] p-6 sm:p-8 shadow-lg relative overflow-hidden"
                >
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-8 h-8 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-[#00D2FF] flex items-center justify-center shrink-0">
                      <Layers className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-widest text-[#00D2FF]">
                        Core Capabilities
                      </h3>
                      <h4 className="text-lg sm:text-xl font-bold text-[var(--vortex-text)] tracking-tight">
                        Key Engineering Features
                      </h4>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    {project.keyFeatures.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 p-3.5 sm:p-4 rounded-2xl bg-[var(--vortex-surface)]/80 border border-[var(--vortex-border)] hover:border-[#3B82F6]/50 transition-all duration-300 hover:-translate-y-0.5 group/item"
                      >
                        <div className="w-5 h-5 rounded-md bg-blue-500/10 border border-blue-500/20 text-[#3B82F6] flex items-center justify-center shrink-0 mt-0.5 group-hover/item:bg-blue-500/20 transition-colors">
                          <CheckCircle2 className="w-3 h-3" />
                        </div>
                        <p className="text-xs sm:text-sm font-medium text-[var(--vortex-text)] leading-relaxed">
                          {feature}
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>

            {/* Right Column (4 cols): Sticky Specifications Sidebar */}
            <div className="lg:col-span-4 sticky top-24 space-y-5">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.55, delay: 0.2 }}
                className="rounded-3xl bg-[var(--vortex-card)] border border-[var(--vortex-border)] p-6 sm:p-7 shadow-xl shadow-black/5 dark:shadow-black/30 space-y-5 relative overflow-hidden"
              >
                {/* Subtle sheen */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] to-transparent pointer-events-none" />

                <h3 className="text-sm font-bold uppercase tracking-wider text-[var(--vortex-text)] pb-3.5 border-b border-[var(--vortex-border)] flex items-center justify-between">
                  <span>Project Metadata</span>
                  <span className="w-2 h-2 rounded-full bg-[#3B82F6]" />
                </h3>

                {/* Region */}
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[var(--vortex-muted)] block mb-1">
                    Client Geographic Region
                  </span>
                  <div className="flex items-center gap-2 text-sm font-bold text-[var(--vortex-text)]">
                    <MapPin className="w-4 h-4 text-[#3B82F6]" />
                    <span>{project.clientRegion}</span>
                  </div>
                </div>

                {/* Category */}
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[var(--vortex-muted)] block mb-1">
                    System Category
                  </span>
                  <span className="text-sm font-bold text-[var(--vortex-text)]">
                    {project.category}
                  </span>
                </div>

                {/* Technologies */}
                {project.technologies && project.technologies.length > 0 && (
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[var(--vortex-muted)] block mb-2">
                      Technologies & Stack
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-lg bg-[var(--vortex-surface)] border border-[var(--vortex-border)] text-[var(--vortex-text)] hover:border-[#3B82F6]/50 transition-colors shadow-2xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Deliverables Checklist */}
                {project.deliverables && project.deliverables.length > 0 && (
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[var(--vortex-muted)] block mb-2">
                      Key Deliverables
                    </span>
                    <div className="space-y-1.5">
                      {project.deliverables.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-[#3B82F6] shrink-0 mt-0.5" />
                          <span className="text-xs font-medium text-[var(--vortex-secondary-text)] leading-snug">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Live Site Action */}
                {project.liveUrl && (
                  <div className="pt-3.5 border-t border-[var(--vortex-border)]">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#3B82F6] hover:bg-blue-600 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md shadow-blue-500/20 group"
                    >
                      <span>Launch Live Platform</span>
                      <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>
                )}

                {/* Start a conversation CTA */}
                <div className="pt-1">
                  <Link
                    href={`/contact-us?project=${project.slug}`}
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[var(--vortex-surface)] hover:bg-[var(--vortex-border)] border border-[var(--vortex-border)] text-xs font-bold text-[var(--vortex-text)] hover:text-[#3B82F6] transition-all"
                  >
                    <span>Request Similar Solution</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Next Project Bottom Navigation Card (Reduced margin and padding) */}
          {nextProject && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="mt-8 sm:mt-10 pt-6 border-t border-[var(--vortex-border)]/60"
            >
              <div className="flex flex-col sm:flex-row items-center justify-between gap-5 p-5 sm:p-7 rounded-3xl bg-[var(--vortex-card)] border border-[var(--vortex-border)] hover:border-[#3B82F6]/60 transition-all duration-300 group">
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-widest text-[var(--vortex-muted)] block mb-1">
                    Next Project
                  </span>
                  <h4 className="text-lg sm:text-xl font-black text-[var(--vortex-text)] group-hover:text-[#3B82F6] transition-colors tracking-tight">
                    {nextProject.title}
                  </h4>
                  <p className="text-xs text-[var(--vortex-secondary-text)] mt-0.5">
                    {nextProject.category} • {nextProject.clientRegion}
                  </p>
                </div>

                <Link
                  href={`/projects/${nextProject.slug}`}
                  className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-[#3B82F6] hover:bg-blue-600 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md shadow-blue-500/20 group-hover:scale-105 shrink-0"
                >
                  <span>Explore This Project</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}
