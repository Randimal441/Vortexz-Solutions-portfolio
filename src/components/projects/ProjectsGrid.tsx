"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { ProjectItem, ProjectCategory } from "@/data/projects";

interface ProjectsGridProps {
  projects: ProjectItem[];
}

const CATEGORIES: ("All" | ProjectCategory)[] = [
  "All",
  "Websites",
  "E-Commerce",
  "Web Systems",
  "Mobile Apps",
  "UI/UX",
];

export function ProjectsGrid({ projects }: ProjectsGridProps) {
  const [selectedCategory, setSelectedCategory] = useState<"All" | ProjectCategory>("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <div>
      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
        {CATEGORIES.map((category) => {
          const isSelected = selectedCategory === category;
          return (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`relative px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                isSelected
                  ? "text-[#F8FAFC] font-semibold"
                  : "text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-[#121923]"
              }`}
              aria-pressed={isSelected}
            >
              {isSelected && (
                <motion.div
                  layoutId="activeProjectFilter"
                  className="absolute inset-0 bg-[#182231] border border-[#3B82F6]/50 rounded-full -z-10 shadow-sm"
                  transition={{ type: "spring", stiffness: 400, damping: 32 }}
                />
              )}
              {category}
            </button>
          );
        })}
      </div>

      {/* Projects Grid with AnimatePresence */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.div
              key={project.slug}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-16 text-[#64748B] text-sm">
          No projects found in this category.
        </div>
      )}
    </div>
  );
}
