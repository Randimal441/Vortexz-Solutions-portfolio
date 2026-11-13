"use client";

import React, { ButtonHTMLAttributes } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  showArrow?: boolean;
  external?: boolean;
  children: React.ReactNode;
  className?: string;
}

export function Button({
  variant = "primary",
  size = "md",
  href,
  showArrow = false,
  external = false,
  children,
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-bold tracking-wide transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none rounded-xl group select-none cursor-pointer";

  const sizeStyles = {
    sm: "text-xs px-3.5 py-1.5 gap-1.5",
    md: "text-xs sm:text-sm px-5 py-2.5 gap-2",
    lg: "text-sm sm:text-base px-7 py-3.5 gap-2.5",
  };

  const variantStyles = {
    primary:
      "bg-[#3B82F6] hover:bg-[#2563EB] text-white shadow-sm hover:shadow-[0_0_24px_rgba(59,130,246,0.4)] active:translate-y-[1px]",
    secondary:
      "bg-[var(--vortex-card)] hover:bg-[var(--vortex-card-hover)] text-[var(--vortex-text)] border border-[var(--vortex-border)] hover:border-[#3B82F6]/50 shadow-xs",
    outline:
      "bg-transparent hover:bg-[var(--vortex-surface)] text-[var(--vortex-text)] border border-[var(--vortex-border)] hover:border-[#3B82F6]/60",
    ghost:
      "bg-transparent hover:bg-[var(--vortex-card)] text-[var(--vortex-secondary-text)] hover:text-[var(--vortex-text)]",
  };

  const combinedStyles = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  const content = (
    <>
      <span>{children}</span>
      {showArrow && (
        <ArrowRight
          className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1 text-current shrink-0"
          aria-hidden="true"
        />
      )}
    </>
  );

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedStyles}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedStyles}>
        {content}
      </Link>
    );
  }

  return (
    <button className={combinedStyles} {...props}>
      {content}
    </button>
  );
}
