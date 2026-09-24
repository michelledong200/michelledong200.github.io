export type Repo = {
  name: string;
  description: string | null;
  url: string;
  language: string | null;
  stars: number;
  updatedAt: string;
};

type ApiRepo = {
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  pushed_at: string | null;
  updated_at: string;
  fork: boolean;
};

// Colors match GitHub's linguist palette for the languages most likely to appear.
export const LANGUAGE_COLORS: Record<string, string> = {
  Python: "#3572A5",
  "Jupyter Notebook": "#DA5B0B",
  TypeScript: "#3178c6",
  JavaScript: "#f1e05a",
  "C++": "#f34b7d",
  C: "#555555",
  Java: "#b07219",
  HTML: "#e34c26",
  CSS: "#663399",
  Swift: "#F05138",
  Kotlin: "#A97BFF",
  Dart: "#00B4AB",
  Go: "#00ADD8",
  Rust: "#dea584",
  Shell: "#89e051",
  SQL: "#e38c00",
  Scheme: "#1e4aec",
};

/**
 * Fetches public repos at build time. Any failure (offline, rate limit, bad JSON) returns []
 * so the build never breaks because of GitHub.
 */
export async function getRepos(user: string, limit = 6): Promise<Repo[]> {
  try {
    const res = await fetch(
      `https://api.github.com/users/${user}/repos?sort=updated&per_page=${limit}`,
      {
        headers: { Accept: "application/vnd.github+json" },
        signal: AbortSignal.timeout(8000),
        cache: "force-cache",
      },
    );
    if (!res.ok) return [];
    const data: unknown = await res.json();
    if (!Array.isArray(data)) return [];
    return (data as ApiRepo[]).map((r) => ({
      name: r.name,
      description: r.description,
      url: r.html_url,
      language: r.language,
      stars: r.stargazers_count,
      updatedAt: r.pushed_at ?? r.updated_at,
    }));
  } catch {
    return [];
  }
}

const UNITS: [Intl.RelativeTimeFormatUnit, number][] = [
  ["year", 365 * 24 * 3600],
  ["month", 30 * 24 * 3600],
  ["week", 7 * 24 * 3600],
  ["day", 24 * 3600],
  ["hour", 3600],
  ["minute", 60],
];

export function relativeTime(iso: string, now = Date.now()) {
  const seconds = (new Date(iso).getTime() - now) / 1000;
  const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });
  for (const [unit, size] of UNITS) {
    if (Math.abs(seconds) >= size) return rtf.format(Math.round(seconds / size), unit);
  }
  return "just now";
}

const normalize = (url: string) => url.replace(/\/+$/, "").toLowerCase();

export function excludeFeatured(repos: Repo[], featuredUrls: string[]) {
  const featured = new Set(featuredUrls.map(normalize));
  return repos.filter((r) => !featured.has(normalize(r.url)));
}
