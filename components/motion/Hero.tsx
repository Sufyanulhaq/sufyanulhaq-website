"use client";

import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef, ReactNode } from "react";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const imageItem = {
  hidden: { opacity: 0, scale: 0.96, y: 12 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

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
      <motion.div initial="hidden" animate="visible" variants={container}>
        {children}
      </motion.div>
    </div>
  );
}

export function HeroP({ className = "", children }: { className?: string; children: ReactNode }) {
  return (
    <motion.p className={className} variants={item}>
      {children}
    </motion.p>
  );
}

export function HeroH1({ className = "", children }: { className?: string; children: ReactNode }) {
  return (
    <motion.h1 className={className} variants={item}>
      {children}
    </motion.h1>
  );
}

export function HeroDiv({ className = "", children }: { className?: string; children: ReactNode }) {
  return (
    <motion.div className={className} variants={item}>
      {children}
    </motion.div>
  );
}

export function HeroImageReveal({ className = "", children }: { className?: string; children: ReactNode }) {
  return (
    <motion.div className={className} variants={imageItem}>
      {children}
    </motion.div>
  );
}
