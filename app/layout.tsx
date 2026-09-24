import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import { site } from "@/content/site";
import { hasProfilePhoto, PROFILE_SRC } from "@/lib/profile";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GuacQuest from "@/components/game/GuacQuest";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"], display: "swap" });
const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["600"],
  display: "swap",
});

// Only advertise the share image once public/profile.jpg exists, so previews never 404.
const ogImages = hasProfilePhoto() ? [{ url: PROFILE_SRC, alt: site.name }] : undefined;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.name,
  description: site.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: site.name,
    title: site.name,
    description: site.description,
    images: ogImages,
  },
  twitter: {
    card: ogImages ? "summary_large_image" : "summary",
    title: site.name,
    description: site.description,
    images: ogImages?.map((i) => i.url),
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f3f6e4" },
    { media: "(prefers-color-scheme: dark)", color: "#121810" },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`}>
      <body className="flex min-h-dvh flex-col">
        <a
          href="#main"
          className="bg-accent text-on-accent sr-only z-100 rounded-lg px-4 py-3 font-semibold focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
        >
          Skip to content
        </a>
        <Navbar brand={site.shortName} links={site.nav} />
        <main id="main" tabIndex={-1} className="flex-1 outline-none">
          {children}
        </main>
        <Footer />
        <GuacQuest />
      </body>
    </html>
  );
}
