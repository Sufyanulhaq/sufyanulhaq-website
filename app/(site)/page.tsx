import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { HeroReveal, HeroP, HeroH1, HeroDiv } from "@/components/motion/Hero";
import {
  getSiteSettings,
  getProjects,
  getCompletedProjects,
  getInProgressProjects,
  getSkillGroups,
} from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata() {
  const settings = await getSiteSettings();
  return pageMetadata({
    title: `${settings.headline}`,
    description: settings.seoDescription,
    path: "/",
  });
}

export default async function Home() {
  const [settings, projects, skillGroups] = await Promise.all([
    getSiteSettings(),
    getProjects(),
    getSkillGroups(),
  ]);

  const completed = getCompletedProjects(projects).slice(0, 3);
  const inProgress = getInProgressProjects(projects);
  const learning = skillGroups.find((g) => g.isCurrentlyLearning);

  return (
    <>
      <Section className="pt-20 sm:pt-28">
        <HeroReveal>
          <HeroP className="mb-4 text-sm font-medium text-foreground/60">
            {settings.location}
          </HeroP>
          <HeroH1 className="max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl">
            {settings.headline}
          </HeroH1>
          <HeroP className="mt-6 max-w-xl text-lg text-foreground/70">
            {settings.tagline}
          </HeroP>
          <HeroDiv className="mt-8 flex flex-wrap gap-4">
            <Button href="/projects">Selected Projects</Button>
            <Button href="/contact" variant="secondary">
              Work With Me
            </Button>
          </HeroDiv>
        </HeroReveal>
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

      {learning && (
        <Section className="border-t border-border" reveal>
          <h2 className="text-2xl font-semibold tracking-tight">
            {learning.title}
          </h2>
          <p className="mt-3 max-w-xl text-foreground/70">
            {learning.description}
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {learning.skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-black/10 px-3 py-1.5 text-sm text-foreground/80 dark:border-white/15"
              >
                {skill}
              </span>
            ))}
          </div>
          <div className="mt-8">
            <Button href="/about" variant="secondary">
              More About Me
            </Button>
          </div>
        </Section>
      )}
    </>
  );
}
