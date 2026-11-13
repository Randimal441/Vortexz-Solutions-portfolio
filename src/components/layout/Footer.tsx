"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MAIN_NAV, FOOTER_SERVICES, FOOTER_COMPANY, REGIONAL_PRESENCE, SOCIAL_LINKS } from "@/data/navigation";
import { ArrowUpRight, MapPin } from "lucide-react";
import { VortexzLogo } from "@/components/ui/VortexzLogo";
import LightBloom from "@/components/ui/LightBloom";
import { useTheme } from "@/context/ThemeContext";

export function Footer() {
  const pathname = usePathname();
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted ? resolvedTheme === "dark" : true;

  // Hide Footer on all admin routes
  if (pathname?.startsWith("/admin")) {
    return null;
  }
  const renderSocialIcon = (name: string) => {
    switch (name) {
      case "LinkedIn":
        return (
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.25c-.9 0-1.63.73-1.63 1.63s.73 1.63 1.63 1.63 1.63-.73 1.63-1.63-.73-1.63-1.63-1.63Z" />
          </svg>
        );
      case "GitHub":
        return (
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z" />
          </svg>
        );
      case "Instagram":
        return (
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069ZM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0Zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881Z" />
          </svg>
        );
      case "TikTok":
        return (
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.97v7.62c-.01 1.75-.48 3.51-1.42 4.96-1.37 2.13-3.79 3.55-6.35 3.73-2.5.17-5.04-.7-6.85-2.45-1.92-1.84-2.85-4.52-2.46-7.18.42-2.87 2.45-5.28 5.25-6.19.86-.28 1.76-.41 2.67-.4v4.06c-.85.03-1.72.23-2.44.7-.93.61-1.55 1.62-1.67 2.72-.15 1.34.45 2.7 1.55 3.47 1.05.74 2.46.85 3.63.29.98-.47 1.63-1.47 1.68-2.56.03-2.94.01-5.88.02-8.82.02-1.57.01-3.14.02-4.71z" />
          </svg>
        );
      case "Facebook":
        return (
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073Z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <footer className="bg-[var(--vortex-bg)] border-t border-[var(--vortex-border)] text-[var(--vortex-secondary-text)] transition-colors relative overflow-hidden">
      {/* Interactive Light Bloom WebGL Effect (Theme-Aware) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 opacity-65 dark:opacity-85 transition-opacity duration-300">
        <LightBloom
          variant="shafts"
          direction="bottom"
          background={isDark ? "#070A0F" : "#F8FAFC"}
          baseColor={isDark ? "#1D4ED8" : "#38BDF8"}
          accentColor={isDark ? "#00D2FF" : "#67E8F9"}
          speed={isDark ? 60 : 65}
          hover={isDark ? 115 : 100}
          light={{ rise: isDark ? 80 : 82, spread: isDark ? 80 : 92 }}
          shafts={{ count: isDark ? 16 : 18, amount: isDark ? 70 : 88, drift: 80 }}
          finish={{ grain: isDark ? 12 : 4, vignette: isDark ? 22 : 8 }}
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
        />
      </div>

      {/* Top Regional Strip with Colombo & Kurunegala Sri Lanka Hubs + Highlighted Response Time */}
      <div className="border-b border-[var(--vortex-border)] bg-[var(--vortex-surface)]/60 relative z-10 backdrop-blur-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center justify-between">
            {/* Colombo Hub */}
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-lg bg-[var(--vortex-card)] border border-[var(--vortex-border)] flex items-center justify-center text-[#3B82F6] shrink-0 mt-0.5">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-[var(--vortex-text)]">Colombo Hub</span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-[var(--vortex-card)] text-[var(--vortex-muted)] font-mono border border-[var(--vortex-border)]">
                    Sri Lanka
                  </span>
                </div>
                <p className="text-xs text-[var(--vortex-muted)] mt-1">Commercial operations, consulting &amp; strategy.</p>
                <div className="flex items-center gap-4 mt-1.5 text-xs text-[var(--vortex-secondary-text)]">
                  <a href="mailto:vortexzsolution@gmail.com" className="hover:text-[#3B82F6] transition-colors">
                    vortexzsolution@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Kurunegala Hub */}
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-lg bg-[var(--vortex-card)] border border-[var(--vortex-border)] flex items-center justify-center text-[#00D2FF] shrink-0 mt-0.5">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-[var(--vortex-text)]">Kurunegala Hub</span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-[var(--vortex-card)] text-[var(--vortex-muted)] font-mono border border-[var(--vortex-border)]">
                    Sri Lanka
                  </span>
                </div>
                <p className="text-xs text-[var(--vortex-muted)] mt-1">Core software engineering &amp; digital systems.</p>
                <div className="flex items-center gap-4 mt-1.5 text-xs text-[var(--vortex-secondary-text)]">
                  <a href="tel:+94711991415" className="hover:text-[#3B82F6] transition-colors font-mono">
                    +94 71 199 1415
                  </a>
                </div>
              </div>
            </div>

            {/* Highlighted Response Time Badge */}
            <div className="flex md:justify-end">
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/25 text-xs font-semibold text-emerald-600 dark:text-emerald-400 shadow-2xs">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <span>Typical response time is under 24 business hours.</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand treatment */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="inline-block group focus-visible:outline-none">
              <VortexzLogo size="md" />
            </Link>
            <p className="text-xs text-[var(--vortex-muted)] leading-relaxed max-w-sm pt-2">
              Engineering high-performance web systems, custom mobile apps, and scalable digital platforms built for businesses in Sri Lanka and international markets.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-2 pt-2">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-[var(--vortex-card)] border border-[var(--vortex-border)] flex items-center justify-center text-[var(--vortex-muted)] hover:text-[var(--vortex-text)] hover:border-[#3B82F6]/50 transition-colors"
                  aria-label={social.name}
                >
                  {renderSocialIcon(social.name)}
                </a>
              ))}
            </div>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--vortex-text)] block">
              Capabilities
            </span>
            <ul className="space-y-2 text-xs">
              {FOOTER_SERVICES.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="hover:text-[var(--vortex-text)] hover:translate-x-0.5 inline-block transition-all"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation Column */}
          <div className="lg:col-span-2 space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--vortex-text)] block">
              Navigation
            </span>
            <ul className="space-y-2 text-xs">
              {MAIN_NAV.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="hover:text-[var(--vortex-text)] hover:translate-x-0.5 inline-block transition-all"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--vortex-text)] block">
              Engagement
            </span>
            <ul className="space-y-2 text-xs">
              {FOOTER_COMPANY.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="hover:text-[var(--vortex-text)] hover:translate-x-0.5 inline-block transition-all"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="pt-3">
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#3B82F6] hover:text-[#60A5FA] transition-colors"
              >
                <span>Request a technical consultation</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom copyright & response time */}
        <div className="mt-12 pt-8 border-t border-[var(--vortex-border)] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--vortex-secondary-text)]">
          <div>
            &copy; {new Date().getFullYear()} Vortexz Solutions. All rights reserved.
          </div>
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <span>Sri Lanka: Colombo / Kurunegala</span>
            <span>•</span>
            <span className="text-emerald-500 font-semibold flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Typical response time is under 24 business hours.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
