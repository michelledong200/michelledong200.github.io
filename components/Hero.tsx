import Image from "next/image";
import { site } from "@/content/site";
import { hasProfilePhoto, PROFILE_SRC } from "@/lib/profile";
import Button from "./ui/Button";
import SocialLinks from "./ui/SocialLinks";
import Container from "./Container";

function Tagline({ text, highlights }: { text: string; highlights: string[] }) {
  if (highlights.length === 0) return <>{text}</>;
  const escaped = highlights.map((h) => h.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
  const parts = text.split(new RegExp(`\\b(${escaped.join("|")})\\b`, "g"));
  return (
    <>
      {parts.map((part, i) =>
        highlights.includes(part) ? (
          <strong key={i} className="text-text font-semibold">
            {part}
          </strong>
        ) : (
          part
        ),
      )}
    </>
  );
}

function Portrait() {
  const size = "size-40 md:size-[220px] lg:size-[280px]";
  const face = `relative ${size} rounded-full border-[5px] border-surface shadow-card`;
  return (
    <div className={`relative ${size} shrink-0 justify-self-center`}>
      <div
        aria-hidden="true"
        className="absolute -inset-3 rounded-full opacity-90 blur-[2px] [background:conic-gradient(from_140deg,var(--accent-soft),var(--portrait-from),var(--accent-soft),var(--portrait-to),var(--accent-soft))]"
      />
      {hasProfilePhoto() ? (
        <Image
          src={PROFILE_SRC}
          alt={site.name}
          width={560}
          height={560}
          priority
          className={`${face} object-cover`}
        />
      ) : (
        // TODO(michelle): add public/profile.jpg to replace these initials.
        <div
          role="img"
          aria-label={site.name}
          className={`${face} font-display text-accent-deep flex items-center justify-center text-5xl font-semibold tracking-[2px] [background:radial-gradient(circle_at_30%_25%,var(--portrait-from),var(--portrait-to))] md:text-6xl lg:text-7xl`}
        >
          {site.initials}
        </div>
      )}
    </div>
  );
}

export default function Hero() {
  const { hero } = site;
  return (
    <section id="top" aria-label="Introduction" className="pt-10 pb-10 md:pt-16 lg:pt-[72px]">
      <Container>
        <div className="hero-fade grid items-center gap-10 text-center lg:grid-cols-[1.5fr_auto] lg:gap-12 lg:text-left">
          <div className="lg:order-2">
            <Portrait />
          </div>
          <div className="lg:order-1">
            <p className="border-accent-soft bg-surface text-accent-deep shadow-card-sm inline-flex items-center gap-2 rounded-full border px-3.5 py-[7px] text-[13px] font-semibold tracking-[0.3px]">
              <span
                aria-hidden="true"
                className="bg-accent size-2 rounded-full shadow-[0_0_0_4px_color-mix(in_srgb,var(--accent)_20%,transparent)]"
              />
              {hero.status}
            </p>
            <h1 className="font-display text-text mt-5 mb-3.5 text-[clamp(2.5rem,6vw,4rem)] leading-[1.05] font-semibold tracking-[-0.5px]">
              {site.name}
            </h1>
            <p className="text-text-soft mx-auto max-w-[40ch] text-[clamp(1.0625rem,2.4vw,1.25rem)] lg:mx-0">
              <Tagline text={hero.tagline} highlights={hero.highlights} />
            </p>
            <ul className="text-muted mt-4 flex flex-wrap justify-center gap-x-3 gap-y-1 text-sm font-medium sm:gap-x-2 lg:justify-start">
              {hero.meta.map((item, i) => (
                <li key={item} className="inline-flex items-center gap-2">
                  {i > 0 && (
                    <span aria-hidden="true" className="text-accent hidden sm:inline">
                      ·
                    </span>
                  )}
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-7 flex flex-col gap-3.5 sm:flex-row sm:justify-center lg:justify-start">
              <Button href="#projects" className="w-full sm:w-auto">
                See my work <span aria-hidden="true">→</span>
              </Button>
              <Button
                href={`mailto:${site.email}`}
                variant="secondary"
                className="w-full sm:w-auto"
              >
                Get in touch
              </Button>
            </div>
            <SocialLinks className="mt-5 justify-center lg:-ml-2 lg:justify-start" />
          </div>
        </div>
      </Container>
    </section>
  );
}
