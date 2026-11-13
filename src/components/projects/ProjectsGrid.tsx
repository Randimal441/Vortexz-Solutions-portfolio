"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, ExternalLink, ChevronDown, ArrowRight } from "lucide-react";
import { ProjectItem, ProjectCategory } from "@/lib/projectsStore";

interface ProjectsGridProps {
  projects: ProjectItem[];
}

const CATEGORIES: ("All" | ProjectCategory)[] = [
  "All",
  "Mobile Apps",
  "Web Systems",
  "E-Commerce",
  "Websites",
  "UI/UX",
];

export function ProjectsGrid({ projects }: ProjectsGridProps) {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState<"All" | ProjectCategory>("All");
  const [hoveredSlug, setHoveredSlug] = useState<string | null>(null);

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <div>
      {/* Category Filter Pills (All pills have container background, matching Homepage style) */}
      <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
        {CATEGORIES.map((category) => {
          const isSelected = selectedCategory === category;
          return (
            <button
              key={category}
              type="button"
              onClick={() => setSelectedCategory(category)}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs font-bold tracking-wide transition-all whitespace-nowrap cursor-pointer border shadow-2xs ${
                isSelected
                  ? "bg-[#3B82F6] text-white border-[#3B82F6] shadow-md shadow-blue-500/25"
                  : "bg-[var(--vortex-card)] border-[var(--vortex-border)] text-[var(--vortex-secondary-text)] hover:text-[var(--vortex-text)] hover:border-[#3B82F6]/40 hover:bg-[var(--vortex-surface)]"
              }`}
              aria-pressed={isSelected}
            >
              {category}
            </button>
          );
        })}
      </div>

      {/* Projects Grid: Exactly Matching Homepage Animated Expandable Cards */}
      <motion.div
        layout
        className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, idx) => {
            const isHovered = hoveredSlug === project.slug;

            return (
              <motion.div
                layout
                key={project.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: idx * 0.04 }}
                onMouseEnter={() => setHoveredSlug(project.slug)}
                onMouseLeave={() => setHoveredSlug(null)}
                onClick={() => router.push(`/projects/${project.slug}`)}
                className="group relative flex flex-col rounded-2xl sm:rounded-3xl bg-[var(--vortex-card)] border border-[var(--vortex-border)] hover:border-[#3B82F6]/60 transition-all duration-500 shadow-sm hover:shadow-2xl hover:shadow-blue-500/10 overflow-hidden cursor-pointer"
              >
                {/* Top Image Showcase (100% Visible & Never Covered: Grayscale in normal, Full Vibrant Color on hover) */}
                <div className="relative w-full aspect-[16/10] overflow-hidden bg-slate-950">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className={`object-cover object-top transition-all duration-700 ease-out ${
                      isHovered
                        ? "grayscale-0 contrast-100 brightness-100 scale-103"
                        : "grayscale contrast-[1.08] brightness-[0.92]"
                    }`}
                    priority={idx < 2}
                  />

                  {/* Corner Meta Pills */}
                  <div className="absolute top-4 left-4 z-10 flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-[10px] font-bold text-white shadow-xs">
                    <MapPin className="w-3 h-3 text-[#3B82F6]" />
                    <span>{project.clientRegion}</span>
                  </div>

                  <div className="absolute top-4 right-4 z-10 px-3 py-1 rounded-full bg-[#3B82F6] text-[10px] font-bold text-white shadow-md uppercase tracking-wider">
                    {project.category}
                  </div>

                  {/* Bottom Teaser Bar (Visible in Normal State, fades out when expanded) */}
                  <div
                    className={`absolute inset-x-0 bottom-0 z-10 p-5 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex items-center justify-between transition-opacity duration-300 ${
                      isHovered ? "opacity-0 pointer-events-none" : "opacity-100"
                    }`}
                  >
                    <h3 className="text-lg sm:text-xl font-black text-white tracking-tight truncate pr-4">
                      {project.title}
                    </h3>
                    <span className="text-xs text-white/70 font-mono shrink-0 flex items-center gap-1">
                      <span>View Project</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>

                {/* Expanding Details Drawer Underneath the Image (Does NOT cover the image!) */}
                <div
                  className={`grid transition-[grid-template-rows,opacity] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    isHovered
                      ? "grid-rows-[1fr] opacity-100 border-t border-[var(--vortex-border)]"
                      : "grid-rows-[0fr] opacity-0 border-t-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="p-6 sm:p-7 bg-[var(--vortex-card)] flex flex-col justify-between space-y-4">
                      <div>
                        {/* Category & Region */}
                        <div className="flex items-center gap-2 mb-1.5">
                          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#3B82F6]">
                            {project.category}
                          </span>
                          <span className="text-[10px] font-mono text-[var(--vortex-muted)]">
                            • {project.clientRegion}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="text-xl sm:text-2xl font-black text-[var(--vortex-text)] tracking-tight leading-tight mb-2">
                          {project.title}
                        </h3>

                        {/* Description */}
                        <p className="text-xs sm:text-sm text-[var(--vortex-secondary-text)] leading-relaxed mb-4">
                          {project.description || project.tagline}
                        </p>

                        {/* Tech Stacks */}
                        <div>
                          <p className="text-[10px] font-mono uppercase tracking-widest text-[var(--vortex-muted)] mb-2 font-bold">
                            Technologies
                          </p>
                          <div className="flex flex-wrap gap-1.5">
                            {project.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-[var(--vortex-surface)] border border-[var(--vortex-border)] text-[var(--vortex-text)] font-semibold shadow-2xs"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Actions: Explore This Project (navigates to single view) & Visit Live Platform */}
                      <div className="pt-3 border-t border-[var(--vortex-border)] flex items-center justify-between gap-3 flex-wrap">
                        <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[var(--vortex-surface)] hover:bg-[#3B82F6] hover:text-white border border-[var(--vortex-border)] hover:border-[#3B82F6] text-xs font-bold text-[var(--vortex-text)] transition-all">
                          <span>Explore This Project</span>
                          <ArrowRight className="w-3.5 h-3.5 text-[#3B82F6] group-hover:text-white" />
                        </span>

                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#3B82F6] hover:bg-blue-600 text-white font-bold text-xs tracking-wider transition-all shadow-sm hover:scale-105 active:scale-95 group/btn"
                          >
                            <span>Live Preview</span>
                            <ExternalLink className="w-3.5 h-3.5 ml-0.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-16 text-[var(--vortex-muted)] text-sm">
          No projects found in this category.
        </div>
      )}
    </div>
  );
}
