import React from "react";
import Link from "next/link";
import { MAIN_NAV, FOOTER_SERVICES, FOOTER_COMPANY, REGIONAL_PRESENCE, SOCIAL_LINKS } from "@/data/navigation";
import { ArrowUpRight, MapPin } from "lucide-react";

export function Footer() {
  const renderSocialIcon = (name: string) => {
    switch (name) {
      case "LinkedIn":
        return (
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.25c-.9 0-1.63.73-1.63 1.63s.73 1.63 1.63 1.63 1.63-.73 1.63-1.63-.73-1.63-1.63-1.63Z" />
          </svg>
        );
      case "GitHub":
        return (
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z" />
          </svg>
        );
      case "Instagram":
        return (
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069ZM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0Zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881Z" />
          </svg>
        );
      case "Facebook":
        return (
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073Z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <footer className="bg-[#070A0F] border-t border-[#1E293B] text-[#94A3B8] transition-colors">
      {/* Top Regional Strip */}
      <div className="border-b border-[#1E293B]/70 bg-[#0D121A]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12 items-center justify-between">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-lg bg-[#121923] border border-[#1E293B] flex items-center justify-center text-[#60A5FA] shrink-0 mt-0.5">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-[#F8FAFC]">Sri Lanka</span>
                  <span className="text-xs px-2 py-0.5 rounded bg-[#182231] text-[#94A3B8] font-mono">
                    {REGIONAL_PRESENCE.sriLanka.timeZone}
                  </span>
                </div>
                <p className="text-xs text-[#64748B] mt-1">{REGIONAL_PRESENCE.sriLanka.description}</p>
                <div className="flex items-center gap-4 mt-2 text-xs text-[#94A3B8]">
                  <a href={`mailto:${REGIONAL_PRESENCE.sriLanka.email}`} className="hover:text-[#60A5FA] transition-colors">
                    {REGIONAL_PRESENCE.sriLanka.email}
                  </a>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-lg bg-[#121923] border border-[#1E293B] flex items-center justify-center text-[#60A5FA] shrink-0 mt-0.5">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-[#F8FAFC]">Australia</span>
                  <span className="text-xs px-2 py-0.5 rounded bg-[#182231] text-[#94A3B8] font-mono">
                    {REGIONAL_PRESENCE.australia.timeZone}
                  </span>
                </div>
                <p className="text-xs text-[#64748B] mt-1">{REGIONAL_PRESENCE.australia.description}</p>
                <div className="flex items-center gap-4 mt-2 text-xs text-[#94A3B8]">
                  <a href={`mailto:${REGIONAL_PRESENCE.australia.email}`} className="hover:text-[#60A5FA] transition-colors">
                    {REGIONAL_PRESENCE.australia.email}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand treatment */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <div className="relative w-8 h-8 rounded-lg bg-[#0D121A] border border-[#1E293B] flex items-center justify-center">
                <span className="w-2.5 h-2.5 rounded-full bg-[#3B82F6]" />
              </div>
              <div>
                <span className="text-base font-extrabold tracking-wider text-[#F8FAFC] block leading-none">
                  VORTEXZ
                </span>
                <span className="text-[10px] font-semibold tracking-widest text-[#60A5FA] uppercase block leading-none mt-1">
                  SOLUTIONS
                </span>
              </div>
            </Link>

            <p className="text-sm text-[#94A3B8] leading-relaxed max-w-sm">
              Digital solutions for businesses that want to move forward. Engineering websites, custom systems, and mobile applications with purpose.
            </p>

            <div className="flex items-center gap-2 pt-2">
              {SOCIAL_LINKS.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Vortexz Solutions on ${item.name}`}
                  className="w-9 h-9 rounded-lg bg-[#0D121A] border border-[#1E293B] flex items-center justify-center text-[#94A3B8] hover:text-[#F8FAFC] hover:border-[#3B82F6]/50 hover:bg-[#121923] transition-colors"
                >
                  {renderSocialIcon(item.name)}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation links */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#F8FAFC]">
              Navigation
            </h3>
            <ul className="space-y-2 text-sm">
              {MAIN_NAV.map((nav) => (
                <li key={nav.href}>
                  <Link
                    href={nav.href}
                    className="hover:text-[#F8FAFC] transition-colors block py-0.5"
                  >
                    {nav.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Services */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#F8FAFC]">
              Services
            </h3>
            <ul className="space-y-2 text-sm">
              {FOOTER_SERVICES.map((service) => (
                <li key={service.label}>
                  <Link
                    href={service.href}
                    className="hover:text-[#F8FAFC] transition-colors block py-0.5"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Support */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#F8FAFC]">
              Company
            </h3>
            <ul className="space-y-2 text-sm">
              {FOOTER_COMPANY.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="hover:text-[#F8FAFC] transition-colors block py-0.5"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="pt-4 border-t border-[#1E293B]/70">
              <span className="text-xs font-semibold text-[#64748B] block uppercase tracking-wider mb-2">
                Have an inquiry?
              </span>
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#60A5FA] hover:text-[#3B82F6] transition-colors"
              >
                Start a conversation
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom copyright row */}
        <div className="mt-12 pt-8 border-t border-[#1E293B] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#64748B]">
          <p>© 2026 Vortexz Solutions. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-[#94A3B8] transition-colors">
              Sri Lanka &amp; Australia Technology Partner
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
