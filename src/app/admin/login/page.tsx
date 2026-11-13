"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { VortexzLogo } from "@/components/ui/VortexzLogo";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/admin/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (res.ok) {
        router.push("/admin/projects");
      } else {
        const data = await res.json() as { error?: string };
        setError(data.error ?? "Login failed. Check your credentials.");
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--vortex-bg)] px-4 relative">
      {/* Top right theme toggle */}
      <div className="absolute top-6 right-6 z-20">
        <ThemeToggle />
      </div>

      {/* Background grid */}
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(var(--vortex-border) 1px, transparent 1px), linear-gradient(90deg, var(--vortex-border) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="w-full max-w-sm relative z-10">
        {/* Logo / Brand */}
        <div className="text-center mb-8 flex flex-col items-center">
          <div className="mb-4">
            <VortexzLogo size="lg" showTagline={false} />
          </div>
          <h1 className="text-xl font-bold text-[var(--vortex-text)]">Admin Portal</h1>
          <p className="text-sm text-[var(--vortex-muted)] mt-1">Sign in to manage your portfolio</p>
        </div>

        {/* Card */}
        <div className="bg-[var(--vortex-card)] border border-[var(--vortex-border)] rounded-2xl p-6 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-[var(--vortex-secondary-text)] mb-1.5 uppercase tracking-wider">
                Email Address
              </label>
              <input
                type="email"
                required
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@vortexzsolutions.com"
                className="w-full px-3.5 py-2.5 rounded-lg bg-[var(--vortex-bg)] border border-[var(--vortex-border)] text-[var(--vortex-text)] text-sm placeholder:text-[var(--vortex-muted)] focus:outline-none focus:border-[var(--vortex-primary)] focus:ring-1 focus:ring-[var(--vortex-primary)] transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-[var(--vortex-secondary-text)] mb-1.5 uppercase tracking-wider">
                Password
              </label>
              <input
                type="password"
                required
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••"
                className="w-full px-3.5 py-2.5 rounded-lg bg-[var(--vortex-bg)] border border-[var(--vortex-border)] text-[var(--vortex-text)] text-sm placeholder:text-[var(--vortex-muted)] focus:outline-none focus:border-[var(--vortex-primary)] focus:ring-1 focus:ring-[var(--vortex-primary)] transition-colors"
              />
            </div>

            {error && (
              <div className="flex items-start gap-2 bg-red-500/10 border border-red-500/20 rounded-lg px-3.5 py-2.5">
                <svg className="w-4 h-4 text-red-400 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-sm text-red-400">{error}</p>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-2.5 px-4 rounded-lg bg-[var(--vortex-primary)] hover:bg-blue-500 text-white font-medium text-sm transition-colors disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                  </svg>
                  Signing in...
                </>
              ) : (
                "Sign In"
              )}
            </button>
          </form>
        </div>

        <p className="text-center text-xs text-[var(--vortex-muted)] mt-6">
          Vortexz Solutions &copy; {new Date().getFullYear()} &mdash; Admin Access Only
        </p>
      </div>
    </div>
  );
}
