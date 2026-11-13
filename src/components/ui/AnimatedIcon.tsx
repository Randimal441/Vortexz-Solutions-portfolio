"use client";

import React from "react";
import { motion } from "framer-motion";

interface AnimatedIconProps {
  name: string;
  className?: string;
  size?: number;
  isHovered?: boolean;
  accentColor?: string;
}

/**
 * Iconsax Animated Icon Collection (app.iconsax.io/?tab=animated)
 * Faithful implementation of Iconsax dynamic micro-motion vector icons
 * with smooth Framer Motion transitions, two-tone stroke styling, and loop physics.
 */
export function AnimatedIcon({
  name,
  className = "",
  size = 24,
  isHovered = true,
  accentColor = "#00D2FF",
}: AnimatedIconProps) {
  const normalizedName = name.toLowerCase().replace(/[-_\s]/g, "");

  switch (normalizedName) {
    // 01. Global / Web Development (Iconsax: global)
    case "globe":
    case "global":
    case "web":
    case "website":
      return (
        <div
          className={`relative flex items-center justify-center shrink-0 ${className}`}
          style={{ width: size, height: size }}
          aria-hidden="true"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-full h-full"
          >
            {/* Outer Globe Circle */}
            <circle cx="12" cy="12" r="9.5" strokeOpacity="0.8" />
            {/* 3D Rotating Longitudinal Meridian */}
            <motion.ellipse
              cx="12"
              cy="12"
              rx="4.8"
              ry="9.5"
              animate={
                isHovered
                  ? {
                      rx: [4.8, 1, 4.8],
                      strokeOpacity: [0.9, 0.4, 0.9],
                    }
                  : {}
              }
              transition={{
                duration: 2.4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            {/* Equator & Latitude lines */}
            <path d="M2.5 12h19" strokeOpacity="0.85" />
            <path d="M4.5 7.5h15" strokeOpacity="0.4" />
            <path d="M4.5 16.5h15" strokeOpacity="0.4" />
          </svg>
          {/* Orbiting Satellite Pulse (Iconsax signature) */}
          <motion.span
            className="absolute w-1.5 h-1.5 rounded-full"
            style={{ backgroundColor: accentColor }}
            animate={
              isHovered
                ? {
                    x: [-6, 6, -6],
                    y: [-4, 4, -4],
                    scale: [0.8, 1.3, 0.8],
                    opacity: [0.6, 1, 0.6],
                  }
                : { opacity: 0.8 }
            }
            transition={{
              duration: 2.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      );

    // 02. Briefcase / Portfolio (Iconsax: briefcase)
    case "briefcase":
    case "portfolio":
    case "bag":
      return (
        <div
          className={`relative flex items-center justify-center shrink-0 ${className}`}
          style={{ width: size, height: size }}
          aria-hidden="true"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-full h-full"
          >
            {/* Case Body */}
            <rect x="3" y="7" width="18" height="13.5" rx="3" strokeOpacity="0.85" />
            {/* Animated Liftable Top Handle */}
            <motion.path
              d="M8.5 7V4.5a1.5 1.5 0 0 1 1.5-1.5h4a1.5 1.5 0 0 1 1.5 1.5V7"
              animate={isHovered ? { y: [-1, -3, -1] } : { y: 0 }}
              transition={{
                duration: 1.6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            {/* Middle Divider Stripe */}
            <path d="M3 13.5h18" strokeDasharray="2.5 2.5" strokeOpacity="0.4" />
            {/* Center Lock / Keyhole Accent */}
            <motion.rect
              x="10.5"
              y="12"
              width="3"
              height="3"
              rx="0.75"
              fill={accentColor}
              stroke="none"
              animate={isHovered ? { scale: [1, 1.25, 1] } : {}}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            />
          </svg>
        </div>
      );

    // 03. Cart / Shopping Bag / E-Commerce (Iconsax: shopping-bag / bag-2)
    case "cart":
    case "shoppingbag":
    case "ecommerce":
    case "shop":
      return (
        <div
          className={`relative flex items-center justify-center shrink-0 ${className}`}
          style={{ width: size, height: size }}
          aria-hidden="true"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-full h-full"
          >
            {/* Bag Body */}
            <path
              d="M4.5 8.5L3 21h18l-1.5-12.5H4.5Z"
              strokeOpacity="0.85"
            />
            {/* Animated Swinging Bag Handles */}
            <motion.path
              d="M8.5 8.5V6a3.5 3.5 0 0 1 7 0v2.5"
              animate={
                isHovered
                  ? {
                      y: [0, -2, 0],
                      scaleY: [1, 1.08, 1],
                    }
                  : {}
              }
              transition={{
                duration: 1.4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            {/* Inner Tag or Cart Item Pulse */}
            <motion.circle
              cx="12"
              cy="15"
              r="2"
              fill={accentColor}
              stroke="none"
              animate={isHovered ? { scale: [1, 1.4, 1], opacity: [0.6, 1, 0.6] } : {}}
              transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
            />
          </svg>
        </div>
      );

    // 04. Layers / System / Category (Iconsax: layer / category-2)
    case "layers":
    case "system":
    case "portal":
    case "category":
      return (
        <div
          className={`relative flex items-center justify-center shrink-0 ${className}`}
          style={{ width: size, height: size }}
          aria-hidden="true"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-full h-full"
          >
            {/* Top Floating Isometric Plate */}
            <motion.path
              d="M12 2.5L2.5 7.5L12 12.5L21.5 7.5L12 2.5Z"
              animate={isHovered ? { y: [-2, -4, -2] } : { y: 0 }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            {/* Middle Isometric Plate */}
            <motion.path
              d="M2.5 12L12 17L21.5 12"
              strokeOpacity="0.75"
              animate={isHovered ? { y: [0, -1, 0] } : { y: 0 }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.2,
              }}
            />
            {/* Bottom Base Plate with Accent */}
            <motion.path
              d="M2.5 16.5L12 21.5L21.5 16.5"
              stroke={accentColor}
              strokeOpacity="0.9"
              animate={isHovered ? { y: [1, 2, 1] } : { y: 0 }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.4,
              }}
            />
          </svg>
        </div>
      );

    // 05. Mobile / Smartphone (Iconsax: mobile / mobile-programming)
    case "mobile":
    case "smartphone":
    case "app":
    case "apps":
      return (
        <div
          className={`relative flex items-center justify-center shrink-0 ${className}`}
          style={{ width: size, height: size }}
          aria-hidden="true"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-full h-full"
          >
            {/* Phone Outer Shell */}
            <rect x="5.5" y="2.5" width="13" height="19" rx="3" strokeOpacity="0.85" />
            {/* Dynamic Island / Top Speaker Bar */}
            <path d="M10 5.5h4" strokeOpacity="0.4" />
            {/* Home Pill Indicator */}
            <path d="M10.5 18.5h3" strokeOpacity="0.5" />
            {/* Screen Wave Beam Indicator */}
            <motion.circle
              cx="12"
              cy="12"
              r="2.5"
              stroke={accentColor}
              fill="none"
              animate={
                isHovered
                  ? {
                      r: [1.5, 4, 1.5],
                      opacity: [0.8, 0, 0.8],
                    }
                  : {}
              }
              transition={{
                duration: 1.6,
                repeat: Infinity,
                ease: "easeOut",
              }}
            />
          </svg>
          {/* Top Right Signal Notification Ping */}
          <motion.span
            className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full"
            style={{ backgroundColor: accentColor }}
            animate={
              isHovered
                ? {
                    scale: [0.8, 1.3, 0.8],
                    opacity: [0.5, 1, 0.5],
                  }
                : {}
            }
            transition={{ duration: 1.2, repeat: Infinity }}
          />
        </div>
      );

    // 06. Palette / UI/UX Design (Iconsax: brush-3 / designtools / palette)
    case "palette":
    case "design":
    case "uiux":
    case "brush":
    case "figma":
      return (
        <div
          className={`relative flex items-center justify-center shrink-0 ${className}`}
          style={{ width: size, height: size }}
          aria-hidden="true"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-full h-full"
          >
            {/* Smooth Designer Palette Shell */}
            <motion.path
              d="M12 2.5C6.75 2.5 2.5 6.75 2.5 12C2.5 17.25 6.75 21.5 12 21.5C12.8 21.5 13.5 20.8 13.5 20C13.5 19.6 13.3 19.2 13.1 18.9C12.8 18.6 12.7 18.3 12.7 18C12.7 17.2 13.3 16.5 14.2 16.5H16C19 16.5 21.5 14 21.5 11C21.5 6.3 17.25 2.5 12 2.5Z"
              strokeOpacity="0.85"
              animate={isHovered ? { rotate: [0, 6, -6, 0] } : {}}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            {/* 4 Animated Color Swatches */}
            <motion.circle
              cx="7.5"
              cy="9"
              r="1.2"
              fill="#3B82F6"
              stroke="none"
              animate={isHovered ? { scale: [1, 1.4, 1] } : {}}
              transition={{ duration: 1.2, repeat: Infinity, delay: 0 }}
            />
            <motion.circle
              cx="11.5"
              cy="6.5"
              r="1.2"
              fill="#00D2FF"
              stroke="none"
              animate={isHovered ? { scale: [1, 1.4, 1] } : {}}
              transition={{ duration: 1.2, repeat: Infinity, delay: 0.3 }}
            />
            <motion.circle
              cx="16.5"
              cy="8"
              r="1.2"
              fill="#A855F7"
              stroke="none"
              animate={isHovered ? { scale: [1, 1.4, 1] } : {}}
              transition={{ duration: 1.2, repeat: Infinity, delay: 0.6 }}
            />
            <motion.circle
              cx="17"
              cy="12"
              r="1.2"
              fill="#F59E0B"
              stroke="none"
              animate={isHovered ? { scale: [1, 1.4, 1] } : {}}
              transition={{ duration: 1.2, repeat: Infinity, delay: 0.9 }}
            />
          </svg>
        </div>
      );

    // 07. Target / Bullseye (Iconsax: radar / gps)
    case "target":
    case "goal":
      return (
        <div
          className={`relative flex items-center justify-center shrink-0 ${className}`}
          style={{ width: size, height: size }}
          aria-hidden="true"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-full h-full"
          >
            <circle cx="12" cy="12" r="9.5" strokeOpacity="0.4" />
            <motion.circle
              cx="12"
              cy="12"
              r="5.5"
              stroke={accentColor}
              animate={isHovered ? { scale: [0.85, 1.15, 0.85] } : {}}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.circle
              cx="12"
              cy="12"
              r="2"
              fill="currentColor"
              stroke="none"
              animate={isHovered ? { scale: [1, 1.3, 1] } : {}}
              transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
            />
          </svg>
        </div>
      );

    // 08. Code / Type-Safe Engineering (Iconsax: code / code-circle)
    case "code":
    case "developer":
    case "brackets":
      return (
        <div
          className={`relative flex items-center justify-center shrink-0 ${className}`}
          style={{ width: size, height: size }}
          aria-hidden="true"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-full h-full"
          >
            {/* Left Bracket */}
            <motion.path
              d="M8.5 7.5L4 12L8.5 16.5"
              animate={isHovered ? { x: [-1.5, 0, -1.5] } : {}}
              transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
            />
            {/* Right Bracket */}
            <motion.path
              d="M15.5 7.5L20 12L15.5 16.5"
              animate={isHovered ? { x: [1.5, 0, 1.5] } : {}}
              transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
            />
            {/* Center Blinking Slash */}
            <motion.path
              d="M14 4.5L10 19.5"
              stroke={accentColor}
              animate={isHovered ? { opacity: [0.3, 1, 0.3] } : {}}
              transition={{ duration: 0.9, repeat: Infinity, ease: "easeInOut" }}
            />
          </svg>
        </div>
      );

    // 09. Shield / Security & SLA (Iconsax: security-safe / shield-tick)
    case "shield":
    case "security":
    case "sla":
      return (
        <div
          className={`relative flex items-center justify-center shrink-0 ${className}`}
          style={{ width: size, height: size }}
          aria-hidden="true"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-full h-full"
          >
            {/* Shield Outline */}
            <path
              d="M12 2.5L4 5.5V11C4 16.2 7.4 20.9 12 22C16.6 20.9 20 16.2 20 11V5.5L12 2.5Z"
              strokeOpacity="0.85"
            />
            {/* Animated Draw Checkmark */}
            <motion.path
              d="M8.5 12L11 14.5L16 9.5"
              stroke={accentColor}
              strokeWidth="1.8"
              initial={{ pathLength: 1 }}
              animate={isHovered ? { pathLength: [0.4, 1, 0.4] } : { pathLength: 1 }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            />
          </svg>
        </div>
      );

    // 09b. Lock / Padlock / Security
    case "lock":
    case "padlock":
      return (
        <div
          className={`relative flex items-center justify-center shrink-0 ${className}`}
          style={{ width: size, height: size }}
          aria-hidden="true"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-full h-full"
          >
            {/* Lock Shackle */}
            <motion.path
              d="M7 11V7a5 5 0 0 1 10 0v4"
              animate={
                isHovered
                  ? {
                      y: [0, -1.8, 0],
                      strokeOpacity: [0.8, 1, 0.8],
                    }
                  : {}
              }
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
            {/* Lock Body */}
            <rect x="4" y="11" width="16" height="11" rx="2.5" strokeOpacity="0.9" />
            {/* Keyhole / Accent */}
            <motion.circle
              cx="12"
              cy="15.5"
              r="1.5"
              fill={accentColor}
              stroke="none"
              animate={isHovered ? { scale: [0.9, 1.3, 0.9] } : {}}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
            <path d="M12 17v2" stroke={accentColor} strokeWidth="1.5" />
          </svg>
        </div>
      );

    // 09c. Chat / Message / Support
    case "chat":
    case "message":
    case "messages":
    case "support":
      return (
        <div
          className={`relative flex items-center justify-center shrink-0 ${className}`}
          style={{ width: size, height: size }}
          aria-hidden="true"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-full h-full"
          >
            {/* Chat Bubble Body */}
            <motion.path
              d="M21 12c0 4.418-4.03 8-9 8a9.86 9.86 0 0 1-4.255-.949L3 20l1.238-3.715C3.47 14.982 3 13.535 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              animate={isHovered ? { scale: [1, 1.03, 1] } : {}}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              strokeOpacity="0.9"
            />
            {/* 3 Animated Typing Indicator Dots */}
            <motion.circle
              cx="8.5"
              cy="12"
              r="1.2"
              fill={accentColor}
              stroke="none"
              animate={isHovered ? { scale: [0.8, 1.4, 0.8], opacity: [0.4, 1, 0.4] } : {}}
              transition={{ duration: 1.2, repeat: Infinity, delay: 0 }}
            />
            <motion.circle
              cx="12"
              cy="12"
              r="1.2"
              fill={accentColor}
              stroke="none"
              animate={isHovered ? { scale: [0.8, 1.4, 0.8], opacity: [0.4, 1, 0.4] } : {}}
              transition={{ duration: 1.2, repeat: Infinity, delay: 0.25 }}
            />
            <motion.circle
              cx="15.5"
              cy="12"
              r="1.2"
              fill={accentColor}
              stroke="none"
              animate={isHovered ? { scale: [0.8, 1.4, 0.8], opacity: [0.4, 1, 0.4] } : {}}
              transition={{ duration: 1.2, repeat: Infinity, delay: 0.5 }}
            />
          </svg>
        </div>
      );

    // 10. Users / Direct Engineer Access (Iconsax: profile-2user / people)
    case "users":
    case "team":
    case "people":
      return (
        <div
          className={`relative flex items-center justify-center shrink-0 ${className}`}
          style={{ width: size, height: size }}
          aria-hidden="true"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-full h-full"
          >
            {/* Main Primary Avatar */}
            <circle cx="9" cy="8" r="3.5" strokeOpacity="0.85" />
            <path d="M2.5 19C2.5 15.5 5.5 14.5 9 14.5C12.5 14.5 15.5 15.5 15.5 19" strokeOpacity="0.85" />
            {/* Secondary Floating Avatar */}
            <motion.path
              d="M16 4.5A3 3 0 0 1 18.5 7.5A3 3 0 0 1 16.5 10.4"
              stroke={accentColor}
              animate={isHovered ? { y: [-1, 1, -1] } : {}}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.path
              d="M18 14.5C20.5 15 21.5 16.5 21.5 19"
              stroke={accentColor}
              strokeOpacity="0.8"
              animate={isHovered ? { x: [0, 1.5, 0] } : {}}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            />
          </svg>
        </div>
      );

    // 11. Zap / High Performance & Speed (Iconsax: flash / electricity)
    case "zap":
    case "flash":
    case "performance":
    case "speed":
      return (
        <div
          className={`relative flex items-center justify-center shrink-0 ${className}`}
          style={{ width: size, height: size }}
          aria-hidden="true"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-full h-full"
          >
            <motion.path
              d="M13 2.5L3.5 14H12L11 21.5L20.5 10H12L13 2.5Z"
              stroke={accentColor}
              animate={
                isHovered
                  ? {
                      scale: [1, 1.1, 1],
                      filter: [
                        "drop-shadow(0 0 0px #00D2FF)",
                        "drop-shadow(0 0 4px #00D2FF)",
                        "drop-shadow(0 0 0px #00D2FF)",
                      ],
                    }
                  : {}
              }
              transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut" }}
            />
          </svg>
        </div>
      );

    // 12. Checkmark / Verified (Iconsax: tick-circle)
    case "check":
    case "checkcircle":
    case "verified":
      return (
        <div
          className={`relative flex items-center justify-center shrink-0 ${className}`}
          style={{ width: size, height: size }}
          aria-hidden="true"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-full h-full"
          >
            <circle cx="12" cy="12" r="9.5" strokeOpacity="0.35" />
            <motion.path
              d="M8 12.5L10.5 15L16 9.5"
              stroke={accentColor}
              strokeWidth="2"
              initial={{ pathLength: 0.2 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />
          </svg>
        </div>
      );

    // 13. Arrow Right / Navigation (Iconsax: arrow-right)
    case "arrow":
    case "arrowright":
    case "arrow-right":
      return (
        <div
          className={`relative flex items-center justify-center shrink-0 ${className}`}
          style={{ width: size, height: size }}
          aria-hidden="true"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-full h-full"
          >
            <motion.path
              d="M5 12h14"
              animate={isHovered ? { x: [0, 2.5, 0] } : {}}
              transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.path
              d="M12 5l7 7-7 7"
              animate={isHovered ? { x: [0, 3, 0] } : {}}
              transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut" }}
            />
          </svg>
        </div>
      );

    // Default Fallback
    default:
      return (
        <div
          className={`relative flex items-center justify-center shrink-0 ${className}`}
          style={{ width: size, height: size }}
          aria-hidden="true"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-full h-full"
          >
            <circle cx="12" cy="12" r="9.5" />
            <motion.path
              d="M12 7.5V12.5"
              animate={isHovered ? { y: [0, 1, 0] } : {}}
              transition={{ duration: 1, repeat: Infinity }}
            />
            <circle cx="12" cy="16.5" r="1" fill="currentColor" stroke="none" />
          </svg>
        </div>
      );
  }
}
