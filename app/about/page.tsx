import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { skillGroups, currentlyLearning } from "@/content/skills";
import { site } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "About",
  description:
    "Background, experience, and skills of Sufyan Ul Haq — a web developer based in Liverpool, UK.",
  path: "/about",
});

const experience = [
  {
    role: "Junior Web Developer",
    org: "NextTech Solutions, Rawalpindi",
    period: "Mar 2021 – Mar 2022",
    points: [
      "Developed and maintained web applications using HTML, CSS, JavaScript, and PHP.",
      "Worked with the team to build functional, user-friendly features.",
      "Diagnosed and fixed bugs to keep development and testing running smoothly.",
    ],
  },
  {
    role: "Web Designing Intern",
    org: "NextTech Solutions, Islamabad",
    period: "Jul 2020 – Nov 2020",
    points: [
      "Designed visuals in Photoshop and converted them into working HTML/CSS pages.",
      "Helped define coding requirements for e-commerce functionality.",
      "Translated client requirements into site concepts during project planning.",
    ],
  },
];

const education = [
  {
    degree: "MSc Digital Marketing",
    org: "University of Chester",
    year: "2025",
  },
  {
    degree: "BSc Computer Science",
    org: "Federal Urdu University of Arts, Sciences and Technology, Islamabad",
    year: "2023",
  },
];

export default function AboutPage() {
  return (
    <>
      <Section className="pt-16 sm:pt-20">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          About
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-foreground/70">
          I&apos;m {site.name}, a web developer based in {site.location}. My
          main focus is web development — building things with HTML, CSS,
          JavaScript, and PHP, and more recently working with TypeScript and
          Next.js. Alongside that, I&apos;m building skills in Cloud
          Computing and automation, an area I&apos;m genuinely interested in
          but still early in developing.
        </p>
        <p className="mt-4 max-w-2xl text-lg text-foreground/70">
          I&apos;m not positioning myself as a senior developer or a cloud
          expert. I&apos;m someone actively building projects, learning
          modern tools, and looking for the right opportunities — whether
          that&apos;s a developer role or a freelance project — to keep
          growing.
        </p>
      </Section>

      <Section className="border-t border-black/10 dark:border-white/10">
        <h2 className="text-2xl font-semibold tracking-tight">Experience</h2>
        <div className="mt-8 space-y-10">
          {experience.map((job) => (
            <div key={job.role}>
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="font-medium">{job.role}</h3>
                <span className="text-sm text-foreground/50">
                  {job.period}
                </span>
              </div>
              <p className="text-sm text-foreground/60">{job.org}</p>
              <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-foreground/70">
                {job.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section className="border-t border-black/10 dark:border-white/10">
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

      <Section className="border-t border-black/10 dark:border-white/10">
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
                    className="rounded-md bg-black/[.04] px-2.5 py-1 text-sm text-foreground/80 dark:bg-white/[.06]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-black/10 p-6 dark:border-white/10">
          <h3 className="font-medium">{currentlyLearning.title}</h3>
          <p className="mt-1 text-sm text-foreground/60">
            {currentlyLearning.description}
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {currentlyLearning.skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-black/10 px-3 py-1.5 text-sm text-foreground/80 dark:border-white/15"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </Section>

      <Section className="border-t border-black/10 dark:border-white/10">
        <h2 className="text-2xl font-semibold tracking-tight">
          Open to Opportunities
        </h2>
        <p className="mt-3 max-w-xl text-foreground/70">
          I&apos;m open to junior/graduate developer roles, internships, and
          freelance web development projects.
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <Button href="/contact">Get in Touch</Button>
          <Button href={site.github} variant="secondary" external>
            View GitHub
          </Button>
        </div>
      </Section>
    </>
  );
}
