import { ImageResponse } from "next/og";
import { eiLogoBase64, leoLogoBase64 } from "@/lib/logoBase64";

export const runtime = "edge";
export const alt = "Irish Business Funding — Find the right grant for your business";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          backgroundColor: "#f2f2f2",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          gap: 48,
        }}
      >
        {/* Site title */}
        <div
          style={{
            fontSize: 28,
            fontWeight: 700,
            color: "#0f625c",
            letterSpacing: "0.06em",
            textTransform: "uppercase",
          }}
        >
          Irish Business Funding
        </div>

        {/* Main headline */}
        <div
          style={{
            fontSize: 52,
            fontWeight: 800,
            color: "#111111",
            letterSpacing: "-0.03em",
            lineHeight: 1.1,
            textAlign: "center",
            maxWidth: 800,
          }}
        >
          Find the right funding for your business
        </div>

        {/* Divider label */}
        <div
          style={{
            fontSize: 13,
            fontWeight: 700,
            color: "#8c8b8b",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
          }}
        >
          Covers funding initiatives from
        </div>

        {/* Logo cards */}
        <div style={{ display: "flex", gap: 32, alignItems: "center" }}>
          {/* EI */}
          <div
            style={{
              backgroundColor: "#ffffff",
              border: "1px solid #e7eaee",
              borderRadius: 16,
              padding: "24px 48px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={eiLogoBase64} alt="Enterprise Ireland" style={{ height: 60, objectFit: "contain" }} />
          </div>

          {/* LEO */}
          <div
            style={{
              backgroundColor: "#ffffff",
              border: "1px solid #e7eaee",
              borderRadius: 16,
              padding: "24px 48px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={leoLogoBase64} alt="Local Enterprise Office" style={{ height: 60, objectFit: "contain" }} />
          </div>
        </div>

        {/* Bottom tagline */}
        <div
          style={{
            fontSize: 18,
            color: "#5a5f66",
            marginTop: 8,
          }}
        >
          Answer a few questions · Get your exact match · Free to use
        </div>
      </div>
    ),
    { ...size }
  );
}
