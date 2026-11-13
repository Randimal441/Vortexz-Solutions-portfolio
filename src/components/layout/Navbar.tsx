"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { MAIN_NAV } from "@/data/navigation";
import { Button } from "@/components/ui/Button";
import { VortexzLogo } from "@/components/ui/VortexzLogo";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const handleLinkClick = () => {
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  // Hide Navbar completely on /admin routes
  if (pathname?.startsWith("/admin")) {
    return null;
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[var(--glass-bg)] backdrop-blur-xl border-b border-[var(--vortex-border)] shadow-sm py-2"
          : "bg-transparent border-b border-transparent py-2.5 sm:py-3"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo with Custom Vortexz Emblem */}
          <Link
            href="/"
            onClick={handleLinkClick}
            className="flex items-center group focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg"
            aria-label="Vortexz Solutions Home"
          >
            <VortexzLogo size="md" />
          </Link>

          {/* Desktop Navigation Links (Frame.io Pill Style) */}
          <nav
            className="hidden md:flex items-center gap-1 bg-[var(--vortex-surface)]/80 p-1.5 rounded-full border border-[var(--vortex-border)] backdrop-blur-md shadow-sm"
            aria-label="Main Navigation"
          >
            {MAIN_NAV.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-4 py-1.5 text-xs font-semibold tracking-wide rounded-full transition-colors duration-200 ${
                    isActive
                      ? "text-[var(--vortex-text)] font-bold"
                      : "text-[var(--vortex-secondary-text)] hover:text-[var(--vortex-text)] hover:bg-[var(--vortex-card-hover)]"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 bg-[var(--vortex-card)] border border-[var(--vortex-border)] rounded-full -z-10 shadow-sm"
                      transition={{ type: "spring", stiffness: 420, damping: 32 }}
                    />
                  )}
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Actions: Theme Toggle + CTA */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <Button
              href="/contact-us"
              variant="primary"
              size="sm"
              showArrow
              className="text-xs font-bold tracking-wider uppercase px-4 py-2"
            >
              Let&apos;s Talk
            </Button>
          </div>

          {/* Mobile Right Controls: Theme Toggle + Menu Trigger */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              type="button"
              className="p-2 rounded-xl bg-[var(--vortex-surface)] border border-[var(--vortex-border)] text-[var(--vortex-secondary-text)] hover:text-[var(--vortex-text)] transition-colors focus-visible:ring-2 focus-visible:ring-blue-500"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-navigation"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Animated Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden bg-[var(--vortex-bg)]/98 backdrop-blur-2xl border-b border-[var(--vortex-border)] overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-4 py-6 space-y-4">
              <div className="flex flex-col space-y-1">
                {MAIN_NAV.map((item) => {
                  const isActive =
                    item.href === "/"
                      ? pathname === "/"
                      : pathname.startsWith(item.href);

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={handleLinkClick}
                      className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
                        isActive
                          ? "bg-[var(--vortex-card)] text-[#3B82F6] border border-[var(--vortex-border)]"
                          : "text-[var(--vortex-secondary-text)] hover:text-[var(--vortex-text)] hover:bg-[var(--vortex-surface)]"
                      }`}
                    >
                      <span>{item.label}</span>
                      {isActive && (
                        <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] shadow-[0_0_8px_#3B82F6]" />
                      )}
                    </Link>
                  );
                })}
              </div>

              <div className="pt-4 border-t border-[var(--vortex-border)] flex flex-col gap-3">
                <Button
                  href="/contact-us"
                  variant="primary"
                  size="md"
                  showArrow
                  onClick={handleLinkClick}
                  className="w-full justify-center text-sm font-bold tracking-wider uppercase"
                >
                  Let&apos;s Talk
                </Button>
                <div className="flex items-center justify-between text-xs text-[var(--vortex-muted)] px-1 pt-1">
                  <span>Colombo, LK • Melbourne &amp; Sydney, AU</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
