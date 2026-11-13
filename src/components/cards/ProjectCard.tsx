"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import type { ProjectItem } from "@/lib/projectsStore";

interface ProjectCardProps {
  project: ProjectItem;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group relative flex flex-col rounded-2xl bg-[var(--vortex-card)] border border-[var(--vortex-border)] hover:border-[#3B82F6]/50 hover:bg-[var(--vortex-card-hover)] transition-all duration-300 overflow-hidden shadow-xs hover:shadow-xl hover:shadow-blue-500/5">
      {/* Project Image Container */}
      <Link
        href={`/projects/${project.slug}`}
        className="relative block w-full aspect-[16/10] bg-[var(--vortex-surface)] overflow-hidden border-b border-[var(--vortex-border)]"
      >
        <Image
          src={project.image}
          alt={`${project.title} Interface Preview`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
        />
        {/* Region & Category Overlay */}
        <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[var(--vortex-bg)]/85 backdrop-blur-md border border-[var(--vortex-border)] text-[10px] font-bold text-[var(--vortex-text)] shadow-xs">
          <MapPin className="w-3 h-3 text-[#3B82F6]" />
          <span>{project.clientRegion}</span>
        </div>

        <div className="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-[#3B82F6]/90 backdrop-blur-md text-[10px] font-bold text-white shadow-xs uppercase tracking-wider">
          {project.category}
        </div>
      </Link>

      {/* Content Area */}
      <div className="flex-1 flex flex-col justify-between p-6 sm:p-7">
        <div>
          <h3 className="text-xl font-black text-[var(--vortex-text)] group-hover:text-[#3B82F6] transition-colors mb-2 leading-snug tracking-tight">
            <Link
              href={`/projects/${project.slug}`}
              className="focus-visible:outline-none focus-visible:underline"
            >
              {project.title}
            </Link>
          </h3>

          <p className="text-xs sm:text-sm text-[var(--vortex-secondary-text)] leading-relaxed line-clamp-2 mb-4">
            {project.description}
          </p>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 rounded text-[10px] font-mono bg-[var(--vortex-surface)] text-[var(--vortex-muted)] border border-[var(--vortex-border)] font-medium"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[var(--vortex-surface)] text-[var(--vortex-muted)] border border-[var(--vortex-border)]">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>
        </div>

        {/* Card Footer Link */}
        <div className="pt-4 border-t border-[var(--vortex-border)] flex items-center justify-between">
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#3B82F6] group-hover:translate-x-1 transition-all"
          >
            <span>View Case Study</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
          <span className="text-[11px] text-[var(--vortex-muted)] font-mono">
            {project.category}
          </span>
        </div>
      </div>
    </article>
  );
}
