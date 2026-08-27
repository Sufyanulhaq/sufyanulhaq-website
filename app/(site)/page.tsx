import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { GitHubActivity } from "@/components/GitHubActivity";
import { HeroReveal } from "@/components/motion/Hero";
import {
  getSiteSettings,
  getProjects,
  getCompletedProjects,
  getInProgressProjects,
  getServices,
} from "@/lib/content";
import { pageMetadata } from "@/lib/seo";
import { whatsappUrl } from "@/lib/site";
import { Code2, Cloud, Workflow } from "lucide-react";

export async function generateMetadata() {
  const settings = await getSiteSettings();
  return pageMetadata({
    title: `${settings.headline}`,
    description: settings.seoDescription,
    path: "/",
  });
}

const capabilities = [
  {
    icon: Code2,
    title: "Web Development",
    description:
      "Modern, responsive web applications — HTML, CSS, JavaScript, PHP, and TypeScript with React and Next.js.",
  },
  {
    icon: Cloud,
    title: "Cloud & Infrastructure",
    description:
      "AWS fundamentals, deployment, and DNS/domain setup — genuinely hands-on, still actively growing this side.",
  },
  {
    icon: Workflow,
    title: "APIs & Automation",
    description:
      "Connecting services, integrating APIs, and scripting the repetitive parts away.",
  },
];

const process = [
  {
    step: "01",
    title: "Understand",
    description: "Understand the problem, requirements and users — before any code.",
  },
  {
    step: "02",
    title: "Build",
    description: "Design and develop the solution, built to be explained and defended.",
  },
  {
    step: "03",
    title: "Deploy",
    description: "Get it running properly in a real production environment.",
  },
  {
    step: "04",
    title: "Support",
    description: "Maintain, improve, and troubleshoot after launch.",
  },
];

const openTo = [
  "Software Development",
  "Cloud & Infrastructure Opportunities",
  "Freelance Projects",
  "Technical Collaborations",
];

export default async function Home() {
  const [settings, projects, services] = await Promise.all([
    getSiteSettings(),
    getProjects(),
    getServices(),
  ]);

  const completed = getCompletedProjects(projects).slice(0, 3);
  const inProgress = getInProgressProjects(projects);
  const featuredServices = services.slice(0, 3);

  return (
    <>
      <Section className="pt-20 sm:pt-28">
        <HeroReveal>
          <div>
            <p className="mb-4 text-sm font-medium text-foreground/60">
              {settings.location}
            </p>
            <h1 className="max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl">
              {settings.headline}
            </h1>
            <p className="mt-6 max-w-xl text-lg text-foreground/70">
              {settings.tagline}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/projects">View My Work</Button>
              <Button href="/contact" variant="secondary">
                Let&apos;s Work Together
              </Button>
            </div>
          </div>
        </HeroReveal>
      </Section>

      <Section className="border-t border-border" reveal>
        <h2 className="text-2xl font-semibold tracking-tight">What I Do</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {capabilities.map((capability) => (
            <div key={capability.title} className="card-surface rounded-2xl p-6">
              <capability.icon
                className="h-6 w-6 text-accent"
                strokeWidth={1.75}
                aria-hidden="true"
              />
              <h3 className="mt-4 font-medium">{capability.title}</h3>
              <p className="mt-2 text-sm text-foreground/70">
                {capability.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="border-t border-border" reveal>
        <div className="mb-8 flex items-end justify-between">
          <h2 className="text-2xl font-semibold tracking-tight">
            Selected Projects
          </h2>
          <Button href="/projects" variant="secondary">
            All Projects
          </Button>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {completed.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Section>

      {inProgress.length > 0 && (
        <Section className="border-t border-border" reveal>
          <h2 className="text-2xl font-semibold tracking-tight">
            Currently Building
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {inProgress.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </Section>
      )}

      {featuredServices.length > 0 && (
        <Section className="border-t border-border" reveal>
          <div className="mb-8 flex items-end justify-between">
            <h2 className="text-2xl font-semibold tracking-tight">
              Services
            </h2>
            <Button href="/services" variant="secondary">
              All Services
            </Button>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            {featuredServices.map((service) => (
              <div key={service.slug} className="card-surface rounded-2xl p-6">
                <h3 className="font-medium">{service.title}</h3>
                <p className="mt-2 text-sm text-foreground/70">
                  {service.summary}
                </p>
              </div>
            ))}
          </div>
        </Section>
      )}

      <Section className="border-t border-border" reveal>
        <h2 className="text-2xl font-semibold tracking-tight">How I Work</h2>
        <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {process.map((item) => (
            <div key={item.step}>
              <span className="font-mono text-sm text-accent">{item.step}</span>
              <h3 className="mt-2 font-medium">{item.title}</h3>
              <p className="mt-2 text-sm text-foreground/70">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="border-t border-border" reveal>
        <h2 className="text-2xl font-semibold tracking-tight">
          Building &amp; Learning in Public
        </h2>
        <p className="mt-3 max-w-xl text-foreground/70">
          A selection of repositories — current work and completed builds —
          pulled live from GitHub.
        </p>
        <div className="mt-8">
          <GitHubActivity />
        </div>
        <div className="mt-6">
          <Button
            href={settings.githubUrl}
            variant="secondary"
            external
            trackEvent="GitHub Profile Click (Home)"
          >
            View GitHub Profile
          </Button>
        </div>
      </Section>

      <Section className="border-t border-border" reveal>
        <h2 className="text-2xl font-semibold tracking-tight">Open To</h2>
        <div className="mt-6 flex flex-wrap gap-2">
          {openTo.map((item) => (
            <span
              key={item}
              className="rounded-full border border-accent/30 bg-accent/5 px-3.5 py-1.5 text-sm text-foreground/80"
            >
              {item}
            </span>
          ))}
        </div>
      </Section>

      <Section className="border-t border-border" reveal>
        <div className="card-surface rounded-2xl p-8 sm:p-10">
          <h2 className="text-2xl font-semibold tracking-tight">
            Let&apos;s build something
          </h2>
          <p className="mt-3 max-w-xl text-foreground/70">
            Hiring for a developer role, or have a project in mind? I&apos;d
            like to hear from you.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Button href="/contact" trackEvent="Start a Project (Home)">
              Start a Project
            </Button>
            {settings.whatsapp && (
              <Button
                href={whatsappUrl(settings.whatsapp)}
                variant="secondary"
                external
                trackEvent="WhatsApp Click (Home)"
              >
                Message on WhatsApp
              </Button>
            )}
            <Button href="/about" variant="secondary">
              More About Me
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
