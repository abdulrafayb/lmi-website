import { ShieldCheck, ArrowRight } from "@phosphor-icons/react";
import Eyebrow from "../../ui/Eyebrow";
import Reveal from "../../components/Reveal";
import data from "../../../data/HSSE.json";
const section = data.sectionSix;
export default function SectionSix() {
  return (
    <section
      aria-labelledby="hsse-stages-heading"
      className="bg-surface py-12 text-center md:py-16 lg:py-20 lg:text-left"
    >
      <div className="wrapper max-w-320">
        <div className="grid items-center gap-6 lg:grid-cols-2">
          <Reveal>
            <Eyebrow className="mb-4">{section.eyebrow}</Eyebrow>
            <h2
              id="hsse-stages-heading"
              className="text-hero-heading text-2xl leading-snug font-bold tracking-tight md:text-3xl lg:text-4xl"
            >
              {section.heading}
            </h2>
          </Reveal>
          <Reveal>
            <p className="text-hero-copy leading-relaxed">
              {section.description}
            </p>
          </Reveal>
        </div>
        <ol className="bg-brand-red text-surface mt-9 grid gap-8 rounded-md p-6 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6 lg:p-8">
          {section.steps.map((step, index) => (
            <Reveal
              as="li"
              key={step.heading}
              delay={index * 0.04}
              className="relative"
            >
              <span className="bg-proof-accent text-hero-heading mx-auto flex size-11 items-center justify-center rounded-full lg:mx-0">
                <ShieldCheck size={24} aria-hidden="true" />
              </span>
              {index < 4 && (
                <div
                  aria-hidden="true"
                  className="text-proof-accent absolute top-5 right-0 left-14 hidden items-center lg:flex"
                >
                  <span className="bg-proof-accent h-px flex-1" />
                  <ArrowRight size={16} className="-ml-2" />
                </div>
              )}
              <h3 className="mt-5 text-lg font-bold">{step.heading}</h3>
              <p className="mt-2 text-sm leading-relaxed">{step.description}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
