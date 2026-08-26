import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import {
  getSiteSettings,
  getExperience,
  getEducation,
  getSkillGroups,
} from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "About",
  description:
    "Background, experience, and skills of Sufyan Ul Haq — a software developer based in Liverpool, UK, expanding into cloud and automation.",
  path: "/about",
});

export default async function AboutPage() {
  const [settings, experience, education, skillGroups] = await Promise.all([
    getSiteSettings(),
    getExperience(),
    getEducation(),
    getSkillGroups(),
  ]);

  return (
    <>
      <Section className="pt-16 sm:pt-20" reveal>
        <div>
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            About
          </h1>
          <div className="mt-6 max-w-2xl space-y-4 text-lg text-foreground/70">
            {settings.aboutParagraphs.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </div>
      </Section>

      <Section className="border-t border-border" reveal>
        <h2 className="text-2xl font-semibold tracking-tight">Experience</h2>
        <div className="mt-8 space-y-10">
          {experience.map((job) => (
            <div key={`${job.role}-${job.org}`}>
              <h3 className="font-medium">{job.role}</h3>
              <p className="text-sm text-foreground/60">
                {job.org}
                {job.location ? `, ${job.location}` : ""}
              </p>
              <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-foreground/70">
                {job.bullets.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section className="border-t border-border" reveal>
        <h2 className="text-2xl font-semibold tracking-tight">Education</h2>
        <div className="mt-8 space-y-4">
          {education.map((item) => (
            <div
              key={item.degree}
              className="flex flex-wrap items-baseline justify-between gap-x-4"
            >
              <div>
                <p className="font-medium">{item.degree}</p>
                <p className="text-sm text-foreground/60">{item.org}</p>
              </div>
              <span className="text-sm text-foreground/50">{item.year}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section className="border-t border-border" reveal>
        <h2 className="text-2xl font-semibold tracking-tight">Skills</h2>
        <div className="mt-8 grid gap-8 sm:grid-cols-2">
          {skillGroups.map((group) => (
            <div key={group.title}>
              <h3 className="font-medium">{group.title}</h3>
              <p className="mt-1 text-sm text-foreground/60">
                {group.description}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md bg-muted px-2.5 py-1 text-sm text-foreground-soft"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section className="border-t border-border" reveal>
        <h2 className="text-2xl font-semibold tracking-tight">
          Open to Opportunities
        </h2>
        <p className="mt-3 max-w-xl text-foreground/70">
          I&apos;m open to software, web, and cloud-leaning developer roles,
          internships, and freelance projects.
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <Button href="/contact">Get in Touch</Button>
          <Button href={settings.githubUrl} variant="secondary" external>
            View GitHub
          </Button>
          {settings.cvUrl && (
            <Button href={settings.cvUrl} variant="secondary" external>
              Download CV
            </Button>
          )}
        </div>
      </Section>
    </>
  );
}
