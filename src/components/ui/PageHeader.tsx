import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface PageHeaderProps {
  badge: string;
  title: string;
  description: string;
  breadcrumbs?: { label: string; href?: string }[];
}

export function PageHeader({
  badge,
  title,
  description,
  breadcrumbs,
}: PageHeaderProps) {
  return (
    <div className="relative pt-32 pb-16 lg:pt-36 lg:pb-20 border-b border-[#1E293B] bg-[#070A0F] overflow-hidden">
      {/* Subtle top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[250px] bg-blue-600/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Breadcrumb row */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav className="flex items-center gap-2 text-xs text-[#64748B] mb-6" aria-label="Breadcrumbs">
            <Link href="/" className="hover:text-[#94A3B8] transition-colors">
              Home
            </Link>
            {breadcrumbs.map((crumb, idx) => (
              <React.Fragment key={idx}>
                <ChevronRight className="w-3.5 h-3.5 text-[#1E293B]" />
                {crumb.href ? (
                  <Link href={crumb.href} className="hover:text-[#94A3B8] transition-colors">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-[#94A3B8]">{crumb.label}</span>
                )}
              </React.Fragment>
            ))}
          </nav>
        )}

        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#121923] border border-[#1E293B] text-xs font-semibold tracking-wider text-[#60A5FA] uppercase mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]" />
          {badge}
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#F8FAFC] tracking-tight leading-tight max-w-3xl">
          {title}
        </h1>

        <p className="mt-4 text-base sm:text-lg text-[#94A3B8] max-w-2xl leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
