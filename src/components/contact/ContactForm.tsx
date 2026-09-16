"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

interface FormData {
  fullName: string;
  company: string;
  email: string;
  phone: string;
  country: string;
  service: string;
  budget: string;
  description: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  country?: string;
  service?: string;
  description?: string;
}

const SERVICES_OPTIONS = [
  "Business Website",
  "Portfolio Website",
  "E-Commerce",
  "Custom Web System",
  "Mobile App",
  "UI/UX Design",
  "Custom Software",
  "Maintenance & Support",
  "Other",
];

const COUNTRY_OPTIONS = [
  "Sri Lanka",
  "Australia",
  "Other",
];

const BUDGET_OPTIONS = [
  "Under $1,500 AUD / LKR 300,000",
  "$1,500 - $5,000 AUD / LKR 300,000 - 1,000,000",
  "$5,000 - $15,000 AUD / LKR 1,000,000 - 3,000,000",
  "$15,000+ AUD / LKR 3,000,000+",
  "Flexible / To Be Discussed",
];

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    company: "",
    email: "",
    phone: "",
    country: "Sri Lanka",
    service: "Business Website",
    budget: "Flexible / To Be Discussed",
    description: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [serverErrorMessage, setServerErrorMessage] = useState("");

  const validate = (): boolean => {
    const nextErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      nextErrors.fullName = "Full name is required.";
    }

    if (!formData.email.trim()) {
      nextErrors.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (!formData.country) {
      nextErrors.country = "Please select your country.";
    }

    if (!formData.service) {
      nextErrors.service = "Please select the service required.";
    }

    if (!formData.description.trim()) {
      nextErrors.description = "Please provide a brief project description.";
    } else if (formData.description.trim().length < 10) {
      nextErrors.description = "Description should be at least 10 characters.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus("idle");
    setServerErrorMessage("");

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to submit inquiry.");
      }

      setSubmitStatus("success");
      setFormData({
        fullName: "",
        company: "",
        email: "",
        phone: "",
        country: "Sri Lanka",
        service: "Business Website",
        budget: "Flexible / To Be Discussed",
        description: "",
      });
    } catch (err: unknown) {
      setSubmitStatus("error");
      setServerErrorMessage(
        err instanceof Error ? err.message : "An unexpected error occurred. Please try again or email us directly."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[#121923] border border-[#1E293B] rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xl">
      {submitStatus === "success" ? (
        <div className="text-center py-10 space-y-4" role="status" aria-live="polite">
          <div className="w-14 h-14 rounded-full bg-[#10B981]/20 border border-[#10B981]/40 text-[#34D399] flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-7 h-7" />
          </div>
          <h3 className="text-2xl font-bold text-[#F8FAFC]">Inquiry Received</h3>
          <p className="text-[#94A3B8] max-w-md mx-auto text-sm leading-relaxed">
            Thank you for reaching out to Vortexz Solutions. We have received your project details and will review them shortly. A team member will follow up within 24 hours.
          </p>
          <div className="pt-4">
            <button
              onClick={() => setSubmitStatus("idle")}
              className="px-6 py-2.5 rounded-lg bg-[#182231] hover:bg-[#1E293B] border border-[#1E293B] text-[#F8FAFC] text-sm font-semibold transition-colors"
            >
              Submit Another Inquiry
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-6">
          {submitStatus === "error" && (
            <div
              className="p-4 rounded-lg bg-red-950/40 border border-red-800/60 text-red-300 text-sm flex items-start gap-3"
              role="alert"
            >
              <AlertCircle className="w-5 h-5 shrink-0 mt-0.5 text-red-400" />
              <div>
                <p className="font-semibold">Submission failed</p>
                <p className="text-xs text-red-300/90 mt-0.5">{serverErrorMessage}</p>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Full Name */}
            <div>
              <label htmlFor="fullName" className="block text-xs font-semibold text-[#F8FAFC] uppercase tracking-wider mb-2">
                Full Name <span className="text-blue-400">*</span>
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Randimal Fernando"
                aria-invalid={!!errors.fullName}
                aria-describedby={errors.fullName ? "fullName-error" : undefined}
                className={`w-full px-4 py-3 rounded-lg bg-[#0D121A] border text-sm text-[#F8FAFC] placeholder-[#64748B] focus:outline-none transition-colors ${
                  errors.fullName
                    ? "border-red-500 focus:border-red-400"
                    : "border-[#1E293B] focus:border-[#3B82F6]"
                }`}
              />
              {errors.fullName && (
                <p id="fullName-error" className="mt-1.5 text-xs text-red-400">
                  {errors.fullName}
                </p>
              )}
            </div>

            {/* Business / Company */}
            <div>
              <label htmlFor="company" className="block text-xs font-semibold text-[#F8FAFC] uppercase tracking-wider mb-2">
                Business / Company
              </label>
              <input
                id="company"
                name="company"
                type="text"
                value={formData.company}
                onChange={handleChange}
                placeholder="Company or Venture Name"
                className="w-full px-4 py-3 rounded-lg bg-[#0D121A] border border-[#1E293B] text-sm text-[#F8FAFC] placeholder-[#64748B] focus:outline-none focus:border-[#3B82F6] transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-xs font-semibold text-[#F8FAFC] uppercase tracking-wider mb-2">
                Email Address <span className="text-blue-400">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="name@business.com"
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "email-error" : undefined}
                className={`w-full px-4 py-3 rounded-lg bg-[#0D121A] border text-sm text-[#F8FAFC] placeholder-[#64748B] focus:outline-none transition-colors ${
                  errors.email
                    ? "border-red-500 focus:border-red-400"
                    : "border-[#1E293B] focus:border-[#3B82F6]"
                }`}
              />
              {errors.email && (
                <p id="email-error" className="mt-1.5 text-xs text-red-400">
                  {errors.email}
                </p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-xs font-semibold text-[#F8FAFC] uppercase tracking-wider mb-2">
                Phone / WhatsApp (Optional)
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+94 77 ... or +61 4 ..."
                className="w-full px-4 py-3 rounded-lg bg-[#0D121A] border border-[#1E293B] text-sm text-[#F8FAFC] placeholder-[#64748B] focus:outline-none focus:border-[#3B82F6] transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Country */}
            <div>
              <label htmlFor="country" className="block text-xs font-semibold text-[#F8FAFC] uppercase tracking-wider mb-2">
                Country <span className="text-blue-400">*</span>
              </label>
              <select
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-[#0D121A] border border-[#1E293B] text-sm text-[#F8FAFC] focus:outline-none focus:border-[#3B82F6] transition-colors"
              >
                {COUNTRY_OPTIONS.map((c) => (
                  <option key={c} value={c} className="bg-[#0D121A] text-[#F8FAFC]">
                    {c}
                  </option>
                ))}
              </select>
            </div>

            {/* Service Required */}
            <div>
              <label htmlFor="service" className="block text-xs font-semibold text-[#F8FAFC] uppercase tracking-wider mb-2">
                Service Required <span className="text-blue-400">*</span>
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-[#0D121A] border border-[#1E293B] text-sm text-[#F8FAFC] focus:outline-none focus:border-[#3B82F6] transition-colors"
              >
                {SERVICES_OPTIONS.map((s) => (
                  <option key={s} value={s} className="bg-[#0D121A] text-[#F8FAFC]">
                    {s}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Budget Range */}
          <div>
            <label htmlFor="budget" className="block text-xs font-semibold text-[#F8FAFC] uppercase tracking-wider mb-2">
              Estimated Budget (Optional)
            </label>
            <select
              id="budget"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-[#0D121A] border border-[#1E293B] text-sm text-[#F8FAFC] focus:outline-none focus:border-[#3B82F6] transition-colors"
            >
              {BUDGET_OPTIONS.map((b) => (
                <option key={b} value={b} className="bg-[#0D121A] text-[#F8FAFC]">
                  {b}
                </option>
              ))}
            </select>
          </div>

          {/* Project Description */}
          <div>
            <label htmlFor="description" className="block text-xs font-semibold text-[#F8FAFC] uppercase tracking-wider mb-2">
              Project Description <span className="text-blue-400">*</span>
            </label>
            <textarea
              id="description"
              name="description"
              rows={4}
              value={formData.description}
              onChange={handleChange}
              placeholder="Tell us about the project goals, target audience, required features, and desired timeline..."
              aria-invalid={!!errors.description}
              aria-describedby={errors.description ? "description-error" : undefined}
              className={`w-full px-4 py-3 rounded-lg bg-[#0D121A] border text-sm text-[#F8FAFC] placeholder-[#64748B] focus:outline-none transition-colors ${
                errors.description
                  ? "border-red-500 focus:border-red-400"
                  : "border-[#1E293B] focus:border-[#3B82F6]"
              }`}
            />
            {errors.description && (
              <p id="description-error" className="mt-1.5 text-xs text-red-400">
                {errors.description}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3.5 px-6 rounded-lg bg-[#3B82F6] hover:bg-[#2563EB] disabled:opacity-50 text-[#F8FAFC] font-semibold text-sm flex items-center justify-center gap-2 shadow-sm hover:shadow-[0_0_20px_rgba(59,130,246,0.35)] transition-all"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Validating &amp; Sending...</span>
              </>
            ) : (
              <>
                <span>Send Inquiry</span>
                <Send className="w-4 h-4" />
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
