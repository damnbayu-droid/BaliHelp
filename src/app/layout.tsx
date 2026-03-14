import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { getAllStructuredData } from "./structured-data";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#020617" },
  ],
  colorScheme: "light dark",
};

export const metadata: Metadata = {
  title: "Company Formation in Bali | PT PMA Registration & Business Setup Indonesia",
  description: "Professional company formation and PT PMA registration services in Bali. We help foreign investors establish businesses legally in Indonesia including NIB, OSS, and business licensing.",
  keywords: [
    "company formation bali",
    "pt pma registration bali",
    "business registration indonesia",
    "start company bali",
    "foreign company indonesia",
    "foreign investment Indonesia",
    "business setup Bali",
    "company registration Indonesia",
    "Indonesian business license",
    "NIB registration",
    "OSS Indonesia",
    "investor KITAS"
  ],
  authors: [{ name: "Bali Help", url: "https://balihelp.id" }],
  creator: "Bali Help",
  publisher: "Bali Help",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://balihelp.id",
    title: "Company Formation in Bali | PT PMA Registration Indonesia",
    description: "Start your company in Bali with professional PT PMA registration and business licensing services for foreign investors.",
    siteName: "Bali Help",
    images: [
      {
        url: "https://balihelp.id/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Company Formation Bali"
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Company Formation in Bali | PT PMA Registration Indonesia",
    description: "Professional company registration and PT PMA setup services in Bali for international entrepreneurs.",
    images: ["https://balihelp.id/og-image.webp"],
  },
  icons: {
    icon: [
      { url: "/Logo.webp", sizes: "any", type: "image/webp" },
    ],
    apple: [
      { url: "/Logo.webp", sizes: "any", type: "image/webp" },
    ],
  },
  manifest: "/manifest.json",
  alternates: {
    canonical: "https://balihelp.id/",
  },
  category: "business",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = getAllStructuredData();

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://balihelp.com" />
        <link rel="alternate" hrefLang="en" href="https://balihelp.com" />
        <link rel="alternate" hrefLang="id" href="https://balihelp.com/id" />
        
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://wa.me" />
        <link rel="preconnect" href="https://forms.gle.com" />
        
        {/* Preload critical resources */}
        <link rel="preload" href="/Logo.webp" as="image" type="image/webp" fetchPriority="high" />
        
        {/* Service Worker Registration */}
        <script dangerouslySetInnerHTML={{
          __html: `
            if ('serviceWorker' in navigator) {
              window.addEventListener('load', () => {
                navigator.serviceWorker.register('/sw.js').then((registration) => {
                  console.log('SW registered: ', registration.scope);
                }).catch((error) => {
                  console.log('SW registration failed: ', error);
                });
              });
            }
          `,
        }} />
        
        {/* Organization Entity Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Bali Help",
              "url": "https://balihelp.id",
              "logo": "https://balihelp.id/Logo.webp",
              "sameAs": ["https://indonesianvisas.com"],
              "provider": {
                "@type": "Organization",
                "name": "PT Indonesian Visas Agency"
              }
            }),
          }}
        />
        {/* ProfessionalService Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "Bali Help",
              "url": "https://balihelp.id",
              "logo": "https://balihelp.id/Logo.webp",
              "image": "https://balihelp.id/og-image.webp",
              "description": "Company formation and business registration services in Bali and Indonesia for foreign investors.",
              "areaServed": "Indonesia",
              "provider": {
                "@type": "Organization",
                "name": "PT Indonesian Visas Agency"
              }
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <div id="skip-to-content" className="sr-only">
          <a href="#main-content" className="focus:outline-none focus-visible:ring-2 focus:ring-purple-600">
            Skip to main content
          </a>
        </div>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
