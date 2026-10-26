import { Check } from "@phosphor-icons/react";
import Eyebrow from "../../../ui/Eyebrow";
import Reveal from "../../../components/Reveal";
import leadershipData from "../../../../data/Our Company/Leadership.json";

const {
  eyebrow,
  name,
  role,
  bio,
  focusAreas,
  image,
  imageAlt,
  imagePlaceholder,
} = leadershipData.sectionThree;

export default function SectionThree() {
  return (
    <section
      id="leadership-team"
      className="bg-proof-surface scroll-mt-24 py-12 text-center md:py-16 lg:py-20 lg:text-left"
      aria-labelledby="leadership-ceo-heading"
    >
      <div className="wrapper grid max-w-320 items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <Reveal className="border-trust-border flex aspect-[9/7] w-full items-center justify-center overflow-hidden rounded-md border bg-[repeating-linear-gradient(135deg,var(--color-hero-stripe-light)_0_0.625rem,var(--color-hero-stripe-dark)_0.625rem_1.25rem)]">
          {image ? (
            <img
              src={image}
              alt={imageAlt}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          ) : (
            <span
              className="text-hero-copy px-6 text-center text-sm"
              aria-hidden="true"
            >
              {imagePlaceholder}
            </span>
          )}
        </Reveal>
        <Reveal delay={0.1}>
          <Eyebrow className="mb-5">{eyebrow}</Eyebrow>
          <h2
            id="leadership-ceo-heading"
            className="text-hero-heading text-2xl leading-snug font-bold tracking-tight md:text-3xl lg:text-4xl"
          >
            {name}
          </h2>
          <p className="text-brand-red mt-4 text-base font-semibold lg:text-lg">
            {role}
          </p>
          <p className="text-hero-copy mt-6 text-base leading-relaxed">{bio}</p>
          <ul className="mt-5 space-y-4">
            {focusAreas.map((area) => (
              <li
                key={area}
                className="text-hero-copy flex flex-col items-center gap-3 text-sm leading-relaxed lg:flex-row lg:items-start lg:text-base"
              >
                <span
                  className="bg-proof-accent text-hero-heading grid size-5 shrink-0 place-items-center rounded-full lg:mt-0.5"
                  aria-hidden="true"
                >
                  <Check size={14} />
                </span>
                <span>{area}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
