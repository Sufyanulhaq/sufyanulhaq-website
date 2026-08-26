"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { track } from "@vercel/analytics/react";
import { ReactNode } from "react";

const MotionLink = motion.create(Link);

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  external?: boolean;
  trackEvent?: string;
};

export function Button({
  href,
  children,
  variant = "primary",
  external = false,
  trackEvent,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";
  const styles =
    variant === "primary"
      ? "bg-accent text-accent-foreground hover:bg-accent-hover"
      : "border border-border hover:bg-muted";

  return (
    <MotionLink
      href={href}
      className={`${base} ${styles}`}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.15, ease: "easeOut" }}
      onClick={trackEvent ? () => track(trackEvent) : undefined}
    >
      {children}
    </MotionLink>
  );
}
