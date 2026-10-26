import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import {
  experience,
  featured,
  inProgress,
  profile,
  skills,
  smaller,
  statsDate,
} from "@/lib/content";
import { ProjectCard } from "@/components/project-card";

function Section({
  id,
  title,
  intro,
  children,
}: {
  id?: string;
  title: string;
  intro?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-20 py-14 sm:py-16">
      <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
        {title}
      </h2>
      {intro ? (
        <p className="mt-3 max-w-2xl leading-relaxed text-muted-foreground">
          {intro}
        </p>
      ) : null}
      <div className="mt-8">{children}</div>
    </section>
  );
}

export function Work() {
  return (
    <Section
      id="work"
      title="Things I've made"
      intro={`Mostly mods and tools for games I play. They're the projects where real people use what I build and tell me straight away when something breaks. Download numbers are from ${statsDate}.`}
    >
      <div className="grid gap-6 md:grid-cols-2">
        {featured.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Section>
  );
}

export function InProgress() {
  return (
    <Section title="What I'm working on now">
      <article className="rounded-xl border border-primary/30 bg-primary/5 p-5 sm:p-6">
        <p className="text-sm text-primary">{inProgress.context}</p>
        <h3 className="mt-1 text-xl font-semibold tracking-tight">
          {inProgress.title}
        </h3>
        <p className="mt-3 max-w-3xl leading-relaxed text-muted-foreground">
          {inProgress.description}
        </p>
        <ul className="mt-5 flex flex-wrap gap-1.5">
          {inProgress.stack.map((item) => (
            <li
              key={item}
              className="rounded-md bg-muted px-2 py-0.5 text-xs text-muted-foreground"
            >
              {item}
            </li>
          ))}
        </ul>
      </article>
    </Section>
  );
}

export function Smaller() {
  return (
    <Section title="Smaller projects">
      <ul className="divide-y divide-border border-y border-border">
        {smaller.map((item) => (
          <li key={item.title}>
            <a
              href={item.href}
              className="group grid gap-1 py-4 sm:grid-cols-[minmax(0,16rem)_1fr_auto] sm:items-baseline sm:gap-6"
            >
              <span>
                <span className="font-medium group-hover:text-primary">
                  {item.title}
                </span>
                <span className="block text-sm text-muted-foreground">
                  {item.context}
                </span>
              </span>
              <span className="leading-relaxed text-muted-foreground">
                {item.description}
              </span>
              <ArrowUpRight className="hidden size-4 text-muted-foreground group-hover:text-primary sm:block" />
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export function Experience() {
  return (
    <Section id="experience" title="Experience">
      <ol className="space-y-8">
        {experience.map((job) => (
          <li
            key={job.title}
            className="grid gap-1 sm:grid-cols-[10rem_1fr] sm:gap-6"
          >
            <p className="text-sm text-muted-foreground sm:pt-0.5">{job.when}</p>
            <div>
              <h3 className="font-semibold">
                {job.title}{" "}
                <span className="font-normal text-muted-foreground">
                  · {job.place}
                </span>
              </h3>
              <p className="mt-1.5 max-w-2xl leading-relaxed text-muted-foreground">
                {job.description}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}

export function Skills() {
  return (
    <Section title="What I work with">
      <dl className="grid gap-6 sm:grid-cols-2">
        {skills.map((group) => (
          <div key={group.title}>
            <dt className="text-sm text-muted-foreground">{group.title}</dt>
            <dd className="mt-2 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-md border border-border px-2.5 py-1 text-sm"
                >
                  {item}
                </span>
              ))}
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}

const contactLinks = [
  { label: "LinkedIn", href: profile.links.linkedin },
  { label: "GitHub", href: profile.links.github },
  { label: "Nexus Mods", href: profile.links.nexus },
  { label: "Thunderstore", href: profile.links.thunderstore },
  { label: "Ko-fi", href: profile.links.kofi },
];

export function Contact() {
  return (
    <Section id="contact" title="Get in touch">
      <p className="max-w-2xl text-lg leading-relaxed">
        I&apos;m looking for a junior developer job in or around Antwerp.
        Hybrid is fine. If you think I&apos;d be a good fit, or you just want
        to talk about one of my projects, send me an email.
      </p>
      <a
        href={`mailto:${profile.email}`}
        className="mt-6 inline-block text-2xl font-semibold text-primary hover:underline sm:text-3xl"
      >
        {profile.email}
      </a>
      <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-muted-foreground">
        {contactLinks.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="inline-flex items-center gap-1 hover:text-foreground"
            >
              {link.label}
              <ArrowUpRight className="size-3.5" />
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}
