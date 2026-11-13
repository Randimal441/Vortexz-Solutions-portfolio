"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Globe,
  Briefcase,
  ShoppingBag,
  Layers,
  Smartphone,
  Layout,
  Code2,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { SERVICES, ServiceItem } from "@/data/services";

// Direct official Lucide icons mapping with signature accent colors
const ICONS_MAP: Record<string, React.ReactNode> = {
  "web-development": <Globe className="w-6 h-6 text-[#3B82F6]" />,
  "portfolio-websites": <Briefcase className="w-6 h-6 text-emerald-400" />,
  "e-commerce": <ShoppingBag className="w-6 h-6 text-cyan-400" />,
  "custom-web-systems": <Layers className="w-6 h-6 text-indigo-400" />,
  "mobile-apps": <Smartphone className="w-6 h-6 text-amber-400" />,
  "ui-ux-design": <Layout className="w-6 h-6 text-pink-400" />,
  "custom-software": <Code2 className="w-6 h-6 text-violet-400" />,
  "maintenance-support": <ShieldCheck className="w-6 h-6 text-emerald-400" />,
};

// 4-step descending waterfall offsets matching the reference image
const WATERFALL_OFFSETS = [
  "lg:translate-y-0",
  "lg:translate-y-8 xl:translate-y-10",
  "lg:translate-y-16 xl:translate-y-20",
  "lg:translate-y-24 xl:translate-y-30",
];

export function CascadingServicesShowcase() {
  const row1 = SERVICES.slice(0, 4);
  const row2 = SERVICES.slice(4, 8);

  const renderServiceCard = (service: ServiceItem, idxInRow: number) => {
    const iconNode = ICONS_MAP[service.id] || <Globe className="w-6 h-6 text-[#3B82F6]" />;
    const offsetClass = WATERFALL_OFFSETS[idxInRow % 4];

    return (
      <motion.div
        key={service.id}
        id={service.id}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5, delay: idxInRow * 0.08 }}
        className={`w-full transition-all duration-500 ${offsetClass}`}
      >
        <div className="group relative h-full flex flex-col justify-between rounded-3xl bg-[var(--vortex-card)] border border-[var(--vortex-border)] hover:border-[#3B82F6]/70 p-6 sm:p-7 transition-all duration-300 shadow-sm hover:shadow-2xl hover:shadow-blue-500/12 hover:-translate-y-2 overflow-hidden">
          {/* Ambient Glowing Gradient Mesh on Hover */}
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 via-cyan-500/6 to-indigo-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl" />

          {/* Top Subtle Flare */}
          <div className="absolute top-0 right-0 w-36 h-36 bg-blue-500/5 rounded-full blur-2xl pointer-events-none group-hover:bg-blue-500/12 transition-colors" />

          <div>
            {/* Card Header: Official Icon & Service Number Pill */}
            <div className="flex items-center justify-between mb-5 relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-[var(--vortex-surface)] border border-[var(--vortex-border)] group-hover:border-[#3B82F6]/50 flex items-center justify-center shadow-xs transition-colors">
                {iconNode}
              </div>
              <span className="font-mono text-xs font-bold px-3 py-1 rounded-full bg-[var(--vortex-surface)] border border-[var(--vortex-border)] text-[var(--vortex-muted)] group-hover:text-[#3B82F6] group-hover:border-[#3B82F6]/40 transition-colors">
                SERVICE [{service.number}]
              </span>
            </div>

            {/* Title */}
            <h3 className="text-lg sm:text-xl font-bold text-[var(--vortex-text)] group-hover:text-[#3B82F6] transition-colors mb-3 tracking-tight leading-snug relative z-10">
              {service.title}
            </h3>

            {/* Description */}
            <p className="text-xs sm:text-sm text-[var(--vortex-secondary-text)] leading-relaxed mb-5 relative z-10">
              {service.fullDescription || service.shortDescription}
            </p>

            {/* Capabilities & Features Checklist */}
            <div className="mb-5 pt-3.5 border-t border-[var(--vortex-border)]/70 relative z-10">
              <p className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#3B82F6] mb-2.5 flex items-center gap-1.5">
                <Sparkles className="w-3 h-3 text-[#3B82F6]" />
                Capabilities &amp; Features:
              </p>
              <ul className="space-y-2">
                {service.features.slice(0, 4).map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2 text-xs text-[var(--vortex-text)] leading-snug"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#3B82F6] shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies Badges */}
            {service.technologies && service.technologies.length > 0 && (
              <div className="pt-3 border-t border-[var(--vortex-border)]/70 mb-5 relative z-10">
                <div className="flex flex-wrap gap-1.5">
                  {service.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-[var(--vortex-surface)] text-[var(--vortex-muted)] border border-[var(--vortex-border)] group-hover:border-[#3B82F6]/30 group-hover:text-[var(--vortex-secondary-text)] transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Action CTA link */}
          <div className="pt-4 border-t border-[var(--vortex-border)]/70 flex items-center justify-between relative z-10">
            <Link
              href={`/contact-us?service=${service.id}`}
              className="inline-flex items-center gap-2 text-xs font-bold text-[#3B82F6] group-hover:translate-x-1 transition-all"
            >
              <span>Explore Service</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform" />
            </Link>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="w-full relative select-none">
      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--badge-bg)] border border-[var(--badge-border)] text-xs font-bold tracking-widest text-[#3B82F6] uppercase mb-3 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#3B82F6]" />
            ENGINEERING DISCIPLINES
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[var(--vortex-text)] tracking-tight leading-tight">
            Technology Solutions Engineered Around Your Business
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-[var(--vortex-secondary-text)] max-w-xl mx-auto leading-relaxed">
            Our 8 core capabilities. Structured with strict type-safety, dedicated senior architecture leadership, and long-term maintainability.
          </p>
        </div>

        {/* ROW 1: Services 01 - 04 (4-Step Descending Waterfall) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 items-start mb-16 lg:mb-24">
          {row1.map((service, idx) => renderServiceCard(service, idx))}
        </div>

        {/* ROW 2: Services 05 - 08 (4-Step Descending Waterfall) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 items-start pb-10">
          {row2.map((service, idx) => renderServiceCard(service, idx))}
        </div>
      </div>
    </div>
  );
}
