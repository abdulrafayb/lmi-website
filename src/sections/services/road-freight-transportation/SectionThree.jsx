import {
  Drop,
  Truck,
  Stack,
  Cube,
  ArrowsClockwise,
} from "@phosphor-icons/react";
import Eyebrow from "../../../ui/Eyebrow";
import Reveal from "../../../components/Reveal";
import data from "../../../../data/Services/Road Freight Transportation.json";

const section = data.sectionThree;
const icons = {
  chemical: Drop,
  fertilizer: Truck,
  liquid: Stack,
  packaged: Cube,
  recurring: ArrowsClockwise,
};
export default function SectionThree() {
  return (
    <section
      aria-labelledby="road-service-cargo-heading"
      className="bg-proof-surface py-12 text-center md:py-16 lg:py-20 lg:text-left"
    >
      <div className="wrapper max-w-320">
        <Reveal className="text-center">
          <Eyebrow className="mb-4">{section.eyebrow}</Eyebrow>
          <h2
            id="road-service-cargo-heading"
            className="text-hero-heading text-2xl leading-snug font-bold tracking-tight md:text-3xl lg:text-4xl"
          >
            {section.heading}
          </h2>
        </Reveal>
        <ul className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {section.cargo.map((item, index) => {
            const Icon = icons[item.icon];
            return (
              <Reveal
                as="li"
                key={item.heading}
                delay={index * 0.05}
                className={`bg-surface border-trust-border rounded-md border p-6 ${index === 4 ? "sm:col-span-2 lg:col-span-4" : ""}`}
              >
                <div className="bg-proof-accent text-hero-heading mx-auto flex size-12 items-center justify-center rounded-md lg:mx-0">
                  <Icon size={26} aria-hidden="true" />
                </div>
                <h3 className="text-hero-heading mt-5 text-lg font-bold">
                  {item.heading}
                </h3>
                <p className="text-hero-copy mt-3 leading-relaxed">
                  {item.description}
                </p>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
