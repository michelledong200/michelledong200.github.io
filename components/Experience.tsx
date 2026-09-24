import { site } from "@/content/site";
import Section from "./Section";

export default function Experience() {
  const { experience } = site;
  return (
    <Section id="experience" eyebrow={experience.eyebrow} heading={experience.heading} alt>
      <ol className="space-y-9">
        {experience.items.map((job) => (
          <li key={`${job.org}-${job.dates}`} className="lg:grid lg:grid-cols-[200px_1fr] lg:gap-8">
            <p className="text-muted hidden pt-1 text-[13.5px] font-medium lg:block">
              {job.dates}
              <br />
              {job.location}
            </p>
            <div className="border-accent-soft relative border-l-2 pl-8">
              <span
                aria-hidden="true"
                className="border-accent bg-surface absolute top-1.5 -left-[9px] size-4 rounded-full border-[3px] shadow-[0_0_0_4px_color-mix(in_srgb,var(--accent)_14%,transparent)]"
              />
              <h3 className="text-text text-[1.25rem] leading-snug font-semibold">{job.org}</h3>
              <p className="text-muted text-[13.5px] font-medium lg:hidden">
                {job.dates} · {job.location}
              </p>
              <p className="text-accent-deep mt-0.5 mb-3 text-[14.5px] font-semibold">{job.role}</p>
              <ul className="text-text-soft marker:text-accent list-disc space-y-1.5 pl-[18px] text-[15.5px]">
                {job.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
