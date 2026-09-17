import { timeline } from "@/lib/content";

const kindLabel = {
  edu: "Edu",
  job: "Job",
  release: "Ship",
} as const;

export function Timeline() {
  return (
    <section id="timeline" className="scroll-mt-16">
      <p className="spec">03 — Timeline</p>
      <h2 className="mt-1 text-2xl font-medium tracking-tight">
        Education, jobs, releases
      </h2>
      <ol className="mt-4 divide-y divide-border border border-border">
        {timeline.map((item) => (
          <li
            key={item.id}
            className="grid gap-2 px-4 py-3 sm:grid-cols-[7.5rem_3.25rem_1fr] sm:items-baseline"
          >
            <time className="font-mono text-[11px] text-muted-foreground">
              {item.when}
            </time>
            <span className="spec w-fit border border-border px-1.5 py-0.5 text-primary">
              {kindLabel[item.kind]}
            </span>
            <div>
              <h3 className="text-sm font-medium">{item.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{item.detail}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
