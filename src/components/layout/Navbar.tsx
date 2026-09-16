"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { MAIN_NAV } from "@/data/navigation";
import { Button } from "@/components/ui/Button";

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#070A0F]/90 backdrop-blur-md border-b border-[#1E293B] shadow-lg shadow-black/20 py-3.5"
          : "bg-transparent border-b border-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo Treatment */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg p-1 -m-1"
            aria-label="Vortexz Solutions Home"
          >
            {/* Subtle orbital mark */}
            <div className="relative w-9 h-9 rounded-lg bg-[#0D121A] border border-[#1E293B] group-hover:border-[#3B82F6]/50 flex items-center justify-center transition-colors overflow-hidden shrink-0">
              <span className="w-2.5 h-2.5 rounded-full bg-[#3B82F6] group-hover:scale-110 transition-transform shadow-[0_0_8px_#3B82F6]" />
              <div className="absolute inset-1 rounded-full border border-dashed border-[#60A5FA]/30 group-hover:rotate-45 transition-transform duration-700" />
            </div>

            <div className="flex flex-col">
              <span className="text-base font-extrabold tracking-wider text-[#F8FAFC] leading-none group-hover:text-white transition-colors">
                VORTEXZ
              </span>
              <span className="text-[10px] font-semibold tracking-widest text-[#60A5FA] uppercase leading-none mt-1">
                SOLUTIONS
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-[#0D121A]/60 p-1.5 rounded-full border border-[#1E293B]/70 backdrop-blur-sm" aria-label="Main Navigation">
            {MAIN_NAV.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-4 py-1.5 text-sm font-medium rounded-full transition-all duration-200 ${
                    isActive
                      ? "text-[#F8FAFC] font-semibold"
                      : "text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-[#121923]/70"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 bg-[#182231] border border-[#1E293B] rounded-full -z-10 shadow-sm"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              href="/contact-us"
              variant="primary"
              size="sm"
              showArrow
              className="text-sm font-semibold tracking-wide"
            >
              Let's Talk
            </Button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              type="button"
              className="p-2.5 rounded-lg bg-[#0D121A] border border-[#1E293B] text-[#94A3B8] hover:text-[#F8FAFC] hover:border-[#3B82F6]/50 transition-colors focus-visible:ring-2 focus-visible:ring-blue-500"
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
            className="md:hidden bg-[#070A0F] border-b border-[#1E293B] overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-4 py-6 space-y-3">
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
                      className={`flex items-center justify-between px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                        isActive
                          ? "bg-[#121923] text-[#60A5FA] border border-[#1E293B]"
                          : "text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-[#0D121A]"
                      }`}
                    >
                      <span>{item.label}</span>
                      {isActive && (
                        <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]" />
                      )}
                    </Link>
                  );
                })}
              </div>

              <div className="pt-4 border-t border-[#1E293B]/70 flex flex-col gap-3">
                <Button
                  href="/contact-us"
                  variant="primary"
                  size="md"
                  showArrow
                  className="w-full justify-center"
                >
                  Let's Talk
                </Button>
                <div className="flex items-center justify-between text-xs text-[#64748B] px-1">
                  <span>Colombo, LK • Sydney &amp; Melbourne, AU</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
