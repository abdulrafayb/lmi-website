import { ArrowRight } from "@phosphor-icons/react";
import Button from "../../../ui/Button";
import Eyebrow from "../../../ui/Eyebrow";
import Reveal from "../../../components/Reveal";
import data from "../../../../data/Services/Overview.json";
const section = data.sectionTwo;
export default function SectionTwo() {
  return (
    <section
      id="services"
      aria-labelledby="services-range-heading"
      className="bg-surface scroll-mt-24 py-12 text-center md:py-16 lg:py-20 lg:text-left"
    >
      <div className="wrapper max-w-320">
        <Reveal className="text-center">
          <Eyebrow className="mb-4">{section.eyebrow}</Eyebrow>
          <h2
            id="services-range-heading"
            className="text-hero-heading text-2xl leading-snug font-bold tracking-tight md:text-3xl lg:text-4xl"
          >
            {section.heading}
          </h2>
        </Reveal>
        <ul className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {section.services.map((service, index) => (
            <Reveal
              as="li"
              key={service.path}
              delay={index * 0.03}
              className="bg-proof-surface flex flex-col rounded-md p-5"
            >
              <div className="border-trust-border flex aspect-[3/2] items-center justify-center overflow-hidden rounded-md border bg-[repeating-linear-gradient(135deg,var(--color-hero-stripe-light)_0_0.625rem,var(--color-hero-stripe-dark)_0.625rem_1.25rem)]">
                {service.image ? (
                  <img
                    src={service.image}
                    alt={service.imageAlt}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <span className="text-hero-copy px-4 text-center text-xs">
                    {service.imagePlaceholder}
                  </span>
                )}
              </div>
              <h3 className="text-hero-heading mt-5 text-lg font-bold">
                {service.heading}
              </h3>
              <p className="text-hero-copy mt-3 mb-4 text-sm leading-relaxed">
                {service.description}
              </p>
              <Button
                variant="link"
                to={service.path}
                className="mt-auto justify-center lg:justify-start"
              >
                {service.label}
                <ArrowRight size={17} className="shrink-0" aria-hidden="true" />
              </Button>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
