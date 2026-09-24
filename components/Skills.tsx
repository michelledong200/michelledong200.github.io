import { site } from "@/content/site";
import Section from "./Section";
import Tag from "./ui/Tag";

export default function Skills() {
  const { skills } = site;
  return (
    <Section id="skills" eyebrow={skills.eyebrow} heading={skills.heading} alt>
      <div className="grid gap-5 md:grid-cols-3">
        {skills.groups.map((group) => (
          <div
            key={group.title}
            className="border-border bg-surface shadow-card-sm rounded-[12px] border p-6"
          >
            <h3 className="text-text mb-3.5 flex items-center gap-2 text-base font-semibold">
              <span
                aria-hidden="true"
                className="border-accent-soft bg-surface-alt grid size-7 place-items-center rounded-lg border text-sm"
              >
                {group.icon}
              </span>
              {group.title}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li key={item}>
                  <Tag>{item}</Tag>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
