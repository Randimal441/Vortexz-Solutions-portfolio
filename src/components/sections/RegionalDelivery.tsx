"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Clock, MapPin, CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export function RegionalDelivery() {
  return (
    <section className="py-5 sm:py-10 lg:py-10 bg-[var(--vortex-bg)] relative overflow-hidden transition-colors select-none">
      {/* Subtle atmospheric ambient glow matching light & dark theme */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-blue-600/10 via-cyan-500/05 to-indigo-600/10 dark:from-blue-600/15 dark:via-cyan-400/10 dark:to-indigo-600/15 blur-[160px] rounded-full pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 xl:px-14 relative z-10">
        <SectionHeading
          badge="GEOGRAPHIC FOCUS"
          title="Local Presence. Global Delivery."
          description="Operating through our Colombo and Kurunegala engineering hubs in Sri Lanka, we combine practical business understanding with scalable digital execution."
          align="center"
          className="mb-14 sm:mb-18"
        />

        {/* Regional Cards Grid with Generous Gap */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 xl:gap-20 items-stretch">
          {/* Sri Lanka Regional Card with 3D Overlapping Island Flag-Map */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl bg-[var(--vortex-card)] border border-[var(--vortex-border)] hover:border-[#3B82F6]/60 transition-all duration-500 shadow-xl shadow-black/5 dark:shadow-black/30 p-7 sm:p-8 lg:p-10 flex flex-col justify-between overflow-visible group min-h-[440px] sm:min-h-[460px]"
          >
            {/* Subtle card inner sheen */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/[0.04] to-transparent pointer-events-none" />

            {/* 3D Floating Overlapping Flag Map - Sri Lanka (Shifted further to the right into the generous card gap) */}
            <div className="absolute -right-8 sm:-right-12 lg:-right-16 xl:-right-20 top-1/2 -translate-y-1/2 w-36 sm:w-48 md:w-54 lg:w-62 h-52 sm:h-68 md:h-76 lg:h-88 pointer-events-none z-30 group-hover:scale-105 group-hover:-translate-y-[53%] transition-transform duration-500 ease-out">
              {/* Atmospheric Backlight Glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/20 via-emerald-500/15 to-transparent blur-3xl rounded-full scale-90" />
              <div className="relative w-full h-full">
                <Image
                  src="/maps/Flag-map_of_Sri_Lanka_alt.png"
                  alt="Sri Lanka Geographic Flag Map"
                  fill
                  className="object-contain filter drop-shadow-[0_18px_30px_rgba(0,0,0,0.35)] dark:drop-shadow-[0_22px_45px_rgba(0,0,0,0.8)] mt-4"
                  sizes="(max-width: 640px) 140px, (max-width: 1024px) 210px, 250px"
                  priority
                />
              </div>
            </div>

            {/* Content Column */}
            <div className="relative z-10 flex flex-col justify-between h-full">
              <div>
                {/* Header: Title on Left, Timezone on Right */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-2.5">
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-2xl bg-[#3B82F6]/10 border border-[#3B82F6]/20 flex items-center justify-center text-[#3B82F6] shrink-0 shadow-xs">
                      <MapPin className="w-5 h-5 text-[#3B82F6]" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[var(--vortex-text)] tracking-tight">
                      Sri Lanka (Colombo &amp; Kurunegala)
                    </h3>
                  </div>
                  <span className="self-start sm:self-auto flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[var(--vortex-surface)]/90 backdrop-blur-md border border-[var(--vortex-border)] text-xs font-mono text-[var(--vortex-secondary-text)] shrink-0 shadow-xs">
                    <Clock className="w-3.5 h-3.5 text-[#3B82F6]" />
                    <span>UTC+5:30 (IST)</span>
                  </span>
                </div>

                {/* Subtitle in its own dedicated row - no clutter */}
                <p className="text-xs sm:text-sm font-semibold text-[#3B82F6] dark:text-blue-400 mb-4 tracking-wide">
                  Colombo &amp; Kurunegala Engineering Hubs
                </p>

                {/* Description Paragraph */}
                <p className="text-xs sm:text-sm text-[var(--vortex-secondary-text)] leading-relaxed mb-6 font-normal max-w-[85%] sm:max-w-[78%] md:max-w-[74%]">
                  Assisting Sri Lankan startups, mid-sized companies, and family enterprises transitioning from legacy paper processes to high-performing digital systems, e-commerce channels, and responsive web platforms.
                </p>
              </div>

              {/* Checklist items */}
              <div className="space-y-3 pt-5 border-t border-[var(--vortex-border)] max-w-[85%] sm:max-w-[80%] md:max-w-[76%]">
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--vortex-secondary-text)]">
                  <CheckCircle2 className="w-4 h-4 text-[#3B82F6] shrink-0 mt-0.5" />
                  <span>Local payment integration (PayHere, WebXpay, Genie, LKR)</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--vortex-secondary-text)]">
                  <CheckCircle2 className="w-4 h-4 text-[#3B82F6] shrink-0 mt-0.5" />
                  <span>Affordable, enterprise-grade engineering tailored for growth</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--vortex-secondary-text)]">
                  <CheckCircle2 className="w-4 h-4 text-[#3B82F6] shrink-0 mt-0.5" />
                  <span>Same-day communication and direct technical consultations</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Australia Regional Card with 3D Overlapping Continent Flag-Map */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative rounded-3xl bg-[var(--vortex-card)] border border-[var(--vortex-border)] hover:border-[#3B82F6]/60 transition-all duration-500 shadow-xl shadow-black/5 dark:shadow-black/30 p-7 sm:p-8 lg:p-10 flex flex-col justify-between overflow-visible group min-h-[440px] sm:min-h-[460px]"
          >
            {/* Subtle card inner sheen */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/[0.04] to-transparent pointer-events-none" />

            {/* 3D Floating Overlapping Flag Map - Australia (Shifted further to the right) */}
            <div className="absolute -right-8 sm:-right-14 lg:-right-18 xl:-right-22 top-1/2 -translate-y-1/2 w-40 sm:w-58 md:w-70 lg:w-80 h-34 sm:h-50 md:h-58 lg:h-68 pointer-events-none z-30 group-hover:scale-105 group-hover:-translate-y-[53%] transition-transform duration-500 ease-out">
              {/* Atmospheric Backlight Glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/25 via-cyan-400/20 to-transparent blur-3xl rounded-full scale-90" />
              <div className="relative w-full h-full">
                <Image
                  src="/maps/Flag-map_of_Australia.svg"
                  alt="Australia Geographic Flag Map"
                  fill
                  className="object-contain filter drop-shadow-[0_18px_30px_rgba(0,0,0,0.35)] dark:drop-shadow-[0_22px_45px_rgba(0,0,0,0.8)] mt-4"
                  sizes="(max-width: 640px) 160px, (max-width: 1024px) 250px, 300px"
                  priority
                />
              </div>
            </div>

            {/* Content Column */}
            <div className="relative z-10 flex flex-col justify-between h-full">
              <div>
                {/* Header: Title on Left, Timezone on Right */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-2.5">
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-2xl bg-[#3B82F6]/10 border border-[#3B82F6]/20 flex items-center justify-center text-[#3B82F6] shrink-0 shadow-xs">
                      <MapPin className="w-5 h-5 text-[#3B82F6]" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[var(--vortex-text)] tracking-tight">
                      Australia
                    </h3>
                  </div>
                  <span className="self-start sm:self-auto flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[var(--vortex-surface)]/90 backdrop-blur-md border border-[var(--vortex-border)] text-xs font-mono text-[var(--vortex-secondary-text)] shrink-0 shadow-xs">
                    <Clock className="w-3.5 h-3.5 text-[#3B82F6]" />
                    <span>AEST / AEDT (Melbourne, Sydney)</span>
                  </span>
                </div>

                {/* Subtitle in its own dedicated row - no clutter */}
                <p className="text-xs sm:text-sm font-semibold text-[#3B82F6] dark:text-blue-400 mb-4 tracking-wide">
                  Founders, SMEs &amp; Digital Agencies
                </p>

                {/* Description Paragraph */}
                <p className="text-xs sm:text-sm text-[var(--vortex-secondary-text)] leading-relaxed mb-6 font-normal max-w-[85%] sm:max-w-[78%] md:max-w-[74%]">
                  Partnering with Australian businesses seeking dependable, high-efficiency software development. Benefit from convenient timezone overlap, strict code quality standards, and transparent sprint reporting.
                </p>
              </div>

              {/* Checklist items */}
              <div className="space-y-3 pt-5 border-t border-[var(--vortex-border)] max-w-[85%] sm:max-w-[80%] md:max-w-[76%]">
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--vortex-secondary-text)]">
                  <CheckCircle2 className="w-4 h-4 text-[#3B82F6] shrink-0 mt-0.5" />
                  <span>Global payment standards (Stripe, AUD processing, GST ready)</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--vortex-secondary-text)]">
                  <CheckCircle2 className="w-4 h-4 text-[#3B82F6] shrink-0 mt-0.5" />
                  <span>Clean TypeScript codebases ready for internal handoff or scaling</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--vortex-secondary-text)]">
                  <CheckCircle2 className="w-4 h-4 text-[#3B82F6] shrink-0 mt-0.5" />
                  <span>Frictionless async communication via Slack, GitHub &amp; Video Briefs</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Status Banner Strip matching Reference Image 2 */}
        <div className="mt-10 p-5 sm:p-6 rounded-3xl bg-[var(--vortex-card)] border border-[var(--vortex-border)] flex flex-col sm:flex-row items-center justify-between gap-5 shadow-lg shadow-black/5 dark:shadow-black/30 hover:border-[#3B82F6]/40 transition-all duration-300">
          <div className="flex items-center gap-3.5 text-center sm:text-left">
            <span className="relative flex h-3.5 w-3.5 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 shadow-md shadow-emerald-500/50"></span>
            </span>
            <span className="text-xs sm:text-sm font-medium text-[var(--vortex-text)] leading-relaxed">
              Actively taking on new development projects for clients in Sri Lanka, Australia, and worldwide.
            </span>
          </div>

          <Button
            href="/contact-us"
            variant="primary"
            size="md"
            showArrow
            className="w-full sm:w-auto font-bold text-xs sm:text-sm shrink-0 whitespace-nowrap shadow-md shadow-blue-500/20"
          >
            Discuss Your Market
          </Button>
        </div>
      </div>
    </section>
  );
}
