import { ImageResponse } from "next/og";

export const alt = "CodeGarden – Frontend & UI/UX aus Wien";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "#1a1a1a",
          color: "#ececec",
          display: "flex",
          height: "100%",
          justifyContent: "space-between",
          padding: 72,
          position: "relative",
          width: "100%",
        }}
      >
        <div
          style={{
            background: "#4fbbd1",
            borderRadius: 999,
            height: 420,
            opacity: 0.22,
            position: "absolute",
            right: -120,
            top: 80,
            width: 420,
          }}
        />
        <div style={{ display: "flex", flexDirection: "column", gap: 28, maxWidth: 760 }}>
          <div style={{ color: "#4fbbd1", fontSize: 28, letterSpacing: 4 }}>
            WIEN · FRONTEND & UI/UX
          </div>
          <div style={{ fontSize: 72, fontWeight: 600, lineHeight: 1.05 }}>
            Frontend-Modernisierung für digitale Produkte
          </div>
          <div style={{ color: "rgba(236,236,236,0.72)", fontSize: 30, lineHeight: 1.35 }}>
            CodeGarden plant und entwickelt bessere Interfaces für Unternehmen in Wien und Österreich.
          </div>
        </div>
        <div
          style={{
            alignItems: "center",
            background: "#2f98b0",
            borderRadius: 24,
            color: "#1a1a1a",
            display: "flex",
            fontSize: 34,
            fontWeight: 700,
            height: 96,
            justifyContent: "center",
            width: 96,
          }}
        >
          CG
        </div>
      </div>
    ),
    size,
  );
}
