import { ArrowRight } from "@phosphor-icons/react";
import Button from "../../../ui/Button";
import Eyebrow from "../../../ui/Eyebrow";
import Reveal from "../../../components/Reveal";
import constructionData from "../../../../data/Industries/Construction And Engineering.json";

const {
  eyebrow,
  heading,
  paragraphs,
  action,
  panelHeading,
  startLabel,
  endLabel,
  steps,
} = constructionData.sectionThree;
const heights = ["xl:pt-12", "xl:pt-14", "xl:pt-7", ""];

export default function SectionThree() {
  return (
    <section
      className="bg-proof-surface py-12 text-center md:py-16 lg:py-20 lg:text-left"
      aria-labelledby="construction-planning-heading"
    >
      <div className="wrapper grid max-w-320 items-start gap-10 lg:grid-cols-2 lg:gap-14">
        <Reveal>
          <Eyebrow className="mb-4">{eyebrow}</Eyebrow>
          <h2
            id="construction-planning-heading"
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
          <h3 className="text-hero-copy mb-5 text-xs font-semibold tracking-[0.12em] uppercase">
            {panelHeading}
          </h3>
          <ol className="border-hero-copy grid grid-cols-1 gap-3 border-b-4 sm:grid-cols-2 xl:grid-cols-4 xl:gap-2">
            {steps.map(({ number, heading, description }, index) => (
              <li key={number} className={`flex ${heights[index]}`}>
                <div
                  className={`border-brand-red flex w-full flex-col justify-end border-t-4 px-3 py-4 ${index === steps.length - 1 ? "bg-proof-accent" : "bg-proof-surface"}`}
                >
                  <span
                    className="text-brand-red text-lg font-bold"
                    aria-hidden="true"
                  >
                    {number}
                  </span>
                  <h4 className="text-hero-heading mt-2 text-base leading-snug font-bold">
                    {heading}
                  </h4>
                  <p className="text-hero-heading mt-2 text-sm leading-relaxed">
                    {description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
          <div
            className="text-hero-copy mt-3 flex justify-between gap-4 text-xs font-semibold tracking-[0.12em] uppercase"
            aria-hidden="true"
          >
            <span>{startLabel}</span>
            <span>{endLabel}</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
