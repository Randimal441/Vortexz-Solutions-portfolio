import React from "react";
import type { Metadata } from "next";
import { CheckCircle2, Shield, Target, Zap, Users } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { RegionalDelivery } from "@/components/sections/RegionalDelivery";
import { CTASection } from "@/components/sections/CTASection";
import { Button } from "@/components/ui/Button";
import { TECHNOLOGIES } from "@/data/technologies";

export const metadata: Metadata = {
  title: "About Us | Building Digital Solutions With Purpose",
  description:
    "Learn about Vortexz Solutions: our engineering philosophy, business-centered approach, and cross-border capabilities serving Sri Lanka and Australia.",
};

export default function AboutUsPage() {
  const values = [
    {
      icon: Target,
      title: "Business-First Architecture",
      description:
        "We prioritize the real commercial and operational objectives behind the code. Software must solve a bottleneck, reduce operating friction, or generate revenue.",
    },
    {
      icon: Shield,
      title: "Strict Engineering Standards",
      description:
        "We build exclusively with modern type-safe frameworks like Next.js and TypeScript, avoiding bloated templates or brittle spaghetti architectures.",
    },
    {
      icon: Users,
      title: "Direct Engineering Access",
      description:
        "Clients work directly with engineers and technical designers, eliminating communication layers and ensuring high alignment from day one.",
    },
    {
      icon: Zap,
      title: "Long-Term Maintainability",
      description:
        "Every codebase is built with modular separation of concerns, clean documentation, and standard Git workflows, making future enhancements seamless.",
    },
  ];

  return (
    <div className="flex flex-col w-full">
      <PageHeader
        badge="ABOUT VORTEXZ"
        title="Building Digital Solutions With Purpose."
        description="Vortexz Solutions is a specialized software and digital solutions company partnering with growing businesses and entrepreneurs in Sri Lanka and Australia."
        breadcrumbs={[{ label: "About Us" }]}
      />

      {/* WHO WE ARE */}
      <section className="py-20 lg:py-28 bg-[#070A0F]" id="who-we-are">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#121923] border border-[#1E293B] text-xs font-semibold tracking-wider text-[#60A5FA] uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]" />
                WHO WE ARE
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F8FAFC] tracking-tight leading-tight">
                A Dedicated Software Solutions Partner.
              </h2>
              <p className="text-base text-[#94A3B8] leading-relaxed">
                Vortexz Solutions was founded to bridge the gap between complex software engineering and practical business needs. Too many companies are caught between fragile low-code templates that break at scale and expensive enterprise consultancies that move slowly.
              </p>
              <p className="text-base text-[#94A3B8] leading-relaxed">
                We combine modern web and mobile technologies with disciplined project execution. Whether building a customer-facing web platform, automating dispatch workflows, or designing an intuitive cross-platform mobile application, our solutions are engineered for real-world resilience.
              </p>
              <div className="pt-2">
                <Button href="/contact-us" variant="primary" size="md" showArrow>
                  Start a Conversation
                </Button>
              </div>
            </div>

            {/* Visual Callout Box */}
            <div className="lg:col-span-6">
              <div className="p-8 sm:p-10 rounded-2xl bg-[#0D121A] border border-[#1E293B] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/10 blur-3xl rounded-full" />
                <h3 className="text-xl font-bold text-[#F8FAFC] mb-6">
                  What Drives Our Work:
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3.5">
                    <CheckCircle2 className="w-5 h-5 text-[#3B82F6] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-semibold text-[#F8FAFC]">Quality Development</h4>
                      <p className="text-xs text-[#94A3B8] mt-0.5">Strict typing, modular components, and performance audits.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3.5">
                    <CheckCircle2 className="w-5 h-5 text-[#3B82F6] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-semibold text-[#F8FAFC]">Practical Solutions</h4>
                      <p className="text-xs text-[#94A3B8] mt-0.5">Solving concrete operational problems rather than over-engineering.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3.5">
                    <CheckCircle2 className="w-5 h-5 text-[#3B82F6] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-semibold text-[#F8FAFC]">Modern Technology</h4>
                      <p className="text-xs text-[#94A3B8] mt-0.5">Next.js App Router, Tailwind CSS, TypeScript, and Node.js.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3.5">
                    <CheckCircle2 className="w-5 h-5 text-[#3B82F6] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-semibold text-[#F8FAFC]">Long-Term Support</h4>
                      <p className="text-xs text-[#94A3B8] mt-0.5">Continuous maintenance, security patches, and phased scaling.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUR APPROACH */}
      <section className="py-20 lg:py-28 bg-[#0D121A] border-t border-[#1E293B]" id="our-approach">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#121923] border border-[#1E293B] text-xs font-semibold tracking-wider text-[#60A5FA] uppercase mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]" />
              OUR PHILOSOPHY
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F8FAFC]">
              How We Approach Engineering
            </h2>
            <p className="mt-4 text-base text-[#94A3B8] leading-relaxed">
              We treat every project as a long-term commercial investment for our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div
                  key={idx}
                  className="p-8 rounded-xl bg-[#121923] border border-[#1E293B] hover:border-[#3B82F6]/40 transition-colors"
                >
                  <div className="w-12 h-12 rounded-lg bg-[#0D121A] border border-[#1E293B] flex items-center justify-center text-[#60A5FA] mb-6">
                    <Icon className="w-6 h-6 text-[#3B82F6]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#F8FAFC] mb-2.5">
                    {val.title}
                  </h3>
                  <p className="text-sm text-[#94A3B8] leading-relaxed">
                    {val.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* TECHNOLOGIES SUMMARY */}
      <section className="py-20 lg:py-28 bg-[#070A0F] border-t border-[#1E293B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F8FAFC]">
              Engineered With Modern Tools
            </h2>
            <p className="mt-3 text-sm text-[#94A3B8]">
              We work with reliable, production-tested technologies across web, mobile, and backend infrastructures.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {TECHNOLOGIES.map((tech) => (
              <div
                key={tech.name}
                className="p-4 rounded-xl bg-[#121923] border border-[#1E293B] text-center"
              >
                <span className="text-sm font-bold text-[#F8FAFC] block">
                  {tech.name}
                </span>
                <span className="text-[10px] font-mono text-[#64748B] block mt-1">
                  {tech.category}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SRI LANKA + AUSTRALIA SECTION */}
      <RegionalDelivery />

      {/* CTA */}
      <CTASection />
    </div>
  );
}
