import Link from "next/link";
import type { Project } from "@/content/projects";

const gradients = [
  "from-slate-700 to-slate-900",
  "from-zinc-700 to-zinc-900",
  "from-neutral-700 to-neutral-900",
  "from-stone-700 to-stone-900",
];

export function ProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
  const gradient = gradients[index % gradients.length];

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block overflow-hidden rounded-2xl border border-black/10 transition-colors hover:border-black/25 dark:border-white/10 dark:hover:border-white/25"
    >
      <div
        className={`flex h-36 items-center justify-center bg-gradient-to-br ${gradient} text-lg font-semibold text-white/90`}
      >
        {project.name}
      </div>
      <div className="p-5">
        <div className="mb-2 flex items-center justify-between gap-3">
          <h3 className="font-semibold">{project.name}</h3>
          <span className="shrink-0 rounded-full border border-black/10 px-2.5 py-0.5 text-xs text-foreground/60 dark:border-white/15">
            {project.type}
          </span>
        </div>
        <p className="text-sm text-foreground/70">{project.summary}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-md bg-black/[.04] px-2 py-1 text-xs text-foreground/70 dark:bg-white/[.06]"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
