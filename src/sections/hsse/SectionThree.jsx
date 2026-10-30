import { Check } from "@phosphor-icons/react";
import Eyebrow from "../../ui/Eyebrow";
import Reveal from "../../components/Reveal";
import data from "../../../data/HSSE.json";
const section = data.sectionThree;
export default function SectionThree() {
  return (
    <section
      id="driver-road-safety"
      aria-labelledby="hsse-driver-heading"
      className="bg-proof-surface scroll-mt-24 py-12 text-center md:py-16 lg:py-20 lg:text-left"
    >
      <div className="wrapper grid max-w-320 items-start gap-10 lg:grid-cols-2 lg:gap-14">
        <Reveal>
          <Eyebrow className="mb-4">{section.eyebrow}</Eyebrow>
          <h2
            id="hsse-driver-heading"
            className="text-hero-heading text-2xl leading-snug font-bold tracking-tight md:text-3xl lg:text-4xl"
          >
            {section.heading}
          </h2>
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
        <Reveal className="bg-surface border-trust-border rounded-xl border p-5 shadow-[0_0.5rem_1.5rem_var(--color-hero-shadow)] sm:p-6">
          <h3 className="text-hero-copy text-xs font-semibold tracking-wider uppercase">
            {section.panelHeading}
          </h3>
          <ol className="mt-5 space-y-5">
            {section.steps.map((step, index) => (
              <li
                key={step.heading}
                className="bg-proof-surface border-brand-red relative flex flex-col items-center gap-4 rounded-md border-l-4 p-5 lg:flex-row"
              >
                <span className="bg-proof-accent text-hero-heading flex size-10 shrink-0 items-center justify-center rounded-full font-bold">
                  {index + 1}
                </span>
                <div>
                  <h4 className="text-hero-heading text-lg font-semibold">
                    {step.heading}
                  </h4>
                  <p className="text-hero-copy mt-1 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
