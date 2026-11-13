import React from "react";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ContactUsContent } from "@/components/contact/ContactUsContent";

export const metadata: Metadata = {
  title: "Contact Us | Start a Project",
  description:
    "Get in touch with Vortexz Solutions. Tell us about your project requirements and receive a detailed consultation from our Colombo and Kurunegala engineering desks.",
};

export default function ContactUsPage() {
  return (
    <div className="flex flex-col w-full bg-[var(--vortex-bg)] text-[var(--vortex-text)] transition-colors">
      {/* Breadcrumbs Navigation */}
      <Breadcrumbs items={[{ label: "Contact Us" }]} />

      <ContactUsContent />
    </div>
  );
}
