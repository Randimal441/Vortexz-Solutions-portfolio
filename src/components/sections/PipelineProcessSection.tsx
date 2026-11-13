"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useInView, useSpring } from "framer-motion";
import { DEVELOPMENT_PROCESS } from "@/data/process";

// Micro-labels for connectors
const CONNECTOR_LABELS = [
  "Requirements & Discovery",
  "Tech Architecture & Scope",
  "UI/UX Design Tokens",
  "Production Codebase",
  "QA & Security Audits",
];

export function PipelineProcessSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-60px" });

  // Progressive Sequential Animation Stages
  // 1: Step 01 active
  // 1.5: Pipe 1 draws (01 -> 02)
  // 2: Arrowhead 1 pops in, Step 02 activates
  // 2.5: Pipe 2 draws (02 -> 03)
  // 3: Arrowhead 2 pops in, Step 03 activates
  // 3.5: Pipe 3 draws (03 -> 04)
  // 4: Arrowhead 3 pops in, Step 04 activates
  // 4.5: Pipe 4 draws (04 -> 05)
  // 5: Arrowhead 4 pops in, Step 05 activates
  // 5.5: Pipe 5 draws (05 -> 06)
  // 6: Arrowhead 5 pops in, Step 06 activates
  const [stage, setStage] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    setStage(1);

    const timers = [
      setTimeout(() => setStage(1.5), 250),
      setTimeout(() => setStage(2), 900),
      setTimeout(() => setStage(2.5), 1150),
      setTimeout(() => setStage(3), 1800),
      setTimeout(() => setStage(3.5), 2050),
      setTimeout(() => setStage(4), 2700),
      setTimeout(() => setStage(4.5), 2950),
      setTimeout(() => setStage(5), 3600),
      setTimeout(() => setStage(5.5), 3850),
      setTimeout(() => setStage(6), 4500),
    ];

    return () => timers.forEach(clearTimeout);
  }, [isInView]);

  const isPipe1Active = stage >= 1.5;
  const isStep2Active = stage >= 2;
  const isPipe2Active = stage >= 2.5;
  const isStep3Active = stage >= 3;
  const isPipe3Active = stage >= 3.5;
  const isStep4Active = stage >= 4;
  const isPipe4Active = stage >= 4.5;
  const isStep5Active = stage >= 5;
  const isPipe5Active = stage >= 5.5;
  const isStep6Active = stage >= 6;

  // Interactive Cursor-Following Fluid Smoke (Soft & Balanced Glow)
  const [mousePos, setMousePos] = useState({ x: 600, y: 250 });
  const smoothX = useSpring(600, { stiffness: 90, damping: 22 });
  const smoothY = useSpring(250, { stiffness: 90, damping: 22 });

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

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="py-20 sm:py-28 bg-[var(--vortex-bg)] relative overflow-hidden transition-colors select-none"
      id="process"
      aria-label="Development Process Pipeline"
    >
      {/* Interactive Cursor-Following Fluid Smoke */}
      <motion.div
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        className="absolute w-[520px] h-[520px] rounded-full pointer-events-none -z-0"
      >
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/16 via-cyan-400/14 to-indigo-500/16 dark:from-blue-600/14 dark:via-cyan-400/10 dark:to-indigo-600/14 blur-[130px]" />
      </motion.div>

      {/* Secondary Ambient Smoke Atmosphere */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-blue-600/08 via-cyan-500/05 to-indigo-600/08 blur-[180px] rounded-full pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 sm:mb-20 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[var(--vortex-text)] tracking-tight leading-[1.08]">
              From Idea to Launch in 6 Proven Steps
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[var(--vortex-secondary-text)] max-w-md leading-relaxed">
            Say goodbye to unpredictable timelines. Our streamlined engineering lifecycle makes it straightforward to architect, build, and deploy high-performance software with zero downtime.
          </p>
        </div>

        {/* DESKTOP PIPELINE: Strict One-by-One Sequential Flow with Pop-In Arrowheads (Never visible at start) */}
        <div className="hidden lg:block relative w-full pt-4 pb-8">
          <div className="relative w-full h-[380px]">
            {/* SVG Connector Tracks */}
            <svg
              viewBox="0 0 1200 380"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full overflow-visible"
            >
              {/* 01 -> 02: Loops DOWN (Starts at t=250ms, finishes at t=900ms) */}
              {isPipe1Active && (
                <g>
                  <motion.path
                    d="M 100 270 V 325 A 18 18 0 0 0 118 343 H 282 A 18 18 0 0 0 300 325 V 282"
                    stroke="#3B82F6"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.65, ease: "easeInOut" }}
                  />
                  <motion.text
                    x="200"
                    y="368"
                    textAnchor="middle"
                    className="fill-[#3B82F6] dark:fill-blue-400 font-mono text-[11px] font-semibold tracking-wide"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.95 }}
                    transition={{ duration: 0.35, delay: 0.2 }}
                  >
                    {CONNECTOR_LABELS[0]}
                  </motion.text>
                </g>
              )}
              {/* Arrowhead 1: Appears ONLY when Pipe 1 arrives at 02 */}
              {isStep2Active && (
                <motion.polygon
                  points="294,284 300,274 306,284"
                  fill="#3B82F6"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.22, ease: "backOut" }}
                  style={{ transformOrigin: "300px 279px" }}
                />
              )}

              {/* 02 -> 03: Loops UP (Starts at t=1150ms, finishes at t=1800ms) */}
              {isPipe2Active && (
                <g>
                  <motion.path
                    d="M 300 130 V 75 A 18 18 0 0 1 318 57 H 482 A 18 18 0 0 1 500 75 V 118"
                    stroke="#3B82F6"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.65, ease: "easeInOut" }}
                  />
                  <motion.text
                    x="400"
                    y="38"
                    textAnchor="middle"
                    className="fill-[#3B82F6] dark:fill-blue-400 font-mono text-[11px] font-semibold tracking-wide"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.95 }}
                    transition={{ duration: 0.35, delay: 0.2 }}
                  >
                    {CONNECTOR_LABELS[1]}
                  </motion.text>
                </g>
              )}
              {/* Arrowhead 2: Appears ONLY when Pipe 2 arrives at 03 */}
              {isStep3Active && (
                <motion.polygon
                  points="494,116 500,126 506,116"
                  fill="#3B82F6"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.22, ease: "backOut" }}
                  style={{ transformOrigin: "500px 121px" }}
                />
              )}

              {/* 03 -> 04: Loops DOWN (Starts at t=2050ms, finishes at t=2700ms) */}
              {isPipe3Active && (
                <g>
                  <motion.path
                    d="M 500 270 V 325 A 18 18 0 0 0 518 343 H 682 A 18 18 0 0 0 700 325 V 282"
                    stroke="#3B82F6"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.65, ease: "easeInOut" }}
                  />
                  <motion.text
                    x="600"
                    y="368"
                    textAnchor="middle"
                    className="fill-[#3B82F6] dark:fill-blue-400 font-mono text-[11px] font-semibold tracking-wide"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.95 }}
                    transition={{ duration: 0.35, delay: 0.2 }}
                  >
                    {CONNECTOR_LABELS[2]}
                  </motion.text>
                </g>
              )}
              {/* Arrowhead 3: Appears ONLY when Pipe 3 arrives at 04 */}
              {isStep4Active && (
                <motion.polygon
                  points="694,284 700,274 706,284"
                  fill="#3B82F6"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.22, ease: "backOut" }}
                  style={{ transformOrigin: "700px 279px" }}
                />
              )}

              {/* 04 -> 05: Loops UP (Starts at t=2950ms, finishes at t=3600ms) */}
              {isPipe4Active && (
                <g>
                  <motion.path
                    d="M 700 130 V 75 A 18 18 0 0 1 718 57 H 882 A 18 18 0 0 1 900 75 V 118"
                    stroke="#3B82F6"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.65, ease: "easeInOut" }}
                  />
                  <motion.text
                    x="800"
                    y="38"
                    textAnchor="middle"
                    className="fill-[#3B82F6] dark:fill-blue-400 font-mono text-[11px] font-semibold tracking-wide"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.95 }}
                    transition={{ duration: 0.35, delay: 0.2 }}
                  >
                    {CONNECTOR_LABELS[3]}
                  </motion.text>
                </g>
              )}
              {/* Arrowhead 4: Appears ONLY when Pipe 4 arrives at 05 */}
              {isStep5Active && (
                <motion.polygon
                  points="894,116 900,126 906,116"
                  fill="#3B82F6"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.22, ease: "backOut" }}
                  style={{ transformOrigin: "900px 121px" }}
                />
              )}

              {/* 05 -> 06: Loops DOWN (Starts at t=3850ms, finishes at t=4500ms) */}
              {isPipe5Active && (
                <g>
                  <motion.path
                    d="M 900 270 V 325 A 18 18 0 0 0 918 343 H 1082 A 18 18 0 0 0 1100 325 V 282"
                    stroke="#3B82F6"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.65, ease: "easeInOut" }}
                  />
                  <motion.text
                    x="1000"
                    y="368"
                    textAnchor="middle"
                    className="fill-[#3B82F6] dark:fill-blue-400 font-mono text-[11px] font-semibold tracking-wide"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.95 }}
                    transition={{ duration: 0.35, delay: 0.2 }}
                  >
                    {CONNECTOR_LABELS[4]}
                  </motion.text>
                </g>
              )}
              {/* Arrowhead 5: Appears ONLY when Pipe 5 arrives at 06 */}
              {isStep6Active && (
                <motion.polygon
                  points="1094,284 1100,274 1106,284"
                  fill="#3B82F6"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.22, ease: "backOut" }}
                  style={{ transformOrigin: "1100px 279px" }}
                />
              )}
            </svg>

            {/* 6 Step Nodes (Sequentially Lights Up One-by-One Exactly as each Arrow Arrives) */}
            <div className="absolute inset-0 grid grid-cols-6 pointer-events-none items-center">
              {DEVELOPMENT_PROCESS.map((step, idx) => {
                const isStepActive = stage >= idx + 1;

                return (
                  <div key={step.step} className="flex flex-col items-center justify-center text-center px-3">
                    {/* Big Bold Step Number: Starts muted at 20% opacity, pops into full vibrant 100% white/blue on arrival */}
                    <motion.div
                      animate={
                        isStepActive
                          ? {
                              scale: [0.85, 1.15, 1],
                              opacity: 1,
                              color: ["#3B82F6", "#00D2FF", "currentColor"],
                            }
                          : { scale: 0.85, opacity: 0.2 }
                      }
                      transition={{ duration: 0.45 }}
                      className="mb-1.5"
                    >
                      <span className="font-sans text-5xl xl:text-6xl font-black text-[var(--vortex-text)] tracking-tight inline-block hover:scale-105 transition-transform cursor-default">
                        {step.step}
                      </span>
                    </motion.div>

                    {/* Step Title & Description: Reveals on Arrival */}
                    <motion.div
                      animate={isStepActive ? { y: 0, opacity: 1 } : { y: 6, opacity: 0.2 }}
                      transition={{ duration: 0.4 }}
                      className="max-w-[180px]"
                    >
                      <h4 className="text-base xl:text-lg font-black text-[var(--vortex-text)] tracking-tight leading-snug mb-1">
                        {step.title}
                      </h4>
                      <p className="text-[11px] sm:text-xs text-[var(--vortex-secondary-text)] leading-relaxed">
                        {step.shortDescription}
                      </p>
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* MOBILE & TABLET: Vertical Interactive Pipeline */}
        <div className="block lg:hidden relative pl-6 sm:pl-8 space-y-9 border-l-2 border-blue-500/30 ml-4 sm:ml-6 mt-6">
          {DEVELOPMENT_PROCESS.map((step, idx) => {
            const stepDelay = idx * 0.25;

            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: -18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: stepDelay }}
                className="relative pl-6 sm:pl-8 group"
              >
                {/* Node Indicator on the timeline */}
                <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-5 h-5 rounded-full bg-[#3B82F6] border-4 border-[var(--vortex-bg)] shadow-md group-hover:scale-125 transition-transform" />

                <div className="flex items-baseline gap-3 mb-1.5">
                  <span className="text-4xl font-black text-[#3B82F6] tracking-tight">
                    {step.step}
                  </span>
                  <h4 className="text-lg font-bold text-[var(--vortex-text)] tracking-tight">
                    {step.title}
                  </h4>
                </div>

                <p className="text-xs sm:text-sm text-[var(--vortex-secondary-text)] leading-relaxed mb-3">
                  {step.shortDescription}
                </p>

                {/* Deliverable Badge */}
                <div className="flex flex-wrap gap-1.5">
                  {step.deliverables.map((del, dIdx) => (
                    <span
                      key={dIdx}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-[var(--vortex-surface)] border border-[var(--vortex-border)] text-[var(--vortex-muted)]"
                    >
                      {del}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
