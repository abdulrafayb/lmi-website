import Eyebrow from "../../ui/Eyebrow";
import { ArrowRight, Check, MapPin } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import Reveal from "../../components/Reveal";
import homeData from "../../../data/Home.json";

const {
  eyebrow,
  heading,
  points,
  action,
  fleetHeading,
  fleet,
  locationsHeading,
  locations,
} = homeData.sectionSix;

export default function SectionSix() {
  return (
    <section
      className="bg-surface py-12 text-center md:py-16 lg:py-20 lg:text-left"
      aria-labelledby="home-reach-heading"
    >
      <div className="wrapper grid max-w-280 items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <Eyebrow className="mb-4">{eyebrow}</Eyebrow>
          <h2
            id="home-reach-heading"
            className="text-hero-heading mx-auto max-w-lg text-2xl leading-snug font-bold tracking-tight md:text-3xl lg:mx-0 lg:text-4xl"
          >
            {heading}
          </h2>
          <ul className="mt-7 space-y-4">
            {points.map((point) => (
              <li
                key={point}
                className="text-hero-copy flex flex-col items-center gap-3 text-sm leading-relaxed lg:flex-row lg:items-start"
              >
                <span
                  className="bg-proof-accent text-hero-heading grid size-5 shrink-0 place-items-center rounded-full lg:mt-0.5"
                  aria-hidden="true"
                >
                  <Check size={13} />
                </span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
          <Link
            to={action.path}
            className="secondary outline-brand-red mt-7 inline-flex min-h-10 items-center justify-center gap-2 rounded-sm border px-5 py-2 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-4"
          >
            {action.label}
            <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </Reveal>
        <Reveal
          delay={0.1}
          className="border-trust-border bg-surface min-w-0 rounded-xl border p-5 shadow-[0_0.5rem_1.5rem_var(--color-hero-shadow)] sm:p-6"
        >
          <h3 className="text-hero-copy text-xs font-semibold tracking-[0.12em] uppercase">
            {fleetHeading}
          </h3>
          <ul className="mt-3 flex flex-wrap justify-center gap-2 lg:justify-start">
            {fleet.map((type) => (
              <li
                key={type}
                className="bg-equipment-badge text-hero-heading rounded-full px-3 py-2 text-xs font-medium"
              >
                {type}
              </li>
            ))}
          </ul>
          <h3 className="text-hero-copy mt-6 text-xs font-semibold tracking-[0.12em] uppercase">
            {locationsHeading}
          </h3>
          <ul className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3">
            {locations.map((location) => (
              <li
                key={location}
                className="bg-proof-surface text-hero-heading flex flex-col items-center justify-center gap-2 rounded-md px-3 py-3 text-sm font-medium lg:flex-row lg:justify-start"
              >
                <MapPin
                  size={17}
                  className="text-brand-red shrink-0"
                  aria-hidden="true"
                />
                <span>{location}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
