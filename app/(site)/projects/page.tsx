import { Section } from "@/components/ui/Section";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { getProjects, getCompletedProjects, getInProgressProjects } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Projects",
  description:
    "Selected projects built by Sufyan Ul Haq while developing his web development skills.",
  path: "/projects",
});

export default async function ProjectsPage() {
  const projects = await getProjects();
  const completed = getCompletedProjects(projects);
  const inProgress = getInProgressProjects(projects);

  return (
    <>
      <Section className="pt-16 sm:pt-20" reveal>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Selected Projects
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-foreground/70">
          A small set of projects, chosen deliberately over a long list.
          Each one is real, working code — not client work, not a case
          study built for marketing.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
    </>
  );
}
