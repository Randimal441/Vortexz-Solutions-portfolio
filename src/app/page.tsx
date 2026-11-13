"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { HeroVideoPlayer } from "@/components/vortex/HeroVideoPlayer";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { StickyServicesStack } from "@/components/sections/StickyServicesStack";
import { KineticProjectsShowcase } from "@/components/sections/KineticProjectsShowcase";
import { PipelineProcessSection } from "@/components/sections/PipelineProcessSection";
import { InteractiveBenefitsShowcase } from "@/components/sections/InteractiveBenefitsShowcase";
import { TechStackMarquee } from "@/components/sections/TechStackMarquee";
import { RegionalDelivery } from "@/components/sections/RegionalDelivery";
import { CTASection } from "@/components/sections/CTASection";
import { SERVICES } from "@/data/services";

export default function HomePage() {
  const homeServices = SERVICES.filter((s) => s.featuredOnHome);

  return (
    <div className="flex flex-col w-full bg-[var(--vortex-bg)] text-[var(--vortex-text)] transition-colors">
      {/* SECTION 1: HERO (Compact, Balanced Height: Reduced Top & Bottom Padding) */}
      <section className="relative flex items-center pt-20 pb-10 sm:pt-24 sm:pb-12 lg:pt-24 lg:pb-14 overflow-hidden border-b border-[var(--vortex-border)]">
        {/* Ambient atmospheric background glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[1100px] h-[450px] bg-gradient-to-r from-blue-600/15 via-purple-600/10 to-indigo-600/15 blur-[160px] rounded-full pointer-events-none" />

        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-8">
            {/* Left Hero Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="w-full lg:w-[42%] xl:w-[38%] shrink-0 text-center lg:text-left z-20"
            >
              {/* Brand Tagline Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--badge-bg)] border border-[var(--badge-border)] text-xs font-bold tracking-widest text-[#3B82F6] uppercase mb-4 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#3B82F6] animate-pulse" />
                VORTEXZ SOLUTIONS • SRI LANKA (COLOMBO / KURUNEGALA)
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-[3.15rem] font-black text-[var(--vortex-text)] tracking-tight leading-[1.08] mb-4">
                Digital Solutions Built for Growing Businesses.
              </h1>

              {/* Supporting Text */}
              <p className="text-base sm:text-lg text-[var(--vortex-secondary-text)] leading-relaxed max-w-xl mx-auto lg:mx-0 mb-6 font-normal">
                We design and engineer bespoke web platforms, high-conversion e-commerce stores, custom operational software, and cross-platform mobile apps built to accelerate your commercial growth.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Button
                  href="/contact-us"
                  variant="primary"
                  size="lg"
                  showArrow
                  className="w-full sm:w-auto font-bold px-8 text-sm uppercase tracking-wider shadow-lg shadow-blue-500/20"
                >
                  Start a Project
                </Button>
                <Button
                  href="/projects"
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto font-bold px-8 text-sm"
                >
                  Explore Work
                </Button>
              </div>

              {/* Highlighted Response Time Badge */}
              <div className="mt-6 flex items-center justify-center lg:justify-start">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-xs font-semibold text-emerald-600 dark:text-emerald-400 shadow-2xs">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span>Typical response time is under 24 business hours.</span>
                </div>
              </div>
            </motion.div>

            {/* Right Hero Side: Massive Full-Scale Video (Bleeding & Cropped at the Right Screen Edge) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96, x: 50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
              className="w-full lg:w-[58%] xl:w-[62%] shrink-0 flex justify-start lg:-mr-16 xl:-mr-28 2xl:-mr-40"
            >
              <div className="w-full min-w-[320px] sm:min-w-[620px] md:min-w-[760px] lg:min-w-[920px] xl:min-w-[1100px] 2xl:min-w-[1240px]">
                <HeroVideoPlayer videoId="M576WGiDBdQ" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 2: WHAT WE ENGINEER (Sticky Stacking Cards on Scroll - Exactly like Reference Video) */}
      <section className="pt-2 pb-2 sm:pt-4 sm:pb-3 bg-[var(--vortex-bg)] relative overflow-visible" id="services">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="CAPABILITIES"
            title="What We Build"
            description="From high-conversion corporate web platforms to mission-critical operational portals and cross-platform mobile applications."
            align="center"
            className="mb-6 sm:mb-5"
          />

          {/* Sticky Stacking Cards on Scroll */}
          <StickyServicesStack services={homeServices} />

          <div className="text-center mt-2 mb-2">
            <Button
              href="/services"
              variant="outline"
              size="md"
              showArrow
              className="font-bold"
            >
              Explore Services
            </Button>
          </div>
        </div>
      </section>

      {/* SECTION 3: KINETIC PROJECTS SHOWCASE */}
      <KineticProjectsShowcase />

      {/* SECTION 4: ARCHITECTED AROUND YOUR BUSINESS (With Stat Counters + 3D Card Tilt) */}
      <section className="py-24 sm:py-10 bg-[var(--vortex-bg)] relative overflow-hidden" id="why-us">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="OUR COMMITMENT"
            title="Built Around Your Business"
            description="We prioritize technical excellence, practical software architecture, and honest partnerships over short-term trends."
            align="center"
            className="mb-14"
          />

          {/* Interactive Split Feature Showcase (Matching Reference Tabs + Dynamic Content) */}
          <InteractiveBenefitsShowcase />
        </div>
      </section>

      {/* SECTION 5: FROM IDEA TO LAUNCH (Animated Sequential Domino Pipeline - Matching Reference c6a10c04.png) */}
      <PipelineProcessSection />

      {/* SECTION 6: TECH STACK DUAL-ANGLED CROSSING MARQUEE (Vampior Logos) */}
      <TechStackMarquee />

      {/* SECTION 7: REGIONAL DELIVERY (Sri Lanka + Australia) */}
      <RegionalDelivery />

      {/* SECTION 8: REDESIGNED ANIMATED CTA SECTION */}
      <CTASection />
    </div>
  );
}
