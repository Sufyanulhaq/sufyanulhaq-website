import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { ContactForm } from "@/components/ContactForm";
import { TrackedLink } from "@/components/analytics/TrackedLink";
import { getSiteSettings } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";
import { whatsappUrl } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Contact",
  description:
    "Get in touch with Sufyan Ul Haq about developer roles, freelance web development projects, or technical collaborations.",
  path: "/contact",
});

export default async function ContactPage() {
  const settings = await getSiteSettings();

  return (
    <Section className="pt-16 sm:pt-20" reveal>
      <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Contact
          </h1>
          <p className="mt-4 text-foreground/70">
            Whether you&apos;re hiring for a developer role, have a freelance
            web project in mind, or just want to say hi — I&apos;d like to
            hear from you.
          </p>
          {settings.whatsapp && (
            <div className="mt-6 flex flex-wrap gap-4">
              <Button href={whatsappUrl(settings.whatsapp)} external trackEvent="WhatsApp Click (Contact)">
                Message on WhatsApp
              </Button>
              <Button href={`mailto:${settings.email}`} variant="secondary" trackEvent="Email Click (Contact)">
                Email Me
              </Button>
            </div>
          )}
          <div className="mt-8 space-y-3 text-sm">
            {settings.whatsapp && (
              <p>
                <span className="text-foreground/60">WhatsApp: </span>
                <TrackedLink
                  href={whatsappUrl(settings.whatsapp)}
                  event="WhatsApp Click (Contact Details)"
                  className="font-medium hover:underline"
                >
                  +{settings.whatsapp.replace(/(\d{2})(\d{4})(\d{6})/, "$1 $2 $3")}
                </TrackedLink>
              </p>
            )}
            <p>
              <span className="text-foreground/60">Email: </span>
              <TrackedLink
                href={`mailto:${settings.email}`}
                event="Email Click (Contact Details)"
                external={false}
                className="font-medium hover:underline"
              >
                {settings.email}
              </TrackedLink>
            </p>
            <p>
              <span className="text-foreground/60">GitHub: </span>
              <TrackedLink
                href={settings.githubUrl}
                event="GitHub Click (Contact)"
                className="font-medium hover:underline"
              >
                {settings.githubUrl.replace("https://", "")}
              </TrackedLink>
            </p>
            {settings.linkedinUrl && (
              <p>
                <span className="text-foreground/60">LinkedIn: </span>
                <TrackedLink
                  href={settings.linkedinUrl}
                  event="LinkedIn Click (Contact)"
                  className="font-medium hover:underline"
                >
                  {settings.linkedinUrl.replace("https://www.", "")}
                </TrackedLink>
              </p>
            )}
            <p>
              <span className="text-foreground/60">Based in: </span>
              {settings.location}
            </p>
          </div>
        </div>
        <ContactForm />
      </div>
    </Section>
  );
}
