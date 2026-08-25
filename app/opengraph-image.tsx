import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "#0a0a0a",
          color: "#ffffff",
          padding: "80px",
        }}
      >
        <div style={{ fontSize: 32, color: "#a1a1aa" }}>{site.location}</div>
        <div style={{ fontSize: 72, fontWeight: 600, marginTop: 20 }}>
          {site.name}
        </div>
        <div style={{ fontSize: 40, color: "#d4d4d8", marginTop: 12 }}>
          {site.title}
        </div>
      </div>
    ),
    { ...size },
  );
}
