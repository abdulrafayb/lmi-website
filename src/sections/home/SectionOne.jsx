import Reveal from "../../components/Reveal";
import { ArrowRight } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import homeData from "../../../data/Home.json";

const { heading, description, actions, photoCaption } = homeData.sectionOne;

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
              <Link
                key={path}
                to={path}
                className={`outline-brand-red inline-flex min-h-10 items-center justify-center gap-2 rounded-sm border px-5 py-2 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 max-sm:flex-[1_1_auto] ${
                  variant === "primary"
                    ? "border-brand-red bg-brand-red text-surface hover:border-brand-red-dark hover:bg-brand-red-dark"
                    : "secondary"
                }`}
              >
                {label}
                {showArrow && <ArrowRight size={17} aria-hidden="true" />}
              </Link>
            ))}
          </div>
        </Reveal>
      </div>
      <p className="text-hero-copy absolute right-6 bottom-5 left-6 text-center text-[0.6875rem] lg:right-[clamp(1.5rem,10vw,8.5rem)] lg:text-right">
        {photoCaption}
      </p>
    </section>
  );
}
