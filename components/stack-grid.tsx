import { stackDomains } from "@/lib/content";

export function StackGrid() {
  return (
    <section id="stack" className="scroll-mt-16">
      <p className="spec">02 — Stack</p>
      <h2 className="mt-1 text-2xl font-medium tracking-tight">
        What I actually use
      </h2>
      <div className="mt-4 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
        {stackDomains.map((domain) => (
          <article key={domain.id} className="bg-card p-4">
            <h3 className="spec text-primary">{domain.title}</h3>
            <ul className="mt-3 space-y-1.5">
              {domain.items.map((item) => (
                <li
                  key={item}
                  className="border-l border-border pl-2.5 text-sm text-foreground/90"
                >
                  {item}
                </li>
              ))}
            </ul>
            {"note" in domain && domain.note ? (
              <p className="mt-3 font-mono text-[11px] text-muted-foreground">
                {domain.note}
              </p>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
}
