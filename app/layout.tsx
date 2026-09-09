import type { Metadata, Viewport } from "next";
import { Sora, IBM_Plex_Sans } from "next/font/google";
import { siteUrl } from "@/lib/site";
import { Analytics } from "./components/Analytics";
import { Footer } from "./components/Footer";
import { Nav } from "./components/Nav";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "CodeGarden | Frontend & UI/UX aus Wien",
    template: "%s | CodeGarden",
  },
  description:
    "Wir modernisieren Frontend, UX und UI bestehender Apps und Plattformen für Unternehmen in Wien und Österreich.",
  openGraph: {
    title: "CodeGarden | Frontend & UI/UX aus Wien",
    description:
      "Frontend- und UI/UX-Modernisierung für bestehende digitale Produkte in Wien und Österreich.",
    url: "/",
    siteName: "CodeGarden",
    locale: "de_AT",
    type: "website",
  },
  alternates: {
    canonical: "/",
  },
};

export const viewport: Viewport = {
  themeColor: "#1a1a1a",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="de"
      className={`${sora.variable} ${ibmPlexSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Nav />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
