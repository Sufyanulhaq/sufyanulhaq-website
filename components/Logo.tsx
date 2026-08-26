export function Logo({ size = 28, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      className={className}
      role="img"
      aria-label="Sufyan Ul Haq"
    >
      <rect width="32" height="32" rx="9" fill="var(--foreground)" />
      {/* Hand-drawn S glyph — vector path, not text, so it renders
          identically everywhere rather than depending on a font
          being resolved inside an SVG text node. */}
      <path
        d="M20.5 12.2c0-1.9-1.9-3.2-4.4-3.2-2.6 0-4.3 1.3-4.3 3.1 0 2.1 1.9 2.6 4.3 3.1 3 .6 5.4 1.3 5.4 3.7 0 2.2-2.1 3.6-5 3.6-2.7 0-4.8-1.1-5.5-3"
        fill="none"
        stroke="var(--background)"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <rect
        x="22.5"
        y="9.5"
        width="1.8"
        height="13"
        rx="0.9"
        fill="var(--background)"
        opacity="0.35"
      />
    </svg>
  );
}
