"use client";

import React from "react";
import Image from "next/image";
import { MoreHorizontal, Cloud, Cpu, Zap } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedIcon } from "@/components/ui/AnimatedIcon";

export function EngineeringApproachSection() {
  const miniPreviews = [
    {
      title: "Core Arch",
      metric: "99.99% SLA",
      icon: Cloud,
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&auto=format&fit=crop&q=80",
    },
    {
      title: "Edge Runtime",
      metric: "Sub-20ms",
      icon: Zap,
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&auto=format&fit=crop&q=80",
    },
    {
      title: "Data Pipeline",
      metric: "Zero-Lag",
      icon: Cpu,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&auto=format&fit=crop&q=80",
    },
  ];

  return (
    <section className="pt-6 pb-14 sm:pt-8 sm:pb-18 lg:pt-10 lg:pb-20 bg-[var(--vortex-bg)] relative overflow-hidden transition-colors select-none">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[450px] bg-gradient-to-r from-blue-600/10 via-purple-600/5 to-cyan-500/10 blur-[160px] rounded-full pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="OUR PHILOSOPHY"
          title="How We Approach Engineering"
          description="We treat every project as a long-term commercial investment for our clients."
          align="center"
          className="mb-10 sm:mb-12"
        />

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6">
          {/* CARD 1: Top-Left (Wide - 7 cols) -> Business-First Architecture */}
          <div className="lg:col-span-7 rounded-[28px] bg-[var(--vortex-card)] border border-[var(--vortex-border)] hover:border-[#3B82F6]/50 transition-all duration-500 shadow-xl shadow-black/5 dark:shadow-black/30 p-6 sm:p-8 flex flex-col justify-between group relative overflow-hidden">
            {/* Subtle card sheen */}
            <div className="absolute inset-0 rounded-[28px] bg-gradient-to-br from-white/[0.04] to-transparent pointer-events-none" />

            {/* Visual element: 3 Preview Cards Side-by-Side (Fully Light & Dark Mode compatible) */}
            <div className="grid grid-cols-3 gap-2.5 sm:gap-4 my-auto pt-2 sm:pt-4 relative z-10">
              {miniPreviews.map((preview, i) => {
                const IconComponent = preview.icon;
                return (
                  <div
                    key={i}
                    className="group/mini relative rounded-2xl bg-[var(--vortex-surface)]/90 border border-[var(--vortex-border)] hover:border-[#3B82F6]/60 p-2 sm:p-2.5 shadow-md shadow-black/5 dark:shadow-black/40 hover:-translate-y-1 transition-all duration-300 backdrop-blur-sm"
                  >
                    {/* Image Thumbnail */}
                    <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-950 mb-2.5 border border-black/5 dark:border-white/5">
                      <Image
                        src={preview.image}
                        alt={preview.title}
                        fill
                        sizes="(max-width: 640px) 30vw, 20vw"
                        className="object-cover group-hover/mini:scale-108 transition-transform duration-500 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 dark:from-black/70 via-transparent to-transparent opacity-70" />
                    </div>

                    {/* Title */}
                    <div className="text-xs sm:text-sm font-bold text-[var(--vortex-text)] tracking-tight truncate px-0.5 group-hover/mini:text-[#3B82F6] transition-colors">
                      {preview.title}
                    </div>

                    {/* Meta row */}
                    <div className="flex items-center justify-between mt-1 text-[10px] sm:text-[11px] text-[var(--vortex-secondary-text)] font-mono px-0.5">
                      <div className="flex items-center gap-1 truncate">
                        <IconComponent className="w-3 h-3 text-[#3B82F6] shrink-0" />
                        <span className="truncate">{preview.metric}</span>
                      </div>
                      <MoreHorizontal className="w-3 h-3 text-[var(--vortex-muted)] shrink-0" />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom Content */}
            <div className="text-center mt-6 pt-2 relative z-10">
              <h3 className="text-lg sm:text-xl font-bold text-[var(--vortex-text)] tracking-tight mb-2">
                Business-First Architecture
              </h3>
              <p className="text-xs sm:text-sm text-[var(--vortex-secondary-text)] leading-relaxed max-w-lg mx-auto font-normal">
                We align software architecture directly with commercial ROI—eliminating operational friction, accelerating workflows, and generating measurable value.
              </p>
            </div>
          </div>

          {/* CARD 2: Top-Right (Narrow - 5 cols) -> Strict Engineering Standards */}
          <div className="lg:col-span-5 rounded-[28px] bg-[var(--vortex-card)] border border-[var(--vortex-border)] hover:border-[#3B82F6]/50 transition-all duration-500 shadow-xl shadow-black/5 dark:shadow-black/30 p-6 sm:p-8 flex flex-col justify-between items-center text-center group relative overflow-hidden">
            {/* Top Atmospheric Gradient Aura to fill empty space */}
            <div className="absolute top-0 inset-x-0 h-44 bg-gradient-to-b from-blue-500/15 via-indigo-500/5 to-transparent dark:from-blue-600/20 dark:via-purple-600/10 dark:to-transparent pointer-events-none rounded-t-[28px]" />
            <div className="absolute top-8 left-1/2 -translate-x-1/2 w-44 h-44 rounded-full border border-blue-500/10 dark:border-blue-400/10 pointer-events-none" />
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-56 h-56 rounded-full border border-blue-500/5 dark:border-blue-400/5 pointer-events-none" />

            {/* Subtle card sheen */}
            <div className="absolute inset-0 rounded-[28px] bg-gradient-to-br from-white/[0.04] to-transparent pointer-events-none" />

            {/* 3D Squircle Lock Icon Header with AnimatedIcon (Light & Dark Mode compatible) */}
            <div className="my-auto py-6 sm:py-8 flex items-center justify-center relative z-10">
              <div className="relative group-hover:scale-105 transition-transform duration-500">
                {/* Glow behind icon */}
                <div className="absolute inset-0 bg-blue-500/25 dark:bg-blue-500/20 blur-2xl rounded-full scale-125" />

                {/* 3D Beveled Squircle Button */}
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-[24px] sm:rounded-[28px] bg-gradient-to-b from-white via-slate-50 to-slate-100 dark:from-[#242D3D] dark:via-[#161D29] dark:to-[#0D121B] border border-slate-200/90 dark:border-white/20 shadow-[inset_0_1.5px_1px_rgba(255,255,255,0.9),0_12px_24px_-6px_rgba(15,23,42,0.1)] dark:shadow-[inset_0_1.5px_1px_rgba(255,255,255,0.35),0_18px_35px_-8px_rgba(0,0,0,0.7)] flex items-center justify-center text-[#3B82F6] dark:text-white">
                  <AnimatedIcon name="lock" size={38} isHovered={true} accentColor="#3B82F6" />
                </div>
              </div>
            </div>

            {/* Bottom Content */}
            <div className="mt-4 relative z-10">
              <h3 className="text-lg sm:text-xl font-bold text-[var(--vortex-text)] tracking-tight mb-2">
                Strict Engineering Standards
              </h3>
              <p className="text-xs sm:text-sm text-[var(--vortex-secondary-text)] leading-relaxed max-w-sm mx-auto font-normal">
                Collaborate with confidence knowing that type-safe architectures, strict linting, automated CI/CD pipelines, and rigorous security reviews guard every line of your codebase.
              </p>
            </div>
          </div>

          {/* CARD 3: Bottom-Left (Narrow - 5 cols) -> Direct Engineering Access */}
          <div className="lg:col-span-5 rounded-[28px] bg-[var(--vortex-card)] border border-[var(--vortex-border)] hover:border-[#3B82F6]/50 transition-all duration-500 shadow-xl shadow-black/5 dark:shadow-black/30 p-6 sm:p-8 flex flex-col justify-between items-center text-center group relative overflow-hidden">
            {/* Top Atmospheric Gradient Aura to fill empty space */}
            <div className="absolute top-0 inset-x-0 h-44 bg-gradient-to-b from-cyan-500/15 via-blue-500/5 to-transparent dark:from-cyan-500/20 dark:via-blue-600/10 dark:to-transparent pointer-events-none rounded-t-[28px]" />
            <div className="absolute top-8 left-1/2 -translate-x-1/2 w-44 h-44 rounded-full border border-cyan-500/10 dark:border-cyan-400/10 pointer-events-none" />
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-56 h-56 rounded-full border border-cyan-500/5 dark:border-cyan-400/5 pointer-events-none" />

            {/* Subtle card sheen */}
            <div className="absolute inset-0 rounded-[28px] bg-gradient-to-br from-white/[0.04] to-transparent pointer-events-none" />

            {/* 3D Squircle Chat / Support Icon Header with AnimatedIcon (Light & Dark Mode compatible) */}
            <div className="my-auto py-6 sm:py-8 flex items-center justify-center relative z-10">
              <div className="relative group-hover:scale-105 transition-transform duration-500">
                {/* Glow behind icon */}
                <div className="absolute inset-0 bg-cyan-500/25 dark:bg-cyan-500/20 blur-2xl rounded-full scale-125" />

                {/* 3D Beveled Squircle Button */}
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-[24px] sm:rounded-[28px] bg-gradient-to-b from-white via-slate-50 to-slate-100 dark:from-[#242D3D] dark:via-[#161D29] dark:to-[#0D121B] border border-slate-200/90 dark:border-white/20 shadow-[inset_0_1.5px_1px_rgba(255,255,255,0.9),0_12px_24px_-6px_rgba(15,23,42,0.1)] dark:shadow-[inset_0_1.5px_1px_rgba(255,255,255,0.35),0_18px_35px_-8px_rgba(0,0,0,0.7)] flex items-center justify-center text-[#3B82F6] dark:text-white">
                  <AnimatedIcon name="chat" size={38} isHovered={true} accentColor="#00D2FF" />
                </div>
              </div>
            </div>

            {/* Bottom Content */}
            <div className="mt-4 relative z-10">
              <h3 className="text-lg sm:text-xl font-bold text-[var(--vortex-text)] tracking-tight mb-2">
                Direct Engineering Access
              </h3>
              <p className="text-xs sm:text-sm text-[var(--vortex-secondary-text)] leading-relaxed max-w-sm mx-auto font-normal">
                Clients communicate directly with senior software architects and lead designers, eliminating agency communication layers and ensuring high alignment from day one.
              </p>
            </div>
          </div>

          {/* CARD 4: Bottom-Right (Wide - 7 cols) -> Long-Term Maintainability */}
          <div className="lg:col-span-7 rounded-[28px] bg-[var(--vortex-card)] border border-[var(--vortex-border)] hover:border-[#3B82F6]/50 transition-all duration-500 shadow-xl shadow-black/5 dark:shadow-black/30 min-h-[360px] sm:min-h-[400px] flex flex-col justify-end p-6 sm:p-8 group relative overflow-hidden">
            {/* Background Image of Engineer/Developer in studio */}
            <div className="absolute inset-0 pointer-events-none">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&auto=format&fit=crop&q=80"
                alt="Engineering team collaboration and software development"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              {/* Cinematic Vignette Overlay that dynamically blends in both light and dark mode */}
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--vortex-card)] via-[var(--vortex-card)]/90 via-50% to-[var(--vortex-card)]/30" />
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--vortex-card)]/70 via-transparent to-[var(--vortex-card)]/70" />
            </div>

            {/* Bottom Content overlaid cleanly */}
            <div className="text-center relative z-10 mt-auto">
              <h3 className="text-lg sm:text-xl font-bold text-[var(--vortex-text)] tracking-tight mb-2">
                Long-Term Maintainability
              </h3>
              <p className="text-xs sm:text-sm text-[var(--vortex-secondary-text)] leading-relaxed max-w-lg mx-auto font-normal">
                Every codebase is built with modular separation of concerns, clean documentation, and standard Git workflows, making future enhancements seamless and scalable.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
