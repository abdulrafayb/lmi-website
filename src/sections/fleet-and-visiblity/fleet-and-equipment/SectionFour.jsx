import { ArrowRight } from "@phosphor-icons/react";
import Button from "../../../ui/Button";
import Eyebrow from "../../../ui/Eyebrow";
import Reveal from "../../../components/Reveal";
import data from "../../../../data/Fleet And Visiblity/Fleet And Equipment.json";
const section = data.sectionFour;
export default function SectionFour() {
  return (
    <section
      aria-labelledby="fleet-match-heading"
      className="bg-surface py-12 text-center md:py-16 lg:py-20 lg:text-left"
    >
      <div className="wrapper grid max-w-320 items-start gap-10 lg:grid-cols-2 lg:gap-12">
        <Reveal>
          <Eyebrow className="mb-4">{section.eyebrow}</Eyebrow>
          <h2
            id="fleet-match-heading"
            className="text-hero-heading text-2xl leading-snug font-bold tracking-tight md:text-3xl lg:text-4xl"
          >
            {section.heading}
          </h2>
          <p className="text-hero-copy mt-6 leading-relaxed">
            {section.description}
          </p>
          <Button variant="secondary" to={section.action.path} className="mt-6">
            {section.action.label}
            <ArrowRight size={17} aria-hidden="true" />
          </Button>
        </Reveal>
        <Reveal className="border-trust-border min-w-0 rounded-xl border p-5 shadow-[0_0.5rem_1.5rem_var(--color-hero-shadow)] sm:p-6">
          <div className="text-hero-copy hidden grid-cols-[1fr_2rem_1fr] gap-2 text-xs font-semibold tracking-wider uppercase sm:grid">
            <span>{section.cargoLabel}</span>
            <span aria-hidden="true" />
            <span>{section.equipmentLabel}</span>
          </div>
          <ul className="mt-4 space-y-3">
            {section.matches.map((match) => (
              <li
                key={match.cargo}
                className="grid items-center gap-2 sm:grid-cols-[1fr_2rem_1fr]"
              >
                <span className="bg-proof-surface text-hero-heading rounded-md p-3 text-sm font-semibold">
                  {match.cargo}
                </span>
                <ArrowRight
                  className="text-proof-accent mx-auto rotate-90 sm:rotate-0"
                  size={26}
                  aria-hidden="true"
                />
                <span className="bg-brand-red text-surface rounded-md p-3 text-sm font-semibold">
                  {match.equipment}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
