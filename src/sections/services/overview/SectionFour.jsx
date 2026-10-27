import { ArrowRight } from "@phosphor-icons/react";
import Button from "../../../ui/Button";
import Eyebrow from "../../../ui/Eyebrow";
import Reveal from "../../../components/Reveal";
import data from "../../../../data/Services/Overview.json";
const section = data.sectionFour;
export default function SectionFour() {
  return (
    <section
      aria-labelledby="services-four-heading"
      className="bg-surface py-12 text-center md:py-16 lg:py-20 lg:text-left"
    >
      <div className="wrapper max-w-320">
        <Reveal className="text-center">
          <Eyebrow className="mb-4">{section.eyebrow}</Eyebrow>
          <h2
            id="services-four-heading"
            className="text-hero-heading text-2xl leading-snug font-bold tracking-tight md:text-3xl lg:text-4xl"
          >
            {section.heading}
          </h2>
        </Reveal>
        <ul className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {section.cards.map((card, index) => (
            <Reveal
              as="li"
              key={card.heading}
              delay={index * 0.04}
              className="border-proof-accent bg-proof-surface border-t-2 p-6"
            >
              <h3 className="text-hero-heading text-lg font-bold">
                {card.heading}
              </h3>
              <p className="text-hero-copy mt-3 leading-relaxed">
                {card.description}
              </p>
              <div className="mt-3 flex flex-wrap justify-center gap-x-3 lg:justify-start">
                {(card.links ?? [{ path: card.path, label: card.label }]).map(
                  (link) => (
                    <Button key={link.path} variant="link" to={link.path}>
                      {link.label}
                      <ArrowRight size={17} aria-hidden="true" />
                    </Button>
                  ),
                )}
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
