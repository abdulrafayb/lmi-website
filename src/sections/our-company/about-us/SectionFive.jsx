import {
  Wrench,
  Users,
  Scales,
  Cube,
  Drop,
  ShieldCheck,
  Stack,
  MapPin,
} from "@phosphor-icons/react";
import Eyebrow from "../../../ui/Eyebrow";
import Reveal from "../../../components/Reveal";
import aboutData from "../../../../data/Our Company/About Us.json";

const {
  eyebrow,
  heading,
  description,
  facilities,
  image,
  imageAlt,
  imagePlaceholder,
} = aboutData.sectionFive;
const icons = {
  maintenance: Wrench,
  team: Users,
  repair: Scales,
  parts: Cube,
  fuel: Drop,
  inspection: ShieldCheck,
  accommodation: Stack,
  site: MapPin,
};

export default function SectionFive() {
  return (
    <section
      className="bg-proof-surface py-12 text-center md:py-16 lg:py-20 lg:text-left"
      aria-labelledby="about-base-heading"
    >
      <div className="wrapper max-w-320">
        <Reveal className="mx-auto max-w-3xl text-center">
          <Eyebrow className="mb-4">{eyebrow}</Eyebrow>
          <h2
            id="about-base-heading"
            className="text-hero-heading text-2xl leading-snug font-bold tracking-tight md:text-3xl lg:text-4xl"
          >
            {heading}
          </h2>
          <p className="text-hero-copy mt-5 text-base leading-relaxed">
            {description}
          </p>
        </Reveal>
        <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {facilities.map(({ icon, label, note }, index) => {
            const Icon = icons[icon];
            return (
              <Reveal
                as="li"
                key={icon}
                delay={(index % 4) * 0.04}
                className="border-trust-border bg-surface rounded-lg border p-6"
              >
                <span
                  className="bg-proof-accent text-hero-heading mx-auto grid size-11 place-items-center rounded-md lg:mx-0"
                  aria-hidden="true"
                >
                  <Icon size={23} />
                </span>
                <p className="text-hero-heading mt-4 text-sm leading-relaxed font-semibold lg:text-base">
                  {label}
                  {note && <span className="block">{note}</span>}
                </p>
              </Reveal>
            );
          })}
        </ul>
        <Reveal className="border-trust-border mt-5 flex min-h-48 items-center justify-center overflow-hidden rounded-md border bg-[repeating-linear-gradient(135deg,var(--color-hero-stripe-light)_0_0.625rem,var(--color-hero-stripe-dark)_0.625rem_1.25rem)] sm:min-h-60">
          {image ? (
            <img
              src={image}
              alt={imageAlt}
              loading="lazy"
              className="h-48 w-full object-cover sm:h-60"
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
      </div>
    </section>
  );
}
