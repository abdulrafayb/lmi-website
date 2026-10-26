import Button from "../../ui/Button";
import Eyebrow from "../../ui/Eyebrow";
import { ArrowRight } from "@phosphor-icons/react";
import Reveal from "../../components/Reveal";
import homeData from "../../../data/Home.json";

const { eyebrow, heading, description, exploreLabel, industries } =
  homeData.sectionEight;

export default function SectionEight() {
  return (
    <section
      className="bg-surface py-12 text-center md:py-16 lg:py-20 lg:text-left"
      aria-labelledby="home-industries-heading"
    >
      <div className="wrapper max-w-280">
        <Reveal className="mx-auto max-w-3xl text-center">
          <Eyebrow className="mb-4">{eyebrow}</Eyebrow>
          <h2
            id="home-industries-heading"
            className="text-hero-heading text-2xl leading-snug font-bold tracking-tight md:text-3xl lg:text-4xl"
          >
            {heading}
          </h2>
          <p className="text-hero-copy mt-5 text-sm leading-relaxed md:text-base">
            {description}
          </p>
        </Reveal>
        <ul className="mt-9 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {industries.map(({ title, path, image, imagePlaceholder }, index) => (
            <Reveal as="li" key={path} delay={index * 0.05}>
              <article className="border-trust-border flex h-full min-w-0 flex-col rounded-md border p-5">
                <div className="text-hero-copy flex aspect-[6/5] items-center justify-center overflow-hidden rounded-sm bg-[repeating-linear-gradient(135deg,var(--color-hero-stripe-light)_0_0.625rem,var(--color-hero-stripe-dark)_0.625rem_1.25rem)]">
                  {image ? (
                    <img
                      src={image}
                      alt=""
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <span
                      className="px-3 text-center text-xs leading-relaxed"
                      aria-hidden="true"
                    >
                      {imagePlaceholder}
                    </span>
                  )}
                </div>
                <h3 className="text-hero-heading mt-4 text-lg leading-snug font-bold">
                  {title}
                </h3>
                <Button
                  to={path}
                  variant="link"
                  className="mx-auto mt-auto w-fit lg:mx-0"
                >
                  {exploreLabel}
                  <span className="sr-only"> {title}</span>
                  <ArrowRight size={15} aria-hidden="true" />
                </Button>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
