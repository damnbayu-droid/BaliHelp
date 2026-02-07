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
  title: {
    default: "Bali Company Formation | PT PMA Registration Indonesia | Business Setup Services",
    template: "%s | Bali Help"
  },
  description: "Expert company formation in Bali and Indonesia. PT PMA registration, NIB & OSS licensing, business setup for foreign investors. Start your company in Bali with our comprehensive services. Fast, reliable, and fully compliant.",
  keywords: [
    "Bali company formation",
    "PT PMA Indonesia",
    "foreign investment Indonesia",
    "business setup Bali",
    "company registration Indonesia",
    "Indonesian business license",
    "NIB registration",
    "OSS Indonesia",
    "investor KITAS",
    "PT PMDN",
    "Bali business consultant"
  ],
  authors: [{ name: "Bali Help", url: "https://balihelp.com" }],
  creator: "Bali Help",
  publisher: "Bali Help",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://balihelp.com",
    title: "Bali Company Formation | PT PMA Registration Indonesia | Business Setup Services",
    description: "Expert company formation in Bali and Indonesia. PT PMA registration, NIB & OSS licensing, business setup for foreign investors.",
    siteName: "Bali Help",
    images: [
      {
        url: "https://balihelp.com/logo.png",
        width: 512,
        height: 512,
        alt: "Bali Help Logo"
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bali Company Formation | PT PMA Registration Indonesia | Business Setup Services",
    description: "Expert company formation in Bali and Indonesia. PT PMA registration, NIB & OSS licensing, business setup for foreign investors.",
    images: ["https://balihelp.com/logo.png"],
    creator: "@balihelp",
  },
  icons: {
    icon: [
      { url: "/logo.png", sizes: "any", type: "image/png" },
      { url: "/favicon.ico", sizes: "32x32", type: "image/x-icon" },
    ],
    apple: [
      { url: "/logo.png", sizes: "any", type: "image/png" },
    ],
  },
  manifest: "/manifest.json",
  alternates: {
    canonical: "https://balihelp.com",
    languages: {
      'en-US': 'https://balihelp.com',
      'id-ID': 'https://balihelp.com/id',
    },
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
        
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://wa.me" />
        <link rel="preconnect" href="https://forms.gle.com" />
        
        {/* Preload critical resources */}
        <link rel="preload" href="/logo.png" as="image" type="image/png" fetchPriority="high" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        
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
        
        {/* Structured Data JSON-LD */}
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
