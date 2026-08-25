import { notFound } from "next/navigation";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { getProjectBySlug, projects } from "@/content/projects";
import { pageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  return pageMetadata({
    title: project.name,
    description: project.summary,
    path: `/projects/${project.slug}`,
  });
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <Section className="pt-16 sm:pt-20">
      <div className="flex flex-wrap items-center gap-3">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          {project.name}
        </h1>
        <span className="rounded-full border border-black/10 px-2.5 py-0.5 text-xs text-foreground/60 dark:border-white/15">
          {project.type}
        </span>
      </div>
      <p className="mt-4 max-w-2xl text-lg text-foreground/70">
        {project.summary}
      </p>

      <div className="mt-8 flex flex-wrap gap-4">
        <Button href={project.github} external>
          View Code on GitHub
        </Button>
        {project.demo && (
          <Button href={project.demo} variant="secondary" external>
            Live Demo
          </Button>
        )}
      </div>

      <div className="mt-12 grid gap-10 sm:grid-cols-2">
        <div>
          <h2 className="font-medium">Purpose</h2>
          <p className="mt-2 text-sm text-foreground/70">{project.purpose}</p>
        </div>
        <div>
          <h2 className="font-medium">What I Did</h2>
          <p className="mt-2 text-sm text-foreground/70">{project.role}</p>
        </div>
        <div>
          <h2 className="font-medium">What I Learned</h2>
          <p className="mt-2 text-sm text-foreground/70">{project.learned}</p>
        </div>
        <div>
          <h2 className="font-medium">Stack</h2>
          <div className="mt-2 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="rounded-md bg-black/[.04] px-2.5 py-1 text-sm text-foreground/80 dark:bg-white/[.06]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
