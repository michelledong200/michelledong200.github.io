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
      {/* Two columns like Reference A; the odd fifth card spans full width on larger screens. */}
      <ul className="grid gap-5 sm:grid-cols-2">
        {projects.items.map((project, i) => {
          const lastOdd = i === projects.items.length - 1 && projects.items.length % 2 === 1;
          return (
            <li
              key={project.title}
              className={`border-border bg-surface shadow-card-sm hover:shadow-card flex flex-col rounded-[12px] border p-6 transition-[transform,box-shadow] duration-200 hover:-translate-y-1 sm:p-[26px] ${lastOdd ? "sm:col-span-2" : ""}`}
            >
              <p className="text-accent text-xs font-bold tracking-[1.2px] uppercase">
                {project.category}
              </p>
              <h3 className="font-display text-text mt-2 mb-2.5 text-[1.3rem] leading-snug font-semibold">
                {project.title}
              </h3>
              <p className="text-text-soft mb-4 text-[15px]">{project.description}</p>
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
          );
        })}
      </ul>
      <GitHubRepos />
    </Section>
  );
}
