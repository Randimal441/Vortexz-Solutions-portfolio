import React from "react";
import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { CTASection } from "@/components/sections/CTASection";
import { SERVICES } from "@/data/services";
import { DEVELOPMENT_PROCESS } from "@/data/process";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Services | Technology Solutions",
  description:
    "Explore Vortexz Solutions services: Business Website Development, E-Commerce, Custom Web Systems, Mobile Apps, UI/UX Design, and Maintenance.",
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Page Header */}
      <PageHeader
        badge="SERVICES"
        title="Technology Solutions Designed Around Your Business."
        description="From high-performing corporate websites to complex operational web systems and mobile apps, we design and engineer digital solutions tailored to your market."
        breadcrumbs={[{ label: "Services" }]}
      />

      {/* Services Grid Section */}
      <section className="py-16 lg:py-24 bg-[#070A0F]" id="all-services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SERVICES.map((service) => (
              <div key={service.id} id={service.id} className="scroll-mt-28">
                <ServiceCard service={service} showDetails={true} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-20 lg:py-28 bg-[#0D121A] border-t border-[#1E293B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#121923] border border-[#1E293B] text-xs font-semibold tracking-wider text-[#60A5FA] uppercase mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]" />
              HOW WE WORK
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F8FAFC]">
              From Concept to Production
            </h2>
            <p className="mt-4 text-[#94A3B8] text-base leading-relaxed">
              Every project follows our structured delivery pipeline to eliminate uncertainty and ensure predictable software releases.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {DEVELOPMENT_PROCESS.map((step) => (
              <div
                key={step.step}
                className="p-7 rounded-xl bg-[#121923] border border-[#1E293B] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-2xl font-black text-[#60A5FA]">
                      {step.step}
                    </span>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#64748B]">
                      Phase {step.step}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-[#F8FAFC] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#94A3B8] leading-relaxed mb-4">
                    {step.details}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#1E293B] space-y-1.5">
                  <span className="text-[11px] font-mono text-[#60A5FA] uppercase tracking-wider block mb-1">
                    Deliverables:
                  </span>
                  {step.deliverables.map((item, i) => (
                    <div key={i} className="text-xs text-[#94A3B8] flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#3B82F6] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button href="/contact-us" variant="primary" size="md" showArrow>
              Start Your Project With Us
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Build Your Digital Solution?"
        description="Whether you need a new web application, a mobile product, or support for an existing platform, our team is ready to help."
      />
    </div>
  );
}
