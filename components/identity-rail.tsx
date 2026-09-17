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
  { href: profile.phoneHref, label: "Call", icon: Phone },
] as const;

const [downloads, ...otherProof] = proofStrip;

export function IdentityRail() {
  return (
    <motion.aside
      initial={false}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="panel z-10 p-4 lg:sticky lg:top-16 lg:max-h-[calc(100vh-5rem)] lg:overflow-y-auto"
    >
      <div className="flex items-center gap-3">
        <Portrait size="sm" />
        <div className="min-w-0">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/25 bg-primary/10 px-2 py-0.5 text-[11px] font-medium text-primary">
            <span
              className="size-1.5 animate-pulse rounded-full bg-primary"
              aria-hidden
            />
            {profile.status}
          </span>
          <h1 className="mt-1.5 text-2xl font-semibold tracking-tight">
            {profile.name}
          </h1>
          <p className="text-sm text-muted-foreground">
            {profile.aliases[0]} · {profile.role}
          </p>
        </div>
      </div>

      <p className="mt-3 text-sm leading-relaxed text-foreground/90">
        {profile.headline}
      </p>
      <p className="mt-2 flex items-center gap-1.5 text-sm text-muted-foreground">
        <MapPin className="size-3.5 shrink-0" aria-hidden />
        {profile.location}
      </p>
      <p className="mt-1 text-sm text-foreground/85">{profile.seeking}</p>

      <ul className="mt-3 flex flex-wrap gap-1.5" aria-label="Stack">
        {heroTags.map((tag) => (
          <li key={tag} className="chip">
            {tag}
          </li>
        ))}
      </ul>

      <dl className="mt-3 space-y-2">
        <div className="rounded-xl border border-primary/20 bg-primary/10 px-3 py-2.5">
          <dt className="text-xs text-muted-foreground">{downloads.label}</dt>
          <dd className="text-xl font-semibold text-primary">
            {downloads.value}
          </dd>
        </div>
        <div className="grid grid-cols-3 gap-1.5">
          {otherProof.map((item) => (
            <div
              key={item.label}
              className="rounded-xl border border-border bg-background/40 px-2 py-2"
            >
              <dt className="text-[10px] leading-3 text-muted-foreground">
                {item.label}
              </dt>
              <dd className="mt-1 text-sm font-semibold text-primary">
                {item.value}
              </dd>
            </div>
          ))}
        </div>
      </dl>

      <div className="mt-3 flex flex-wrap gap-1.5">
        {social.map(({ href, label, icon: Icon }) => (
          <Button
            key={label}
            variant="outline"
            size="icon-sm"
            nativeButton={false}
            render={
              <a
                href={href}
                target={href.startsWith("tel:") ? undefined : "_blank"}
                rel={href.startsWith("tel:") ? undefined : "noreferrer"}
                aria-label={label}
              />
            }
          >
            <Icon />
          </Button>
        ))}
      </div>

      <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
        {profile.languages
          .map((lang) => `${lang.label} ${lang.level.toLowerCase()}`)
          .join(" · ")}
        {" · "}
        <a
          href={profile.links.githubSchool}
          className="text-primary hover:underline"
          target="_blank"
          rel="noreferrer"
        >
          SkyKDG
        </a>
      </p>
    </motion.aside>
  );
}
