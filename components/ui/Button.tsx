"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ReactNode } from "react";

const MotionLink = motion.create(Link);

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  external?: boolean;
};

export function Button({
  href,
  children,
  variant = "primary",
  external = false,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";
  const styles =
    variant === "primary"
      ? "bg-accent text-accent-foreground hover:opacity-90"
      : "border border-black/15 dark:border-white/20 hover:bg-black/[.03] dark:hover:bg-white/[.06]";

  return (
    <MotionLink
      href={href}
      className={`${base} ${styles}`}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.15, ease: "easeOut" }}
    >
      {children}
    </MotionLink>
  );
}
