import { Hero } from "@/components/hero";
import {
  Contact,
  Experience,
  InProgress,
  Skills,
  Smaller,
  Work,
} from "@/components/sections";
import { SiteHeader } from "@/components/site-header";
import { profile } from "@/lib/content";

export default function Home() {
  return (
    <>
      <a
        href="#work"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-4 focus:z-50 focus:rounded-md focus:bg-primary focus:px-3 focus:py-2 focus:text-sm focus:text-primary-foreground"
      >
        Skip to my work
      </a>
      <SiteHeader />
      <main id="top" className="mx-auto max-w-5xl px-4 sm:px-6">
        <Hero />
        <div className="divide-y divide-border">
          <Work />
          <InProgress />
          <Smaller />
          <Experience />
          <Skills />
          <Contact />
        </div>
      </main>
      <footer className="mx-auto max-w-5xl px-4 py-10 text-sm text-muted-foreground sm:px-6">
        {profile.name} · {profile.location}
      </footer>
    </>
  );
}
