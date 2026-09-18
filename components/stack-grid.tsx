import { SectionHeading } from "@/components/section-heading";
import { stackDomains } from "@/lib/content";

export function StackGrid() {
  return (
    <section id="stack" className="scroll-mt-20">
      <SectionHeading eyebrow="Stack" title="What I actually use" />
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
        {stackDomains.map((domain, index) => (
          <article
            key={domain.id}
            className={`panel p-5 ${index < 3 ? "lg:col-span-2" : "lg:col-span-3"}`}
          >
            <h3 className="text-sm font-semibold text-primary">
              {domain.title}
            </h3>
            <ul className="mt-3 space-y-1.5">
              {domain.items.map((item) => (
                <li key={item} className="text-sm text-foreground/90">
                  {item}
                </li>
              ))}
            </ul>
            {"note" in domain && domain.note ? (
              <p className="mt-3 text-xs text-muted-foreground">{domain.note}</p>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
}
