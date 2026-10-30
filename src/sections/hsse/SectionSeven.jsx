import { Check } from "@phosphor-icons/react";
import Eyebrow from "../../ui/Eyebrow";
import Reveal from "../../components/Reveal";
import data from "../../../data/HSSE.json";
const section = data.sectionSeven;
export default function SectionSeven() {
  return (
    <section
      aria-labelledby="hsse-seven-heading"
      className="bg-proof-surface scroll-mt-24 py-12 text-center md:py-16 lg:py-20 lg:text-left"
    >
      <div className="wrapper grid max-w-320 items-start gap-10 lg:grid-cols-2 lg:gap-14">
        <Reveal>
          <Eyebrow className="mb-4">{section.eyebrow}</Eyebrow>
          <h2
            id="hsse-seven-heading"
            className="text-hero-heading text-2xl leading-snug font-bold tracking-tight md:text-3xl lg:text-4xl"
          >
            {section.heading}
          </h2>
          <p className="text-hero-copy mt-6 leading-relaxed">
            {section.description}
          </p>
          <ul className="mt-7 space-y-4">
            {section.items.map((item) => (
              <li
                key={item}
                className="text-hero-copy flex flex-col items-center gap-3 leading-relaxed lg:flex-row lg:items-start"
              >
                <span className="bg-proof-accent text-hero-heading flex size-5 shrink-0 items-center justify-center rounded-full">
                  <Check size={14} weight="bold" aria-hidden="true" />
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal>
          <div className="border-trust-border flex aspect-[16/9] items-center justify-center overflow-hidden rounded-lg border bg-[repeating-linear-gradient(135deg,var(--color-hero-stripe-light)_0_0.625rem,var(--color-hero-stripe-dark)_0.625rem_1.25rem)]">
            {section.image ? (
              <img
                src={section.image}
                alt={section.imageAlt}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            ) : (
              <span className="text-hero-copy px-5 text-center text-sm">
                {section.imagePlaceholder}
              </span>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
