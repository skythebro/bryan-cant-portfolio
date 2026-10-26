import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/content";
import { ShotGallery } from "@/components/shot-gallery";

function Cover({ project }: { project: Project }) {
  if (project.shots?.length) {
    return <ShotGallery shots={project.shots} title={project.title} />;
  }

  // Projects without screenshots get a plain panel with their name.
  return (
    <div className="flex aspect-[16/10] items-center justify-center bg-[radial-gradient(ellipse_at_top,oklch(0.32_0.05_70),oklch(0.2_0.01_60))]">
      <span className="px-6 text-center text-3xl font-semibold tracking-tight text-foreground/90">
        {project.title}
      </span>
    </div>
  );
}

// `wide` spans both grid columns with the screenshot beside the text, so an odd
// last card doesn't leave a gap.
export function ProjectCard({
  project,
  wide,
}: {
  project: Project;
  wide?: boolean;
}) {
  return (
    <article
      className={`flex flex-col overflow-hidden rounded-xl border border-border bg-card ${
        wide ? "md:col-span-2 md:grid md:grid-cols-2" : ""
      }`}
    >
      <div className={wide ? "md:self-center" : undefined}>
        <Cover project={project} />
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p className="text-sm text-primary">{project.context}</p>
        <h3 className="mt-1 text-xl font-semibold tracking-tight">
          {project.title}
        </h3>
        <p className="mt-3 leading-relaxed text-muted-foreground">
          {project.description}
        </p>
        {project.numbers ? (
          <p className="mt-4 text-sm font-medium text-foreground/90">
            {project.numbers}
          </p>
        ) : null}
        <div className="mt-auto flex flex-wrap items-end justify-between gap-x-4 gap-y-3 pt-5">
          <ul className="flex flex-wrap gap-1.5" aria-label="Built with">
            {project.stack.map((item) => (
              <li
                key={item}
                className="rounded-md bg-muted px-2 py-0.5 text-xs text-muted-foreground"
              >
                {item}
              </li>
            ))}
          </ul>
          {project.links.length ? (
            <div className="flex gap-4 text-sm">
              {project.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="inline-flex items-center gap-0.5 font-medium text-primary hover:underline"
                >
                  {link.label}
                  <ArrowUpRight className="size-3.5" />
                </a>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </article>
  );
}
