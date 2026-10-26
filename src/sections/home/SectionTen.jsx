import { ArrowRight } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import Reveal from "../../components/Reveal";
import homeData from "../../../data/Home.json";

const { heading, description, action } = homeData.sectionTen;

export default function SectionTen() {
  return (
    <section
      className="bg-brand-red text-surface py-12 text-center md:py-14 lg:py-16 lg:text-left"
      aria-labelledby="home-contact-heading"
    >
      <Reveal className="wrapper flex max-w-280 flex-col items-center justify-between gap-7 lg:flex-row lg:gap-12">
        <div>
          <h2
            id="home-contact-heading"
            className="text-2xl leading-snug font-bold tracking-tight md:text-3xl lg:text-4xl"
          >
            {heading}
          </h2>
          <p className="mt-4 text-sm leading-relaxed md:text-base">
            {description}
          </p>
        </div>
        <Link
          to={action.path}
          className="tertiary outline-surface inline-flex min-h-12 shrink-0 items-center justify-center gap-3 rounded-sm border px-7 py-3 text-base font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-4"
        >
          {action.label}
          <ArrowRight size={19} aria-hidden="true" />
        </Link>
      </Reveal>
    </section>
  );
}
