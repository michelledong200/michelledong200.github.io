import { existsSync } from "node:fs";
import path from "node:path";

export const PROFILE_SRC = "/profile.jpg";

/** Checked at build time so the hero can fall back to initials when no headshot has been added yet. */
export function hasProfilePhoto() {
  return existsSync(path.join(process.cwd(), "public", PROFILE_SRC));
}
