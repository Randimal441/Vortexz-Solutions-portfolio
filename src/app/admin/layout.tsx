import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin | Vortexz Solutions",
  description: "Vortexz Solutions Admin Panel",
  robots: { index: false, follow: false },
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="w-full min-h-screen bg-[var(--vortex-bg)] text-[var(--vortex-text)]">{children}</div>;
}
