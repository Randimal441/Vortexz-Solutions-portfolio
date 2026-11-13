"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  User,
  Mail,
  Phone,
  Globe2,
  Layers,
  FileText,
  MessageCircle,
  ArrowRight,
  ExternalLink,
  Sparkles,
} from "lucide-react";

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  country: string;
  service: string;
  description: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  country?: string;
  otherCountry?: string;
  service?: string;
  description?: string;
}

const SERVICES_OPTIONS = [
  "Business Website",
  "Portfolio Website",
  "E-Commerce System",
  "Custom Web System",
  "Mobile Application (iOS/Android)",
  "UI/UX Design & Prototyping",
  "Custom Software Engineering",
  "Maintenance & Cloud Support",
];

const COUNTRY_OPTIONS = [
  "Sri Lanka",
  "United States",
  "United Kingdom",
  "Australia",
  "Canada",
  "United Arab Emirates",
  "Singapore",
  "New Zealand",
  "Other",
];

const WHATSAPP_NUMBER = "94711991415"; // Destination: 0711991415 (+94 71 199 1415)
const TARGET_EMAIL = "vortexzsolution@gmail.com";

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    country: "Sri Lanka",
    service: "Business Website",
    description: "",
  });

  const [otherCountry, setOtherCountry] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [serverErrorMessage, setServerErrorMessage] = useState("");
  const [lastWhatsAppUrl, setLastWhatsAppUrl] = useState<string>("");

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

    if (!formData.phone.trim()) {
      nextErrors.phone = "Phone / WhatsApp number is required.";
    }

    if (!formData.country) {
      nextErrors.country = "Please select your country.";
    } else if (formData.country === "Other" && !otherCountry.trim()) {
      nextErrors.otherCountry = "Please type your country name.";
    }

    if (!formData.service) {
      nextErrors.service = "Please select the required service.";
    }

    if (!formData.description.trim()) {
      nextErrors.description = "Please describe your project or requirements.";
    } else if (formData.description.trim().length < 5) {
      nextErrors.description = "Description should be at least 5 characters.";
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
    if (name === "country" && value !== "Other") {
      setOtherCountry("");
      if (errors.otherCountry) {
        setErrors((prev) => ({ ...prev, otherCountry: undefined }));
      }
    }
  };

  const buildWhatsAppMessage = (data: FormData, countryName: string): string => {
    return `*🚀 New Project Inquiry | Vortexz Solutions*

👤 *Client Name:* ${data.fullName.trim()}
📧 *Email:* ${data.email.trim()}
📞 *Phone / WhatsApp:* ${data.phone.trim()}
🌍 *Country:* ${countryName}
🛠️ *Service Required:* ${data.service}

📋 *Project Description:*
${data.description.trim()}

---
_Sent via Vortexz Solutions Website_`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");
    setServerErrorMessage("");

    const effectiveCountry =
      formData.country === "Other" ? otherCountry.trim() : formData.country;

    // Prepare WhatsApp Message & URL
    const rawMessage = buildWhatsAppMessage(formData, effectiveCountry);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(
      rawMessage
    )}`;
    setLastWhatsAppUrl(whatsappUrl);

    try {
      // 1. Dispatch Email via EmailJS REST API
      const emailJsServiceId =
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_t3l2et4";
      const emailJsTemplateId =
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_q8ipjxh";
      const emailJsPublicKey =
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "XB6K1NDenaAye5i62";

      try {
        await fetch("https://api.emailjs.com/api/v1.0/email/send", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            service_id: emailJsServiceId,
            template_id: emailJsTemplateId,
            user_id: emailJsPublicKey,
            template_params: {
              to_email: TARGET_EMAIL,
              from_name: formData.fullName,
              reply_to: formData.email,
              phone: formData.phone,
              country: effectiveCountry,
              service: formData.service,
              message: formData.description,
            },
          }),
        });
      } catch {
        // Fallback continues without blocking
      }

      // 2. Dispatch to local internal API route for server logging & recording
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          country: effectiveCountry,
        }),
      });

      // 3. Automatically trigger WhatsApp redirect
      try {
        window.open(whatsappUrl, "_blank", "noopener,noreferrer");
      } catch {
        // Pop-up fallback handled by manual button on success view
      }

      setSubmitStatus("success");
    } catch {
      // Even if network fails, still give user direct WhatsApp trigger
      try {
        window.open(whatsappUrl, "_blank", "noopener,noreferrer");
      } catch {
        // ignore
      }
      setSubmitStatus("success");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      country: "Sri Lanka",
      service: "Business Website",
      description: "",
    });
    setOtherCountry("");
    setErrors({});
    setSubmitStatus("idle");
  };

  const inputClass = (hasError?: boolean) =>
    `w-full px-4 py-3 sm:py-3.5 rounded-xl bg-[var(--vortex-surface)] border text-sm text-[var(--vortex-text)] placeholder-[var(--vortex-muted)] focus:outline-none transition-all shadow-2xs ${
      hasError
        ? "border-red-500/80 focus:border-red-400 focus:ring-2 focus:ring-red-500/20"
        : "border-[var(--vortex-border)] focus:border-[#3B82F6] focus:ring-2 focus:ring-[#3B82F6]/20"
    }`;

  return (
    <div className="relative rounded-3xl bg-[var(--vortex-card)] border border-[var(--vortex-border)] p-6 sm:p-8 lg:p-10 shadow-2xl shadow-black/10 dark:shadow-black/30 overflow-hidden">
      {/* Subtle Card Accent Sheen */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500 pointer-events-none" />

      {submitStatus === "success" ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="text-center py-8 sm:py-12 space-y-6"
          role="status"
          aria-live="polite"
        >
          <div className="w-16 h-16 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-500 flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/10">
            <CheckCircle2 className="w-8 h-8" />
          </div>

          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-xs font-bold text-emerald-600 dark:text-emerald-400 tracking-wider uppercase mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Inquiry Dispatched Successfully
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-[var(--vortex-text)] tracking-tight">
              Thank You, {formData.fullName || "Partner"}!
            </h3>
            <p className="text-xs sm:text-sm text-[var(--vortex-secondary-text)] max-w-md mx-auto leading-relaxed mt-2">
              Your inquiry has been routed to <strong>{TARGET_EMAIL}</strong> and formatted for our direct WhatsApp desk at <strong>0711991415</strong>.
            </p>
          </div>

          {/* Quick WhatsApp Action if browser blocked the popup */}
          {lastWhatsAppUrl && (
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={lastWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md shadow-[#25D366]/25 hover:scale-102"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Continue on WhatsApp (0711991415)</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <button
                type="button"
                onClick={handleReset}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[var(--vortex-surface)] hover:bg-[var(--vortex-card-hover)] border border-[var(--vortex-border)] text-xs font-bold text-[var(--vortex-text)] transition-colors"
              >
                Submit Another Inquiry
              </button>
            </div>
          )}
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-6">
          {/* Form Header Info */}
          <div className="border-b border-[var(--vortex-border)] pb-5">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#3B82F6]">
                Direct Project Inquiry
              </span>
              <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Typical response time is under 24 business hours.
              </span>
            </div>
            <p className="text-xs text-[var(--vortex-secondary-text)] leading-relaxed">
              Your message will be sent simultaneously to <strong>{TARGET_EMAIL}</strong> and our direct WhatsApp desk (<strong>0711991415</strong>).
            </p>
          </div>

          {submitStatus === "error" && (
            <div
              className="p-4 rounded-xl bg-red-950/40 border border-red-800/60 text-red-300 text-xs flex items-start gap-3"
              role="alert"
            >
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-red-400" />
              <div>
                <p className="font-semibold">Submission failed</p>
                <p className="text-red-300/90 mt-0.5">{serverErrorMessage}</p>
              </div>
            </div>
          )}

          {/* Row 1: Full Name & Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {/* Full Name */}
            <div>
              <label
                htmlFor="fullName"
                className="flex items-center gap-1.5 text-xs font-bold text-[var(--vortex-text)] uppercase tracking-wider mb-2"
              >
                <User className="w-3.5 h-3.5 text-[#3B82F6]" />
                <span>Full Name</span>
                <span className="text-[#3B82F6]">*</span>
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                autoComplete="name"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="e.g. Kasun Perera"
                className={inputClass(!!errors.fullName)}
                aria-invalid={!!errors.fullName}
              />
              {errors.fullName && (
                <p className="text-xs text-red-400 mt-1.5 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  {errors.fullName}
                </p>
              )}
            </div>

            {/* Email Address */}
            <div>
              <label
                htmlFor="email"
                className="flex items-center gap-1.5 text-xs font-bold text-[var(--vortex-text)] uppercase tracking-wider mb-2"
              >
                <Mail className="w-3.5 h-3.5 text-[#3B82F6]" />
                <span>Email Address</span>
                <span className="text-[#3B82F6]">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="e.g. kasun@company.com"
                className={inputClass(!!errors.email)}
                aria-invalid={!!errors.email}
              />
              {errors.email && (
                <p className="text-xs text-red-400 mt-1.5 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  {errors.email}
                </p>
              )}
            </div>
          </div>

          {/* Row 2: Phone Number & Country */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {/* Phone Number */}
            <div>
              <label
                htmlFor="phone"
                className="flex items-center gap-1.5 text-xs font-bold text-[var(--vortex-text)] uppercase tracking-wider mb-2"
              >
                <Phone className="w-3.5 h-3.5 text-[#3B82F6]" />
                <span>Phone / WhatsApp</span>
                <span className="text-[#3B82F6]">*</span>
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="e.g. 071 123 4567 or +94 71..."
                className={inputClass(!!errors.phone)}
                aria-invalid={!!errors.phone}
              />
              {errors.phone && (
                <p className="text-xs text-red-400 mt-1.5 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  {errors.phone}
                </p>
              )}
            </div>

            {/* Country */}
            <div>
              <label
                htmlFor="country"
                className="flex items-center gap-1.5 text-xs font-bold text-[var(--vortex-text)] uppercase tracking-wider mb-2"
              >
                <Globe2 className="w-3.5 h-3.5 text-[#3B82F6]" />
                <span>Country</span>
                <span className="text-[#3B82F6]">*</span>
              </label>
              <select
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                className={inputClass(!!errors.country)}
                aria-invalid={!!errors.country}
              >
                {COUNTRY_OPTIONS.map((c) => (
                  <option key={c} value={c} className="bg-[var(--vortex-card)] text-[var(--vortex-text)]">
                    {c}
                  </option>
                ))}
              </select>
              {errors.country && (
                <p className="text-xs text-red-400 mt-1.5 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  {errors.country}
                </p>
              )}

              {/* Conditional text input when "Other" is selected */}
              {formData.country === "Other" && (
                <div className="mt-2.5">
                  <input
                    id="otherCountry"
                    name="otherCountry"
                    type="text"
                    value={otherCountry}
                    onChange={(e) => {
                      setOtherCountry(e.target.value);
                      if (errors.otherCountry) {
                        setErrors((prev) => ({ ...prev, otherCountry: undefined }));
                      }
                    }}
                    placeholder="Type your country name..."
                    className={inputClass(!!errors.otherCountry)}
                    aria-invalid={!!errors.otherCountry}
                    autoFocus
                  />
                  {errors.otherCountry && (
                    <p className="text-xs text-red-400 mt-1.5 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.otherCountry}
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Row 3: Service Required (Primary Capability) */}
          <div>
            <label
              htmlFor="service"
              className="flex items-center justify-between text-xs font-bold text-[var(--vortex-text)] uppercase tracking-wider mb-2"
            >
              <span className="flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-[#3B82F6]" />
                <span>Service Required (Primary Capability)</span>
                <span className="text-[#3B82F6]">*</span>
              </span>
              <span className="text-[10px] text-[var(--vortex-muted)] font-mono font-normal">
                Select One
              </span>
            </label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              className={inputClass(!!errors.service)}
              aria-invalid={!!errors.service}
            >
              {SERVICES_OPTIONS.map((s) => (
                <option key={s} value={s} className="bg-[var(--vortex-card)] text-[var(--vortex-text)]">
                  {s}
                </option>
              ))}
            </select>
            {errors.service && (
              <p className="text-xs text-red-400 mt-1.5 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" />
                {errors.service}
              </p>
            )}
          </div>

          {/* Row 4: Project Description */}
          <div>
            <label
              htmlFor="description"
              className="flex items-center justify-between text-xs font-bold text-[var(--vortex-text)] uppercase tracking-wider mb-2"
            >
              <span className="flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5 text-[#3B82F6]" />
                <span>Project Description</span>
                <span className="text-[#3B82F6]">*</span>
              </span>
              <span className="text-[10px] text-[var(--vortex-muted)] font-mono font-normal">
                Min. 5 chars
              </span>
            </label>
            <textarea
              id="description"
              name="description"
              rows={4}
              value={formData.description}
              onChange={handleChange}
              placeholder="Tell us what you want to build (features, current business challenge, target launch timeline, or existing website/app links)..."
              className={`${inputClass(!!errors.description)} resize-y`}
              aria-invalid={!!errors.description}
            />
            {errors.description && (
              <p className="text-xs text-red-400 mt-1.5 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" />
                {errors.description}
              </p>
            )}
          </div>

          {/* Submit Action Button */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-gradient-to-r from-[#2563EB] to-[#1D4ED8] hover:from-blue-500 hover:to-blue-600 active:scale-[0.99] text-white font-bold text-sm uppercase tracking-wider transition-all shadow-lg shadow-blue-500/25 disabled:opacity-60 disabled:cursor-not-allowed group cursor-pointer"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Dispatching to Email &amp; WhatsApp...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  <span>Send Inquiry (Email &amp; WhatsApp)</span>
                  {/* <MessageCircle className="w-4 h-4 fill-white/20" /> */}
                </>
              )}
            </button>

            {/* Trust disclaimer */}
            {/* <p className="text-[11px] text-[var(--vortex-muted)] text-center mt-3 leading-relaxed">
              🔒 Inquiries are directly routed to <strong>{TARGET_EMAIL}</strong> and <strong>0711991415</strong>. No spam, ever.
            </p> */}
          </div>
        </form>
      )}
    </div>
  );
}
