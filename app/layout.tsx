import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { FloatingActions } from "@/components/layout/FloatingActions";
import { siteDescription, siteName, siteUrl, ogImage } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const homeTitle = "Physiotherapy Clinic in Varanasi | R D Physiotherapy";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: homeTitle,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  keywords: [
    "physiotherapy clinic in Varanasi",
    "physiotherapist near BHU Varanasi",
    "physiotherapy in Susuwahi",
    "rehabilitation centre in Varanasi",
    "orthopedic physiotherapy Varanasi",
    "paralysis rehabilitation Varanasi",
    "spine physiotherapy Varanasi",
    "cervical lumbar physiotherapy Varanasi",
    "Dr. Indra Prakash Vishwakarma",
    "R D Physiotherapy Clinic & Rehab Centre",
  ],
  applicationName: siteName,
  authors: [{ name: siteName }],
  creator: siteName,
  publisher: siteName,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName,
    title: homeTitle,
    description: siteDescription,
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "R D Physiotherapy Clinic & Rehab Centre, Varanasi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: homeTitle,
    description: siteDescription,
    images: [ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "health",
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#2563EB",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN" className={`${inter.variable} ${poppins.variable}`}>
      <body>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
        <FloatingActions />
      </body>
    </html>
  );
}
