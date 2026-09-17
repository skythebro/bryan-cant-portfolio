"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/content";
import { Badge } from "@/components/ui/badge";
import { ProjectShots } from "@/components/project-shots";

function kickerChips(kicker: string) {
  return kicker
    .split("·")
    .map((part) => part.trim())
    .filter(Boolean);
}

export function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const chips = kickerChips(project.kicker);

  return (
    <motion.article
      layout
      initial={false}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 6 }}
      transition={{
        duration: 0.28,
        delay: index * 0.03,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`panel flex h-full min-w-0 flex-col p-5 ${
        project.featured ? "sm:p-6" : ""
      }`}
    >
      <header className="flex min-w-0 items-start justify-between gap-3">
        <h3
          className={`min-w-0 flex-1 text-pretty font-semibold tracking-tight ${
            project.featured ? "text-2xl" : "text-lg"
          }`}
        >
          {project.title}
        </h3>
        <div className="flex shrink-0 flex-wrap justify-end gap-1.5">
          {project.badge ? (
            <Badge
              variant="outline"
              className="rounded-full border-primary/30 bg-primary/10 text-primary"
            >
              {project.badge}
            </Badge>
          ) : null}
          {project.status === "wip" ? (
            <Badge variant="outline" className="rounded-full">
              WIP
            </Badge>
          ) : null}
        </div>
      </header>

      {chips.length > 0 ? (
        <ul
          className="mt-3 flex min-w-0 flex-wrap gap-1.5"
          aria-label="Project details"
        >
          {chips.map((chip) => (
            <li key={chip} className="chip">
              {chip}
            </li>
          ))}
        </ul>
      ) : null}

      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
        {project.summary}
      </p>

      {project.highlights && project.highlights.length > 0 ? (
        <ul className="mt-3 space-y-1.5">
          {project.highlights.map((item) => (
            <li
              key={item}
              className="relative pl-3.5 text-sm leading-relaxed text-foreground/88 before:absolute before:left-0 before:top-[0.55em] before:size-1.5 before:rounded-full before:bg-primary/80"
            >
              {item}
            </li>
          ))}
        </ul>
      ) : null}

      {project.shots && project.shots.length > 0 ? (
        <ProjectShots
          shots={project.shots}
          title={project.title}
          featured={project.featured}
        />
      ) : null}

      {project.metrics && project.metrics.length > 0 ? (
        <ul className="mt-4 flex flex-wrap gap-2">
          {project.metrics.map((metric) => (
            <li
              key={`${metric.value}-${metric.label}`}
              className="rounded-full border border-primary/20 bg-primary/10 px-2.5 py-1"
            >
              <span className="text-sm font-semibold text-primary">
                {metric.value}
              </span>
              <span className="ml-1.5 text-xs text-muted-foreground">
                {metric.label}
              </span>
            </li>
          ))}
        </ul>
      ) : null}

      <ul className="mt-4 flex flex-wrap gap-1.5">
        {project.tags.map((tag) => (
          <li key={tag} className="chip">
            {tag}
          </li>
        ))}
      </ul>

      {project.links.length > 0 ? (
        <div className="mt-4 flex flex-wrap gap-3 border-t border-border pt-4">
          {project.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-sm text-primary underline-offset-4 transition-transform hover:underline hover:translate-x-0.5"
            >
              {link.label}
              <ArrowUpRight className="size-3.5" aria-hidden />
            </a>
          ))}
        </div>
      ) : (
        <p className="mt-4 border-t border-border pt-4 text-xs text-muted-foreground/80">
          No public repo verified. Link omitted.
        </p>
      )}
    </motion.article>
  );
}
