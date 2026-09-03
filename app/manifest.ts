import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "CodeGarden",
    short_name: "CodeGarden",
    description:
      "Frontend- und UI/UX-Modernisierung für Unternehmen in Wien und Österreich.",
    start_url: "/",
    display: "standalone",
    background_color: "#17140f",
    theme_color: "#17140f",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "32x32",
        type: "image/x-icon",
      },
    ],
  };
}
