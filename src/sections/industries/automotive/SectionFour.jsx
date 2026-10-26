import { ArrowRight } from "@phosphor-icons/react";
import Button from "../../../ui/Button";
import Eyebrow from "../../../ui/Eyebrow";
import Reveal from "../../../components/Reveal";
import automotiveData from "../../../../data/Industries/Automotive.json";

const { eyebrow, heading, services } = automotiveData.sectionFour;

export default function SectionFour() {
  return (
    <section
      className="bg-surface py-12 text-center md:py-16 lg:py-20 lg:text-left"
      aria-labelledby="automotive-services-heading"
    >
      <div className="wrapper max-w-320">
        <Reveal>
          <Eyebrow className="mb-4">{eyebrow}</Eyebrow>
          <h2
            id="automotive-services-heading"
            className="text-hero-heading text-2xl leading-snug font-bold tracking-tight md:text-3xl lg:text-4xl"
          >
            {heading}
          </h2>
        </Reveal>
        <ul className="mt-9 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(
            (
              { title, description, image, imageAlt, imagePlaceholder, action },
              index,
            ) => (
              <Reveal as="li" key={title} delay={index * 0.05}>
                <article className="bg-proof-surface flex h-full min-w-0 flex-col rounded-md p-5">
                  <div className="border-trust-border flex aspect-[3/2] items-center justify-center overflow-hidden rounded-sm border bg-[repeating-linear-gradient(135deg,var(--color-hero-stripe-light)_0_0.625rem,var(--color-hero-stripe-dark)_0.625rem_1.25rem)]">
                    {image ? (
                      <img
                        src={image}
                        alt={imageAlt}
                        loading="lazy"
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <span
                        className="text-hero-copy px-3 text-center text-xs"
                        aria-hidden="true"
                      >
                        {imagePlaceholder}
                      </span>
                    )}
                  </div>
                  <h3 className="text-hero-heading mt-4 text-lg leading-snug font-bold">
                    {title}
                  </h3>
                  <p className="text-hero-copy mt-3 text-sm leading-relaxed">
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
        </ul>
      </div>
    </section>
  );
}
