import { Star } from "lucide-react";
import { site } from "@/content/site";
import { excludeFeatured, getRepos, LANGUAGE_COLORS, relativeTime } from "@/lib/github";
import Button from "./ui/Button";
import SmartLink from "./ui/SmartLink";
import { GitHubIcon } from "./ui/Icons";

export default async function GitHubRepos() {
  const featuredUrls = site.projects.items.flatMap((p) => p.links.map((l) => l.href));
  const repos = excludeFeatured(await getRepos(site.githubUser), featuredUrls);

  return (
    <div className="mt-14">
      <h3 className="font-display text-text text-[1.25rem] font-semibold">
        {site.projects.moreHeading}
      </h3>
      {repos.length > 0 && (
        <ul className="border-border bg-surface shadow-card-sm divide-border mt-5 divide-y rounded-[12px] border">
          {repos.map((repo) => (
            <li key={repo.url} className="px-5 py-4 sm:px-6">
              <SmartLink
                href={repo.url}
                className="text-accent-deep font-semibold underline-offset-4 hover:underline"
              >
                {repo.name}
              </SmartLink>
              {repo.description && (
                <p className="text-text-soft mt-1 text-[14.5px]">{repo.description}</p>
              )}
              <p className="text-muted mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-[13px]">
                {repo.language && (
                  <span className="inline-flex items-center gap-1.5">
                    <span
                      aria-hidden="true"
                      className="size-2.5 rounded-full"
                      style={{ background: LANGUAGE_COLORS[repo.language] ?? "var(--muted)" }}
                    />
                    {repo.language}
                  </span>
                )}
                <span className="inline-flex items-center gap-1">
                  <Star className="size-3.5" aria-hidden="true" />
                  <span className="sr-only">Stars:</span>
                  {repo.stars}
                </span>
                <span>Updated {relativeTime(repo.updatedAt)}</span>
              </p>
            </li>
          ))}
        </ul>
      )}
      <Button href={site.links.github} variant="secondary" className="mt-6 w-full sm:w-auto">
        <GitHubIcon className="size-[18px]" />
        {site.projects.viewAllLabel}
      </Button>
    </div>
  );
}
