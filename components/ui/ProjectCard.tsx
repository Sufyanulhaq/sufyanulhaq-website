"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import type { Project } from "@/lib/content-types";

const statusLabel: Record<Project["status"], string | null> = {
  completed: null,
  "in-development": "In Development",
  learning: "Learning",
};

function initials(name: string) {
  return name
    .split(" ")
    .filter((w) => /[a-zA-Z]/.test(w[0]))
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

export function ProjectCard({ project }: { project: Project }) {
  const badge = statusLabel[project.status];

  return (
    <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.18 }}>
      <Link
        href={`/projects/${project.slug}`}
        className="group block overflow-hidden rounded-2xl border border-black/10 transition-colors hover:border-accent/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent dark:border-white/10"
      >
        <div className="relative flex h-36 items-center justify-center overflow-hidden bg-muted">
          {project.screenshotUrl ? (
            <Image
              src={project.screenshotUrl}
              alt={`Screenshot of ${project.name}`}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover object-top"
            />
          ) : (
            <>
              <div
                className="absolute inset-0 opacity-[0.15] dark:opacity-[0.2]"
                style={{
                  backgroundImage:
                    "radial-gradient(var(--foreground) 1px, transparent 1px)",
                  backgroundSize: "16px 16px",
                }}
              />
              <span className="relative flex h-16 w-16 items-center justify-center rounded-xl bg-accent text-lg font-semibold text-accent-foreground">
                {initials(project.name)}
              </span>
            </>
          )}
        </div>
        <div className="p-5">
          <div className="mb-2 flex items-center justify-between gap-3">
            <h3 className="font-semibold">{project.name}</h3>
            {badge && (
              <span className="shrink-0 rounded-full border border-accent/30 bg-accent/10 px-2.5 py-0.5 text-xs font-medium text-accent">
                {badge}
              </span>
            )}
          </div>
          <p className="text-sm text-foreground/70">{project.summary}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
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
    </motion.div>
  );
}
