import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-[75vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-[#070A0F] py-24">
      <div className="max-w-md w-full text-center space-y-6">
        {/* Subtle decorative mark */}
        <div className="relative w-20 h-20 mx-auto rounded-2xl bg-[#0D121A] border border-[#1E293B] flex items-center justify-center">
          <span className="font-mono text-3xl font-black text-[#60A5FA]">404</span>
          <div className="absolute inset-1.5 rounded-xl border border-dashed border-[#3B82F6]/30" />
        </div>

        <div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#F8FAFC]">
            Page Not Found
          </h1>
          <p className="mt-3 text-sm text-[#94A3B8] leading-relaxed">
            The page you're looking for doesn't exist or may have moved.
          </p>
        </div>

        <div className="pt-2 flex justify-center">
          <Button href="/" variant="primary" size="md" showArrow>
            Back to Home
          </Button>
        </div>
      </div>
    </div>
  );
}
