// Guac quest state: which hidden avocados the visitor has found.
// A tiny external store for useSyncExternalStore. Progress persists in localStorage when
// available, and falls back to memory (private windows, blocked storage) so the game still works.

const KEY = "guac-quest-v1";

export type GameState = {
  found: readonly string[];
  /** The most recent pick this session; drives the toast and finale (never restored on reload). */
  last: { id: string; at: number } | null;
};

const EMPTY: GameState = { found: [], last: null };

let state: GameState | null = null;
const listeners = new Set<() => void>();

function load(): GameState {
  try {
    const parsed: unknown = JSON.parse(localStorage.getItem(KEY) ?? "[]");
    if (Array.isArray(parsed)) {
      return { found: parsed.filter((v): v is string => typeof v === "string"), last: null };
    }
  } catch {
    // Unreadable or blocked storage: start fresh.
  }
  return EMPTY;
}

function set(next: GameState) {
  state = next;
  try {
    localStorage.setItem(KEY, JSON.stringify(next.found));
  } catch {
    // Keep playing in memory only.
  }
  listeners.forEach((l) => l());
}

export function getSnapshot(): GameState {
  if (state === null) state = load();
  return state;
}

export function getServerSnapshot(): GameState {
  return EMPTY;
}

export function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function collect(id: string) {
  const current = getSnapshot();
  if (current.found.includes(id)) return;
  set({ found: [...current.found, id], last: { id, at: Date.now() } });
}

export function resetGame() {
  set(EMPTY);
}
