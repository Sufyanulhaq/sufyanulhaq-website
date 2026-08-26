"use client";

import Link from "next/link";
import { track } from "@vercel/analytics/react";
import { ReactNode, AnchorHTMLAttributes } from "react";

export function TrackedLink({
  href,
  event,
  children,
  className,
  external = true,
  ...rest
}: {
  href: string;
  event: string;
  children: ReactNode;
  className?: string;
  external?: boolean;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "className" | "children">) {
  return (
    <Link
      href={href}
      className={className}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      onClick={() => track(event)}
      {...rest}
    >
      {children}
    </Link>
  );
}
