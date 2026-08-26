"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/lib/site";
import { Container } from "./Container";

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="border-b border-border">
      <Container className="flex flex-wrap items-center justify-between gap-x-4 gap-y-3 py-4 sm:h-16 sm:flex-nowrap sm:py-0">
        <Link
          href="/"
          className="shrink-0 rounded-sm font-semibold tracking-tight focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          {site.name}
        </Link>
        <nav aria-label="Primary" className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
          {site.navigation.slice(1).map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname === item.href || pathname.startsWith(`${item.href}/`);

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={`group relative rounded-sm py-1 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
                  isActive ? "text-foreground" : "text-foreground/70 hover:text-foreground"
                }`}
              >
                {item.label}
                <span
                  className={`absolute inset-x-0 -bottom-0.5 h-px bg-accent transition-transform duration-200 ${
                    isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </Link>
            );
          })}
        </nav>
      </Container>
    </header>
  );
}
