import Link from "next/link";
import { site } from "@/lib/site";
import { getSiteSettings } from "@/lib/content";
import { Container } from "./Container";

export async function Footer() {
  const settings = await getSiteSettings();

  return (
    <footer className="mt-24 border-t border-border">
      <Container className="flex flex-col gap-4 py-10 text-sm text-foreground/60 sm:flex-row sm:items-center sm:justify-between">
        <p>
          &copy; {new Date().getFullYear()} {site.name}. Based in{" "}
          {settings.location}.
        </p>
        <div className="flex gap-6">
          <Link
            href={settings.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-sm transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            GitHub
          </Link>
          {settings.linkedinUrl && (
            <Link
              href={settings.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-sm transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              LinkedIn
            </Link>
          )}
          <a
            href={`mailto:${settings.email}`}
            className="rounded-sm transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            Email
          </a>
        </div>
      </Container>
    </footer>
  );
}
