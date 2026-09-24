import Container from "./Container";
import Collectible from "./game/Collectible";

type Props = {
  id: string;
  eyebrow: string;
  heading: string;
  alt?: boolean;
  children: React.ReactNode;
};

/** Shared section shell: kicker + h2 + fading rule (Reference A's section head), optional tinted band. */
export default function Section({ id, eyebrow, heading, alt = false, children }: Props) {
  const headingId = `${id}-heading`;
  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={`py-16 md:py-20 ${alt ? "border-border/70 bg-bg-alt/70 border-y" : ""}`}
    >
      <Container>
        <div className="mb-9 flex items-center gap-4">
          <div>
            <p className="text-accent text-[13px] font-bold tracking-[2px] uppercase">{eyebrow}</p>
            <h2
              id={headingId}
              className="font-display text-text text-[clamp(1.75rem,4vw,2.5rem)] leading-tight font-semibold tracking-[-0.3px]"
            >
              {heading}
            </h2>
          </div>
          <div
            aria-hidden="true"
            className="from-border h-px flex-1 bg-linear-to-r to-transparent"
          />
          <Collectible id={id} />
        </div>
        {children}
      </Container>
    </section>
  );
}
