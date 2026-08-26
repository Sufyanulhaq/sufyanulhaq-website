import { notFound } from "next/navigation";
import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { ArchitectureFlow } from "@/components/ui/ArchitectureFlow";
import { Reveal } from "@/components/motion/Reveal";
import { InterfaceMockup } from "@/components/ui/InterfaceMockup";
import { getProjects, getProjectBySlug } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";
import { projectMockups } from "@/lib/project-mockups";

const statusLabel = {
  completed: null,
  "in-development": "In Development",
  learning: "Learning",
} as const;

export async function generateStaticParams() {
  const projects = await getProjects();
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
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
  const project = await getProjectBySlug(slug);
  if (!project) notFound();

  const badge = statusLabel[project.status];
  const mockupVariant = projectMockups[project.slug];

  return (
    <Section className="pt-16 sm:pt-20" reveal>
      <div className="flex flex-wrap items-center gap-3">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          {project.name}
        </h1>
        {badge && (
          <span className="rounded-full border border-accent/30 bg-accent/10 px-2.5 py-0.5 text-xs font-medium text-accent">
            {badge}
          </span>
        )}
      </div>
      <p className="mt-4 max-w-2xl text-lg text-foreground/70">
        {project.summary}
      </p>

      <div className="mt-8 flex flex-wrap gap-4">
        {project.githubUrl && (
          <Button href={project.githubUrl} external>
            View Code on GitHub
          </Button>
        )}
        {project.demoUrl && (
          <Button href={project.demoUrl} variant="secondary" external>
            Live Demo
          </Button>
        )}
      </div>

      {project.screenshotUrl ? (
        <div className="mt-10 overflow-hidden rounded-2xl border border-black/10 dark:border-white/10">
          <Image
            src={project.screenshotUrl}
            alt={`Screenshot of ${project.name}`}
            width={1600}
            height={1000}
            className="w-full"
            priority
          />
        </div>
      ) : (
        mockupVariant && (
          <div>
            <div className="mt-10 overflow-hidden rounded-2xl border border-black/10 dark:border-white/10">
              <InterfaceMockup
                variant={mockupVariant}
                label={project.slug}
                className="w-full"
              />
            </div>
            <p className="mt-2 text-xs text-foreground/50">
              Illustrative interface preview — no working live demo is
              available for this project (see below).
            </p>
          </div>
        )
      )}

      {project.architecture.length > 0 && (
        <div className="mt-12">
          <h2 className="mb-4 font-medium">Architecture</h2>
          <ArchitectureFlow stages={project.architecture} />
        </div>
      )}

      <div className="mt-12 grid gap-10 sm:grid-cols-2">
        <div>
          <h2 className="font-medium">Problem</h2>
          <p className="mt-2 text-sm text-foreground/70">{project.problem}</p>
        </div>
        <div>
          <h2 className="font-medium">Solution</h2>
          <p className="mt-2 text-sm text-foreground/70">{project.solution}</p>
        </div>
        <div>
          <h2 className="font-medium">Technology</h2>
          <div className="mt-2 flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-md bg-black/[.04] px-2.5 py-1 text-sm text-foreground/80 dark:bg-white/[.06]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div>
          <h2 className="font-medium">Key Features</h2>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-foreground/70">
            {project.keyFeatures.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </div>
        <div className="sm:col-span-2">
          <h2 className="font-medium">What I Learned</h2>
          <p className="mt-2 max-w-2xl text-sm text-foreground/70">
            {project.whatILearned}
          </p>
        </div>
      </div>

      <Reveal className="mt-16">
        <div className="flex flex-wrap gap-4">
          <Button href="/projects" variant="secondary">
            ← Back to Projects
          </Button>
        </div>
      </Reveal>
    </Section>
  );
}
