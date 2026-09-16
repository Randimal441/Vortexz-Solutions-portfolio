import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const viewport: Viewport = {
  themeColor: "#070A0F",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://vortexzsolutions.com"),
  title: {
    default: "Vortexz Solutions | Web & Software Development",
    template: "%s | Vortexz Solutions",
  },
  description:
    "Vortexz Solutions designs and develops websites, e-commerce platforms, custom software systems and mobile applications for growing businesses in Sri Lanka and Australia.",
  keywords: [
    "Vortexz Solutions",
    "Web Development Sri Lanka",
    "Software Development Australia",
    "Next.js Development",
    "Custom Web Systems",
    "Mobile App Development Flutter",
    "E-Commerce Development",
    "UI/UX Design Colombo Melbourne",
  ],
  authors: [{ name: "Vortexz Solutions" }],
  creator: "Vortexz Solutions",
  publisher: "Vortexz Solutions",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://vortexzsolutions.com",
    siteName: "Vortexz Solutions",
    title: "Vortexz Solutions | Web & Software Development",
    description:
      "Digital solutions built for growing businesses. Custom websites, web systems, and mobile applications serving Sri Lanka and Australia.",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Vortexz Solutions - Web and Software Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vortexz Solutions | Web & Software Development",
    description:
      "Digital solutions built for growing businesses in Sri Lanka and Australia.",
    images: ["/og-image.svg"],
  },
  icons: {
    icon: "/vortexz-mark.svg",
    apple: "/vortexz-mark.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Vortexz Solutions",
    url: "https://vortexzsolutions.com",
    logo: "https://vortexzsolutions.com/vortexz-mark.svg",
    description:
      "Vortexz Solutions designs and develops websites, e-commerce platforms, custom web systems and mobile applications for businesses in Sri Lanka and Australia.",
    address: [
      {
        "@type": "PostalAddress",
        addressLocality: "Colombo",
        addressCountry: "LK",
      },
      {
        "@type": "PostalAddress",
        addressLocality: "Sydney",
        addressCountry: "AU",
      },
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer service",
        email: "hello@vortexzsolutions.com",
        availableLanguage: ["English", "Sinhala"],
      },
    ],
    sameAs: [
      "https://linkedin.com/company/vortexz-solutions",
      "https://github.com/vortexz-solutions",
    ],
  };

  return (
    <html lang="en" className={`${inter.variable} dark`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#070A0F] text-[#F8FAFC] antialiased selection:bg-[#3B82F6] selection:text-white">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
