import { SectionHeading } from "@/components/section-heading";
import { timeline } from "@/lib/content";

const kindLabel = {
  edu: "Education",
  job: "Job",
  release: "Release",
} as const;

export function Timeline() {
  return (
    <section id="timeline" className="scroll-mt-20">
      <SectionHeading eyebrow="Timeline" title="Education, jobs, releases" />
      <ol className="relative space-y-0 border-l border-border/80 pl-6">
        {timeline.map((item) => (
          <li key={item.id} className="relative pb-7 last:pb-0">
            <span
              className="absolute -left-[1.54rem] top-1.5 size-2.5 rounded-full bg-primary ring-4 ring-background"
              aria-hidden
            />
            <p className="text-sm text-primary">
              {kindLabel[item.kind]}
              <span className="text-foreground/30"> · </span>
              <time>{item.when}</time>
            </p>
            <h3 className="mt-1 text-base font-semibold tracking-tight">
              {item.title}
            </h3>
            <p className="mt-1 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              {item.detail}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}
