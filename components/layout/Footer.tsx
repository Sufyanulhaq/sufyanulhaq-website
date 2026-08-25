import Link from "next/link";
import { site } from "@/lib/site";
import { Container } from "./Container";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-black/10 dark:border-white/10">
      <Container className="flex flex-col gap-4 py-10 text-sm text-foreground/60 sm:flex-row sm:items-center sm:justify-between">
        <p>
          &copy; {new Date().getFullYear()} {site.name}. Based in{" "}
          {site.location}.
        </p>
        <div className="flex gap-6">
          <Link
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground"
          >
            GitHub
          </Link>
          <a href={`mailto:${site.email}`} className="hover:text-foreground">
            Email
          </a>
        </div>
      </Container>
    </footer>
  );
}
