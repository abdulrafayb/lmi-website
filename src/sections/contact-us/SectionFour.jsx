import Button from "../../ui/Button";
import Eyebrow from "../../ui/Eyebrow";
import {
  ArrowRight,
  Truck,
  Stack,
  MapPin,
  ShieldCheck,
} from "@phosphor-icons/react";
import Reveal from "../../components/Reveal";
import contactData from "../../../data/Contact Us.json";

const { eyebrow, heading, exploreLabel, cards } = contactData.sectionFour;
const icons = {
  services: Truck,
  industries: Stack,
  fleet: MapPin,
  safety: ShieldCheck,
};

export default function SectionFour() {
  return (
    <section
      className="bg-surface py-12 text-center md:py-16 lg:py-20 lg:text-left"
      aria-labelledby="contact-explore-heading"
    >
      <div className="wrapper max-w-280">
        <Reveal className="text-center">
          <Eyebrow className="mb-4">{eyebrow}</Eyebrow>
          <h2
            id="contact-explore-heading"
            className="text-hero-heading text-2xl leading-snug font-bold tracking-tight md:text-3xl lg:text-4xl"
          >
            {heading}
          </h2>
        </Reveal>
        <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map(({ icon, title, description, path }, index) => {
            const Icon = icons[icon];
            return (
              <Reveal as="li" key={path} delay={index * 0.05}>
                <article className="border-trust-border bg-proof-surface flex h-full min-w-0 flex-col rounded-md border p-5">
                  <span
                    className="bg-proof-accent text-hero-heading mx-auto grid size-10 shrink-0 place-items-center rounded-md lg:mx-0"
                    aria-hidden="true"
                  >
                    <Icon size={21} />
                  </span>
                  <h3 className="text-hero-heading mt-4 text-base leading-snug font-bold">
                    {title}
                  </h3>
                  <p className="text-hero-copy mt-2 text-sm leading-relaxed">
                    {description}
                  </p>
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
            );
          })}
        </ul>
      </div>
    </section>
  );
}
