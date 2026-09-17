import { Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { profile } from "@/lib/content";

export function ContactCta() {
  return (
    <section id="contact" className="scroll-mt-20">
      <div className="panel overflow-hidden">
        <div className="p-6 sm:p-8">
          <p className="label">Contact</p>
          <h2 className="mt-1 text-2xl font-semibold tracking-tight sm:text-3xl">
            Hire the person who already shipped to users
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
            Belgium · Antwerp. Available immediately. Dutch and English without
            friction. If you need a junior who has already designed interfaces
            and kept mods alive through game patches, write.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            <Button
              nativeButton={false}
              render={<a href={`mailto:${profile.email}`} />}
            >
              <Mail />
              {profile.email}
            </Button>
            <Button
              variant="outline"
              nativeButton={false}
              render={<a href={profile.phoneHref} />}
            >
              <Phone />
              {profile.phone}
            </Button>
            <Button
              variant="outline"
              nativeButton={false}
              render={
                <a
                  href={profile.links.linkedin}
                  target="_blank"
                  rel="noreferrer"
                />
              }
            >
              LinkedIn
            </Button>
            <Button
              variant="outline"
              nativeButton={false}
              render={
                <a href={profile.links.nexus} target="_blank" rel="noreferrer" />
              }
            >
              Nexus
            </Button>
            <Button
              variant="outline"
              nativeButton={false}
              render={
                <a href={profile.links.kofi} target="_blank" rel="noreferrer" />
              }
            >
              Ko-fi
            </Button>
          </div>
        </div>
        <div className="flex flex-col gap-1 border-t border-border bg-background/35 px-6 py-4 text-sm text-foreground/75 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>
            {profile.name} · {profile.location} · {new Date().getFullYear()}
          </p>
          <p>Static export. No analytics. No cookie banner.</p>
        </div>
      </div>
    </section>
  );
}
