"use client";

import { useState } from "react";
import { profile } from "@/lib/content";
import { assetPath } from "@/lib/paths";

export function Portrait() {
  const [failed, setFailed] = useState(false);

  return (
    <div className="flex size-28 shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#f4efe6] p-2 ring-1 ring-border sm:size-32">
      {failed ? (
        <span
          className="text-3xl font-semibold text-[#3a2e22]"
          role="img"
          aria-label={profile.photo.alt}
        >
          S
        </span>
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
  );
}
