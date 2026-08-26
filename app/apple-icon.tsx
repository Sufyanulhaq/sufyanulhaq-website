import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <svg width={180} height={180} viewBox="0 0 32 32">
        <rect width="32" height="32" rx="9" fill="#111113" />
        <path
          d="M20.5 12.2c0-1.9-1.9-3.2-4.4-3.2-2.6 0-4.3 1.3-4.3 3.1 0 2.1 1.9 2.6 4.3 3.1 3 .6 5.4 1.3 5.4 3.7 0 2.2-2.1 3.6-5 3.6-2.7 0-4.8-1.1-5.5-3"
          fill="none"
          stroke="#fafafa"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
        <rect x="22.5" y="9.5" width="1.8" height="13" rx="0.9" fill="#fafafa" opacity="0.35" />
      </svg>
    ),
    { ...size },
  );
}
