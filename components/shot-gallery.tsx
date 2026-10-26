"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { ChevronLeft, ChevronRight, Images, X } from "lucide-react";
import type { Shot } from "@/lib/content";
import { assetPath } from "@/lib/paths";

const control =
  "inline-flex size-11 items-center justify-center rounded-full border border-white/15 bg-black/60 text-white backdrop-blur-sm transition-colors hover:bg-black/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";

// Cover image for a project card. Clicking it opens every shot in a lightbox.
export function ShotGallery({ shots, title }: { shots: Shot[]; title: string }) {
  const labelId = useId();
  const dialogRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const swipeX = useRef<number | null>(null);
  const [open, setOpen] = useState<number | null>(null);
  const count = shots.length;
  const current = open !== null ? shots[open] : null;

  const close = useCallback(() => {
    setOpen(null);
    triggerRef.current?.focus();
  }, []);

  const step = useCallback(
    (delta: number) =>
      setOpen((index) => (index === null ? index : (index + delta + count) % count)),
    [count],
  );

  useEffect(() => {
    if (open === null) return;
    dialogRef.current?.focus();
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
  }, [close, open, step]);

  const cover = shots[0];

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen(0)}
        className="group relative block w-full overflow-hidden bg-muted outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset"
        aria-label={`View screenshots of ${title}`}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={assetPath(cover.src)}
          alt={cover.alt}
          width={1600}
          height={1000}
          loading="lazy"
          className="aspect-[16/10] w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
        />
        {count > 1 ? (
          <span className="absolute right-3 bottom-3 inline-flex items-center gap-1.5 rounded-full bg-black/65 px-2.5 py-1 text-xs text-white backdrop-blur-sm">
            <Images className="size-3.5" />
            {count}
          </span>
        ) : null}
      </button>

      {current
        ? createPortal(
            <div
              ref={dialogRef}
              role="dialog"
              aria-modal="true"
              aria-labelledby={labelId}
              tabIndex={-1}
              className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 outline-none sm:p-10"
              onClick={close}
              onPointerDown={(event) => {
                if (event.pointerType !== "mouse") swipeX.current = event.clientX;
              }}
              onPointerUp={(event) => {
                if (swipeX.current === null) return;
                const delta = event.clientX - swipeX.current;
                swipeX.current = null;
                if (Math.abs(delta) >= 48) step(delta < 0 ? 1 : -1);
              }}
            >
              <figure
                className="flex max-h-full w-full max-w-6xl flex-col items-center"
                onClick={(event) => event.stopPropagation()}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={assetPath(current.src)}
                  alt={current.alt}
                  className="max-h-[80vh] w-full rounded-lg object-contain"
                />
                <figcaption
                  id={labelId}
                  className="mt-3 flex w-full justify-between gap-4 text-sm text-white/80"
                >
                  <span>
                    {title}: {current.caption}
                  </span>
                  {count > 1 ? (
                    <span className="shrink-0">
                      {open! + 1} / {count}
                    </span>
                  ) : null}
                </figcaption>
              </figure>

              {count > 1 ? (
                <>
                  <button
                    type="button"
                    aria-label="Previous screenshot"
                    className={`${control} absolute top-1/2 left-3 -translate-y-1/2 sm:left-6`}
                    onClick={(event) => {
                      event.stopPropagation();
                      step(-1);
                    }}
                  >
                    <ChevronLeft className="size-5" />
                  </button>
                  <button
                    type="button"
                    aria-label="Next screenshot"
                    className={`${control} absolute top-1/2 right-3 -translate-y-1/2 sm:right-6`}
                    onClick={(event) => {
                      event.stopPropagation();
                      step(1);
                    }}
                  >
                    <ChevronRight className="size-5" />
                  </button>
                </>
              ) : null}

              <button
                type="button"
                aria-label="Close"
                className={`${control} absolute top-3 right-3 sm:top-6 sm:right-6`}
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
        : null}
    </>
  );
}
