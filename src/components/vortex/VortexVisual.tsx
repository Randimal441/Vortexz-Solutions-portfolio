"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck, Zap } from "lucide-react";

export function VortexVisual() {
  return (
    <div className="relative w-full max-w-[580px] aspect-square mx-auto flex items-center justify-center select-none">
      {/* Background ambient radial glow */}
      <div className="absolute inset-0 bg-radial from-[#3B82F6]/20 via-blue-900/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* SVG Canvas for Orbital Tracks */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 500 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="vortexTrackGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.5" />
            <stop offset="50%" stopColor="#1E293B" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#00D2FF" stopOpacity="0.3" />
          </linearGradient>
        </defs>

        <circle
          cx="250"
          cy="250"
          r="235"
          stroke="currentColor"
          className="text-[var(--vortex-border)]"
          strokeWidth="1"
          strokeDasharray="4 8"
          opacity="0.4"
        />
        <circle
          cx="250"
          cy="250"
          r="190"
          stroke="currentColor"
          className="text-[var(--vortex-border)]"
          strokeWidth="1"
          strokeDasharray="2 6"
          opacity="0.5"
        />
        <circle
          cx="250"
          cy="250"
          r="140"
          stroke="url(#vortexTrackGrad)"
          strokeWidth="1.2"
          opacity="0.7"
        />
      </svg>

      {/* Rotating Outer Orbital Ring 1 */}
      <motion.div
        className="absolute inset-2 sm:inset-4 rounded-full border border-dashed border-[#3B82F6]/25 pointer-events-none"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#00D2FF] shadow-[0_0_12px_#00D2FF]" />
        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#3B82F6]" />
      </motion.div>

      {/* Rotating Orbital Ring 2 */}
      <motion.div
        className="absolute inset-10 sm:inset-14 rounded-[45%] border border-[#00D2FF]/20 pointer-events-none"
        animate={{ rotate: -360 }}
        transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute top-1/4 -left-1 w-2.5 h-2.5 rounded-full bg-[#3B82F6] shadow-[0_0_10px_#3B82F6]" />
      </motion.div>

      {/* Centerpiece: High-Impact Generated Hero Ecosystem Visual */}
      <div className="relative z-10 w-[84%] aspect-[4/3] rounded-2xl overflow-hidden border border-[var(--vortex-border)] bg-[var(--vortex-card)] shadow-2xl shadow-blue-500/10 group">
        <Image
          src="/brand/hero-ecosystem.png"
          alt="Vortexz Solutions Digital Architecture Ecosystem"
          fill
          sizes="(max-width: 768px) 90vw, 480px"
          className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
          priority
        />

        {/* Ambient Glass Highlight Top */}
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--vortex-bg)]/80 via-transparent to-white/5 pointer-events-none" />

        {/* Floating Live Indicator Bar */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between px-3 py-2 rounded-xl bg-[var(--vortex-card)]/90 backdrop-blur-md border border-[var(--vortex-border)] text-[11px] font-mono text-[var(--vortex-text)] shadow-lg">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
            <span className="font-semibold">Next.js 16 + React 19 Engine</span>
          </div>
          <span className="text-[10px] text-[#3B82F6] font-bold">60 FPS</span>
        </div>
      </div>

      {/* Floating Orbital Badge 1 (Top-Left) */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: [-4, 4, -4] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-2 left-2 z-20 flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[var(--vortex-card)]/95 backdrop-blur-xl border border-[var(--vortex-border)] shadow-xl text-xs font-bold text-[var(--vortex-text)]"
      >
        <div className="w-6 h-6 rounded-lg bg-blue-500/10 flex items-center justify-center text-[#3B82F6]">
          <Zap className="w-3.5 h-3.5" />
        </div>
        <span>Sub-100ms API</span>
      </motion.div>

      {/* Floating Orbital Badge 2 (Bottom-Right) */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: [4, -4, 4] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute -bottom-2 right-2 z-20 flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[var(--vortex-card)]/95 backdrop-blur-xl border border-[var(--vortex-border)] shadow-xl text-xs font-bold text-[var(--vortex-text)]"
      >
        <div className="w-6 h-6 rounded-lg bg-emerald-500/10 flex items-center justify-center text-[#10B981]">
          <ShieldCheck className="w-3.5 h-3.5" />
        </div>
        <span>99.98% SLA</span>
      </motion.div>
    </div>
  );
}
