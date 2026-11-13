"use client";

import React, { useEffect, useRef } from "react";

interface LightCablesBackgroundProps {
  className?: string;
}

export function LightCablesBackground({ className = "" }: LightCablesBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      if (!canvas) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.width = canvas.offsetWidth * dpr;
      height = canvas.height = canvas.offsetHeight * dpr;
      ctx.scale(dpr, dpr);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    // Cable definitions - 14 organic undulating fiber strands
    const cables = [
      { offset: -110, freq: 0.0018, speed: 0.0009, amp: 45, phase: 0.0, color: "#00D2FF", alpha: 0.75 },
      { offset: -85,  freq: 0.0022, speed: 0.0011, amp: 38, phase: 1.2, color: "#3B82F6", alpha: 0.8 },
      { offset: -60,  freq: 0.0016, speed: 0.0008, amp: 50, phase: 2.1, color: "#60A5FA", alpha: 0.7 },
      { offset: -40,  freq: 0.0025, speed: 0.0013, amp: 35, phase: 0.8, color: "#00D2FF", alpha: 0.85 },
      { offset: -20,  freq: 0.0019, speed: 0.0010, amp: 42, phase: 3.4, color: "#38BDF8", alpha: 0.8 },
      { offset: -5,   freq: 0.0021, speed: 0.0012, amp: 48, phase: 1.8, color: "#818CF8", alpha: 0.9 },
      { offset: 10,   freq: 0.0017, speed: 0.0009, amp: 40, phase: 4.2, color: "#00D2FF", alpha: 0.95 },
      { offset: 25,   freq: 0.0024, speed: 0.0014, amp: 52, phase: 2.6, color: "#3B82F6", alpha: 0.85 },
      { offset: 45,   freq: 0.0019, speed: 0.0010, amp: 38, phase: 5.1, color: "#60A5FA", alpha: 0.75 },
      { offset: 65,   freq: 0.0022, speed: 0.0012, amp: 46, phase: 0.5, color: "#00D2FF", alpha: 0.8 },
      { offset: 85,   freq: 0.0016, speed: 0.0008, amp: 40, phase: 3.9, color: "#818CF8", alpha: 0.7 },
      { offset: 105,  freq: 0.0020, speed: 0.0011, amp: 44, phase: 1.7, color: "#3B82F6", alpha: 0.75 },
    ];

    let startTime = performance.now();

    const render = (now: number) => {
      const elapsed = now - startTime;
      const displayWidth = canvas.offsetWidth;
      const displayHeight = canvas.offsetHeight;

      ctx.clearRect(0, 0, displayWidth, displayHeight);

      const centerY = displayHeight * 0.44;
      const isDark = !document.documentElement.classList.contains("light");

      cables.forEach((cable) => {
        ctx.beginPath();

        // Calculate points across width
        const step = 8;
        let isFirst = true;

        for (let x = 0; x <= displayWidth; x += step) {
          // Envelope: bundle together at left & right ends, fan out in the middle
          const normX = x / displayWidth;
          const envelope = Math.sin(normX * Math.PI);

          // Undulating wave calculation
          const wave1 = Math.sin(x * cable.freq + elapsed * cable.speed + cable.phase);
          const wave2 = Math.cos(x * (cable.freq * 1.5) - elapsed * (cable.speed * 0.8) + cable.phase * 0.5);
          const y = centerY + (cable.offset + (wave1 * cable.amp + wave2 * 15)) * envelope;

          if (isFirst) {
            ctx.moveTo(x, y);
            isFirst = false;
          } else {
            ctx.lineTo(x, y);
          }
        }

        // Horizontal gradient stroke
        const grad = ctx.createLinearGradient(0, 0, displayWidth, 0);
        const alpha = isDark ? cable.alpha : cable.alpha * 0.85;

        grad.addColorStop(0, "rgba(59, 130, 246, 0)");
        grad.addColorStop(0.15, `rgba(59, 130, 246, ${alpha * 0.4})`);
        grad.addColorStop(0.5, cable.color);
        grad.addColorStop(0.85, `rgba(99, 102, 241, ${alpha * 0.4})`);
        grad.addColorStop(1, "rgba(59, 130, 246, 0)");

        ctx.strokeStyle = grad;
        ctx.lineWidth = isDark ? 1.6 : 1.8;

        // Glow effect
        ctx.shadowColor = isDark ? cable.color : "rgba(37, 99, 235, 0.4)";
        ctx.shadowBlur = isDark ? 12 : 6;

        ctx.stroke();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden select-none ${className}`}>
      {/* Central atmospheric backlight glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[340px] bg-gradient-to-r from-blue-600/15 via-cyan-500/10 to-indigo-600/15 dark:from-blue-600/20 dark:via-cyan-400/15 dark:to-indigo-600/20 blur-[130px] rounded-full pointer-events-none" />

      {/* HTML5 Canvas with glowing light cables */}
      <canvas
        ref={canvasRef}
        className="w-full h-full block"
      />

      {/* Subtle bottom fade into page background */}
      <div className="absolute bottom-0 inset-x-0 h-28 bg-gradient-to-t from-[var(--vortex-bg)] via-[var(--vortex-bg)]/80 to-transparent pointer-events-none" />
      <div className="absolute top-0 inset-x-0 h-16 bg-gradient-to-b from-[var(--vortex-bg)] to-transparent pointer-events-none" />
    </div>
  );
}

