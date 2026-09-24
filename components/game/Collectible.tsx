"use client";

import { useState } from "react";
import { site } from "@/content/site";
import { collect } from "@/lib/game";
import { useGame } from "./useGame";

/** A hidden avocado. Click (or press Enter/Space) to add it to the Guac quest tally. */
export default function Collectible({ id, className = "" }: { id: string; className?: string }) {
  const { found } = useGame();
  const [popping, setPopping] = useState(false);
  const spot = site.game.spots.find((s) => s.id === id);
  if (!spot) return null;

  const isFound = found.includes(id);
  const base = `grid size-11 shrink-0 place-items-center rounded-full text-xl select-none ${className}`;

  if (isFound) {
    return (
      <span
        className={`${base} bg-accent-soft/60 ${popping ? "avo-pop" : ""}`}
        onAnimationEnd={() => setPopping(false)}
        title={`${spot.label} ${site.game.collectible} found`}
      >
        <span aria-hidden="true">🥑</span>
        <span className="sr-only">
          {spot.label} {site.game.collectible} found
        </span>
      </span>
    );
  }

  return (
    <button
      type="button"
      onClick={() => {
        setPopping(true);
        collect(id);
      }}
      className={`${base} avo-idle cursor-pointer opacity-45 grayscale-[60%] transition-[opacity,filter] hover:opacity-100 hover:grayscale-0 focus-visible:opacity-100 focus-visible:grayscale-0`}
      aria-label={`Collect the hidden ${site.game.collectible} in ${spot.label}`}
      title="Something ripe here…"
    >
      <span aria-hidden="true">🥑</span>
    </button>
  );
}
