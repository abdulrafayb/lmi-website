import { ArrowRight } from "@phosphor-icons/react";
import Button from "../../../ui/Button";
import Reveal from "../../../components/Reveal";
import data from "../../../../data/Services/Heavy And Project Cargo.json";

const section = data.sectionSeven;
export default function SectionSeven() {
  return (
    <section
      aria-labelledby="heavy-related-heading"
      className="bg-proof-surface section-spacing text-center lg:text-left"
    >
      <div className="wrapper max-w-320">
        <Reveal className="text-center">
          <h2
            id="heavy-related-heading"
            className="text-hero-heading text-2xl leading-snug font-bold tracking-tight md:text-3xl lg:text-4xl"
          >
            {section.heading}
          </h2>
        </Reveal>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {section.services.map((service, index) => (
            <Reveal
              as="li"
              key={service.path}
              delay={index * 0.04}
              className="border-trust-border rounded-md border p-6"
            >
              <h3 className="text-hero-heading text-lg font-bold">
                {service.heading}
              </h3>
              <Button to={service.path} variant="link" className="mt-2">
                {service.label}
                <ArrowRight size={17} aria-hidden="true" />
              </Button>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
