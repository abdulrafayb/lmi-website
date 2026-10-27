import { ArrowRight, ArrowDown, ArrowLeft } from "@phosphor-icons/react";
import Button from "../../../ui/Button";
import Eyebrow from "../../../ui/Eyebrow";
import Reveal from "../../../components/Reveal";
import manufacturingData from "../../../../data/Industries/Manufacturing And Industrial.json";

const { eyebrow, heading, paragraphs, action, panelHeading, flow, steps } =
  manufacturingData.sectionThree;
const positions = [
  "col-start-1 row-start-1",
  "col-start-2 row-start-1",
  "col-start-2 row-start-2",
  "col-start-1 row-start-2",
];

export default function SectionThree() {
  return (
    <section
      className="bg-proof-surface py-12 text-center md:py-16 lg:py-20 lg:text-left"
      aria-labelledby="manufacturing-flow-heading"
    >
      <div className="wrapper grid max-w-320 items-start gap-10 lg:grid-cols-2 lg:gap-14">
        <Reveal>
          <Eyebrow className="mb-4">{eyebrow}</Eyebrow>
          <h2
            id="manufacturing-flow-heading"
            className="text-hero-heading text-2xl leading-snug font-bold tracking-tight md:text-3xl lg:text-4xl"
          >
            {heading}
          </h2>
          <div className="text-hero-copy mt-7 space-y-5 text-base leading-relaxed">
            {paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <Button to={action.path} variant="secondary" className="mt-6">
            {action.label}
            <ArrowRight size={17} className="shrink-0" aria-hidden="true" />
          </Button>
        </Reveal>
        <Reveal
          delay={0.1}
          className="border-trust-border bg-surface min-w-0 rounded-xl border p-5 shadow-[0_0.5rem_1.5rem_var(--color-hero-shadow)] sm:p-6"
        >
          <h3
            id="manufacturing-flow-panel-heading"
            className="text-hero-copy mb-5 text-xs font-semibold tracking-[0.12em] uppercase"
          >
            {panelHeading}
          </h3>
          <div className="relative">
            <ol
              aria-labelledby="manufacturing-flow-panel-heading"
              className="grid auto-rows-fr grid-cols-2 gap-x-8 gap-y-10 text-center"
            >
              {flow.map(({ heading, description }, index) => (
                <li
                  key={heading}
                  className={`bg-proof-surface flex min-h-20 min-w-0 flex-col items-center justify-center rounded-md px-2 py-4 sm:px-4 ${positions[index]}`}
                >
                  <h4 className="text-hero-heading text-sm leading-snug font-semibold wrap-anywhere">
                    {heading}
                  </h4>
                  <p className="text-hero-copy mt-2 text-xs leading-relaxed">
                    {description}
                  </p>
                </li>
              ))}
            </ol>
            <ArrowRight
              size={23}
              className="text-brand-red absolute top-[calc(25%-0.625rem)] left-1/2 -translate-1/2"
              aria-hidden="true"
            />
            <ArrowDown
              size={23}
              className="text-brand-red absolute top-1/2 left-[calc(75%+0.5rem)] -translate-1/2"
              aria-hidden="true"
            />
            <ArrowLeft
              size={23}
              className="text-brand-red absolute top-[calc(75%+0.625rem)] left-1/2 -translate-1/2"
              aria-hidden="true"
            />
          </div>
          <ol className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {steps.map(({ number, heading, description }, index) => (
              <li
                key={number}
                className={`border-proof-accent border-t-2 pt-3 ${index === steps.length - 1 ? "sm:col-span-2 sm:w-1/2 sm:justify-self-center" : ""}`}
              >
                <h4 className="text-hero-heading text-sm leading-snug font-bold lg:text-base">
                  <span className="text-brand-red mr-2" aria-hidden="true">
                    {number}
                  </span>
                  {heading}
                </h4>
                <p className="text-hero-copy mt-2 text-sm leading-relaxed">
                  {description}
                </p>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
