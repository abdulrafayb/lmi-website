import { ArrowRight } from "@phosphor-icons/react";
import Button from "../../../ui/Button";
import Eyebrow from "../../../ui/Eyebrow";
import Reveal from "../../../components/Reveal";
import data from "../../../../data/Services/Road Freight Transportation.json";

const section = data.sectionFour;
export default function SectionFour() {
  return (
    <section
      aria-labelledby="road-service-process-heading"
      className="bg-surface py-12 text-center md:py-16 lg:py-20 lg:text-left"
    >
      <div className="wrapper max-w-320">
        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal>
            <Eyebrow className="mb-4">{section.eyebrow}</Eyebrow>
            <h2
              id="road-service-process-heading"
              className="text-hero-heading text-2xl leading-snug font-bold tracking-tight md:text-3xl lg:text-4xl"
            >
              {section.heading}
            </h2>
          </Reveal>
          <Reveal>
            <p className="text-hero-copy text-base leading-relaxed">
              {section.description}
            </p>
            <Button
              className="mt-5"
              variant="secondary"
              to={section.action.path}
            >
              {section.action.label}
              <ArrowRight size={17} aria-hidden="true" />
            </Button>
          </Reveal>
        </div>
        <div className="mt-10 grid items-start gap-8 lg:grid-cols-2 lg:gap-12">
          <ol className="border-proof-accent border-t-2">
            {section.steps.map((step, index) => (
              <Reveal
                as="li"
                key={step.number}
                delay={index * 0.04}
                className="border-trust-border flex flex-col items-center gap-3 border-b py-5 last:border-b-0 lg:flex-row lg:items-start lg:gap-8"
              >
                <span className="text-brand-red text-3xl font-bold">
                  {step.number}
                </span>
                <div>
                  <h3 className="text-hero-heading text-lg font-bold">
                    {step.heading}
                  </h3>
                  <p className="text-hero-copy mt-2 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </ol>
          <Reveal className="border-trust-border bg-surface min-w-0 rounded-xl border p-5 shadow-[0_0.5rem_1.5rem_var(--color-hero-shadow)] sm:p-6">
            <h3
              id="road-matching-heading"
              className="text-hero-copy text-center text-xs font-semibold tracking-[0.12em] uppercase"
            >
              {section.panelHeading}
            </h3>
            <div className="text-hero-copy mt-5 hidden grid-cols-[1.5fr_2rem_1fr] gap-2 text-xs font-semibold tracking-wider uppercase sm:grid">
              <span>{section.cargoLabel}</span>
              <span aria-hidden="true" />
              <span>{section.serviceLabel}</span>
            </div>
            <ul
              aria-labelledby="road-matching-heading"
              className="mt-3 space-y-3"
            >
              {section.matches.map((match) => (
                <li
                  key={match.path}
                  className="grid items-stretch gap-2 sm:grid-cols-[1.5fr_2rem_1fr]"
                >
                  <span className="bg-proof-surface text-hero-heading flex items-center justify-center rounded-md px-3 py-3 text-sm font-semibold lg:justify-start">
                    {match.cargo}
                  </span>
                  <span
                    className="text-proof-accent flex items-center justify-center"
                    aria-hidden="true"
                  >
                    <ArrowRight size={26} className="rotate-90 sm:rotate-0" />
                  </span>
                  <Button
                    variant="primary"
                    to={match.path}
                    className="px-3 py-3 text-sm tracking-normal"
                  >
                    {match.service}
                  </Button>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
