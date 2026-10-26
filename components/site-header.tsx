import { profile } from "@/lib/content";

const nav = [
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="font-semibold tracking-tight">
          {profile.name}
        </a>
        <nav aria-label="Sections">
          <ul className="flex items-center gap-1 text-sm text-muted-foreground">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="rounded-md px-2.5 py-1.5 transition-colors hover:bg-muted hover:text-foreground sm:px-3"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
