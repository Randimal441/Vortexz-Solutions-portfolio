"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ProjectItem } from "@/data/projects";

interface ProjectCardProps {
  project: ProjectItem;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group relative flex flex-col rounded-xl bg-[#121923] border border-[#1E293B] hover:border-[#3B82F6]/50 hover:bg-[#182231] transition-all duration-300 overflow-hidden shadow-sm hover:shadow-[0_12px_40px_rgba(0,0,0,0.5)]">
      {/* Project Image Container */}
      <Link
        href={`/projects/${project.slug}`}
        className="relative block w-full aspect-[16/10] bg-[#0D121A] overflow-hidden border-b border-[#1E293B]"
      >
        <Image
          src={project.image}
          alt={`${project.title} Interface Preview`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
        />
        {/* Region / Category Overlay Pill */}
        <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#070A0F]/85 backdrop-blur-md border border-[#1E293B] text-[11px] font-medium text-[#94A3B8]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]" />
          <span>{project.category}</span>
        </div>

        <div className="absolute top-3 right-3 px-2 py-0.5 rounded bg-[#0D121A]/80 border border-[#1E293B] text-[10px] font-mono text-[#64748B]">
          {project.clientRegion}
        </div>
      </Link>

      {/* Content Area */}
      <div className="flex-1 flex flex-col justify-between p-6">
        <div>
          <h3 className="text-lg font-bold text-[#F8FAFC] group-hover:text-white transition-colors mb-2 leading-snug">
            <Link
              href={`/projects/${project.slug}`}
              className="focus-visible:outline-none focus-visible:underline"
            >
              {project.title}
            </Link>
          </h3>

          <p className="text-sm text-[#94A3B8] leading-relaxed line-clamp-2 mb-4">
            {project.description}
          </p>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 rounded text-[11px] font-mono bg-[#0D121A] text-[#64748B] border border-[#1E293B]"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-[#0D121A] text-[#64748B] border border-[#1E293B]">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>
        </div>

        {/* Card Footer Link */}
        <div className="pt-4 border-t border-[#1E293B]/70 flex items-center justify-between">
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#60A5FA] group-hover:text-[#3B82F6] transition-colors"
          >
            <span>View Case Study</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
          <span className="text-[11px] text-[#64748B] font-mono">
            {project.category}
          </span>
        </div>
      </div>
    </article>
  );
}
