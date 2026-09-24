"use client";

import { useSyncExternalStore } from "react";
import { getServerSnapshot, getSnapshot, subscribe } from "@/lib/game";

export function useGame() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
