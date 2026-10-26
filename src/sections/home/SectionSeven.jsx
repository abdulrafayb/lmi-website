import Button from "../../ui/Button";
import Eyebrow from "../../ui/Eyebrow";
import { ArrowRight } from "@phosphor-icons/react";
import Reveal from "../../components/Reveal";
import homeData from "../../../data/Home.json";

const { eyebrow, heading, pillars, action } = homeData.sectionSeven;
const accents = {
  primary: "border-brand-red",
  warm: "border-proof-accent",
  dark: "border-hero-heading",
};

export default function SectionSeven() {
  return (
    <section
      className="bg-proof-surface py-12 text-center md:py-16 lg:py-20 lg:text-left"
      aria-labelledby="home-safety-heading"
    >
      <div className="wrapper max-w-280">
        <Reveal className="text-center">
          <Eyebrow className="mb-4">{eyebrow}</Eyebrow>
          <h2
            id="home-safety-heading"
            className="text-hero-heading text-2xl leading-snug font-bold tracking-tight md:text-3xl lg:text-4xl"
          >
            {heading}
          </h2>
        </Reveal>
        <ul className="mt-9 grid grid-cols-1 gap-6 lg:mt-10 lg:grid-cols-3 lg:gap-5">
          {pillars.map(({ category, heading, description, accent }, index) => (
            <Reveal
              as="li"
              key={category}
              delay={index * 0.06}
              className={`border-t-4 px-5 pt-6 ${accents[accent]}`}
            >
              <Eyebrow as="h3">{category}</Eyebrow>
              <p className="text-hero-heading mt-3 text-xl leading-snug font-bold lg:text-2xl">
                {heading}
              </p>
              <p className="text-hero-copy mt-4 text-sm leading-relaxed md:text-base">
                {description}
              </p>
            </Reveal>
          ))}
        </ul>
        <div className="mt-9 flex justify-center lg:mt-14">
          <Button to={action.path} variant="secondary">
            {action.label}
            <ArrowRight size={17} aria-hidden="true" />
          </Button>
        </div>
      </div>
    </section>
  );
}
