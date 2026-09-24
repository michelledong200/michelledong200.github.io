import { site } from "@/content/site";
import Section from "./Section";
import Tag from "./ui/Tag";

export default function Education() {
  const { education } = site;
  return (
    <Section id="education" eyebrow={education.eyebrow} heading={education.heading} alt>
      <div className="border-border shadow-card-sm from-surface to-surface-alt rounded-[12px] border bg-linear-to-br p-6 sm:p-7">
        <h3 className="font-display text-text text-[1.4rem] leading-snug font-semibold">
          {education.school}
        </h3>
        <p className="text-accent-deep text-[15px] font-semibold">
          {education.program} · {education.expected}
        </p>
        <dl className="mt-4">
          <div className="border-border border-t py-3">
            <dt className="text-text text-[14.5px] font-semibold">
              Current coursework ({education.currentTerm})
            </dt>
            <dd className="mt-2">
              <ul className="flex flex-wrap gap-2">
                {education.current.map((course) => (
                  <li key={course}>
                    <Tag>{course}</Tag>
                  </li>
                ))}
              </ul>
            </dd>
          </div>
          <div className="border-border border-t pt-3">
            <dt className="text-text text-[14.5px] font-semibold">Completed</dt>
            <dd className="text-text-soft mt-1 text-[14.5px]">{education.completed.join(" · ")}</dd>
          </div>
        </dl>
      </div>
    </Section>
  );
}
