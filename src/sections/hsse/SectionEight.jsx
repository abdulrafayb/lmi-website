import { ArrowRight } from "@phosphor-icons/react";
import Button from "../../ui/Button";
import Eyebrow from "../../ui/Eyebrow";
import Reveal from "../../components/Reveal";
import data from "../../../data/HSSE.json";
const section = data.sectionEight;
export default function SectionEight() {
  return (
    <section
      aria-labelledby="hsse-awards-heading"
      className="bg-surface py-12 text-center md:py-16 lg:py-20"
    >
      <div className="wrapper max-w-320">
        <Reveal>
          <Eyebrow className="mb-4">{section.eyebrow}</Eyebrow>
          <h2
            id="hsse-awards-heading"
            className="text-hero-heading text-2xl leading-snug font-bold tracking-tight md:text-3xl lg:text-4xl"
          >
            {section.heading}
          </h2>
        </Reveal>
        <ul className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {section.awards.map((award, index) => (
            <Reveal as="li" key={award.heading} delay={index * 0.04}>
              <div className="bg-proof-surface border-proof-accent h-full border-t-2 p-5">
                <h3 className="text-hero-heading font-bold">{award.heading}</h3>
                <p className="text-hero-copy mt-3 text-sm leading-relaxed">
                  {award.description}
                </p>
              </div>
            </Reveal>
          ))}
        </ul>
        <ul className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {section.awards.map((award) => (
            <Reveal
              as="li"
              key={award.heading}
              className="border-editorial-border flex h-28 items-center justify-center overflow-hidden rounded-md border-2 border-dashed p-4"
            >
              {award.image ? (
                <img
                  src={award.image}
                  alt={award.heading}
                  loading="lazy"
                  className="h-full w-full object-contain"
                />
              ) : (
                <span className="text-hero-copy text-xs">
                  {award.imagePlaceholder}
                </span>
              )}
            </Reveal>
          ))}
        </ul>
        <Reveal className="border-trust-border mt-7 rounded-xl border p-6">
          <span className="bg-brand-red text-surface mx-auto flex h-14 w-12 items-center justify-center rounded-md text-xs font-bold">
            {section.policy.badge}
          </span>
          <h3 className="text-hero-heading mt-4 text-xl font-bold">
            {section.policy.heading}
          </h3>
          <p className="text-hero-copy mt-2 leading-relaxed">
            {section.policy.description}
          </p>
          <p className="text-hero-copy mt-2 text-xs">
            {section.policy.metadata}
          </p>
          <Button
            variant="secondary"
            href={section.policy.path ?? undefined}
            disabled={!section.policy.path}
            download
            className="mt-5"
          >
            {section.policy.label}
          </Button>
        </Reveal>
        <Reveal className="mt-5">
          <Button variant="secondary" to={section.action.path}>
            {section.action.label}
            <ArrowRight size={17} aria-hidden="true" />
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
