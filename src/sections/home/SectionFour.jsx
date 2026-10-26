import Reveal from "../../components/Reveal";
import { ArrowRight } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import homeData from "../../../data/Home.json";

const { eyebrow, heading, description, services, exploreLabel, action } =
  homeData.sectionFour;

export default function SectionFour() {
  return (
    <section
      className="bg-surface py-12 text-center md:py-16 lg:py-20 lg:text-left"
      aria-labelledby="home-services-heading"
    >
      <div className="wrapper">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-brand-red mb-3 text-xs font-semibold tracking-[0.16em] uppercase">
            {eyebrow}
          </p>
          <h2
            id="home-services-heading"
            className="text-hero-heading text-2xl leading-tight font-bold tracking-tight md:text-3xl lg:text-4xl"
          >
            {heading}
          </h2>
          <p className="text-hero-copy mx-auto mt-4 max-w-2xl text-sm leading-relaxed md:text-base">
            {description}
          </p>
        </Reveal>
        <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {services.map(
            ({ title, description, path, image, imagePlaceholder }, index) => (
              <Reveal as="li" key={path} delay={(index % 4) * 0.05}>
                <article className="border-trust-border flex h-full min-w-0 flex-col rounded-md border p-4 lg:p-5">
                  <div className="text-hero-copy flex aspect-[8/5] items-center justify-center overflow-hidden rounded-sm bg-[repeating-linear-gradient(135deg,var(--color-hero-stripe-light)_0_0.625rem,var(--color-hero-stripe-dark)_0.625rem_1.25rem)]">
                    {image ? (
                      <img
                        src={image}
                        alt=""
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                    ) : (
                      <span
                        className="px-2 text-center text-[11px]"
                        aria-hidden="true"
                      >
                        {imagePlaceholder}
                      </span>
                    )}
                  </div>
                  <h3 className="text-hero-heading mt-4 text-base leading-snug font-bold lg:min-h-12 lg:text-lg">
                    {title}
                  </h3>
                  <p className="text-hero-copy mt-3 text-sm leading-relaxed">
                    {description}
                  </p>
                  <Link
                    to={path}
                    className="text-brand-red outline-brand-red mx-auto mt-auto inline-flex min-h-11 w-fit items-center gap-1 pt-2 text-sm font-medium underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 lg:mx-0"
                  >
                    {exploreLabel}
                    <span className="sr-only"> {title}</span>
                    <ArrowRight size={15} aria-hidden="true" />
                  </Link>
                </article>
              </Reveal>
            ),
          )}
        </ul>
        <div className="mt-8 flex justify-center">
          <Link
            to={action.path}
            className="outline-brand-red secondary inline-flex min-h-10 items-center justify-center gap-2 rounded-sm border px-5 py-2 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-4"
          >
            {action.label}
            <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
