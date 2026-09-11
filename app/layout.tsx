import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Sora, IBM_Plex_Sans } from "next/font/google";
import { siteUrl } from "@/lib/site";
import { Analytics } from "./components/Analytics";
import { SiteJsonLd } from "./components/JsonLd";
import { ScrollToTopOnReload } from "./components/ScrollToTopOnReload";
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
  authors: [{ name: "Patrick Roith" }],
  creator: "Patrick Roith",
  publisher: "CodeGarden",
  keywords: [
    "Frontend Entwicklung Wien",
    "UI UX Modernisierung",
    "Frontend Modernisierung",
    "UX Audit",
    "Website modernisieren Österreich",
  ],
  description:
    "Wir modernisieren Frontend, UX und UI bestehender Apps und Plattformen für Unternehmen in Wien und Österreich – verständlich geplant und sauber umgesetzt.",
  openGraph: {
    title: "CodeGarden | Frontend & UI/UX aus Wien",
    description:
      "Wir modernisieren Frontend, UX und UI bestehender Apps und Plattformen für Unternehmen in Wien und Österreich – verständlich geplant und sauber umgesetzt.",
    url: "/",
    siteName: "CodeGarden",
    locale: "de_AT",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "CodeGarden – Frontend & UI/UX aus Wien",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CodeGarden | Frontend & UI/UX aus Wien",
    description:
      "Wir modernisieren Frontend, UX und UI bestehender Apps und Plattformen für Unternehmen in Wien und Österreich – verständlich geplant und sauber umgesetzt.",
    images: ["/twitter-image"],
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
      <head>
        <link rel="preconnect" href="https://assets.calendly.com" />
        <link rel="preconnect" href="https://calendly.com" />
        <link rel="dns-prefetch" href="https://assets.calendly.com" />
        <link rel="dns-prefetch" href="https://calendly.com" />
        <link
          href="https://assets.calendly.com/assets/external/widget.css"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col">
        <SiteJsonLd />
        <ScrollToTopOnReload />
        <Nav />
        {children}
        <Footer />
        <Analytics />
        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
