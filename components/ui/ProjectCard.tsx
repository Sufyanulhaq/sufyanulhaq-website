"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { track } from "@vercel/analytics/react";
import type { Project } from "@/lib/content-types";
import { projectMockups } from "@/lib/project-mockups";
import { InterfaceMockup } from "./InterfaceMockup";

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
  const badge = project.tag || statusLabel[project.status];
  const mockupVariant = projectMockups[project.slug];

  return (
    <motion.div
      className="h-full"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.18 }}
    >
      <Link
        href={`/projects/${project.slug}`}
        onClick={() => track("Project Card Click", { project: project.name })}
        className="card-surface group flex h-full flex-col overflow-hidden rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      >
        <div className="relative flex h-36 shrink-0 items-center justify-center overflow-hidden bg-muted">
          {project.screenshotUrl ? (
            <Image
              src={project.screenshotUrl}
              alt={`Screenshot of ${project.name}`}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover object-top transition-transform duration-300 ease-out group-hover:scale-[1.04] motion-reduce:group-hover:scale-100"
            />
          ) : mockupVariant ? (
            <InterfaceMockup
              variant={mockupVariant}
              label={project.slug}
              className="h-full w-full transition-transform duration-300 ease-out group-hover:scale-[1.04] motion-reduce:group-hover:scale-100"
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
        <div className="flex flex-1 flex-col p-5">
          <div className="mb-2">
            <h3 className="font-semibold">{project.name}</h3>
            {badge && (
              <span className="mt-1.5 inline-block rounded-full border border-accent/30 bg-accent/10 px-2.5 py-0.5 text-xs font-medium text-accent">
                {badge}
              </span>
            )}
          </div>
          <p className="line-clamp-3 text-sm text-foreground/70">
            {project.summary}
          </p>
          <div className="mt-auto flex flex-wrap gap-2 pt-4">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-md bg-muted px-2 py-1 text-xs text-foreground-soft"
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
