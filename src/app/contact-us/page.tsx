import React from "react";
import type { Metadata } from "next";
import { Mail, Phone, MapPin, Clock, MessageSquare } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { ContactForm } from "@/components/contact/ContactForm";
import { REGIONAL_PRESENCE } from "@/data/navigation";

export const metadata: Metadata = {
  title: "Contact Us | Start a Project",
  description:
    "Get in touch with Vortexz Solutions. Tell us about your project requirements in Sri Lanka or Australia and receive a detailed consultation.",
};

export default function ContactUsPage() {
  return (
    <div className="flex flex-col w-full">
      <PageHeader
        badge="GET IN TOUCH"
        title="Let's Build Something Together."
        description="Tell us about your project and we'll help you turn your idea into a practical digital solution."
        breadcrumbs={[{ label: "Contact Us" }]}
      />

      <section className="py-16 lg:py-24 bg-[#070A0F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left Column: Direct Communication Channels */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-[#F8FAFC] mb-3">
                  Start a Project Conversation
                </h2>
                <p className="text-sm text-[#94A3B8] leading-relaxed">
                  Fill out the form or reach out directly to our regional contact points. We respond to all inquiries with initial architecture insights and timeline estimates within 24 hours.
                </p>
              </div>

              {/* Direct email channels */}
              <div className="p-6 rounded-xl bg-[#0D121A] border border-[#1E293B] space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#121923] border border-[#1E293B] flex items-center justify-center text-[#60A5FA]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-[#64748B] block">General Inquiries</span>
                    <a
                      href="mailto:hello@vortexzsolutions.com"
                      className="text-sm font-semibold text-[#F8FAFC] hover:text-[#60A5FA] transition-colors"
                    >
                      hello@vortexzsolutions.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-3 border-t border-[#1E293B]">
                  <div className="w-9 h-9 rounded-lg bg-[#121923] border border-[#1E293B] flex items-center justify-center text-[#60A5FA]">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-[#64748B] block">Australia Client Desk</span>
                    <a
                      href="mailto:au@vortexzsolutions.com"
                      className="text-sm font-semibold text-[#F8FAFC] hover:text-[#60A5FA] transition-colors"
                    >
                      au@vortexzsolutions.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Regional Office Hubs */}
              <div className="space-y-4">
                {/* Sri Lanka Hub */}
                <div className="p-6 rounded-xl bg-[#121923] border border-[#1E293B]">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2 text-sm font-bold text-[#F8FAFC]">
                      <MapPin className="w-4 h-4 text-[#3B82F6]" />
                      <span>{REGIONAL_PRESENCE.sriLanka.country}</span>
                    </div>
                    <span className="text-xs font-mono text-[#64748B]">
                      {REGIONAL_PRESENCE.sriLanka.timeZone}
                    </span>
                  </div>
                  <p className="text-xs text-[#94A3B8] leading-relaxed mb-3">
                    {REGIONAL_PRESENCE.sriLanka.city} — Serving enterprises and emerging startups across the island.
                  </p>
                  <p className="text-xs text-[#60A5FA] font-medium">
                    Email: {REGIONAL_PRESENCE.sriLanka.email}
                  </p>
                </div>

                {/* Australia Hub */}
                <div className="p-6 rounded-xl bg-[#121923] border border-[#1E293B]">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2 text-sm font-bold text-[#F8FAFC]">
                      <MapPin className="w-4 h-4 text-[#3B82F6]" />
                      <span>{REGIONAL_PRESENCE.australia.country}</span>
                    </div>
                    <span className="text-xs font-mono text-[#64748B]">
                      {REGIONAL_PRESENCE.australia.timeZone}
                    </span>
                  </div>
                  <p className="text-xs text-[#94A3B8] leading-relaxed mb-3">
                    {REGIONAL_PRESENCE.australia.city} — Partnering with founders and product teams.
                  </p>
                  <p className="text-xs text-[#60A5FA] font-medium">
                    Email: {REGIONAL_PRESENCE.australia.email}
                  </p>
                </div>
              </div>

              {/* SLA badge */}
              <div className="flex items-center gap-2.5 p-4 rounded-lg bg-[#0D121A] border border-[#1E293B] text-xs text-[#94A3B8]">
                <Clock className="w-4 h-4 text-[#10B981] shrink-0" />
                <span>Typical response time is under 24 business hours.</span>
              </div>
            </div>

            {/* Right Column: Contact Inquiry Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
