import { ArrowRight } from "@phosphor-icons/react";
import Button from "../../../ui/Button";
import Eyebrow from "../../../ui/Eyebrow";
import Reveal from "../../../components/Reveal";
import industriesData from "../../../../data/Industries/Overview.json";

const { eyebrow, heading, principles, action } = industriesData.sectionThree;

export default function SectionThree() {
  return (
    <section
      className="bg-proof-surface py-12 text-center md:py-16 lg:py-20"
      aria-labelledby="industries-operation-heading"
    >
      <div className="wrapper max-w-320">
        <Reveal>
          <Eyebrow className="mb-4">{eyebrow}</Eyebrow>
          <h2
            id="industries-operation-heading"
            className="text-hero-heading text-2xl leading-snug font-bold tracking-tight md:text-3xl lg:text-4xl"
          >
            {heading}
          </h2>
        </Reveal>
        <ul className="mt-9 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:text-left">
          {principles.map(({ heading, description }, index) => (
            <Reveal
              as="li"
              key={heading}
              delay={index * 0.05}
              className="border-proof-accent bg-surface border-t-2 p-6"
            >
              <h3 className="text-hero-heading text-lg leading-snug font-bold">
                {heading}
              </h3>
              <p className="text-hero-copy mt-3 text-sm leading-relaxed lg:text-base">
                {description}
              </p>
            </Reveal>
          ))}
        </ul>
        <div className="mt-8 flex justify-center">
          <Button to={action.path} variant="secondary">
            {action.label}
            <ArrowRight size={17} className="shrink-0" aria-hidden="true" />
          </Button>
        </div>
      </div>
    </section>
  );
}
