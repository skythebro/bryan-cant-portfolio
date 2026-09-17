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
      className="panel p-5 sm:p-6 lg:sticky lg:top-20"
    >
      <div className="mb-5 flex items-center justify-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
          <span
            className="size-1.5 animate-pulse rounded-full bg-primary"
            aria-hidden
          />
          {profile.status}
        </span>
      </div>

      <Portrait />

      <div className="mt-5 text-center lg:text-left">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          {profile.name}
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          {profile.aliases.join(" / ")} · {profile.role}
        </p>
        <p className="mt-4 text-[15px] leading-relaxed text-foreground/90">
          {profile.headline}
        </p>
        <p className="mt-3 flex items-start justify-center gap-2 text-sm text-muted-foreground lg:justify-start">
          <MapPin className="mt-0.5 size-3.5 shrink-0" aria-hidden />
          {profile.location} ({profile.region})
        </p>
        <p className="mt-2 text-sm text-foreground/85">{profile.seeking}</p>

        <ul
          className="mt-5 flex flex-wrap justify-center gap-1.5 lg:justify-start"
          aria-label="Stack"
        >
          {heroTags.map((tag) => (
            <li key={tag} className="chip">
              {tag}
            </li>
          ))}
        </ul>

        <dl className="mt-5 grid grid-cols-2 gap-2">
          {proofStrip.map((item) => (
            <div
              key={item.label}
              className="rounded-xl border border-border bg-background/40 px-3 py-2.5"
            >
              <dt className="text-xs leading-4 text-muted-foreground">
                {item.label}
              </dt>
              <dd className="mt-1 text-lg font-semibold text-primary">
                {item.value}
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-5 flex flex-wrap justify-center gap-2 lg:justify-start">
          {social.map(({ href, label, icon: Icon }) => (
            <Button
              key={label}
              variant="outline"
              size="sm"
              nativeButton={false}
              render={<a href={href} target="_blank" rel="noreferrer" />}
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

        <dl className="mt-5 space-y-1.5 border-t border-border pt-4 text-sm text-muted-foreground">
          {profile.languages.map((lang) => (
            <div key={lang.code} className="flex justify-between gap-4">
              <dt>
                {lang.label}
                <span className="text-foreground/35"> · </span>
                {lang.code}
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
    </motion.aside>
  );
}
