import { site } from "@/content/site";
import Container from "./Container";
import Button from "./ui/Button";
import SocialLinks from "./ui/SocialLinks";

export default function Contact() {
  const { contact } = site;
  return (
    <section id="contact" aria-labelledby="contact-heading" className="py-16 md:py-20">
      <Container>
        <div className="border-border bg-surface shadow-card rounded-[20px] border px-6 py-12 text-center sm:px-8">
          <h2
            id="contact-heading"
            className="font-display text-text mb-2.5 text-[clamp(1.75rem,5vw,2.5rem)] leading-tight font-semibold"
          >
            {contact.heading}
          </h2>
          <p className="text-text-soft mx-auto mb-7 max-w-[46ch]">{contact.blurb}</p>
          <Button href={`mailto:${site.email}`} className="w-full sm:w-auto">
            {contact.cta}
          </Button>
          <SocialLinks className="mt-5 justify-center" include={["LinkedIn", "GitHub"]} />
        </div>
      </Container>
    </section>
  );
}
