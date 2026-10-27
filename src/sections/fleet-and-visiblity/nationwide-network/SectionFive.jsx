import { Link } from "react-router-dom";
import { ArrowRight } from "@phosphor-icons/react";
import Button from "../../../ui/Button";
import Eyebrow from "../../../ui/Eyebrow";
import Reveal from "../../../components/Reveal";
import data from "../../../../data/Fleet And Visiblity/Nationwide Network.json";
const section = data.sectionFive;
export default function SectionFive() {
  return (
    <section
      aria-labelledby="network-proof-heading"
      className="text-center lg:text-left"
    >
      <div className="bg-proof-surface py-12 md:py-16">
        <div className="wrapper max-w-320">
          <div className="grid gap-7 lg:grid-cols-4">
            <Reveal>
              <Eyebrow className="mb-4">{section.eyebrow}</Eyebrow>
              <h2
                id="network-proof-heading"
                className="text-hero-heading text-2xl leading-relaxed font-bold"
              >
                {section.heading}
              </h2>
            </Reveal>
            {section.proof.map((proof, index) => (
              <Reveal
                key={proof.heading}
                delay={index * 0.04}
                className="border-proof-accent border-t-2 pt-4 lg:border-t-0 lg:border-l-2 lg:pt-0 lg:pl-5"
              >
                <h3 className="text-hero-heading text-xl font-bold">
                  {proof.heading}
                </h3>
                <p className="text-hero-copy mt-2 text-sm leading-relaxed">
                  {proof.description}
                </p>
              </Reveal>
            ))}
          </div>
          <Reveal className="text-hero-copy mt-7 text-xs leading-relaxed">
            {section.note}
          </Reveal>
        </div>
      </div>
      <div className="bg-surface py-8">
        <Reveal className="wrapper max-w-320">
          <h3 className="text-hero-copy text-xs font-semibold tracking-wider uppercase">
            {section.industriesHeading}
          </h3>
          <ul className="mt-4 flex flex-wrap justify-center gap-3 lg:justify-start">
            {section.industries.map((industry) => (
              <li key={industry.path}>
                <Link
                  to={industry.path}
                  className="border-editorial-border text-hero-heading hover:border-brand-red hover:text-brand-red inline-flex rounded-full border px-5 py-3 text-sm font-semibold"
                >
                  {industry.label}
                </Link>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
      <div className="bg-proof-surface py-8">
        <Reveal className="wrapper flex max-w-320 flex-col items-center gap-5 lg:flex-row lg:justify-between">
          <p className="text-hero-heading">{section.tracking.description}</p>
          <Button
            variant="secondary"
            to={section.tracking.action.path}
            className="shrink-0"
          >
            {section.tracking.action.label}
            <ArrowRight size={17} aria-hidden="true" />
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
