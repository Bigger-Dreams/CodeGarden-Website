// Erzeugt public/og-image.png einmalig beim Build via satori + resvg.
// Ersetzt app/opengraph-image.tsx + app/twitter-image.tsx (next/og), die im
// Next-Stand ohnehin für alle Seiten dasselbe Bild lieferten.
import { readFile, writeFile } from "node:fs/promises";
import satori from "satori";
import { Resvg } from "@resvg/resvg-js";

const root = new URL("../", import.meta.url);

const [soraRegular, soraSemibold, logoSvg] = await Promise.all([
  readFile(
    new URL(
      "node_modules/@fontsource/sora/files/sora-latin-400-normal.woff",
      root,
    ),
  ),
  readFile(
    new URL(
      "node_modules/@fontsource/sora/files/sora-latin-600-normal.woff",
      root,
    ),
  ),
  readFile(new URL("public/logo.svg", root), "utf-8"),
]);

const logoDataUrl = `data:image/svg+xml;base64,${Buffer.from(logoSvg).toString("base64")}`;

const markup = {
  type: "div",
  props: {
    style: {
      alignItems: "center",
      background: "#1a1a1a",
      color: "#ececec",
      display: "flex",
      height: "100%",
      justifyContent: "space-between",
      padding: 72,
      position: "relative",
      width: "100%",
      fontFamily: "Sora",
    },
    children: [
      {
        type: "div",
        props: {
          style: {
            background: "#41867A",
            borderRadius: 999,
            height: 420,
            opacity: 0.22,
            position: "absolute",
            right: -120,
            top: 80,
            width: 420,
          },
        },
      },
      {
        type: "div",
        props: {
          style: {
            display: "flex",
            flexDirection: "column",
            gap: 28,
            maxWidth: 760,
          },
          children: [
            {
              type: "div",
              props: {
                style: { color: "#41867A", fontSize: 28, letterSpacing: 4 },
                children: "WIEN · FRONTEND & UI/UX",
              },
            },
            {
              type: "div",
              props: {
                style: { fontSize: 72, fontWeight: 600, lineHeight: 1.05 },
                children: "Frontend-Modernisierung für digitale Produkte",
              },
            },
            {
              type: "div",
              props: {
                style: {
                  color: "rgba(236,236,236,0.72)",
                  fontSize: 30,
                  lineHeight: 1.35,
                },
                children:
                  "CodeGarden plant und entwickelt bessere Interfaces für Unternehmen in Wien und Österreich.",
              },
            },
          ],
        },
      },
      {
        type: "img",
        props: {
          src: logoDataUrl,
          width: 112,
          height: 112,
          style: { height: 112, objectFit: "contain", width: 112 },
        },
      },
    ],
  },
};

const svg = await satori(markup, {
  width: 1200,
  height: 630,
  fonts: [
    { name: "Sora", data: soraRegular, weight: 400, style: "normal" },
    { name: "Sora", data: soraSemibold, weight: 600, style: "normal" },
  ],
});

const resvg = new Resvg(svg, { fitTo: { mode: "width", value: 1200 } });
const png = resvg.render().asPng();

await writeFile(new URL("public/og-image.png", root), png);

console.log("Generated public/og-image.png");
