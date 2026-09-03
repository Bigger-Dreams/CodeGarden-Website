import type { Metadata, Viewport } from "next";
import { Sora, IBM_Plex_Sans } from "next/font/google";
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
  title: "UI Company",
  description:
    "Ich modernisiere Frontend, UX und UI bestehender Apps und Plattformen für Unternehmen in Wien und Österreich.",
};

export const viewport: Viewport = {
  themeColor: "#17140f",
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
