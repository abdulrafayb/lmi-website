import { ArrowRight } from "@phosphor-icons/react";
import Button from "../../../ui/Button";
import Eyebrow from "../../../ui/Eyebrow";
import Reveal from "../../../components/Reveal";
import data from "../../../../data/Fleet And Visiblity/Fleet And Equipment.json";
const section = data.sectionFive;
export default function SectionFive() {
  return (
    <section
      aria-labelledby="fleet-process-heading"
      className="bg-proof-surface py-12 text-center md:py-16 lg:py-20 lg:text-left"
    >
      <div className="wrapper max-w-320">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <Reveal>
            <Eyebrow className="mb-4">{section.eyebrow}</Eyebrow>
            <h2
              id="fleet-process-heading"
              className="text-hero-heading text-2xl leading-snug font-bold tracking-tight md:text-3xl lg:text-4xl"
            >
              {section.heading}
            </h2>
          </Reveal>
          <Reveal>
            <p className="text-hero-copy leading-relaxed">
              {section.description}
            </p>
            <Button
              variant="secondary"
              to={section.action.path}
              className="mt-5"
            >
              {section.action.label}
              <ArrowRight size={17} aria-hidden="true" />
            </Button>
          </Reveal>
        </div>
        <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
          {section.steps.map((step, index) => (
            <Reveal
              as="li"
              key={step.heading}
              delay={index * 0.04}
              className="relative"
            >
              <span className="bg-brand-red text-surface relative z-10 mx-auto flex size-11 items-center justify-center rounded-full text-lg font-bold lg:mx-0">
                {index + 1}
              </span>
              {index < 4 && (
                <div
                  aria-hidden="true"
                  className="text-proof-accent absolute top-5 right-0 left-14 hidden items-center lg:flex"
                >
                  <span className="bg-proof-accent h-px flex-1" />
                  <ArrowRight size={16} className="-ml-2 shrink-0" />
                </div>
              )}
              <h3 className="text-hero-heading mt-5 text-lg font-bold">
                {step.heading}
              </h3>
              <p className="text-hero-copy mt-2 text-sm leading-relaxed">
                {step.description}
              </p>
            </Reveal>
          ))}
        </ol>
        <Reveal className="mt-12 flex flex-col items-center gap-4 lg:mt-20 lg:flex-row lg:justify-between">
          <p className="text-hero-heading leading-relaxed">
            <strong>{section.readiness.heading}</strong>{" "}
            {section.readiness.description}
          </p>
          <Button
            variant="secondary"
            to={section.readiness.action.path}
            className="shrink-0"
          >
            {section.readiness.action.label}
            <ArrowRight size={17} aria-hidden="true" />
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
