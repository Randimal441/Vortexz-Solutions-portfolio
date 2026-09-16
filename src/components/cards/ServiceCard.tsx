"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Globe, Briefcase, ShoppingBag, Layers, Smartphone, Layout, Code2, ShieldCheck } from "lucide-react";
import { ServiceItem } from "@/data/services";

interface ServiceCardProps {
  service: ServiceItem;
  showDetails?: boolean;
}

export function ServiceCard({ service, showDetails = false }: ServiceCardProps) {
  const getIcon = (iconName: string) => {
    const iconClass = "w-6 h-6 text-[#60A5FA] group-hover:text-[#3B82F6] transition-colors";
    switch (iconName) {
      case "Globe":
        return <Globe className={iconClass} />;
      case "Briefcase":
        return <Briefcase className={iconClass} />;
      case "ShoppingBag":
        return <ShoppingBag className={iconClass} />;
      case "Layers":
        return <Layers className={iconClass} />;
      case "Smartphone":
        return <Smartphone className={iconClass} />;
      case "Layout":
        return <Layout className={iconClass} />;
      case "Code2":
        return <Code2 className={iconClass} />;
      case "ShieldCheck":
        return <ShieldCheck className={iconClass} />;
      default:
        return <Globe className={iconClass} />;
    }
  };

  return (
    <div className="group relative flex flex-col justify-between p-6 sm:p-7 rounded-xl bg-[#121923] border border-[#1E293B] hover:border-[#3B82F6]/50 hover:bg-[#182231] transition-all duration-300 shadow-sm hover:shadow-[0_8px_30px_rgba(0,0,0,0.4)]">
      <div>
        {/* Card Header: Number and Icon */}
        <div className="flex items-center justify-between mb-6">
          <div className="w-12 h-12 rounded-lg bg-[#0D121A] border border-[#1E293B] group-hover:border-[#3B82F6]/40 flex items-center justify-center transition-colors">
            {getIcon(service.iconName)}
          </div>
          <span className="font-mono text-sm font-bold text-[#64748B] group-hover:text-[#60A5FA] transition-colors">
            {service.number}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg sm:text-xl font-bold text-[#F8FAFC] group-hover:text-white transition-colors mb-3">
          {service.title}
        </h3>

        {/* Short Description */}
        <p className="text-sm text-[#94A3B8] leading-relaxed mb-6">
          {showDetails ? service.fullDescription : service.shortDescription}
        </p>

        {/* Features list if in detailed view */}
        {showDetails && (
          <div className="mb-6 pt-4 border-t border-[#1E293B]">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#60A5FA] mb-3">
              Capabilities &amp; Features:
            </p>
            <ul className="space-y-2">
              {service.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs text-[#94A3B8]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] shrink-0 mt-1.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Technologies tags */}
        {service.technologies && service.technologies.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-6">
            {service.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 rounded text-[11px] font-mono bg-[#0D121A] text-[#64748B] border border-[#1E293B] group-hover:border-[#3B82F6]/20 group-hover:text-[#94A3B8] transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Action CTA link */}
      <div className="pt-4 border-t border-[#1E293B]/70 flex items-center justify-between">
        <Link
          href={`/services#${service.id}`}
          className="inline-flex items-center gap-2 text-xs font-semibold text-[#60A5FA] group-hover:text-[#3B82F6] transition-colors"
        >
          <span>Explore Service</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
        </Link>
        <span className="text-[11px] text-[#64748B]">LK &amp; AU</span>
      </div>
    </div>
  );
}
