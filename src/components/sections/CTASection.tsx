"use client";

import React from "react";
import { Button } from "@/components/ui/Button";

interface CTASectionProps {
  title?: string;
  description?: string;
}

export function CTASection({
  title = "Have a Project in Mind?",
  description = "Let's turn your idea into a digital solution built around your business.",
}: CTASectionProps) {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden bg-[#070A0F]">
      {/* Background orbital rings decoration */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-30">
        <div className="w-[800px] h-[800px] rounded-full border border-[#1E293B] border-dashed" />
        <div className="absolute w-[550px] h-[550px] rounded-full border border-[#3B82F6]/20" />
        <div className="absolute w-[350px] h-[350px] rounded-full border border-[#60A5FA]/15" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#121923] border border-[#1E293B] text-xs font-semibold tracking-wider text-[#60A5FA] uppercase mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]" />
          GET IN TOUCH
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#F8FAFC] tracking-tight leading-tight max-w-2xl mx-auto">
          {title}
        </h2>

        <p className="mt-5 text-base sm:text-lg text-[#94A3B8] max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>

        <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            href="/contact-us"
            variant="primary"
            size="lg"
            showArrow
            className="w-full sm:w-auto font-semibold px-8"
          >
            Start a Project
          </Button>

          <Button
            href="/projects"
            variant="secondary"
            size="lg"
            className="w-full sm:w-auto font-medium px-8"
          >
            View Our Projects
          </Button>
        </div>

        <div className="mt-12 flex items-center justify-center gap-6 text-xs text-[#64748B]">
          <span>Fast Turnaround</span>
          <span>•</span>
          <span>Sri Lanka &amp; Australia Friendly</span>
          <span>•</span>
          <span>No Obligation Consultation</span>
        </div>
      </div>
    </section>
  );
}
