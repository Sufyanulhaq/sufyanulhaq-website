import Link from "next/link";
import { site } from "@/lib/site";
import { Container } from "./Container";

export function Navbar() {
  return (
    <header className="border-b border-black/10 dark:border-white/10">
      <Container className="flex flex-wrap items-center justify-between gap-x-4 gap-y-3 py-4 sm:h-16 sm:flex-nowrap sm:py-0">
        <Link
          href="/"
          className="shrink-0 rounded-sm font-semibold tracking-tight focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          {site.name}
        </Link>
        <nav aria-label="Primary" className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
          {site.navigation.slice(1).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative rounded-sm py-1 text-foreground/70 transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              {item.label}
              <span className="absolute inset-x-0 -bottom-0.5 h-px scale-x-0 bg-accent transition-transform duration-200 group-hover:scale-x-100" />
            </Link>
          ))}
        </nav>
      </Container>
    </header>
  );
}
