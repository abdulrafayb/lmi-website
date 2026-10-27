import { ArrowRight } from "@phosphor-icons/react";
import Button from "../../../ui/Button";
import Eyebrow from "../../../ui/Eyebrow";
import Reveal from "../../../components/Reveal";
import energyData from "../../../../data/Industries/Oil, Gas And Energy.json";

const { eyebrow, heading, paragraphs, action, panelHeading, stages, steps } =
  energyData.sectionThree;
const stagePositions = [
  "left-[8%] top-[55%]",
  "left-[35%] top-[25%]",
  "left-[65%] top-[60%]",
  "left-[92%] top-[25%]",
];

export default function SectionThree() {
  return (
    <section
      className="bg-proof-surface py-12 text-center md:py-16 lg:py-20 lg:text-left"
      aria-labelledby="energy-handling-heading"
    >
      <div className="wrapper grid max-w-320 items-start gap-10 lg:grid-cols-2 lg:gap-14">
        <Reveal>
          <Eyebrow className="mb-4">{eyebrow}</Eyebrow>
          <h2
            id="energy-handling-heading"
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
            id="energy-delivery-stages-heading"
            className="text-hero-copy text-xs font-semibold tracking-[0.12em] uppercase"
          >
            {panelHeading}
          </h3>
          <div className="relative mt-5 h-44">
            <svg
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              className="stroke-proof-accent absolute inset-0 h-full w-full overflow-visible fill-none"
              aria-hidden="true"
            >
              <polyline
                points="8,55 35,25 65,60 92,25"
                strokeWidth="4"
                strokeDasharray="9 8"
                strokeLinecap="round"
                vectorEffect="non-scaling-stroke"
              />
            </svg>
            <ol aria-labelledby="energy-delivery-stages-heading">
              {stages.map((stage, index) => (
                <li
                  key={stage}
                  className={`absolute w-1/4 -translate-x-1/2 text-center ${stagePositions[index]}`}
                >
                  <span
                    className="border-brand-red bg-surface mx-auto -mt-3 block size-6 rounded-full border-[7px]"
                    aria-hidden="true"
                  />
                  <span className="text-hero-heading mt-3 block text-xs leading-snug font-medium">
                    {stage}
                  </span>
                </li>
              ))}
            </ol>
          </div>
          <ol className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {steps.map(({ number, heading, description }) => (
              <li key={number} className="border-proof-accent border-t-2 pt-3">
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
