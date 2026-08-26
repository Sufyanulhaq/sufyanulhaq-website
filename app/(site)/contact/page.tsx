import { Section } from "@/components/ui/Section";
import { ContactForm } from "@/components/ContactForm";
import { getSiteSettings } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact",
  description:
    "Get in touch with Sufyan Ul Haq about developer roles, internships, or freelance web development projects.",
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
          <div className="mt-8 space-y-3 text-sm">
            <p>
              <span className="text-foreground/50">Email: </span>
              <a
                href={`mailto:${settings.email}`}
                className="font-medium hover:underline"
              >
                {settings.email}
              </a>
            </p>
            <p>
              <span className="text-foreground/50">GitHub: </span>
              <a
                href={settings.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium hover:underline"
              >
                {settings.githubUrl.replace("https://", "")}
              </a>
            </p>
            {settings.linkedinUrl && (
              <p>
                <span className="text-foreground/50">LinkedIn: </span>
                <a
                  href={settings.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium hover:underline"
                >
                  {settings.linkedinUrl.replace("https://www.", "")}
                </a>
              </p>
            )}
            <p>
              <span className="text-foreground/50">Based in: </span>
              {settings.location}
            </p>
          </div>
        </div>
        <ContactForm />
      </div>
    </Section>
  );
}
