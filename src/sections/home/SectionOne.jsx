import Button from "../../ui/Button";
import Reveal from "../../components/Reveal";
import { ArrowRight } from "@phosphor-icons/react";
import homeData from "../../../data/Home.json";

const { heading, description, actions } = homeData.sectionOne;

export default function SectionOne() {
  return (
    <section
      className="relative min-h-108 bg-[repeating-linear-gradient(135deg,var(--color-hero-stripe-light)_0_0.625rem,var(--color-hero-stripe-dark)_0.625rem_1.25rem)] py-8 pb-16 text-center sm:py-13.5 lg:text-left"
      aria-labelledby="home-hero-heading"
    >
      <div className="mx-auto max-w-340 px-[clamp(1.5rem,10vw,8.5rem)]">
        <Reveal className="bg-surface mx-auto w-full max-w-120 rounded-lg p-6 shadow-[0_1rem_2.5rem_var(--color-hero-shadow)] sm:p-8.5 lg:mx-0">
          <h1
            id="home-hero-heading"
            className="text-hero-heading text-[clamp(1.75rem,3.2vw,2.25rem)] leading-[1.08] font-extrabold tracking-[-0.025em]"
          >
            {heading.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h1>
          <p className="text-hero-copy mt-4.5 text-[0.9375rem] leading-normal">
            {description}
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-2.5 lg:justify-start">
            {actions.map(({ label, path, variant, showArrow }) => (
              <Button
                key={path}
                to={path}
                variant={variant}
                className="max-sm:flex-[1_1_auto]"
              >
                {label}
                {showArrow && <ArrowRight size={17} aria-hidden="true" />}
              </Button>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
