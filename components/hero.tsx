import { ArrowUpRight, Mail } from "lucide-react";
import { profile, stats } from "@/lib/content";
import { Portrait } from "@/components/portrait";

export function Hero() {
  return (
    <section className="pt-12 pb-16 sm:pt-20 sm:pb-20">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-8">
        <Portrait />
        <div className="min-w-0">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            {profile.name}
          </h1>
          <p className="mt-2 text-lg text-muted-foreground">
            {profile.role} · {profile.location}
          </p>
        </div>
      </div>

      <p className="mt-8 max-w-2xl text-lg leading-relaxed text-foreground/90">
        {profile.intro}
      </p>
      <p className="mt-4 flex max-w-2xl gap-2 leading-relaxed text-muted-foreground">
        <span
          className="mt-2.5 size-2 shrink-0 rounded-full bg-primary"
          aria-hidden
        />
        <span>
          {profile.status} {profile.spokenLanguages}
        </span>
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href={`mailto:${profile.email}`}
          className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-primary px-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        >
          <Mail className="size-4" aria-hidden />
          Email me
        </a>
        <a
          href={profile.links.linkedin}
          className="inline-flex min-h-11 items-center gap-1.5 rounded-lg border border-border px-4 text-sm font-medium transition-colors hover:bg-muted"
        >
          LinkedIn
          <ArrowUpRight className="size-4 text-muted-foreground" aria-hidden />
        </a>
      </div>

      <dl className="mt-14 grid gap-6 border-t border-border pt-8 sm:grid-cols-3">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col">
            <dt className="text-sm text-muted-foreground">{stat.label}</dt>
            <dd className="order-first font-mono text-3xl font-medium tracking-tight text-primary tabular-nums">
              {stat.value}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
