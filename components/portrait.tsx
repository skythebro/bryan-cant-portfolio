"use client";

import { useState } from "react";
import { profile } from "@/lib/content";
import { assetPath } from "@/lib/paths";

export function Portrait({
  size = "sm",
}: {
  size?: "sm" | "md";
}) {
  const [failed, setFailed] = useState(false);
  const frame = size === "md" ? "size-24 sm:size-28" : "size-20";

  return (
    <figure className="shrink-0">
      <div className="relative">
        <div
          className="absolute inset-[-6px] rounded-full bg-primary/20 blur-xl"
          aria-hidden
        />
        <div
          className={`relative flex items-center justify-center overflow-hidden rounded-full bg-[#f4efe6] p-1.5 ring-2 ring-primary/45 ${frame}`}
        >
          {failed ? (
            <div
              className="flex h-full w-full items-center justify-center text-xl font-semibold text-[#3a2e22]"
              role="img"
              aria-label={profile.photo.alt}
            >
              S
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
    </figure>
  );
}
