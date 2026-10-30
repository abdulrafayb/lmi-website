import Button from "../../ui/Button";
import { ArrowRight } from "@phosphor-icons/react";
import Eyebrow from "../../ui/Eyebrow";
import Reveal from "../../components/Reveal";
import data from "../../../data/Insights.json";
const section = data.sectionTwo;
export default function SectionTwo() {
  return (
    <section
      id="case-studies"
      aria-labelledby="insights-cases-heading"
      className="bg-surface scroll-mt-24 py-12 text-center md:py-16 lg:py-20 lg:text-left"
    >
      <div className="wrapper max-w-320">
        <Reveal className="text-center">
          <Eyebrow className="mb-4">{section.eyebrow}</Eyebrow>
          <h2
            id="insights-cases-heading"
            className="text-hero-heading text-2xl leading-snug font-bold tracking-tight md:text-3xl lg:text-4xl"
          >
            {section.heading}
          </h2>
        </Reveal>
        <ul className="mt-9 grid gap-5 lg:grid-cols-3">
          {section.cards.map((card, index) => (
            <Reveal
              as="li"
              key={card.heading}
              delay={index * 0.04}
              className="border-trust-border flex flex-col rounded-md border p-5"
            >
              <div className="border-trust-border flex aspect-[2/1] items-center justify-center overflow-hidden rounded-md border bg-[repeating-linear-gradient(135deg,var(--color-hero-stripe-light)_0_0.625rem,var(--color-hero-stripe-dark)_0.625rem_1.25rem)]">
                {card.image ? (
                  <img
                    src={card.image}
                    alt={card.heading}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <span className="text-hero-copy px-4 text-center text-xs">
                    {card.imagePlaceholder}
                  </span>
                )}
              </div>
              <Eyebrow className="mt-4 mb-3">{card.eyebrow}</Eyebrow>
              <h3 className="text-hero-heading text-xl font-bold">
                {card.heading}
              </h3>
              <div className="text-hero-copy mt-4 text-sm leading-relaxed">
                <p>{card.industry}</p>
                <p>{card.service}</p>
              </div>
              <p className="text-hero-copy mt-3 leading-relaxed">
                {card.description}
              </p>
              <p className="text-hero-copy mt-3 mb-3 text-sm leading-relaxed">
                {card.note}
              </p>
              <Button
                variant="link"
                href={card.path}
                className="mt-auto justify-center lg:justify-start"
              >
                {card.label}
                <ArrowRight size={17} aria-hidden="true" />
              </Button>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
