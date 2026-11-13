import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ThemeProvider } from "@/context/ThemeContext";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#070A0F" },
    { media: "(prefers-color-scheme: light)", color: "#F8FAFC" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://vortexzsolutions.com"),
  title: {
    default: "Vortexz Solutions | Modern Web & Software Development",
    template: "%s | Vortexz Solutions",
  },
  description:
    "Vortexz Solutions designs and develops high-impact digital experiences, scalable web applications, e-commerce stores, and cross-platform mobile apps for forward-thinking businesses in Sri Lanka and Australia.",
  keywords: [
    "Vortexz Solutions",
    "Web Development Sri Lanka",
    "Software Development Australia",
    "Next.js Development Agency",
    "Custom Web Systems",
    "Flutter Mobile App Development",
    "E-Commerce Architecture",
    "Frame.io Aesthetic Web Design",
    "Creative Frontend Agency Colombo Melbourne",
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
    title: "Vortexz Solutions | Modern Web & Software Development",
    description:
      "Digital solutions built for growing businesses. Custom websites, web systems, and mobile applications serving Sri Lanka and Australia.",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Vortexz Solutions - High-Impact Web and Software Engineering",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vortexz Solutions | Modern Web & Software Development",
    description:
      "Digital solutions built for growing businesses in Sri Lanka and Australia.",
    images: ["/og-image.svg"],
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
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
    logo: "https://vortexzsolutions.com/logo.png",
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
        addressLocality: "Melbourne",
        addressRegion: "VIC",
        addressCountry: "AU",
      },
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: "hello@vortexzsolutions.com",
        availableLanguage: ["English", "Sinhala"],
      },
    ],
  };

  return (
    <html lang="en" className={`light ${plusJakarta.variable} ${plusJakarta.className}`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('vortexz-theme');
                  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  var theme = saved || 'light';
                  if (theme === 'system') {
                    theme = prefersDark ? 'dark' : 'light';
                  }
                  if (theme === 'dark') {
                    document.documentElement.classList.add('dark');
                    document.documentElement.classList.remove('light');
                    document.documentElement.style.colorScheme = 'dark';
                  } else {
                    document.documentElement.classList.remove('dark');
                    document.documentElement.classList.add('light');
                    document.documentElement.style.colorScheme = 'light';
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${plusJakarta.className} ${plusJakarta.variable} ${inter.variable} antialiased bg-[var(--vortex-bg)] text-[var(--vortex-text)]`}>
        <ThemeProvider>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1 w-full flex flex-col">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
