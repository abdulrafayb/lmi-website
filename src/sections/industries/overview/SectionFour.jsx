import { ArrowRight } from "@phosphor-icons/react";
import Button from "../../../ui/Button";
import Eyebrow from "../../../ui/Eyebrow";
import Reveal from "../../../components/Reveal";
import industriesData from "../../../../data/Industries/Overview.json";

const { eyebrow, heading, services } = industriesData.sectionFour;

export default function SectionFour() {
  return (
    <section
      className="bg-surface py-12 text-center md:py-16 lg:py-20 lg:text-left"
      aria-labelledby="industries-cargo-services-heading"
    >
      <div className="wrapper max-w-320">
        <Reveal className="text-center">
          <Eyebrow className="mb-4">{eyebrow}</Eyebrow>
          <h2
            id="industries-cargo-services-heading"
            className="text-hero-heading text-2xl leading-snug font-bold tracking-tight md:text-3xl lg:text-4xl"
          >
            {heading}
          </h2>
        </Reveal>
        <ul className="mt-9 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ heading, action }, index) => (
            <Reveal
              as="li"
              key={heading}
              delay={(index % 3) * 0.05}
              className="border-trust-border rounded-md border p-6"
            >
              <h3 className="text-hero-heading text-lg leading-snug font-bold">
                {heading}
              </h3>
              <Button to={action.path} variant="link" className="mt-2">
                {action.label}
                <ArrowRight size={15} className="shrink-0" aria-hidden="true" />
              </Button>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
