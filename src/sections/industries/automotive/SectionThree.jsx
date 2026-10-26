import { ArrowRight } from "@phosphor-icons/react";
import Button from "../../../ui/Button";
import Eyebrow from "../../../ui/Eyebrow";
import Reveal from "../../../components/Reveal";
import automotiveData from "../../../../data/Industries/Automotive.json";

const {
  eyebrow,
  heading,
  paragraphs,
  action,
  panelHeading,
  image,
  imageAlt,
  imagePlaceholder,
  steps,
} = automotiveData.sectionThree;

export default function SectionThree() {
  return (
    <section
      className="bg-proof-surface py-12 text-center md:py-16 lg:py-20 lg:text-left"
      aria-labelledby="automotive-care-heading"
    >
      <div className="wrapper grid max-w-320 items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <Reveal>
          <Eyebrow className="mb-4">{eyebrow}</Eyebrow>
          <h2
            id="automotive-care-heading"
            className="text-hero-heading text-2xl leading-snug font-bold tracking-tight md:text-3xl lg:text-4xl"
          >
            {heading}
          </h2>
          <div className="text-hero-copy mt-7 space-y-4 text-base leading-relaxed">
            {paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <Button to={action.path} variant="secondary" className="mt-6">
            {action.label}
            <ArrowRight size={17} aria-hidden="true" />
          </Button>
        </Reveal>
        <Reveal
          delay={0.1}
          className="border-trust-border bg-surface min-w-0 rounded-xl border p-5 shadow-[0_0.5rem_1.5rem_var(--color-hero-shadow)] sm:p-6"
        >
          <h3 className="text-hero-copy text-xs font-semibold tracking-[0.12em] uppercase">
            {panelHeading}
          </h3>
          <div className="border-trust-border mt-5 flex aspect-[2/1] items-center justify-center overflow-hidden rounded-md border bg-[repeating-linear-gradient(135deg,var(--color-hero-stripe-light)_0_0.625rem,var(--color-hero-stripe-dark)_0.625rem_1.25rem)]">
            {image ? (
              <img
                src={image}
                alt={imageAlt}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            ) : (
              <span
                className="text-hero-copy px-5 text-center text-sm"
                aria-hidden="true"
              >
                {imagePlaceholder}
              </span>
            )}
          </div>
          <ol className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {steps.map(({ number, heading, description }) => (
              <li key={number} className="border-proof-accent border-t-2 pt-3">
                <h4 className="text-hero-heading text-sm leading-snug font-bold lg:text-base">
                  <span className="text-brand-red" aria-hidden="true">
                    {number}{" "}
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
