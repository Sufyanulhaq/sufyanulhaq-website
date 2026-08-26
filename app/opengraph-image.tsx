import { ImageResponse } from "next/og";
import { site } from "@/lib/site";
import { getSiteSettings } from "@/lib/content";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const settings = await getSiteSettings();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "#0a0a0b",
          color: "#ffffff",
          padding: "80px",
        }}
      >
        <div style={{ fontSize: 32, color: "#a1a1aa" }}>
          {settings.location}
        </div>
        <div style={{ fontSize: 72, fontWeight: 600, marginTop: 20 }}>
          {site.name}
        </div>
        <div style={{ fontSize: 40, color: "#818cf8", marginTop: 12 }}>
          {settings.headline}
        </div>
      </div>
    ),
    { ...size },
  );
}
