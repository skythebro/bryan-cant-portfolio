"use client";

import { useEffect, useId, useState } from "react";
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

  const close = () => setOpen(null);

  useEffect(() => {
    if (open === null) return;
    const count = visible.length;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(null);
      if (event.key === "ArrowRight") {
        setOpen((index) =>
          index === null ? index : (index + 1 + count) % count,
        );
      }
      if (event.key === "ArrowLeft") {
        setOpen((index) =>
          index === null ? index : (index - 1 + count) % count,
        );
      }
    };
    window.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [open, visible.length]);

  if (visible.length === 0) return null;

  const grid =
    featured && visible.length > 1
      ? "grid-cols-1 sm:grid-cols-2"
      : visible.length > 1
        ? "grid-cols-2"
        : "grid-cols-1";

  return (
    <>
      <ul className={`mt-5 grid gap-4 ${grid}`}>
        {visible.map((shot, index) => (
          <li key={shot.src} className="min-w-0">
            <button
              type="button"
              onClick={() => setOpen(index)}
              className="group block w-full overflow-hidden rounded-2xl border border-border bg-muted text-left outline-none focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-ring/50"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={assetPath(shot.src)}
                alt={shot.alt}
                width={1600}
                height={900}
                className={`w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.02] ${
                  featured ? "aspect-[16/10]" : "aspect-video"
                }`}
                onError={() =>
                  setFailed((currentFailed) => ({
                    ...currentFailed,
                    [shot.src]: true,
                  }))
                }
              />
              <span
                className={`block px-3 py-2.5 text-muted-foreground ${
                  featured ? "text-sm" : "text-[13px]"
                }`}
              >
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
              className="max-h-[82vh] w-full rounded-xl object-contain"
            />
            <p className="mt-2 flex items-center justify-between gap-3 text-sm text-white/80">
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
              className="absolute -top-1 right-0 inline-flex size-8 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white hover:border-white/50"
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
