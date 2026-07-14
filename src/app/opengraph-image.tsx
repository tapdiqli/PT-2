import { ImageResponse } from "next/og";
import { getSiteInfo } from "@/lib/data";

export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpengraphImage() {
  const site = getSiteInfo();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "linear-gradient(135deg, #111111 0%, #0F766E 140%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 64,
              height: 64,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#14B8A6",
              borderRadius: 16,
              color: "#111111",
              fontSize: 28,
              fontWeight: 800,
            }}
          >
            TC
          </div>
          <div style={{ display: "flex", fontSize: 32, fontWeight: 800 }}>
            <span>Top</span>
            <span style={{ color: "#14B8A6" }}>Cassino</span>
            <span>Comparador</span>
          </div>
        </div>
        <div style={{ display: "flex", marginTop: 40, fontSize: 48, fontWeight: 800, maxWidth: 900, lineHeight: 1.15 }}>
          {site.tagline}
        </div>
        <div style={{ display: "flex", marginTop: 24, fontSize: 24, color: "#D1D5DB", maxWidth: 800 }}>
          Bónus, pagamentos e avaliações independentes · Apenas +18
        </div>
      </div>
    ),
    { ...size }
  );
}
