import React from "react";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-[75vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-[var(--vortex-bg)] py-24 transition-colors">
      <div className="max-w-md w-full text-center space-y-6">
        {/* Subtle decorative mark */}
        <div className="relative w-20 h-20 mx-auto rounded-2xl bg-[var(--vortex-surface)] border border-[var(--vortex-border)] flex items-center justify-center shadow-sm">
          <span className="font-mono text-3xl font-black text-[#3B82F6]">404</span>
          <div className="absolute inset-1.5 rounded-xl border border-dashed border-[#3B82F6]/30" />
        </div>

        <div>
          <h1 className="text-3xl sm:text-4xl font-black text-[var(--vortex-text)] tracking-tight">
            Page Not Found
          </h1>
          <p className="mt-3 text-sm text-[var(--vortex-secondary-text)] leading-relaxed">
            The page you&apos;re looking for doesn&apos;t exist or may have been relocated.
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
