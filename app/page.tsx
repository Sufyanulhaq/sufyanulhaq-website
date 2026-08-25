import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { currentlyLearning } from "@/content/skills";
import { getFeaturedProjects } from "@/content/projects";
import { site } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: `${site.name} — ${site.title}`,
  description: site.description,
  path: "/",
});

export default function Home() {
  const projects = getFeaturedProjects().slice(0, 3);

  return (
    <>
      <Section className="pt-20 sm:pt-28">
        <p className="mb-4 text-sm font-medium text-foreground/60">
          {site.location}
        </p>
        <h1 className="max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl">
          {site.name}, {site.title}
        </h1>
        <p className="mt-6 max-w-xl text-lg text-foreground/70">
          I build web applications and I&apos;m actively developing my skills
          in Cloud Computing and automation. I&apos;m early in my career and
          focused on building real projects, not just talking about them.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Button href="/projects">View Projects</Button>
          <Button href="/contact" variant="secondary">
            Work With Me
          </Button>
        </div>
      </Section>

      <Section className="border-t border-black/10 dark:border-white/10">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="text-2xl font-semibold tracking-tight">
            Featured Projects
          </h2>
          <Button href="/projects" variant="secondary">
            All Projects
          </Button>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </Section>

      <Section className="border-t border-black/10 dark:border-white/10">
        <h2 className="text-2xl font-semibold tracking-tight">
          {currentlyLearning.title}
        </h2>
        <p className="mt-3 max-w-xl text-foreground/70">
          {currentlyLearning.description}
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {currentlyLearning.skills.map((skill) => (
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
    </>
  );
}
