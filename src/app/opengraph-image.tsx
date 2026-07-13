import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 96,
          background: "#050816",
          backgroundImage:
            "radial-gradient(circle at 15% 15%, rgba(59,130,246,0.35), transparent 45%), radial-gradient(circle at 85% 85%, rgba(139,92,246,0.35), transparent 45%)",
          fontFamily: "system-ui, sans-serif",
          color: "#fff",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: 40,
          }}
        >
          <div
            style={{
              display: "flex",
              width: 56,
              height: 56,
              borderRadius: 14,
              alignItems: "center",
              justifyContent: "center",
              background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
              fontSize: 26,
              fontWeight: 700,
            }}
          >
            AS
          </div>
          <div style={{ fontSize: 28, color: "#94a3b8", display: "flex" }}>
            abidsafivercel.com
          </div>
        </div>
        <div style={{ fontSize: 72, fontWeight: 700, display: "flex", lineHeight: 1.1 }}>
          {siteConfig.name}
        </div>
        <div
          style={{
            fontSize: 34,
            marginTop: 20,
            display: "flex",
            background: "linear-gradient(135deg, #60a5fa, #a78bfa)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          {siteConfig.shortTitle}
        </div>
        <div
          style={{
            fontSize: 26,
            marginTop: 32,
            display: "flex",
            color: "#94a3b8",
            maxWidth: 900,
          }}
        >
          {siteConfig.description}
        </div>
      </div>
    ),
    { ...size }
  );
}
