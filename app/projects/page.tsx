import { Section } from "@/components/ui/Section";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { projects } from "@/content/projects";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Projects",
  description:
    "Personal and learning projects built by Sufyan Ul Haq while developing his web development skills.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <Section className="pt-16 sm:pt-20">
      <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
        Projects
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-foreground/70">
        A selection of personal and learning projects. These are honest
        representations of where I&apos;m at — not client work, and not
        polished commercial products, but real code I&apos;ve written to
        build and prove my skills.
      </p>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <ProjectCard key={project.slug} project={project} index={i} />
        ))}
      </div>
    </Section>
  );
}
