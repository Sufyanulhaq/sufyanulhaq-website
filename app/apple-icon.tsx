import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 180,
          height: 180,
          borderRadius: 40,
          background: "#4338ca",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <span
          style={{
            fontSize: 104,
            fontWeight: 700,
            color: "#ffffff",
            fontFamily: "sans-serif",
          }}
        >
          S
        </span>
        <div
          style={{
            position: "absolute",
            right: 46,
            top: 52,
            width: 11,
            height: 68,
            borderRadius: 6,
            background: "rgba(255,255,255,0.55)",
          }}
        />
      </div>
    ),
    { ...size },
  );
}
