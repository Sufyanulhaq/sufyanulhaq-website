import Link from "next/link";
import { site, whatsappUrl } from "@/lib/site";
import { getSiteSettings } from "@/lib/content";
import { Logo } from "@/components/Logo";
import { TrackedLink } from "@/components/analytics/TrackedLink";
import { Container } from "./Container";

export async function Footer() {
  const settings = await getSiteSettings();

  const linkClass =
    "rounded-sm text-foreground/60 transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

  return (
    <footer className="mt-24 border-t border-border">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <div className="flex items-center gap-2.5">
            <Logo size={24} />
            <p className="font-semibold tracking-tight">{site.name}</p>
          </div>
          <p className="mt-3 max-w-xs text-sm text-foreground/60">
            {settings.tagline}
          </p>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-foreground/60">
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
          <p className="text-xs font-medium uppercase tracking-wide text-foreground/60">
            Elsewhere
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <TrackedLink
                href={settings.githubUrl}
                event="GitHub Click (Footer)"
                className={linkClass}
              >
                GitHub
              </TrackedLink>
            </li>
            {settings.linkedinUrl && (
              <li>
                <TrackedLink
                  href={settings.linkedinUrl}
                  event="LinkedIn Click (Footer)"
                  className={linkClass}
                >
                  LinkedIn
                </TrackedLink>
              </li>
            )}
          </ul>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-foreground/60">
            Get in Touch
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <TrackedLink
                href={`mailto:${settings.email}`}
                event="Email Click (Footer)"
                className={linkClass}
                external={false}
              >
                {settings.email}
              </TrackedLink>
            </li>
            {settings.whatsapp && (
              <li>
                <TrackedLink
                  href={whatsappUrl(settings.whatsapp)}
                  event="WhatsApp Click (Footer)"
                  className={linkClass}
                >
                  WhatsApp
                </TrackedLink>
              </li>
            )}
          </ul>
        </div>
      </Container>

      <div className="border-t border-border">
        <Container className="py-6 text-xs text-foreground/60">
          &copy; {new Date().getFullYear()} {site.name}. Based in{" "}
          {settings.location}.
        </Container>
      </div>
    </footer>
  );
}
