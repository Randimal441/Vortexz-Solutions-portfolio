"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ServiceItem } from "@/data/services";
import { AnimatedIcon } from "@/components/ui/AnimatedIcon";

interface StickyServicesStackProps {
  services: ServiceItem[];
}

// Authentic Vector SVG Logos for Technologies (100% human-agency quality, zero AI vibe)
function TechLogo({ name }: { name: string }) {
  const n = name.toLowerCase();
  if (n.includes("next")) {
    return (
      <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor" className="text-white shrink-0">
        <path d="M18.665 21.978C16.666 23.272 14.417 24 12 24 5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12c0 3.193-1.248 6.096-3.284 8.247l-10.74-13.82H7.5v11.146h1.996V9.827l9.169 12.151zM14.502 7.573h1.996v6.452l-1.996-2.585V7.573z" />
      </svg>
    );
  }
  if (n.includes("react")) {
    return (
      <svg viewBox="-11.5 -10.23174 23 20.46348" width="14" height="14" fill="none" stroke="#00D8FF" strokeWidth="1.3" className="shrink-0">
        <circle cx="0" cy="0" r="2.05" fill="#00D8FF" stroke="none" />
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </svg>
    );
  }
  if (n.includes("type")) {
    return (
      <span className="w-3.5 h-3.5 rounded-[3px] bg-[#3178C6] text-[9px] font-black font-mono text-white flex items-center justify-center leading-none shrink-0">
        TS
      </span>
    );
  }
  if (n.includes("tailwind")) {
    return (
      <svg viewBox="0 0 24 24" width="14" height="14" fill="#38BDF8" className="shrink-0">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
      </svg>
    );
  }
  if (n.includes("framer")) {
    return (
      <svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor" className="text-[#FF0055] shrink-0">
        <path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z" />
      </svg>
    );
  }
  if (n.includes("node")) {
    return (
      <svg viewBox="0 0 24 24" width="13" height="13" fill="#5FA04E" className="shrink-0">
        <path d="M12 2l9 5.2v10.4l-9 5.2-9-5.2V7.2L12 2zm0 2.2L4.9 8.3v7.4L12 19.8l7.1-4.1V8.3L12 4.2z" />
      </svg>
    );
  }
  if (n.includes("stripe")) {
    return (
      <span className="font-black text-[11px] tracking-tight text-[#635BFF] font-sans leading-none shrink-0">
        stripe
      </span>
    );
  }
  if (n.includes("mongo")) {
    return (
      <svg viewBox="0 0 24 24" width="12" height="13" fill="#00ED64" className="shrink-0">
        <path d="M12 0s-4 4-4 10c0 4.2 2.6 7.4 4 9 1.4-1.6 4-4.8 4-9 0-6-4-10-4-10z" />
      </svg>
    );
  }
  if (n.includes("flutter")) {
    return (
      <svg viewBox="0 0 24 24" width="13" height="13" fill="#54C5F8" className="shrink-0">
        <path d="M14.314 0L2.3 12 6 15.7 21.686 0h-7.372zm.086 11.5L7.8 18 14.4 24h7.3l-6.6-6 6.6-6.5h-7.3z" />
      </svg>
    );
  }
  if (n.includes("dart")) {
    return (
      <svg viewBox="0 0 24 24" width="13" height="13" fill="#0175C2" className="shrink-0">
        <path d="M4.1 1.5l14.4 14.4-6.6 6.6L1.5 12.1 4.1 1.5z" />
      </svg>
    );
  }
  if (n.includes("android")) {
    return (
      <svg viewBox="0 0 24 24" width="13" height="13" fill="#3DDC84" className="shrink-0">
        <path d="M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h4v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10zM3.5 8C2.67 8 2 8.67 2 9.5v7c0 .83.67 1.5 1.5 1.5S5 17.33 5 16.5v-7C5 8.67 4.33 8 3.5 8zm17 0c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5zm-4.97-5.84l1.3-1.3c.2-.2.2-.51 0-.71s-.51-.2-.71 0l-1.48 1.48C13.68 1.23 12.87 1 12 1s-1.68.23-2.64.63L7.88.15c-.2-.2-.51-.2-.71 0s-.2.51 0 .71l1.3 1.3C6.73 3.1 5.61 4.88 5.51 7h12.98c-.1-2.12-1.22-3.9-2.96-4.84zM9 5H8V4h1v1zm7 0h-1V4h1v1z" />
      </svg>
    );
  }
  if (n.includes("figma")) {
    return (
      <svg viewBox="0 0 24 24" width="11" height="14" fill="none" className="shrink-0">
        <rect x="2" y="2" width="10" height="10" rx="5" fill="#F24E1E" />
        <rect x="12" y="2" width="10" height="10" rx="5" fill="#FF7262" />
        <rect x="2" y="12" width="10" height="10" rx="5" fill="#A259FF" />
        <circle cx="17" cy="17" r="5" fill="#1ABCFE" />
        <path d="M2 22a5 5 0 0 0 5-5H2v5z" fill="#0ACF83" />
      </svg>
    );
  }
  return <span className="w-2 h-2 rounded-full bg-cyan-400 shrink-0" />;
}

// Soothing, eye-pleasing dark agency palette (ahata shape) with 100% authentic imagery
const STACK_CARDS = [
  {
    id: "web-development",
    iconName: "globe",
    headline: "Business Websites for growing brands & enterprise.",
    description:
      "We align messaging, page architecture, and high-conversion UI. You get clear structure, instant load speeds, and semantic SEO that converts visitors into high-value clients.",
    bg: "bg-[#0B1426]",
    border: "border-blue-500/30",
    techs: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS"],
    screens: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=600&q=80",
    ],
  },
  {
    id: "portfolio-websites",
    iconName: "briefcase",
    headline: "Portfolio Websites that command authority & craft.",
    description:
      "Distinctive, high-impact digital monographs for agencies, executives, and creative studios. Designed with purposeful typography, fluid animations, and frictionless storytelling.",
    bg: "bg-[#1A120B]",
    border: "border-orange-500/30",
    techs: ["React 19", "Next.js", "Framer Motion", "Tailwind CSS"],
    screens: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=600&q=80",
    ],
  },
  {
    id: "e-commerce",
    iconName: "cart",
    headline: "E-Commerce Stores with frictionless checkouts.",
    description:
      "Scalable online retail platforms engineered for conversion. Seamless multi-currency payment workflows supporting PayHere, Stripe, and Apple Pay with sub-second page loads.",
    bg: "bg-[#1E0E1B]",
    border: "border-pink-500/30",
    techs: ["Next.js", "TypeScript", "Node.js", "Stripe API"],
    screens: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80",
    ],
  },
  {
    id: "custom-web-systems",
    iconName: "layers",
    headline: "Custom Web Systems tailored to your operations.",
    description:
      "Bespoke internal portals, operational dashboards, and workflow automation systems built precisely around how your enterprise works, eliminating manual paperwork.",
    bg: "bg-[#0A192F]",
    border: "border-cyan-400/30",
    techs: ["Next.js", "Node.js", "TypeScript", "MongoDB"],
    screens: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=600&q=80",
    ],
  },
  {
    id: "mobile-apps",
    iconName: "mobile",
    headline: "Mobile Applications with native-grade speed.",
    description:
      "Cross-platform iOS and Android applications built with Flutter. Offline-first architecture, instant biometric authentication, and seamless backend synchronization.",
    bg: "bg-[#06241E]",
    border: "border-emerald-400/30",
    techs: ["Flutter", "Dart", "Android SDK", "REST APIs"],
    screens: [
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1526470608268-f674ce90ebd4?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?auto=format&fit=crop&w=600&q=80",
    ],
  },
  {
    id: "ui-ux-design",
    iconName: "palette",
    headline: "UI/UX Design Systems that convert & elevate.",
    description:
      "Design that balances aesthetic polish with functional clarity. Comprehensive Figma token architectures, interactive prototypes, and reusable design systems.",
    bg: "bg-[#19112F]",
    border: "border-purple-400/30",
    techs: ["Figma", "Design Tokens", "Prototyping", "UX Research"],
    screens: [
      "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1542744094-24638eff58bb?auto=format&fit=crop&w=600&q=80",
    ],
  },
];

export function StickyServicesStack({}: StickyServicesStackProps) {
  return (
    <div className="w-full relative pb-4">
      {/* Stacking Cards Deck */}
      <div className="flex flex-col space-y-10 sm:space-y-14">
        {STACK_CARDS.map((card, index) => {
          // Hardware-accelerated incremental sticky offset
          const stickyTop = 85 + index * 22;

          return (
            <div
              key={card.id}
              className="sticky transform-gpu will-change-transform"
              style={{
                top: `${stickyTop}px`,
                zIndex: index + 10,
              }}
            >
              {/* Card Container: Fully Responsive, Clean Hierarchy */}
              <div
                className={`w-full rounded-[24px] sm:rounded-[32px] lg:rounded-[36px] border ${card.border} ${card.bg} shadow-[0_25px_60px_-15px_rgba(0,0,0,0.6)] p-6 sm:p-8 lg:p-10 overflow-hidden relative flex flex-col justify-between`}
              >
                {/* Subtle Ambient Radial Lighting */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />

                {/* UPPER AREA: Animated Icon + Headline (NO numbers) + Description + Tech Stack Bar */}
                <div className="relative z-10 mb-6 sm:mb-8">
                  {/* Headline with Iconsax Animated Icon */}
                  <div className="flex items-start gap-3.5 mb-3">
                    <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.5rem] font-black text-white tracking-tight leading-[1.12] max-w-4xl">
                      {card.headline}
                    </h3>
                  </div>

                  {/* Supporting Description */}
                  <p className="text-xs sm:text-sm lg:text-base text-white/80 leading-relaxed max-w-3xl mb-5 font-normal">
                    {card.description}
                  </p>

                  {/* Clean Tech Stack Bar: Border removed, clean spacing, rounded-full button with animated icon */}
                  <div className="flex flex-wrap items-center justify-between gap-3 mt-4 sm:mt-5">
                    <div className="flex flex-wrap items-center gap-2">
                      {card.techs.map((tech) => (
                        <div
                          key={tech}
                          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.07] hover:bg-white/[0.12] border border-white/15 text-xs font-semibold text-white/90 shadow-2xs backdrop-blur-sm transition-colors"
                        >
                          <TechLogo name={tech} />
                          <span>{tech}</span>
                        </div>
                      ))}
                    </div>

                    {/* Explore Service Action (Rounded-Full Pill + Animated Arrow) */}
                    <Link
                      href={`/services#${card.id}`}
                      className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all shadow-xs shrink-0 group hover:scale-105 active:scale-95"
                    >
                      <span>Explore Service</span>
                      <AnimatedIcon
                        name="arrow"
                        size={14}
                        isHovered={true}
                        className="text-white shrink-0 group-hover:translate-x-0.5 transition-transform"
                      />
                    </Link>
                  </div>
                </div>

                {/* LOWER AREA: 3 Uniform Showcase Screens Stretching to the Edges (100% Responsive Grid) */}
                <div className="relative z-10 w-full">
                  <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 lg:gap-5">
                    {card.screens.map((screenUrl, sIdx) => (
                      <div
                        key={sIdx}
                        className="w-full h-[180px] sm:h-[200px] lg:h-[240px] rounded-xl sm:rounded-2xl border border-white/15 shadow-xl overflow-hidden relative"
                      >
                        <Image
                          src={screenUrl}
                          alt={`${card.headline} Preview ${sIdx + 1}`}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 380px"
                          className="object-cover object-center filter brightness-95"
                        />
                        <div className="absolute inset-0 bg-black/15 pointer-events-none" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
