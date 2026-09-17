"use client";

import { useState } from "react";
import { profile } from "@/lib/content";
import { assetPath } from "@/lib/paths";

export function Portrait() {
  const [failed, setFailed] = useState(false);

  return (
    <figure className="flex flex-col items-center">
      <div className="relative">
        <div
          className="absolute inset-[-10px] rounded-full bg-primary/20 blur-2xl"
          aria-hidden
        />
        <div className="relative flex size-40 items-center justify-center overflow-hidden rounded-full bg-[#f4efe6] p-3 ring-2 ring-primary/45 sm:size-44">
          {failed ? (
            <div
              className="flex h-full w-full flex-col items-center justify-center gap-1 text-primary-foreground"
              role="img"
              aria-label={profile.photo.alt}
            >
              <span className="text-4xl font-semibold tracking-tight text-[#3a2e22]">
                S
              </span>
              <span className="text-xs text-[#3a2e22]/70">
                {profile.aliases[0]}
              </span>
            </div>
          ) : (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={assetPath(profile.photo.src)}
              alt={profile.photo.alt}
              width={460}
              height={460}
              className="h-full w-full object-contain"
              onError={() => setFailed(true)}
            />
          )}
        </div>
      </div>
      <figcaption className="mt-3 text-center text-sm text-muted-foreground">
        {profile.aliases[0]} · {profile.location}
      </figcaption>
    </figure>
  );
}
