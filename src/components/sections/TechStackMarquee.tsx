"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, useSpring } from "framer-motion";

// Actual brand logos extracted directly from Vampior
const VAMPIOR_TECH_LOGOS = [
  { name: "React", logo: "/tech/react.webp" },
  { name: "Node.js", logo: "/tech/nodeJs.webp" },
  { name: "Vue.js", logo: "/tech/vueJs.webp" },
  { name: "Angular", logo: "/tech/angular.webp" },
  { name: "Laravel", logo: "/tech/laravel.webp" },
  { name: "Shopify", logo: "/tech/shopify.webp" },
  { name: "WordPress", logo: "/tech/wordpress.webp" },
  { name: "Figma", logo: "/tech/figma.webp" },
  { name: "Google Cloud", logo: "/tech/googleCloud.webp" },
  { name: "Meta", logo: "/tech/meta.webp" },
];

export function TechStackMarquee() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Interactive Cursor-Following Fluid Smoke (Matching PipelineProcessSection)
  const [mousePos, setMousePos] = useState({ x: 600, y: 180 });
  const smoothX = useSpring(600, { stiffness: 90, damping: 22 });
  const smoothY = useSpring(180, { stiffness: 90, damping: 22 });

  useEffect(() => {
    smoothX.set(mousePos.x);
    smoothY.set(mousePos.y);
  }, [mousePos, smoothX, smoothY]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  // First ribbon (rotated -4deg, scrolling right)
  const ribbon1 = [...VAMPIOR_TECH_LOGOS, ...VAMPIOR_TECH_LOGOS, ...VAMPIOR_TECH_LOGOS];
  // Second ribbon reversed (rotated +4deg, scrolling left)
  const ribbon2 = [...VAMPIOR_TECH_LOGOS]
    .reverse()
    .concat([...VAMPIOR_TECH_LOGOS].reverse())
    .concat([...VAMPIOR_TECH_LOGOS].reverse());

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative py-12 sm:py-16 overflow-hidden select-none bg-transparent transition-colors"
      aria-label="Technologies and Engineering Stack"
    >
      {/* Interactive Cursor-Following Fluid Smoke (Soft & Balanced Glow matching Section 5) */}
      <motion.div
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        className="absolute w-[500px] h-[500px] rounded-full pointer-events-none -z-0"
      >
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/16 via-cyan-400/14 to-indigo-500/16 dark:from-blue-600/14 dark:via-cyan-400/10 dark:to-indigo-600/14 blur-[130px]" />
      </motion.div>

      {/* Dual Angled Crossing Infinite Ribbons (X-Formation) with Tech Logos */}
      <div className="relative py-12 sm:py-24 overflow-hidden w-full flex flex-col justify-center items-center z-10">
        {/* Ribbon 1: Angled -4deg (scrolling right) */}
        <div className="w-[125%] -ml-[12.5%] rotate-[-3.5deg] sm:rotate-[-4deg] py-4 sm:py-5 bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 dark:from-blue-950 dark:via-blue-800 dark:to-cyan-800 text-white shadow-2xl shadow-blue-900/20 z-10 border-y border-white/25 dark:border-white/10 backdrop-blur-md transition-transform duration-300">
          <div className="animate-marquee-right flex items-center gap-8 sm:gap-12">
            {ribbon1.map((item, idx) => (
              <div
                key={`r1-${item.name}-${idx}`}
                className="flex items-center justify-center w-28 h-14 sm:w-32 sm:h-16 px-4 py-2.5 rounded-2xl bg-white/95 dark:bg-white/[0.96] border border-white/60 dark:border-white/30 shadow-md shadow-blue-950/20 shrink-0 hover:scale-110 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 cursor-pointer"
                title={item.name}
              >
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image
                    src={item.logo}
                    alt={item.name}
                    fill
                    className="object-contain drop-shadow-xs"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Ribbon 2: Angled +4deg (scrolling left), intersecting in X formation */}
        <div className="w-[125%] -ml-[12.5%] rotate-[3.5deg] sm:rotate-[4deg] -mt-10 sm:-mt-12 py-4 sm:py-5 bg-white/90 dark:bg-slate-900/90 shadow-2xl z-20 border-y border-slate-200 dark:border-white/10 backdrop-blur-md transition-transform duration-300">
          <div className="animate-marquee-left flex items-center gap-8 sm:gap-12">
            {ribbon2.map((item, idx) => (
              <div
                key={`r2-${item.name}-${idx}`}
                className="flex items-center justify-center w-28 h-14 sm:w-32 sm:h-16 px-4 py-2.5 rounded-2xl bg-white/95 dark:bg-white/[0.96] border border-slate-200/80 dark:border-white/20 shadow-md shrink-0 hover:border-[#3B82F6] hover:scale-110 hover:shadow-lg hover:shadow-blue-500/15 transition-all duration-300 cursor-pointer"
                title={item.name}
              >
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image
                    src={item.logo}
                    alt={item.name}
                    fill
                    className="object-contain drop-shadow-xs"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
