"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";

interface BenefitItem {
  id: string;
  tabLabel: string;
  headline: string;
  description: string;
  bulletPoints: string[];
  image: string;
}

const BENEFIT_ITEMS: BenefitItem[] = [
  {
    id: "business-engineering",
    tabLabel: "Business-Focused Engineering",
    headline: "Engineering Directly Aligned with Commercial ROI",
    description:
      "We align software architecture directly with commercial metrics, ensuring every feature solves operational bottlenecks, accelerates conversion rates, or drives measurable revenue.",
    bulletPoints: [
      "Conversion-optimized checkout and workflow funnels",
      "Real-time telemetry and revenue attribution pipelines",
      "Zero fluff—100% focused on business velocity",
    ],
    image: "/Built Around Your Business/1.jpeg",
  },
  {
    id: "bespoke-architecture",
    tabLabel: "Bespoke Architecture",
    headline: "Custom Systems Tailored to Your Operational Flow",
    description:
      "Custom software engines designed precisely around your organization's unique logistics, customer journeys, and backend integrations—never forcing your business into rigid, cookie-cutter SaaS limitations.",
    bulletPoints: [
      "Tailored microservices & relational data models",
      "Proprietary algorithmic business logic engines",
      "Seamless integration with existing enterprise legacy APIs",
    ],
    image: "/Built Around Your Business/2.jpg",
  },
  {
    id: "type-safe-stack",
    tabLabel: "Modern Type-Safe Stack",
    headline: "Zero-Latency Performance with End-to-End Safety",
    description:
      "Engineered with Next.js 16, React 19, TypeScript, and Tailwind CSS. We enforce strict compile-time type safety and edge caching for sub-100ms response times and smooth 60fps interactivity.",
    bulletPoints: [
      "Sub-100ms edge compute and distributed CDN response",
      "100% strict TypeScript coverage with zero runtime crashes",
      "Turbopack-accelerated pipelines and tree-shaken bundles",
    ],
    image: "/Built Around Your Business/3.jpeg",
  },
  {
    id: "cross-platform",
    tabLabel: "Responsive Cross-Platform",
    headline: "Flawless Execution Across Desktop, Tablet & Mobile",
    description:
      "Pixel-perfect responsiveness built with Flutter, Next.js, and PWA capabilities. Rigorously tested across high-density desktop monitors, warehouse touch tablets, and iOS/Android handheld devices.",
    bulletPoints: [
      "Universal design token system across web and native apps",
      "Fluid 120Hz gesture interaction and tactile feedback",
      "Offline-first architecture with resilient background sync",
    ],
    image: "/Built Around Your Business/4.jpg",
  },
  {
    id: "direct-engineer",
    tabLabel: "Direct Engineer Access",
    headline: "Senior Technical Leadership Without Middle Layers",
    description:
      "Collaborate directly with senior full-stack architects and lead designers. Zero account manager telephone games—ensuring transparent code reviews, rapid bi-weekly sprints, and immediate technical alignment.",
    bulletPoints: [
      "Dedicated Slack / Discord channel with lead developers",
      "Weekly live staging demos and GitHub PR transparency",
      "Rapid sprint pivots without bureaucratic agency lag",
    ],
    image: "/Built Around Your Business/5.png",
  },
  {
    id: "continuous-sla",
    tabLabel: "Continuous Maintenance & SLA",
    headline: "Enterprise Reliability with Guaranteed 99.98% Uptime",
    description:
      "Proactive automated monitoring, zero-downtime rolling deployments, automated security vulnerability scans, and guaranteed response SLAs as your application scales regionally.",
    bulletPoints: [
      "24/7 automated synthetic health monitors & error alerts",
      "Zero-downtime rolling canary deployments",
      "Guaranteed < 1-hour response SLA for critical workflows",
    ],
    image: "/Built Around Your Business/6.webp",
  },
];

export function InteractiveBenefitsShowcase() {
  const [activeIdx, setActiveIdx] = useState(0);
  const activeItem = BENEFIT_ITEMS[activeIdx];

  return (
    <div className="w-full">
      {/* Mobile Tab Selector (Horizontal Scrollable Pills) */}
      <div className="flex lg:hidden overflow-x-auto pb-4 gap-2 mb-8 no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
        {BENEFIT_ITEMS.map((item, idx) => {
          const isActive = idx === activeIdx;
          return (
            <button
              key={item.id}
              onClick={() => setActiveIdx(idx)}
              className={`px-4 py-2.5 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-200 border ${
                isActive
                  ? "bg-[#3B82F6] text-white border-[#3B82F6] shadow-md shadow-blue-500/20"
                  : "bg-[var(--vortex-card)] text-[var(--vortex-secondary-text)] border-[var(--vortex-border)] hover:border-[#3B82F6]/40"
              }`}
            >
              {item.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Main Split Layout: Left Option Menu + Right Dynamic Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        {/* LEFT COLUMN: Vertical Option Tabs with Clean Dividers */}
        <div className="hidden lg:flex lg:col-span-4 xl:col-span-4 flex-col border-t border-[var(--vortex-border)]">
          {BENEFIT_ITEMS.map((item, idx) => {
            const isActive = idx === activeIdx;

            return (
              <button
                key={item.id}
                onClick={() => setActiveIdx(idx)}
                className="group relative text-left py-6 xl:py-7 border-b border-[var(--vortex-border)] transition-all duration-300 focus:outline-none"
              >
                {/* Active Indicator Accent Bar on the Bottom Border */}
                {isActive && (
                  <motion.div
                    layoutId="activeTabUnderline"
                    className="absolute bottom-[-1.5px] left-0 right-0 h-[3px] bg-[#3B82F6] z-10 rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}

                {/* Option Title */}
                <div className="flex items-center justify-between">
                  <h3
                    className={`text-xl xl:text-2xl font-black tracking-tight transition-colors duration-200 leading-snug ${
                      isActive
                        ? "text-[#3B82F6]"
                        : "text-[var(--vortex-muted)] dark:text-zinc-500 group-hover:text-[var(--vortex-text)]"
                    }`}
                  >
                    {item.tabLabel}
                  </h3>
                  <ArrowRight
                    className={`w-5 h-5 transition-transform duration-200 ${
                      isActive
                        ? "text-[#3B82F6] translate-x-1"
                        : "text-transparent group-hover:text-[var(--vortex-muted)]"
                    }`}
                  />
                </div>
              </button>
            );
          })}
        </div>

        {/* RIGHT COLUMN: Dynamic Content (Headline, Description, Badges & Pure Clean Image Only) */}
        <div className="lg:col-span-8 xl:col-span-8 w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeItem.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="flex flex-col"
            >
              {/* Bold Headline */}
              <h3 className="text-2xl sm:text-3xl xl:text-4xl font-black text-[var(--vortex-text)] tracking-tight leading-tight mb-4">
                {activeItem.headline}
              </h3>

              {/* Paragraph Description */}
              <p className="text-sm sm:text-base text-[var(--vortex-secondary-text)] leading-relaxed max-w-3xl mb-6">
                {activeItem.description}
              </p>

              {/* Feature Highlights Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                {activeItem.bulletPoints.map((point, pIdx) => (
                  <div
                    key={pIdx}
                    className="flex items-start gap-2.5 p-3 rounded-xl bg-[var(--vortex-card)] border border-[var(--vortex-border)]"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#3B82F6] shrink-0 mt-0.5" />
                    <span className="text-xs font-medium text-[var(--vortex-text)] leading-snug">
                      {point}
                    </span>
                  </div>
                ))}
              </div>

              {/* PURE IMAGE CONTAINER: Compact, balanced height */}
              <div className="relative w-full h-[240px] sm:h-[300px] lg:h-[330px] xl:h-[350px] rounded-2xl sm:rounded-3xl overflow-hidden border border-[var(--vortex-border)] bg-[var(--vortex-card)] shadow-lg">
                <Image
                  src={activeItem.image}
                  alt={activeItem.headline}
                  fill
                  sizes="(max-width: 1024px) 100vw, 850px"
                  className="object-cover object-top"
                  priority
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
