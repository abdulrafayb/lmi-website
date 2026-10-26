import { Drop, Truck, Stack, Cube } from "@phosphor-icons/react";
import Eyebrow from "../../../ui/Eyebrow";
import Reveal from "../../../components/Reveal";
import leadershipData from "../../../../data/Our Company/Leadership.json";

const { eyebrow, heading, description, principles } = leadershipData.sectionTwo;
const icons = {
  safety: Drop,
  operations: Truck,
  customers: Stack,
  performance: Cube,
};

export default function SectionTwo() {
  return (
    <section
      className="bg-surface py-12 text-center md:py-16 lg:py-20 lg:text-left"
      aria-labelledby="leadership-principles-heading"
    >
      <div className="wrapper max-w-320">
        <Reveal className="mx-auto max-w-3xl text-center">
          <Eyebrow className="mb-4">{eyebrow}</Eyebrow>
          <h2
            id="leadership-principles-heading"
            className="text-hero-heading text-2xl leading-snug font-bold tracking-tight md:text-3xl lg:text-4xl"
          >
            {heading}
          </h2>
          <p className="text-hero-copy mt-5 text-base leading-relaxed">
            {description}
          </p>
        </Reveal>
        <ul className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {principles.map(({ icon, heading, description }, index) => {
            const Icon = icons[icon];
            return (
              <Reveal
                as="li"
                key={icon}
                delay={index * 0.05}
                className="border-trust-border rounded-md border p-6"
              >
                <span
                  className="bg-proof-accent text-hero-heading mx-auto grid size-12 place-items-center rounded-md lg:mx-0"
                  aria-hidden="true"
                >
                  <Icon size={25} />
                </span>
                <h3 className="text-hero-heading mt-5 text-lg leading-snug font-bold">
                  {heading}
                </h3>
                <p className="text-hero-copy mt-3 text-sm leading-relaxed lg:text-base">
                  {description}
                </p>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
