import { ArrowUpRight, Mail } from "lucide-react";
import { profile, stats } from "@/lib/content";
import { Portrait } from "@/components/portrait";

export function Hero() {
  return (
    <section className="pt-14 pb-16 sm:pt-20 sm:pb-20">
      <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:gap-10">
        <Portrait />
        <div className="min-w-0">
          <p className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm text-primary">
            <span className="size-2 rounded-full bg-primary" aria-hidden />
            Open to work
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            Hi, I&apos;m Bryan.
          </h1>
          <p className="mt-2 text-lg text-muted-foreground">
            {profile.role} · {profile.location}
          </p>
        </div>
      </div>

      <p className="mt-8 max-w-2xl text-lg leading-relaxed text-foreground/90">
        {profile.intro}
      </p>
      <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
        {profile.status} {profile.spokenLanguages}
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href={`mailto:${profile.email}`}
          className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
        >
          <Mail className="size-4" />
          Email me
        </a>
        <a
          href={profile.links.linkedin}
          className="inline-flex items-center gap-1.5 rounded-lg border border-border px-4 py-2.5 text-sm font-medium transition-colors hover:bg-muted"
        >
          LinkedIn
          <ArrowUpRight className="size-4 text-muted-foreground" />
        </a>
        <a
          href={profile.links.github}
          className="inline-flex items-center gap-1.5 rounded-lg border border-border px-4 py-2.5 text-sm font-medium transition-colors hover:bg-muted"
        >
          GitHub
          <ArrowUpRight className="size-4 text-muted-foreground" />
        </a>
      </div>

      <dl className="mt-14 grid gap-6 border-t border-border pt-8 sm:grid-cols-3">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col">
            <dt className="text-sm text-muted-foreground">{stat.label}</dt>
            <dd className="order-first text-3xl font-semibold tracking-tight text-primary">
              {stat.value}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
