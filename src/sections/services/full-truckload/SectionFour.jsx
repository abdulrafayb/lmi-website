import { ArrowRight } from "@phosphor-icons/react";
import Button from "../../../ui/Button";
import Eyebrow from "../../../ui/Eyebrow";
import Reveal from "../../../components/Reveal";
import data from "../../../../data/Services/Full Truckload.json";

const section = data.sectionFour;
export default function SectionFour() {
  return (
    <section
      aria-labelledby="ftl-service-process-heading"
      className="bg-surface py-12 text-center md:py-16 lg:py-20 lg:text-left"
    >
      <div className="wrapper max-w-320">
        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal>
            <Eyebrow className="mb-4">{section.eyebrow}</Eyebrow>
            <h2
              id="ftl-service-process-heading"
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
          <ol className="grid gap-4 sm:grid-cols-2 lg:order-2">
            {section.steps.map((step, index) => (
              <Reveal
                as="li"
                key={step.number}
                delay={index * 0.04}
                className={`bg-proof-surface border-proof-accent border-t-2 p-5 ${index === 4 ? "sm:col-span-2" : ""}`}
              >
                <span className="text-brand-red text-xl font-bold">
                  {step.number}
                </span>
                <h3 className="text-hero-heading mt-3 text-lg font-bold">
                  {step.heading}
                </h3>
                <p className="text-hero-copy mt-2 leading-relaxed">
                  {step.description}
                </p>
              </Reveal>
            ))}
          </ol>
          <Reveal className="border-trust-border mx-auto w-full max-w-xl rounded-xl border p-5 shadow-[0_0.5rem_1.5rem_var(--color-hero-shadow)] sm:p-6 lg:order-1">
            <h3 className="text-hero-copy text-xs font-semibold tracking-[0.12em] uppercase">
              {section.panelHeading}
            </h3>
            <p className="text-hero-heading mt-5 text-center font-bold">
              {section.panelDescription}
            </p>
            <div className="border-trust-border mt-5 flex aspect-[2/1] items-center justify-center overflow-hidden rounded-md border bg-[repeating-linear-gradient(135deg,var(--color-hero-stripe-light)_0_0.625rem,var(--color-hero-stripe-dark)_0.625rem_1.25rem)]">
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
            <ul className="mt-6 flex flex-wrap justify-center gap-2">
              {section.features.map((feature) => (
                <li
                  key={feature}
                  className="bg-proof-surface text-hero-heading rounded-full px-4 py-2 text-sm font-semibold"
                >
                  {feature}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
