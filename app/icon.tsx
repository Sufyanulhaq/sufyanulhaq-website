import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          borderRadius: 9,
          background: "#4338ca",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <span
          style={{
            fontSize: 19,
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
            right: 8,
            top: 9,
            width: 2,
            height: 12,
            borderRadius: 1,
            background: "rgba(255,255,255,0.55)",
          }}
        />
      </div>
    ),
    { ...size },
  );
}
