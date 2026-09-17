"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/content";
import { Badge } from "@/components/ui/badge";
import { ProjectShots } from "@/components/project-shots";

export function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
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
      className={`panel flex h-full flex-col p-4 transition-colors hover:border-primary/35 hover:bg-card ${
        project.featured ? "md:p-5" : ""
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <p className="spec">{project.kicker}</p>
        <div className="flex flex-wrap justify-end gap-1.5">
          {project.badge ? (
            <Badge
              variant="outline"
              className="rounded-sm border-primary/35 font-mono uppercase text-primary"
            >
              {project.badge}
            </Badge>
          ) : null}
          {project.status === "wip" ? (
            <Badge variant="outline" className="rounded-sm font-mono uppercase">
              WIP
            </Badge>
          ) : null}
        </div>
      </div>
      <h3 className="mt-2 text-lg font-medium tracking-tight">
        {project.title}
      </h3>
      <div
        className={
          project.featured && project.highlights?.length
            ? "mt-2 grid flex-1 gap-4 md:grid-cols-2 md:items-start"
            : "flex-1"
        }
      >
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:mt-0">
          {project.summary}
        </p>
        {project.highlights && project.highlights.length > 0 ? (
          <ul className="space-y-1.5 border-l border-primary/25 pl-3">
            {project.highlights.map((item) => (
              <li
                key={item}
                className="text-sm leading-relaxed text-foreground/85"
              >
                {item}
              </li>
            ))}
          </ul>
        ) : (
          <div className="flex-1" />
        )}
      </div>

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
              className="border border-primary/25 bg-accent px-2 py-1"
            >
              <span className="font-mono text-sm text-primary">
                {metric.value}
              </span>
              <span className="ml-1.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                {metric.label}
              </span>
            </li>
          ))}
        </ul>
      ) : null}

      <ul className="mt-4 flex flex-wrap gap-1.5">
        {project.tags.map((tag) => (
          <li
            key={tag}
            className="font-mono text-[11px] text-muted-foreground"
          >
            {tag}
            <span className="text-border"> ·</span>
          </li>
        ))}
      </ul>

      {project.links.length > 0 ? (
        <div className="mt-4 flex flex-wrap gap-3 border-t border-border pt-3">
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
        <p className="mt-4 border-t border-border pt-3 font-mono text-[11px] text-muted-foreground/70">
          No public repo verified — link omitted.
        </p>
      )}
    </motion.article>
  );
}
