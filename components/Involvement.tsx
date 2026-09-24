import { site } from "@/content/site";
import Section from "./Section";

export default function Involvement() {
  const { involvement } = site;
  return (
    <Section id="involvement" eyebrow={involvement.eyebrow} heading={involvement.heading}>
      <ul className="grid gap-5 sm:grid-cols-2">
        {involvement.items.map((item) => (
          <li
            key={item.name}
            className="border-border bg-surface shadow-card-sm hover:shadow-card rounded-[12px] border p-6 transition-[transform,box-shadow] duration-200 hover:-translate-y-1"
          >
            <span
              aria-hidden="true"
              className="border-accent-soft bg-surface-alt mb-3.5 grid size-[42px] place-items-center rounded-xl border text-xl"
            >
              {item.icon}
            </span>
            <h3 className="font-display text-text text-[1.2rem] leading-snug font-semibold">
              {item.name}
            </h3>
            <p className="text-muted mb-2.5 text-[13px] font-semibold">{item.role}</p>
            <p className="text-text-soft text-[14.5px]">{item.description}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
