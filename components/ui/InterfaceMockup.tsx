type Variant = "booking" | "ecommerce";

const colors = {
  chrome: "var(--muted)",
  border: "color-mix(in srgb, var(--foreground) 12%, transparent)",
  panel: "var(--background)",
  block: "color-mix(in srgb, var(--foreground) 7%, transparent)",
  blockStrong: "color-mix(in srgb, var(--foreground) 14%, transparent)",
  text: "color-mix(in srgb, var(--foreground) 22%, transparent)",
  accent: "var(--accent)",
  accentSoft: "color-mix(in srgb, var(--accent) 18%, transparent)",
};

function Chrome({ label }: { label: string }) {
  return (
    <g>
      <rect x="0" y="0" width="640" height="32" fill={colors.chrome} />
      <circle cx="18" cy="16" r="4.5" fill={colors.block} />
      <circle cx="34" cy="16" r="4.5" fill={colors.block} />
      <circle cx="50" cy="16" r="4.5" fill={colors.block} />
      <rect x="220" y="8" width="200" height="16" rx="8" fill={colors.panel} />
      <text
        x="320"
        y="19"
        textAnchor="middle"
        fontSize="9"
        fontFamily="var(--font-mono, monospace)"
        fill={colors.text}
      >
        {label}
      </text>
    </g>
  );
}

function BookingLayout() {
  return (
    <g transform="translate(0,32)">
      <rect width="640" height="328" fill={colors.panel} />
      {/* nav */}
      <rect x="24" y="20" width="70" height="10" rx="2" fill={colors.blockStrong} />
      <rect x="480" y="18" width="90" height="16" rx="8" fill={colors.accentSoft} />
      {/* hero */}
      <rect x="24" y="52" width="592" height="120" rx="10" fill={colors.block} />
      <rect x="48" y="76" width="220" height="14" rx="3" fill={colors.blockStrong} />
      <rect x="48" y="98" width="160" height="10" rx="2" fill={colors.block} />
      {/* search bar overlapping hero */}
      <rect
        x="48"
        y="140"
        width="480"
        height="24"
        rx="12"
        fill={colors.panel}
        stroke={colors.border}
      />
      <rect x="64" y="149" width="90" height="6" rx="3" fill={colors.text} />
      <rect x="180" y="149" width="90" height="6" rx="3" fill={colors.text} />
      <rect x="296" y="149" width="90" height="6" rx="3" fill={colors.text} />
      <rect x="452" y="145" width="60" height="14" rx="7" fill={colors.accent} />
      {/* room cards */}
      {[24, 236, 448].map((x) => (
        <g key={x} transform={`translate(${x},196)`}>
          <rect width="168" height="112" rx="10" fill={colors.panel} stroke={colors.border} />
          <rect width="168" height="64" rx="10" fill={colors.block} />
          <rect x="12" y="76" width="90" height="9" rx="2" fill={colors.blockStrong} />
          <rect x="12" y="92" width="60" height="7" rx="2" fill={colors.block} />
          <rect x="120" y="90" width="36" height="12" rx="6" fill={colors.accentSoft} />
        </g>
      ))}
    </g>
  );
}

function EcommerceLayout() {
  return (
    <g transform="translate(0,32)">
      <rect width="640" height="328" fill={colors.panel} />
      {/* nav */}
      <rect x="24" y="20" width="70" height="10" rx="2" fill={colors.blockStrong} />
      <circle cx="600" cy="25" r="10" fill={colors.accentSoft} />
      <rect x="596" y="21" width="8" height="8" rx="2" fill={colors.accent} />
      {/* category strip */}
      {[24, 100, 176, 252].map((x, i) => (
        <rect
          key={x}
          x={x}
          y="52"
          width="66"
          height="20"
          rx="10"
          fill={i === 0 ? colors.accentSoft : colors.block}
        />
      ))}
      {/* product grid 3x2 */}
      {[0, 1, 2].map((col) =>
        [0, 1].map((row) => (
          <g
            key={`${col}-${row}`}
            transform={`translate(${24 + col * 200},${92 + row * 128})`}
          >
            <rect width="176" height="112" rx="10" fill={colors.panel} stroke={colors.border} />
            <rect width="176" height="70" rx="10" fill={colors.block} />
            <rect x="12" y="82" width="100" height="9" rx="2" fill={colors.blockStrong} />
            <rect x="12" y="98" width="50" height="8" rx="2" fill={colors.accent} opacity="0.7" />
          </g>
        )),
      )}
    </g>
  );
}

export function InterfaceMockup({
  variant,
  label,
  className = "",
}: {
  variant: Variant;
  label: string;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 640 360"
      className={className}
      role="img"
      aria-label={`Illustrative interface preview for ${label}`}
      preserveAspectRatio="xMidYMin slice"
    >
      <rect width="640" height="360" rx="12" fill={colors.panel} stroke={colors.border} />
      <clipPath id={`clip-${label}`}>
        <rect width="640" height="360" rx="12" />
      </clipPath>
      <g clipPath={`url(#clip-${label})`}>
        <Chrome label={label} />
        {variant === "booking" ? <BookingLayout /> : <EcommerceLayout />}
      </g>
    </svg>
  );
}
