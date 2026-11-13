"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { ServiceItem } from "@/data/services";
import { AnimatedIcon } from "@/components/ui/AnimatedIcon";

interface ServiceCardProps {
  service: ServiceItem;
  showDetails?: boolean;
}

// Authentic mockup images corresponding to each service
const SERVICE_IMAGES: Record<string, string> = {
  "web-development": "/projects/apex-logistics.png",
  "portfolio-websites": "/projects/zenith-advisory.svg",
  "e-commerce": "/projects/aurora-store.png",
  "custom-web-systems": "/projects/stratacore-portal.png",
  "mobile-apps": "/projects/police-app.jpg",
  "ui-ux-design": "/projects/aurora-store.png",
  "custom-software": "/projects/stratacore-portal.png",
  "maintenance-support": "/projects/apex-logistics.png",
};

export function ServiceCard({ service, showDetails = true }: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const imageSrc = SERVICE_IMAGES[service.id] || "/projects/apex-logistics.png";

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative flex flex-col justify-between rounded-3xl bg-[var(--vortex-card)] border border-[var(--vortex-border)] hover:border-[#3B82F6]/70 transition-all duration-500 shadow-sm hover:shadow-2xl hover:shadow-blue-500/15 overflow-hidden hover:-translate-y-1.5"
    >
      {/* Interactive Ambient Gradient Glow on Hover */}
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 via-cyan-500/6 to-indigo-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-0" />

      <div>
        {/* Top Visual Mockup Header: Grayscale in normal, Full Vibrant Color & Zoom on Hover */}
        <div className="relative w-full h-[160px] sm:h-[190px] overflow-hidden bg-slate-950 border-b border-[var(--vortex-border)]/70">
          <Image
            src={imageSrc}
            alt={service.title}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className={`object-cover object-top transition-all duration-700 ease-out ${
              isHovered
                ? "grayscale-0 contrast-105 brightness-100 scale-106"
                : "grayscale contrast-[1.08] brightness-[0.80]"
            }`}
          />

          {/* Vignette Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/25 pointer-events-none" />

          {/* Floating Icon Box & Number Badge */}
          <div className="absolute inset-0 p-5 sm:p-6 flex items-start justify-between z-10 pointer-events-none">
            <div className="w-12 h-12 rounded-2xl bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-[#3B82F6] shadow-lg group-hover:border-[#3B82F6]/60 transition-colors">
              <AnimatedIcon
                name={service.iconName}
                size={22}
                isHovered={isHovered}
                className="text-[#3B82F6]"
              />
            </div>

            <span className="font-mono text-xs font-bold px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white shadow-xs">
              SERVICE [{service.number}]
            </span>
          </div>

          {/* Service Title Preview in Banner */}
          <div className="absolute bottom-4 left-5 sm:left-6 z-10 pointer-events-none">
            <span className="text-[10px] font-mono uppercase tracking-widest text-blue-400 font-bold block mb-0.5">
              VORTEXZ CAPABILITY
            </span>
            <h4 className="text-base sm:text-lg font-black text-white tracking-tight drop-shadow-md">
              {service.title}
            </h4>
          </div>
        </div>

        {/* Card Body Content */}
        <div className="p-6 sm:p-8 space-y-6 relative z-10">
          {/* Detailed Description */}
          <p className="text-xs sm:text-sm text-[var(--vortex-secondary-text)] leading-relaxed">
            {showDetails ? service.fullDescription : service.shortDescription}
          </p>

          {/* Capabilities & Features Checklist */}
          {showDetails && (
            <div className="pt-4 border-t border-[var(--vortex-border)]/70">
              <div className="flex items-center gap-1.5 mb-3.5">
                <Sparkles className="w-3.5 h-3.5 text-[#3B82F6]" />
                <p className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#3B82F6]">
                  Capabilities &amp; Features:
                </p>
              </div>
              <ul className="space-y-2.5">
                {service.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 text-xs text-[var(--vortex-text)] leading-snug"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#3B82F6] shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technologies Badges */}
          {service.technologies && service.technologies.length > 0 && (
            <div className="pt-4 border-t border-[var(--vortex-border)]/70">
              <p className="text-[10px] font-mono uppercase tracking-widest text-[var(--vortex-muted)] mb-2.5 font-bold">
                Technologies &amp; Frameworks
              </p>
              <div className="flex flex-wrap gap-1.5">
                {service.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-[var(--vortex-surface)] text-[var(--vortex-text)] font-semibold border border-[var(--vortex-border)] group-hover:border-[#3B82F6]/40 transition-colors shadow-2xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Action CTA Bottom Bar */}
      <div className="p-6 sm:p-8 pt-4 border-t border-[var(--vortex-border)]/70 flex items-center justify-between relative z-10 bg-[var(--vortex-surface)]/30">
        <Link
          href={`/contact-us?service=${service.id}`}
          className="inline-flex items-center gap-2 text-xs font-bold text-[#3B82F6] group-hover:text-blue-500 group-hover:translate-x-1 transition-all"
        >
          <span>Explore Service</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
