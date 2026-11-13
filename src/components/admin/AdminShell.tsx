"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { VortexzLogo } from "@/components/ui/VortexzLogo";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

const NAV = [
  {
    label: "Projects",
    href: "/admin/projects",
    icon: (
      <svg className="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 018.25 20.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
      </svg>
    ),
  },
];

export function AdminShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [loggingOut, setLoggingOut] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  async function handleLogout() {
    setLoggingOut(true);
    await fetch("/api/admin/auth", { method: "DELETE" });
    router.push("/admin/login");
  }

  return (
    <div className="min-h-screen flex bg-[var(--vortex-bg)] text-[var(--vortex-text)] transition-colors duration-200">
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-20 bg-black/60 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-30 w-64 bg-[var(--vortex-card)] border-r border-[var(--vortex-border)] flex flex-col transition-all duration-300 lg:translate-x-0 lg:sticky lg:top-0 lg:h-screen lg:shrink-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Logo area */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-[var(--vortex-border)]">
          <Link href="/admin/projects" className="flex items-center gap-2">
            <VortexzLogo size="sm" showTagline={false} />
          </Link>
          <ThemeToggle />
        </div>

        {/* Nav */}
        <nav className="flex-1 px-3 py-4 space-y-0.5">
          <p className="text-[10px] font-semibold uppercase tracking-widest text-[var(--vortex-muted)] px-2 mb-3">
            Content
          </p>
          {NAV.map((item) => {
            const active =
              pathname === item.href || pathname.startsWith(item.href + "/");
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setSidebarOpen(false)}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  active
                    ? "bg-[var(--vortex-primary)] text-white"
                    : "text-[var(--vortex-secondary-text)] hover:bg-[var(--vortex-card-hover)] hover:text-[var(--vortex-text)]"
                }`}
              >
                {item.icon}
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="px-3 py-4 border-t border-[var(--vortex-border)] space-y-2">
          <Link
            href="/"
            target="_blank"
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-[var(--vortex-muted)] hover:text-[var(--vortex-text)] hover:bg-[var(--vortex-card-hover)] transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
            </svg>
            View Site
          </Link>
          <button
            onClick={handleLogout}
            disabled={loggingOut}
            className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-[var(--vortex-muted)] hover:text-red-400 hover:bg-red-500/10 transition-colors disabled:opacity-50"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
            </svg>
            {loggingOut ? "Signing out..." : "Sign Out"}
          </button>
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Mobile topbar */}
        <div className="lg:hidden flex items-center justify-between px-4 py-3 border-b border-[var(--vortex-border)] bg-[var(--vortex-card)]">
          <button
            onClick={() => setSidebarOpen(true)}
            className="p-1.5 rounded-lg text-[var(--vortex-muted)] hover:text-[var(--vortex-text)] hover:bg-[var(--vortex-card-hover)] transition-colors"
            aria-label="Open sidebar"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
          <div className="flex items-center gap-2">
            <VortexzLogo size="sm" showTagline={false} />
          </div>
          <ThemeToggle />
        </div>

        <main className="flex-1 overflow-auto">{children}</main>
      </div>
    </div>
  );
}
