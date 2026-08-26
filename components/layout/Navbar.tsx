"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/lib/site";
import { Logo } from "@/components/Logo";
import { Container } from "./Container";

export function Navbar() {
  const pathname = usePathname();
  const links = site.navigation.slice(1, -1);
  const cta = site.navigation[site.navigation.length - 1];

  return (
    <header className="border-b border-border">
      <Container className="flex flex-wrap items-center justify-between gap-x-4 gap-y-3 py-4 sm:h-16 sm:flex-nowrap sm:py-0">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2.5 rounded-sm font-semibold tracking-tight focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          <Logo size={28} />
          <span>{site.name}</span>
        </Link>
        <div className="flex flex-1 flex-wrap items-center justify-end gap-x-6 gap-y-2">
          <nav aria-label="Primary" className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
            {links.map((item) => {
              const isActive =
                pathname === item.href || pathname.startsWith(`${item.href}/`);

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
          <Link
            href={cta.href}
            className="inline-flex items-center justify-center rounded-full bg-accent px-4 py-1.5 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            {cta.label}
          </Link>
        </div>
      </Container>
    </header>
  );
}
