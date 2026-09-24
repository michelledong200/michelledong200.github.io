import { ArrowUpRight } from "lucide-react";
import { site } from "@/content/site";
import Section from "./Section";
import Tag from "./ui/Tag";
import SmartLink from "./ui/SmartLink";
import GitHubRepos from "./GitHubRepos";

export default function Projects() {
  const { projects } = site;
  return (
    <Section id="projects" eyebrow={projects.eyebrow} heading={projects.heading}>
      {/* Two columns like Reference A; featured projects span the full width. */}
      <ul className="grid gap-5 sm:grid-cols-2">
        {projects.items.map((project) => (
          <li
            key={project.title}
            className={`bg-surface shadow-card-sm hover:shadow-card flex flex-col rounded-[12px] border p-6 transition-[transform,box-shadow] duration-200 hover:-translate-y-1 sm:p-[26px] ${
              project.featured ? "border-accent-soft sm:col-span-2 sm:p-8" : "border-border"
            }`}
          >
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
              <p className="text-accent text-xs font-bold tracking-[1.2px] uppercase">
                {project.category}
              </p>
              {project.status && (
                <p className="bg-accent text-on-accent inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-semibold">
                  <span aria-hidden="true">🥑</span>
                  {project.status}
                </p>
              )}
            </div>
            <h3
              className={`font-display text-text mt-2 mb-2.5 leading-snug font-semibold ${
                project.featured ? "text-[1.6rem]" : "text-[1.3rem]"
              }`}
            >
              {project.title}
            </h3>
            <ul
              className={`text-text-soft marker:text-accent mb-4 list-disc space-y-1.5 pl-[18px] text-[15px] ${
                project.featured ? "sm:columns-2 sm:gap-10 [&>li]:break-inside-avoid" : ""
              }`}
            >
              {project.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
            <div className="mt-auto flex flex-wrap gap-2">
              {project.tags.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>
            {project.links.length > 0 && (
              <div className="mt-3 -mb-2 flex flex-wrap gap-x-4">
                {project.links.map((link) => (
                  <SmartLink
                    key={link.href}
                    href={link.href}
                    className="text-accent-deep inline-flex min-h-11 items-center gap-1 text-sm font-semibold underline-offset-4 hover:underline"
                  >
                    {link.label}
                    <ArrowUpRight className="size-4" aria-hidden="true" />
                  </SmartLink>
                ))}
              </div>
            )}
          </li>
        ))}
      </ul>
      <GitHubRepos />
    </Section>
  );
}
