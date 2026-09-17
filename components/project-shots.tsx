"use client";

import { useCallback, useEffect, useId, useState } from "react";
import { X } from "lucide-react";
import type { ProjectShot } from "@/lib/content";
import { assetPath } from "@/lib/paths";

export function ProjectShots({
  shots,
  title,
  featured,
}: {
  shots: ProjectShot[];
  title: string;
  featured?: boolean;
}) {
  const labelId = useId();
  const [open, setOpen] = useState<number | null>(null);
  const [failed, setFailed] = useState<Record<string, boolean>>({});
  const visible = shots.filter((shot) => !failed[shot.src]);
  const current = open !== null ? visible[open] : null;

  const close = useCallback(() => setOpen(null), []);
  const step = useCallback(
    (delta: number) => {
      setOpen((index) => {
        if (index === null) return index;
        return (index + delta + visible.length) % visible.length;
      });
    },
    [visible.length],
  );

  useEffect(() => {
    if (open === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowRight") step(1);
      if (event.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [open, close, step]);

  if (visible.length === 0) return null;

  const grid =
    featured && visible.length > 1
      ? "grid-cols-1 sm:grid-cols-2"
      : visible.length > 1
        ? "grid-cols-2"
        : "grid-cols-1";

  return (
    <>
      <ul className={`mt-4 grid gap-2 ${grid}`}>
        {visible.map((shot, index) => (
          <li key={shot.src}>
            <button
              type="button"
              onClick={() => setOpen(index)}
              className="group relative block w-full overflow-hidden border border-border bg-muted text-left outline-none focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-ring/50"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={assetPath(shot.src)}
                alt={shot.alt}
                width={1600}
                height={900}
                className="aspect-video w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
                onError={() =>
                  setFailed((currentFailed) => ({
                    ...currentFailed,
                    [shot.src]: true,
                  }))
                }
              />
              <span className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-2 pb-1.5 pt-6 font-mono text-[10px] uppercase tracking-[0.12em] text-white/90">
                {shot.caption}
              </span>
            </button>
          </li>
        ))}
      </ul>

      {current ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby={labelId}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-3 sm:p-8"
          onClick={close}
        >
          <div
            className="relative max-h-full w-full max-w-6xl"
            onClick={(event) => event.stopPropagation()}
          >
            <p id={labelId} className="sr-only">
              {title}: {current.caption}
            </p>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={assetPath(current.src)}
              alt={current.alt}
              className="max-h-[82vh] w-full object-contain"
            />
            <p className="mt-2 flex items-center justify-between gap-3 font-mono text-[11px] uppercase tracking-[0.12em] text-white/80">
              <span>{current.caption}</span>
              {visible.length > 1 ? (
                <span>
                  {open! + 1} / {visible.length} · ← →
                </span>
              ) : null}
            </p>
            <button
              type="button"
              onClick={close}
              className="absolute -top-1 right-0 inline-flex size-8 items-center justify-center border border-white/20 bg-black/50 text-white hover:border-white/50"
              aria-label="Close screenshot"
            >
              <X className="size-4" />
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}
