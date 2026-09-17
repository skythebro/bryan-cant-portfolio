import { profile } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-6 font-mono text-[11px] text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p>
          {profile.name} · {profile.location} · {new Date().getFullYear()}
        </p>
        <p>Static export. No analytics. No cookie banner.</p>
      </div>
    </footer>
  );
}
