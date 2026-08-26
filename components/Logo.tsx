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
      <rect width="32" height="32" rx="9" fill="var(--accent)" />
      <text
        x="10.5"
        y="22.5"
        fontFamily="var(--font-geist-sans), ui-sans-serif, system-ui"
        fontWeight="700"
        fontSize="17"
        fill="var(--accent-foreground)"
      >
        S
      </text>
      <rect x="21.5" y="10" width="2" height="12" rx="1" fill="var(--accent-foreground)" opacity="0.55" />
    </svg>
  );
}
