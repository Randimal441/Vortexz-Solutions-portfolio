"use client";

import React from "react";
import { motion } from "framer-motion";
import { Globe, Layers, ShieldCheck, Smartphone, Cpu, Database } from "lucide-react";

export function VortexVisual() {
  return (
    <div className="relative w-full max-w-[540px] aspect-square mx-auto flex items-center justify-center select-none pointer-events-none">
      {/* Background ambient radial glow */}
      <div className="absolute inset-0 bg-radial from-[#3B82F6]/10 via-[#0D121A]/30 to-transparent rounded-full blur-3xl" />

      {/* SVG Canvas for Orbital Tracks & Vortex Concentric Geometry */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 500 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="vortexTrackGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#1E293B" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#60A5FA" stopOpacity="0.2" />
          </linearGradient>
          <linearGradient id="orbitAccent" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#60A5FA" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Outer Static Reference Grid Rings */}
        <circle
          cx="250"
          cy="250"
          r="230"
          stroke="#1E293B"
          strokeWidth="1"
          strokeDasharray="4 8"
          opacity="0.4"
        />
        <circle
          cx="250"
          cy="250"
          r="190"
          stroke="#1E293B"
          strokeWidth="1"
          strokeDasharray="2 6"
          opacity="0.6"
        />
        <circle
          cx="250"
          cy="250"
          r="140"
          stroke="url(#vortexTrackGrad)"
          strokeWidth="1.2"
          opacity="0.7"
        />
        <circle
          cx="250"
          cy="250"
          r="85"
          stroke="#1E293B"
          strokeWidth="1.5"
          opacity="0.8"
        />

        {/* Diagonal Crosshair Guidelines */}
        <line x1="120" y1="250" x2="380" y2="250" stroke="#1E293B" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.4" />
        <line x1="250" y1="120" x2="250" y2="380" stroke="#1E293B" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.4" />
      </svg>

      {/* Rotating Outer Ellipse 1 (Clockwise) */}
      <motion.div
        className="absolute inset-4 rounded-full border border-dashed border-[#3B82F6]/25"
        animate={{ rotate: 360 }}
        transition={{ duration: 55, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-[#60A5FA] shadow-[0_0_10px_#60A5FA]" />
        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#3B82F6]" />
      </motion.div>

      {/* Rotating Tilted Ellipse 2 (Counter-Clockwise) */}
      <motion.div
        className="absolute inset-14 rounded-[42%] border border-[#60A5FA]/20"
        style={{ transform: "rotate(-25deg)" }}
        animate={{ rotate: [-25, -385] }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute top-1/4 -left-1 w-2 h-2 rounded-full bg-[#3B82F6] shadow-[0_0_8px_#3B82F6]" />
        <div className="absolute bottom-1/4 -right-1 w-2 h-2 rounded-full bg-[#60A5FA]" />
      </motion.div>

      {/* Inner Fast Orbit (Clockwise) */}
      <motion.div
        className="absolute inset-28 rounded-full border border-[#1E293B] border-t-[#3B82F6]/70 border-r-[#60A5FA]/40"
        animate={{ rotate: 360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#60A5FA]" />
      </motion.div>

      {/* Central Core Structure */}
      <div className="relative z-10 w-24 h-24 rounded-2xl bg-[#0D121A] border border-[#1E293B] shadow-2xl shadow-black/80 flex flex-col items-center justify-center">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-[#3B82F6]/10 to-transparent" />
        <motion.div
          className="w-10 h-10 rounded-xl bg-[#121923] border border-[#3B82F6]/40 flex items-center justify-center text-[#60A5FA] shadow-[0_0_15px_rgba(59,130,246,0.3)]"
          animate={{ scale: [1, 1.06, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <Cpu className="w-5 h-5 text-[#3B82F6]" />
        </motion.div>
        <span className="text-[9px] font-mono tracking-wider text-[#94A3B8] mt-2 font-semibold">
          VORTEX•CORE
        </span>
      </div>

      {/* Floating Anchored Technology Badges */}
      {/* Badge 1: Top Right */}
      <motion.div
        className="absolute top-8 right-0 sm:-right-2 z-20 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#121923]/95 border border-[#1E293B] shadow-lg backdrop-blur-md"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-6 h-6 rounded bg-[#182231] flex items-center justify-center text-[#60A5FA]">
          <Globe className="w-3.5 h-3.5" />
        </div>
        <div className="text-left">
          <p className="text-[10px] text-[#64748B] font-mono uppercase leading-tight">Architecture</p>
          <p className="text-xs font-semibold text-[#F8FAFC] leading-tight">Next.js &amp; Web</p>
        </div>
      </motion.div>

      {/* Badge 2: Bottom Left */}
      <motion.div
        className="absolute bottom-10 left-0 sm:-left-2 z-20 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#121923]/95 border border-[#1E293B] shadow-lg backdrop-blur-md"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <div className="w-6 h-6 rounded bg-[#182231] flex items-center justify-center text-[#3B82F6]">
          <Layers className="w-3.5 h-3.5" />
        </div>
        <div className="text-left">
          <p className="text-[10px] text-[#64748B] font-mono uppercase leading-tight">Systems</p>
          <p className="text-xs font-semibold text-[#F8FAFC] leading-tight">Custom Portals</p>
        </div>
      </motion.div>

      {/* Badge 3: Bottom Right */}
      <motion.div
        className="absolute bottom-12 right-6 sm:right-2 z-20 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#121923]/95 border border-[#1E293B] shadow-lg backdrop-blur-md"
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      >
        <div className="w-6 h-6 rounded bg-[#182231] flex items-center justify-center text-[#60A5FA]">
          <Smartphone className="w-3.5 h-3.5" />
        </div>
        <div className="text-left">
          <p className="text-[10px] text-[#64748B] font-mono uppercase leading-tight">Mobile</p>
          <p className="text-xs font-semibold text-[#F8FAFC] leading-tight">Flutter &amp; Cloud</p>
        </div>
      </motion.div>

      {/* Badge 4: Top Left */}
      <motion.div
        className="absolute top-16 left-4 sm:left-0 z-20 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#121923]/95 border border-[#1E293B] shadow-lg backdrop-blur-md"
        animate={{ y: [0, 5, 0] }}
        transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
      >
        <div className="w-6 h-6 rounded bg-[#182231] flex items-center justify-center text-[#34D399]">
          <ShieldCheck className="w-3.5 h-3.5" />
        </div>
        <div className="text-left">
          <p className="text-[10px] text-[#64748B] font-mono uppercase leading-tight">Reliability</p>
          <p className="text-xs font-semibold text-[#F8FAFC] leading-tight">LK • AU Delivery</p>
        </div>
      </motion.div>
    </div>
  );
}
