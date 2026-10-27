import { ArrowRight } from "@phosphor-icons/react";
import Button from "../../../ui/Button";
import Eyebrow from "../../../ui/Eyebrow";
import Reveal from "../../../components/Reveal";
import industriesData from "../../../../data/Industries/Overview.json";

const { eyebrow, heading, industries, futureIndustry } =
  industriesData.sectionTwo;

export default function SectionTwo() {
  return (
    <section
      id="industries"
      className="bg-surface scroll-mt-24 py-12 text-center md:py-16 lg:py-20 lg:text-left"
      aria-labelledby="industries-explore-heading"
    >
      <div className="wrapper max-w-320">
        <Reveal>
          <Eyebrow className="mb-4">{eyebrow}</Eyebrow>
          <h2
            id="industries-explore-heading"
            className="text-hero-heading text-2xl leading-snug font-bold tracking-tight md:text-3xl lg:text-4xl"
          >
            {heading}
          </h2>
        </Reveal>
        <ul className="mt-9 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map(
            (
              { title, description, image, imageAlt, imagePlaceholder, action },
              index,
            ) => (
              <Reveal as="li" key={title} delay={(index % 3) * 0.05}>
                <article className="bg-proof-surface flex h-full min-w-0 flex-col rounded-md p-6">
                  <div className="border-trust-border flex aspect-[15/8] items-center justify-center overflow-hidden rounded-sm border bg-[repeating-linear-gradient(135deg,var(--color-hero-stripe-light)_0_0.625rem,var(--color-hero-stripe-dark)_0.625rem_1.25rem)]">
                    {image ? (
                      <img
                        src={image}
                        alt={imageAlt}
                        loading="lazy"
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <span
                        className="text-hero-copy px-4 text-center text-xs"
                        aria-hidden="true"
                      >
                        {imagePlaceholder}
                      </span>
                    )}
                  </div>
                  <h3 className="text-hero-heading mt-5 text-xl leading-snug font-bold">
                    {title}
                  </h3>
                  <p className="text-hero-copy mt-3 text-sm leading-relaxed lg:text-base">
                    {description}
                  </p>
                  <Button
                    to={action.path}
                    variant="link"
                    className="mx-auto mt-auto w-fit pt-4 lg:mx-0"
                  >
                    {action.label}
                    <ArrowRight
                      size={15}
                      className="shrink-0"
                      aria-hidden="true"
                    />
                  </Button>
                </article>
              </Reveal>
            ),
          )}
          <Reveal
            as="li"
            delay={0.1}
            className="border-editorial-border bg-surface flex min-h-64 flex-col justify-center rounded-md border-2 border-dashed p-6"
          >
            <h3 className="text-hero-copy text-xl leading-snug font-bold">
              {futureIndustry.heading}
            </h3>
            <p className="text-hero-copy mt-4 text-sm leading-relaxed lg:text-base">
              {futureIndustry.description}
            </p>
          </Reveal>
        </ul>
      </div>
    </section>
  );
}
