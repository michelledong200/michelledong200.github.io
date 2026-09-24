import { site } from "@/content/site";
import Section from "./Section";

export default function About() {
  const { about } = site;
  return (
    <Section id="about" eyebrow={about.eyebrow} heading={about.heading}>
      <div className="border-border bg-surface text-text-soft shadow-card-sm rounded-[12px] border px-6 py-7 text-[17.5px] sm:px-9 sm:py-8">
        <p className="max-w-[70ch]">{about.bio}</p>
      </div>
      <dl className="mt-6 grid gap-4 sm:grid-cols-3">
        {about.stats.map((stat) => (
          <div
            key={stat.label}
            className="border-border bg-surface shadow-card-sm flex flex-col-reverse rounded-[12px] border px-4 py-[18px] text-center"
          >
            <dt className="text-muted text-[13px]">{stat.label}</dt>
            <dd className="font-display text-accent-deep text-[28px] leading-tight font-semibold">
              {stat.value}
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
