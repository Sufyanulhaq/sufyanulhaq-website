import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { getServices, getSiteSettings } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";
import { whatsappUrl } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Services",
  description:
    "Web development, application, and automation services from Sufyan Ul Haq — only what he can genuinely deliver.",
  path: "/services",
});

export default async function ServicesPage() {
  const [services, settings] = await Promise.all([
    getServices(),
    getSiteSettings(),
  ]);

  return (
    <>
      <Section className="pt-16 sm:pt-20" reveal>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Services
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-foreground/70">
          What I can actually build for you — no services listed here that
          I can&apos;t genuinely deliver.
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <Button href="/contact">Start a Project</Button>
          {settings.whatsapp && (
            <Button href={whatsappUrl(settings.whatsapp)} variant="secondary" external>
              Message on WhatsApp
            </Button>
          )}
        </div>
      </Section>

      <Section className="border-t border-border" reveal>
        <div className="grid gap-6 sm:grid-cols-2">
          {services.map((service) => (
            <div key={service.slug} className="card-surface rounded-2xl p-6">
              <h2 className="font-semibold">{service.title}</h2>
              <p className="mt-2 text-sm text-foreground/70">{service.summary}</p>

              {service.whoFor && (
                <p className="mt-4 text-xs font-medium uppercase tracking-wide text-foreground/40">
                  Who it&apos;s for
                </p>
              )}
              {service.whoFor && (
                <p className="mt-1 text-sm text-foreground/70">{service.whoFor}</p>
              )}

              {service.includes.length > 0 && (
                <>
                  <p className="mt-4 text-xs font-medium uppercase tracking-wide text-foreground/40">
                    What&apos;s included
                  </p>
                  <ul className="mt-1 list-disc space-y-1 pl-5 text-sm text-foreground/70">
                    {service.includes.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </>
              )}

              {service.deliverables.length > 0 && (
                <>
                  <p className="mt-4 text-xs font-medium uppercase tracking-wide text-foreground/40">
                    Deliverables
                  </p>
                  <ul className="mt-1 list-disc space-y-1 pl-5 text-sm text-foreground/70">
                    {service.deliverables.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </>
              )}

              {service.technologies.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {service.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-muted px-2 py-1 text-xs text-foreground-soft"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}

              <div className="mt-5">
                <Button href="/contact" variant="secondary">
                  Get in Touch
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section className="border-t border-border" reveal>
        <h2 className="text-2xl font-semibold tracking-tight">
          Have Something Else in Mind?
        </h2>
        <p className="mt-3 max-w-xl text-foreground/70">
          If what you need doesn&apos;t fit neatly into the above, tell me
          about it — I&apos;ll be upfront if it&apos;s outside what I can
          deliver right now.
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <Button href="/contact">Start a Project</Button>
          {settings.whatsapp && (
            <Button href={whatsappUrl(settings.whatsapp)} variant="secondary" external>
              Message on WhatsApp
            </Button>
          )}
        </div>
      </Section>
    </>
  );
}
