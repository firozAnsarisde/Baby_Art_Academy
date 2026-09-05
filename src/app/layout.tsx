import type { Metadata } from "next";
import { Fraunces, Karla } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { siteConfig } from "@/config/site";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const karla = Karla({
  subsets: ["latin"],
  variable: "--font-karla",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const siteUrl = "https://www.hennaartacademy.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteConfig.academyName} — Learn Mehndi Online`,
    template: `%s | ${siteConfig.academyName}`,
  },
  description: siteConfig.tagline,
  openGraph: {
    title: `${siteConfig.academyName} — Learn Mehndi Online`,
    description: siteConfig.tagline,
    url: siteUrl,
    siteName: siteConfig.academyName,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.academyName} — Learn Mehndi Online`,
    description: siteConfig.tagline,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${karla.variable}`}>
      <body className="font-body antialiased bg-ivory text-charcoal">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-mehndi-800 focus:px-4 focus:py-2 focus:text-ivory"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
