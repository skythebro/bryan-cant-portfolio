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
      <ol className="space-y-3">
        {timeline.map((item) => (
          <li key={item.id} className="panel px-4 py-4 sm:px-5">
            <div className="grid gap-2 sm:grid-cols-[7.5rem_7rem_1fr] sm:items-baseline">
              <time className="text-sm text-muted-foreground">{item.when}</time>
              <span className="chip w-fit text-primary">{kindLabel[item.kind]}</span>
              <div className="min-w-0">
                <h3 className="text-sm font-semibold">{item.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {item.detail}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
