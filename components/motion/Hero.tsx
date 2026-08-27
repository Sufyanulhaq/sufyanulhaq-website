"use client";

import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef, ReactNode } from "react";

// The hero text renders as plain static HTML, visible immediately on first
// paint — no opacity-gated entrance animation. That animation previously
// shipped the H1 (the page's LCP element) as `opacity: 0` in the server-
// rendered HTML, so the browser couldn't paint it as visible until React
// hydrated and Framer Motion ran, adding seconds of pure JS-wait to LCP
// with no real visual payoff. The decorative background grid below is
// unaffected — it's non-text and aria-hidden, so animating it costs nothing.
export function HeroReveal({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const gridY = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [0, 0] : [0, 40]);

  return (
    <div ref={ref} className="relative">
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.35] dark:opacity-[0.25]"
        style={{
          y: gridY,
          backgroundImage:
            "radial-gradient(var(--foreground) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
          maskImage: "radial-gradient(ellipse 60% 60% at 30% 20%, black, transparent)",
          WebkitMaskImage:
            "radial-gradient(ellipse 60% 60% at 30% 20%, black, transparent)",
        }}
      />
      {children}
    </div>
  );
}
