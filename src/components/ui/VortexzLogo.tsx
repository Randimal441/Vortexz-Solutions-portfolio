"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useTheme } from "@/context/ThemeContext";

interface VortexzLogoProps {
  size?: "sm" | "md" | "lg";
  className?: string;
  forceTheme?: "dark" | "light";
  showTagline?: boolean;
}

export function VortexzLogo({
  size = "md",
  className = "",
  forceTheme,
  showTagline,
}: VortexzLogoProps) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = forceTheme || (mounted ? resolvedTheme : "light");
  const isDark = currentTheme === "dark";

  // Height definitions for navbar, footer, etc.
  const heightStyles = {
    sm: "h-8 sm:h-9",
    md: "h-10 sm:h-11 lg:h-12",
    lg: "h-14 sm:h-16",
  }[size];

  return (
    <div
      className={`inline-flex items-center select-none group transition-transform duration-200 hover:scale-[1.03] ${className}`}
    >
      <div className={`relative ${heightStyles} w-auto flex items-center`}>
        {isDark ? (
          /* Dark Mode: 100% transparent PNG with crisp white text and electric blue emblem */
          <Image
            src="/brand/logo.png"
            alt="Vortexz Solutions"
            width={280}
            height={85}
            priority
            className={`${heightStyles} w-auto object-contain transition-opacity duration-300`}
          />
        ) : (
          /* Light Mode: 100% transparent PNG with white text inverted to solid black */
          <Image
            src="/brand/logo.png"
            alt="Vortexz Solutions"
            width={280}
            height={85}
            priority
            style={{
              filter: "invert(1) hue-rotate(180deg) contrast(1.25)",
            }}
            className={`${heightStyles} w-auto object-contain transition-opacity duration-300`}
          />
        )}
      </div>
    </div>
  );
}
