"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, Home } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  badge?: string;
  title?: string;
  description?: string;
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumbs({
  badge,
  title,
  description,
  items,
  className = "",
}: BreadcrumbsProps) {
  return (
    <section
      className={`relative pt-18 pb-2.5 sm:pt-20 sm:pb-3 border-b border-[var(--vortex-border)] bg-[var(--vortex-surface)]/60 backdrop-blur-md overflow-hidden ${className}`}
      aria-label="Page Breadcrumb Navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="flex flex-col gap-2"
        >
          {/* Animated Breadcrumb Trail with Typical Response Time Highlight */}
          <div className="flex flex-wrap items-center justify-between gap-3">
            <nav
              className="flex items-center flex-wrap gap-2 text-xs text-[var(--vortex-muted)] font-medium"
              aria-label="Breadcrumb Trail"
            >
              <Link
                href="/"
                className="inline-flex items-center gap-1.5 hover:text-[#3B82F6] transition-colors py-1 px-2 rounded-md hover:bg-[var(--vortex-card)]"
              >
                <Home className="w-3.5 h-3.5" />
                <span>Home</span>
              </Link>

              {items.map((item, index) => {
                const isLast = index === items.length - 1;
                return (
                  <React.Fragment key={index}>
                    <ChevronRight className="w-3.5 h-3.5 text-[var(--vortex-muted)]/50 shrink-0" />
                    {item.href && !isLast ? (
                      <Link
                        href={item.href}
                        className="hover:text-[#3B82F6] transition-colors py-1 px-2 rounded-md hover:bg-[var(--vortex-card)]"
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <span className="text-[var(--vortex-text)] font-semibold py-1 px-2.5 rounded-md bg-[var(--vortex-card)] border border-[var(--vortex-border)] shadow-xs">
                        {item.label}
                      </span>
                    )}
                  </React.Fragment>
                );
              })}
            </nav>

            {/* Highlighted Typical Response Time Indicator */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 shadow-2xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Typical response time is under 24 business hours.</span>
            </div>
          </div>

          {/* Title Strip (Rendered ONLY if title is passed) */}
          {title && (
            <div className="mt-2 flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                {badge && (
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[var(--badge-bg)] border border-[var(--badge-border)] text-[10px] font-bold tracking-widest text-[#3B82F6] uppercase mb-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] animate-pulse" />
                    {badge}
                  </div>
                )}
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-[var(--vortex-text)] tracking-tight leading-tight">
                  {title}
                </h1>
              </div>

              {description && (
                <p className="text-xs sm:text-sm text-[var(--vortex-secondary-text)] max-w-xl leading-relaxed md:text-right">
                  {description}
                </p>
              )}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
