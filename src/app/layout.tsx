import type { Metadata, Viewport } from "next";
import { Geologica } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { GclidCapture } from "@/components/layout/GclidCapture";
import { ConsentGate } from "@/components/layout/ConsentGate";
import { consentBootstrapScript } from "@/lib/consent";
import { getSiteInfo } from "@/lib/data";

const geologica = Geologica({
  variable: "--font-geologica",
  subsets: ["latin"],
  display: "swap",
});

const site = getSiteInfo();
const siteUrl = `https://${site.domain}`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${site.name} | ${site.tagline}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "análise editorial de plataformas digitais",
    "plataformas digitais Portugal",
    "enquadramento SRIJ",
    "entretenimento digital",
    "utilização consciente",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_PT",
    url: siteUrl,
    siteName: site.name,
    title: `${site.name} | ${site.tagline}`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | ${site.tagline}`,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#011f18",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  // The consent bootstrap script sets data-age / data-cookies on <html> before
  // hydration, which React would otherwise report as a mismatch.
  return (
    <html lang="pt-PT" suppressHydrationWarning>
      <body className={`${geologica.variable} bg-background font-sans text-white antialiased`}>
        <script dangerouslySetInnerHTML={{ __html: consentBootstrapScript }} />
        <GclidCapture />
        <div className="bg-hero-glow flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <ConsentGate />
      </body>
    </html>
  );
}
