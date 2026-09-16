"use client";

import React from "react";
import { Clock, MapPin, CheckCircle2, ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export function RegionalDelivery() {
  return (
    <section className="py-20 lg:py-28 bg-[#0D121A] border-y border-[#1E293B] relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="GEOGRAPHIC FOCUS"
          title="Local Understanding. Global Delivery."
          description="We work with businesses across Sri Lanka and Australia, combining practical business understanding with modern software development."
          align="center"
          className="mb-16"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Sri Lanka Market Focus Card */}
          <div className="lg:col-span-6 p-7 sm:p-8 rounded-2xl bg-[#121923] border border-[#1E293B] hover:border-[#3B82F6]/40 transition-all duration-300">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#0D121A] border border-[#1E293B] flex items-center justify-center text-[#60A5FA]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#F8FAFC]">Sri Lanka</h3>
                  <p className="text-xs text-[#64748B]">Emerging Tech Hub &amp; Growing Enterprises</p>
                </div>
              </div>
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0D121A] border border-[#1E293B] text-xs font-mono text-[#94A3B8]">
                <Clock className="w-3.5 h-3.5 text-[#3B82F6]" />
                <span>UTC+5:30 (IST)</span>
              </span>
            </div>

            <p className="text-sm text-[#94A3B8] leading-relaxed mb-6">
              Assisting Sri Lankan startups, mid-sized companies, and family enterprises transitioning from legacy paper processes to high-performing digital systems, e-commerce channels, and responsive web platforms.
            </p>

            <div className="space-y-2.5 pt-4 border-t border-[#1E293B]">
              <div className="flex items-center gap-2.5 text-xs text-[#94A3B8]">
                <CheckCircle2 className="w-4 h-4 text-[#3B82F6] shrink-0" />
                <span>Local payment integration (PayHere, WebXpay, Genie, LKR)</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-[#94A3B8]">
                <CheckCircle2 className="w-4 h-4 text-[#3B82F6] shrink-0" />
                <span>Affordable, enterprise-grade engineering tailored for growth</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-[#94A3B8]">
                <CheckCircle2 className="w-4 h-4 text-[#3B82F6] shrink-0" />
                <span>Same-day communication and direct technical consultations</span>
              </div>
            </div>
          </div>

          {/* Australia Market Focus Card */}
          <div className="lg:col-span-6 p-7 sm:p-8 rounded-2xl bg-[#121923] border border-[#1E293B] hover:border-[#3B82F6]/40 transition-all duration-300">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#0D121A] border border-[#1E293B] flex items-center justify-center text-[#60A5FA]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#F8FAFC]">Australia</h3>
                  <p className="text-xs text-[#64748B]">Founders, SMEs &amp; Digital Agencies</p>
                </div>
              </div>
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0D121A] border border-[#1E293B] text-xs font-mono text-[#94A3B8]">
                <Clock className="w-3.5 h-3.5 text-[#3B82F6]" />
                <span>AEST / AEDT (Melbourne, Sydney)</span>
              </span>
            </div>

            <p className="text-sm text-[#94A3B8] leading-relaxed mb-6">
              Partnering with Australian businesses seeking dependable, high-efficiency software development. Benefit from convenient timezone overlap, strict code quality standards, and transparent sprint reporting.
            </p>

            <div className="space-y-2.5 pt-4 border-t border-[#1E293B]">
              <div className="flex items-center gap-2.5 text-xs text-[#94A3B8]">
                <CheckCircle2 className="w-4 h-4 text-[#3B82F6] shrink-0" />
                <span>Global payment standards (Stripe, AUD processing, GST ready)</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-[#94A3B8]">
                <CheckCircle2 className="w-4 h-4 text-[#3B82F6] shrink-0" />
                <span>Clean TypeScript codebases ready for internal handoff or scaling</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-[#94A3B8]">
                <CheckCircle2 className="w-4 h-4 text-[#3B82F6] shrink-0" />
                <span>Frictionless async communication via Slack, GitHub &amp; Video Briefs</span>
              </div>
            </div>
          </div>
        </div>

        {/* Synergy Bar */}
        <div className="mt-8 p-6 rounded-xl bg-[#070A0F] border border-[#1E293B] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#10B981] animate-pulse" />
            <p className="text-sm text-[#F8FAFC] font-medium">
              Actively taking on new development projects for clients in Sri Lanka, Australia, and worldwide.
            </p>
          </div>
          <Button href="/contact-us" variant="secondary" size="sm" showArrow>
            Discuss Your Market
          </Button>
        </div>
      </div>
    </section>
  );
}
