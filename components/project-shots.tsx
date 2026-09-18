"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { ProjectShot } from "@/lib/content";
import { assetPath } from "@/lib/paths";

const controlClassName =
  "inline-flex size-11 items-center justify-center rounded-full border border-primary/30 bg-[oklch(0.2_0.018_55/0.82)] text-primary shadow-[0_10px_28px_-16px_oklch(0.1_0.02_50/0.8)] backdrop-blur-sm transition-colors hover:border-primary/60 hover:bg-primary/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/60";

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
  const dialogRef = useRef<HTMLDivElement>(null);
  const lastTrigger = useRef<HTMLButtonElement | null>(null);
  const [open, setOpen] = useState<number | null>(null);
  const [failed, setFailed] = useState<Record<string, boolean>>({});
  const visible = shots.filter((shot) => !failed[shot.src]);
  const current = open !== null ? visible[open] : null;
  const canCycle = visible.length > 1;

  const close = useCallback(() => {
    setOpen(null);
    lastTrigger.current?.focus();
  }, []);

  const step = useCallback((delta: number) => {
    setOpen((index) => {
      if (index === null) return index;
      const count = shots.filter((shot) => !failed[shot.src]).length;
      if (count === 0) return null;
      return (index + delta + count) % count;
    });
  }, [failed, shots]);

  useEffect(() => {
    if (open === null) return;
    dialogRef.current?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        close();
      }
      if (event.key === "ArrowRight") {
        event.preventDefault();
        step(1);
      }
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        step(-1);
      }
    };
    window.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [close, open, step]);

  if (visible.length === 0) return null;

  const grid =
    featured && visible.length > 1
      ? "grid-cols-1 sm:grid-cols-2"
      : visible.length > 1
        ? "grid-cols-2"
        : "grid-cols-1";

  const lightbox =
    current
      ? createPortal(
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={labelId}
            tabIndex={-1}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[oklch(0.12_0.02_55/0.88)] p-4 sm:p-8"
            onClick={close}
          >
            <p id={labelId} className="sr-only">
              {title}: {current.caption}
            </p>

            {canCycle ? (
              <button
                type="button"
                className={`${controlClassName} absolute left-3 top-1/2 z-10 -translate-y-1/2 sm:left-6`}
                aria-label="Previous screenshot"
                onClick={(event) => {
                  event.stopPropagation();
                  step(-1);
                }}
              >
                <ChevronLeft className="size-5" />
              </button>
            ) : null}

            <figure
              className="relative flex max-h-full w-full max-w-6xl flex-col items-center"
              onClick={(event) => event.stopPropagation()}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={assetPath(current.src)}
                alt={current.alt}
                className="max-h-[78vh] w-full rounded-2xl border border-border object-contain shadow-[0_24px_60px_-28px_oklch(0.1_0.02_50/0.85)]"
              />
              <figcaption className="mt-3 flex w-full items-center justify-between gap-3 px-1 text-sm text-foreground/85">
                <span>{current.caption}</span>
                {canCycle ? (
                  <span className="shrink-0 text-primary">
                    {open! + 1} / {visible.length}
                  </span>
                ) : null}
              </figcaption>
            </figure>

            {canCycle ? (
              <button
                type="button"
                className={`${controlClassName} absolute right-3 top-1/2 z-10 -translate-y-1/2 sm:right-6`}
                aria-label="Next screenshot"
                onClick={(event) => {
                  event.stopPropagation();
                  step(1);
                }}
              >
                <ChevronRight className="size-5" />
              </button>
            ) : null}

            <button
              type="button"
              className={`${controlClassName} absolute top-3 right-3 sm:top-6 sm:right-6`}
              aria-label="Close screenshot"
              onClick={(event) => {
                event.stopPropagation();
                close();
              }}
            >
              <X className="size-5" />
            </button>
          </div>,
          document.body,
        )
      : null;

  return (
    <>
      <ul className={`mt-5 grid gap-4 ${grid}`}>
        {visible.map((shot, index) => (
          <li key={shot.src} className="min-w-0">
            <button
              type="button"
              onClick={(event) => {
                lastTrigger.current = event.currentTarget;
                setOpen(index);
              }}
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
      {lightbox}
    </>
  );
}
