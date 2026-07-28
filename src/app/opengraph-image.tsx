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
          background: "linear-gradient(135deg, #010a08 0%, #0b705a 140%)",
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
              background: "#44DFAD",
              borderRadius: 16,
              color: "#011f18",
              fontSize: 28,
              fontWeight: 800,
            }}
          >
            TC
          </div>
          <div style={{ display: "flex", fontSize: 32, fontWeight: 800 }}>
            <span>Top</span>
            <span style={{ color: "#44DFAD" }}>Cassino</span>
            <span>Comparador</span>
          </div>
        </div>
        <div style={{ display: "flex", marginTop: 40, fontSize: 48, fontWeight: 800, maxWidth: 900, lineHeight: 1.15 }}>
          {site.tagline}
        </div>
        <div style={{ display: "flex", marginTop: 24, fontSize: 24, color: "#DEDEDE", maxWidth: 800 }}>
          Condições, pagamentos e análises independentes · Apenas +18
        </div>
      </div>
    ),
    { ...size }
  );
}
