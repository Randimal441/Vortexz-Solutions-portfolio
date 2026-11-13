"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Clock,
  MessageSquare,
  Sparkles,
  Phone,
  MessageCircle,
  ExternalLink,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { ContactForm } from "@/components/contact/ContactForm";

export function ContactUsContent() {
  const whatsappUrl =
    "https://api.whatsapp.com/send?phone=94711991415&text=Hello%20Vortexz%20Solutions,%20I%20would%20like%20to%20discuss%20a%20new%20project!";

  return (
    <section className="pt-6 pb-14 sm:pt-8 sm:pb-16 lg:pt-10 lg:pb-20 bg-[var(--vortex-bg)] relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-r from-blue-600/10 via-cyan-500/08 to-indigo-600/10 blur-[150px] rounded-full pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Direct Communication Channels & Locations */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-6 sm:space-y-8"
          >
            {/* Header Block */}
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--badge-bg)] border border-[var(--badge-border)] text-xs font-bold tracking-widest text-[#3B82F6] uppercase mb-4 shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] animate-pulse" />
                GET IN TOUCH
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-[2.65rem] font-black text-[var(--vortex-text)] mb-3 tracking-tight leading-[1.12]">
                Let&apos;s Build Your Next Digital System.
              </h1>
              <p className="text-xs sm:text-sm text-[var(--vortex-secondary-text)] leading-relaxed">
                Connect directly with our engineering team. We review every inquiry with technical rigor and reply with tailored architecture insights and milestone estimates.
              </p>
            </div>

            {/* Prominent Highlighted Response Time Banner */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-500/15 via-emerald-500/10 to-teal-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 flex items-center justify-between gap-3 shadow-md shadow-emerald-500/5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-500 shrink-0">
                  <Zap className="w-5 h-5 fill-emerald-500/30" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-600/80 dark:text-emerald-400/80 block">
                    Fast Response SLA
                  </span>
                  <span className="text-sm font-bold text-[var(--vortex-text)]">
                    Typical response time is under 24 business hours.
                  </span>
                </div>
              </div>
              <span className="relative flex h-2.5 w-2.5 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
            </div>

            {/* Direct Email & WhatsApp Quick Channels */}
            <div className="p-6 rounded-3xl bg-[var(--vortex-card)] border border-[var(--vortex-border)] hover:border-[#3B82F6]/40 transition-all duration-300 shadow-xl shadow-black/5 dark:shadow-black/20 space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[var(--vortex-muted)] font-mono">
                Direct Contact Desks
              </h3>

              {/* Email Channel */}
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-[#3B82F6] shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="overflow-hidden">
                  <span className="text-[10px] font-mono text-[var(--vortex-muted)] block">
                    Official Email
                  </span>
                  <a
                    href="mailto:vortexzsolution@gmail.com"
                    className="text-sm sm:text-base font-bold text-[var(--vortex-text)] hover:text-[#3B82F6] transition-colors truncate block"
                  >
                    vortexzsolution@gmail.com
                  </a>
                </div>
              </div>

              {/* WhatsApp Channel */}
              <div className="flex items-center justify-between gap-3 pt-3 border-t border-[var(--vortex-border)]">
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-2xl bg-[#25D366]/10 border border-[#25D366]/20 flex items-center justify-center text-[#25D366] shrink-0">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-[var(--vortex-muted)] block">
                      Direct WhatsApp &amp; Hotline
                    </span>
                    <a
                      href="tel:+94711991415"
                      className="text-sm sm:text-base font-bold text-[var(--vortex-text)] hover:text-[#25D366] transition-colors font-mono"
                    >
                      0711991415 / +94 71 199 1415
                    </a>
                  </div>
                </div>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#25D366]/15 hover:bg-[#25D366] text-[#25D366] hover:text-white border border-[#25D366]/30 text-xs font-bold transition-all shrink-0"
                >
                  <span>Chat</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Sri Lanka Hub Locations: Colombo & Kurunegala */}
            <div className="space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[var(--vortex-muted)] font-mono">
                Operating Hubs (Sri Lanka)
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Colombo Hub */}
                <div className="p-5 rounded-2xl bg-[var(--vortex-card)] border border-[var(--vortex-border)] hover:border-[#3B82F6]/40 transition-all duration-300 shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <div className="flex items-center gap-2 text-sm font-bold text-[var(--vortex-text)]">
                        <MapPin className="w-4 h-4 text-[#3B82F6]" />
                        <span>Colombo Hub</span>
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[var(--vortex-surface)] text-[var(--vortex-muted)] border border-[var(--vortex-border)]">
                        Sri Lanka
                      </span>
                    </div>
                    <p className="text-xs text-[var(--vortex-secondary-text)] leading-relaxed">
                      Commercial strategy, client consultations &amp; solution architecture.
                    </p>
                  </div>
                  <div className="mt-3 pt-2.5 border-t border-[var(--vortex-border)]/60 text-[11px] font-mono text-[#3B82F6]">
                    UTC+5:30 (IST)
                  </div>
                </div>

                {/* Kurunegala Hub */}
                <div className="p-5 rounded-2xl bg-[var(--vortex-card)] border border-[var(--vortex-border)] hover:border-[#00D2FF]/40 transition-all duration-300 shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <div className="flex items-center gap-2 text-sm font-bold text-[var(--vortex-text)]">
                        <MapPin className="w-4 h-4 text-[#00D2FF]" />
                        <span>Kurunegala Hub</span>
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[var(--vortex-surface)] text-[var(--vortex-muted)] border border-[var(--vortex-border)]">
                        Sri Lanka
                      </span>
                    </div>
                    <p className="text-xs text-[var(--vortex-secondary-text)] leading-relaxed">
                      Core software engineering, agile sprint delivery &amp; product builds.
                    </p>
                  </div>
                  <div className="mt-3 pt-2.5 border-t border-[var(--vortex-border)]/60 text-[11px] font-mono text-[#00D2FF]">
                    UTC+5:30 (IST)
                  </div>
                </div>
              </div>
            </div>

            {/* Assurance Note */}
            <div className="flex items-center gap-3 p-4 rounded-2xl bg-[var(--vortex-surface)] border border-[var(--vortex-border)] text-xs text-[var(--vortex-secondary-text)]">
              <ShieldCheck className="w-5 h-5 text-[#3B82F6] shrink-0" />
              <span>
                All inquiries are treated with strict confidentiality. Non-disclosure agreements (NDAs) available on request.
              </span>
            </div>
          </motion.div>

          {/* Right Column: Contact Inquiry Form */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
