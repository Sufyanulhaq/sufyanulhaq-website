import Link from "next/link";
import { site, whatsappUrl } from "@/lib/site";
import { getSiteSettings } from "@/lib/content";
import { Container } from "./Container";

export async function Footer() {
  const settings = await getSiteSettings();

  const linkClass =
    "rounded-sm text-foreground/60 transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

  return (
    <footer className="mt-24 border-t border-border">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <p className="font-semibold tracking-tight">{site.name}</p>
          <p className="mt-3 max-w-xs text-sm text-foreground/60">
            {settings.tagline}
          </p>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-foreground/40">
            Site
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            {site.navigation.slice(1).map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={linkClass}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-foreground/40">
            Elsewhere
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link
                href={settings.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                GitHub
              </Link>
            </li>
            {settings.linkedinUrl && (
              <li>
                <Link
                  href={settings.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  LinkedIn
                </Link>
              </li>
            )}
          </ul>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-foreground/40">
            Get in Touch
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a href={`mailto:${settings.email}`} className={linkClass}>
                {settings.email}
              </a>
            </li>
            {settings.whatsapp && (
              <li>
                <Link
                  href={whatsappUrl(settings.whatsapp)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  WhatsApp
                </Link>
              </li>
            )}
          </ul>
        </div>
      </Container>

      <div className="border-t border-border">
        <Container className="py-6 text-xs text-foreground/50">
          &copy; {new Date().getFullYear()} {site.name}. Based in{" "}
          {settings.location}.
        </Container>
      </div>
    </footer>
  );
}
