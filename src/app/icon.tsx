import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 14,
          background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
          color: "#fff",
          fontSize: 30,
          fontWeight: 700,
          fontFamily: "system-ui, sans-serif",
          letterSpacing: -1,
        }}
      >
        AS
      </div>
    ),
    { ...size }
  );
}
