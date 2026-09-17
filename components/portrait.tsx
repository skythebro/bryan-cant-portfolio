"use client";

import { useState } from "react";
import { profile } from "@/lib/content";
import { assetPath } from "@/lib/paths";

export function Portrait() {
  const [failed, setFailed] = useState(false);

  return (
    <figure className="relative">
      <div className="relative overflow-hidden border border-border bg-muted">
        {failed ? (
          <div
            className="flex aspect-4/5 w-full flex-col items-center justify-center gap-2 bg-[oklch(0.16_0.01_264)]"
            role="img"
            aria-label={profile.photo.alt}
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
              ID
            </span>
            <span className="text-5xl font-medium tracking-tight">BC</span>
            <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
              {profile.aliases[0]}
            </span>
          </div>
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={assetPath(profile.photo.src)}
            alt={profile.photo.alt}
            width={640}
            height={800}
            className="aspect-4/5 w-full object-cover object-[center_18%] grayscale-[12%]"
            onError={() => setFailed(true)}
          />
        )}
      </div>
      <figcaption className="mt-2 flex justify-between font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground">
        <span>CV / hero</span>
        <span>Stabroek · BE</span>
      </figcaption>
    </figure>
  );
}
