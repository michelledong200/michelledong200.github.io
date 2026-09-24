"use client";

import { useEffect, useRef, useState } from "react";
import { Check, RotateCcw, X } from "lucide-react";
import { site } from "@/content/site";
import { resetGame } from "@/lib/game";
import Button from "../ui/Button";
import { useGame } from "./useGame";

const { game } = site;
const TOTAL = game.spots.length;
const TOAST_MS = 2600;

function rankFor(count: number) {
  return game.ranks.reduce((name, r) => (count >= r.min ? r.name : name), game.ranks[0].name);
}

// Deterministic "random" spread so confetti renders the same on every run.
const CONFETTI = Array.from({ length: 28 }, (_, i) => ({
  left: (i * 37) % 100,
  drift: `${((i * 53) % 40) - 20}vw`,
  spin: `${((i * 97) % 720) - 360}deg`,
  dur: `${2.4 + ((i * 13) % 10) / 10}s`,
  delay: `${((i * 7) % 10) / 20}s`,
  size: 18 + ((i * 11) % 16),
}));

function Confetti() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-60 motion-reduce:hidden">
      {CONFETTI.map((c, i) => (
        <span
          key={i}
          className="confetti-piece"
          style={
            {
              left: `${c.left}%`,
              fontSize: c.size,
              "--drift": c.drift,
              "--spin": c.spin,
              "--dur": c.dur,
              "--delay": c.delay,
            } as React.CSSProperties
          }
        >
          🥑
        </span>
      ))}
    </div>
  );
}

/** Floating HUD for the Guac quest: score, rank, checklist, pick-up toasts, and the finale. */
export default function GuacQuest() {
  const { found, last } = useGame();
  const [open, setOpen] = useState(false);
  const [toastDoneAt, setToastDoneAt] = useState(0);
  const [finaleDoneAt, setFinaleDoneAt] = useState(0);
  const rootRef = useRef<HTMLDivElement>(null);

  const count = found.length;
  const complete = count >= TOTAL;
  const showFinale = complete && last !== null && last.at > finaleDoneAt;
  const showToast = !showFinale && last !== null && last.at > toastDoneAt;

  useEffect(() => {
    if (!showToast || !last) return;
    const t = setTimeout(() => setToastDoneAt(last.at), TOAST_MS);
    return () => clearTimeout(t);
  }, [showToast, last]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onPointer = (e: PointerEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
    };
  }, [open]);

  const lastSpot = last ? game.spots.find((s) => s.id === last.id) : undefined;
  const pct = Math.round((count / TOTAL) * 100);

  return (
    <>
      {showFinale && <Confetti />}
      <div
        ref={rootRef}
        className="fixed right-[max(16px,env(safe-area-inset-right))] bottom-[max(16px,env(safe-area-inset-bottom))] z-40 flex flex-col items-end gap-3"
      >
        {/* Announcements for screen readers and the visible toast/finale share one live region. */}
        <div aria-live="polite" className="flex flex-col items-end">
          {showToast && lastSpot && (
            <p
              key={last?.at}
              className="toast-in border-accent-soft bg-surface text-text shadow-card rounded-xl border px-4 py-2.5 text-sm font-medium"
            >
              <span className="text-accent-deep font-semibold">
                {game.cheers[(count - 1) % game.cheers.length]}
              </span>{" "}
              +1 🥑 {lastSpot.label} · {count}/{TOTAL}
            </p>
          )}
          {showFinale && (
            <div className="toast-in border-accent-soft bg-surface shadow-card relative w-[min(320px,calc(100vw-32px))] rounded-2xl border p-5 text-center">
              <button
                type="button"
                onClick={() => last && setFinaleDoneAt(last.at)}
                className="text-muted hover:text-text absolute top-1 right-1 grid size-11 place-items-center rounded-lg"
                aria-label="Close"
              >
                <X className="size-5" aria-hidden="true" />
              </button>
              <p className="font-display text-text text-xl font-semibold">{game.finale.title}</p>
              <p className="text-text-soft mt-1 mb-4 text-sm">{game.finale.body}</p>
              <Button href={`mailto:${site.email}`} className="w-full">
                {game.finale.cta}
              </Button>
            </div>
          )}
        </div>

        {open && (
          <div
            id="guac-panel"
            className="toast-in border-border bg-surface shadow-card w-[min(300px,calc(100vw-32px))] rounded-2xl border p-5"
          >
            <p className="font-display text-text text-lg font-semibold">{game.title}</p>
            <p className="text-text-soft mt-1 text-sm">{game.intro}</p>
            <ul className="mt-3 grid grid-cols-2 gap-x-3 gap-y-1.5 text-sm">
              {game.spots.map((spot) => {
                const got = found.includes(spot.id);
                return (
                  <li
                    key={spot.id}
                    className={`flex items-center gap-1.5 ${got ? "text-accent-deep font-medium" : "text-muted"}`}
                  >
                    {got ? (
                      <Check className="size-4" aria-hidden="true" />
                    ) : (
                      <span aria-hidden="true" className="grid size-4 place-items-center">
                        ?
                      </span>
                    )}
                    {got ? spot.label : "???"}
                    <span className="sr-only">
                      {got ? " (found)" : ` ${spot.label} (not found)`}
                    </span>
                  </li>
                );
              })}
            </ul>
            {count > 0 && (
              <button
                type="button"
                onClick={() => {
                  resetGame();
                  setOpen(false);
                }}
                className="text-muted hover:text-text mt-3 inline-flex min-h-11 items-center gap-1.5 text-sm font-medium"
              >
                <RotateCcw className="size-4" aria-hidden="true" />
                {game.reset}
              </button>
            )}
          </div>
        )}

        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls="guac-panel"
          className="border-accent-soft bg-surface text-text shadow-card hover:border-accent flex min-h-11 items-center gap-2.5 rounded-full border py-1.5 pr-4 pl-2 text-sm font-semibold transition-colors"
        >
          <span
            aria-hidden="true"
            className={`bg-accent-soft/60 grid size-8 place-items-center rounded-full text-base ${complete ? "avo-pop" : ""}`}
          >
            🥑
          </span>
          <span className="flex flex-col items-start leading-tight">
            <span>
              {count}/{TOTAL}
              <span className="sr-only"> {site.game.collectible}s found. Rank:</span>
              <span className="text-muted ml-1.5 font-medium">{rankFor(count)}</span>
            </span>
            <span
              aria-hidden="true"
              className="bg-surface-alt mt-1 h-1.5 w-20 overflow-hidden rounded-full"
            >
              <span
                className="bg-accent block h-full rounded-full transition-[width] duration-500"
                style={{ width: `${pct}%` }}
              />
            </span>
          </span>
          <span className="sr-only">
            {open ? "Hide" : "Show"} {game.title} details
          </span>
        </button>
      </div>
    </>
  );
}
