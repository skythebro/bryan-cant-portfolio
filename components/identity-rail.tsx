"use client";

import { motion } from "framer-motion";
import {
  Coffee,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Puzzle,
} from "lucide-react";
import { Portrait } from "@/components/portrait";
import { Button } from "@/components/ui/button";
import { heroTags, profile, proofStrip } from "@/lib/content";

const social = [
  { href: profile.links.github, label: "GitHub", icon: Github },
  { href: profile.links.nexus, label: "Nexus Mods", icon: Puzzle },
  { href: profile.links.kofi, label: "Ko-fi", icon: Coffee },
  { href: profile.links.linkedin, label: "LinkedIn", icon: Linkedin },
  { href: `mailto:${profile.email}`, label: "Email", icon: Mail },
] as const;

export function IdentityRail() {
  return (
    <motion.aside
      initial={false}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="panel overflow-hidden lg:sticky lg:top-16"
    >
      <div className="flex items-center justify-between border-b border-border px-3 py-2">
        <p className="spec">Identity</p>
        <span className="inline-flex items-center gap-1.5 font-mono text-[11px] text-primary">
          <span
            className="size-1.5 animate-pulse rounded-full bg-primary"
            aria-hidden
          />
          {profile.status}
        </span>
      </div>

      <div className="grid gap-5 p-4 sm:grid-cols-[minmax(0,200px)_1fr] lg:grid-cols-1">
        <Portrait />

        <div>
          <p className="spec">Who</p>
          <h1 className="mt-1 text-3xl font-medium tracking-tight sm:text-4xl">
            {profile.name}
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            {profile.aliases.join(" / ")} · {profile.role}
          </p>
          <p className="mt-4 text-[15px] leading-relaxed text-foreground/90">
            {profile.headline}
          </p>
          <p className="mt-3 flex items-start gap-2 text-sm text-muted-foreground">
            <MapPin className="mt-0.5 size-3.5 shrink-0" aria-hidden />
            {profile.location} ({profile.region})
          </p>
          <p className="mt-2 text-sm text-foreground/85">{profile.seeking}</p>

          <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Stack">
            {heroTags.map((tag) => (
              <li
                key={tag}
                className="border border-border bg-background px-2 py-0.5 font-mono text-[11px] text-muted-foreground"
              >
                {tag}
              </li>
            ))}
          </ul>

          <dl className="mt-5 grid grid-cols-2 gap-px overflow-hidden border border-border bg-border">
            {proofStrip.map((item) => (
              <div key={item.label} className="bg-card px-3 py-2.5">
                <dt className="spec normal-case tracking-normal">
                  {item.label}
                </dt>
                <dd className="mt-1 font-mono text-lg text-primary">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>

          <div className="mt-4 flex flex-wrap gap-2">
            {social.map(({ href, label, icon: Icon }) => (
              <Button
                key={label}
                variant="outline"
                size="sm"
                nativeButton={false}
                render={
                  <a href={href} target="_blank" rel="noreferrer" />
                }
              >
                <Icon />
                {label}
              </Button>
            ))}
            <Button
              variant="outline"
              size="sm"
              nativeButton={false}
              render={<a href={profile.phoneHref} />}
            >
              <Phone />
              Call
            </Button>
          </div>

          <dl className="mt-5 space-y-1.5 border-t border-border pt-4 font-mono text-[11px] text-muted-foreground">
            {profile.languages.map((lang) => (
              <div key={lang.code} className="flex justify-between gap-4">
                <dt>
                  {lang.code}
                  <span className="text-foreground/40"> · </span>
                  {lang.label}
                </dt>
                <dd className="text-foreground/80">{lang.level}</dd>
              </div>
            ))}
            <div className="flex justify-between gap-4">
              <dt>School GitHub</dt>
              <dd>
                <a
                  href={profile.links.githubSchool}
                  className="text-primary hover:underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  SkyKDG
                </a>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </motion.aside>
  );
}
