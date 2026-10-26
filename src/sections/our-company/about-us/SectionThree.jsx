import { ChartBar, Truck } from "@phosphor-icons/react";
import Eyebrow from "../../../ui/Eyebrow";
import Reveal from "../../../components/Reveal";
import aboutData from "../../../../data/Our Company/About Us.json";

const { label, cards } = aboutData.sectionThree;
const icons = { vision: ChartBar, mission: Truck };

export default function SectionThree() {
  return (
    <section
      className="bg-proof-surface py-12 text-center md:py-16 lg:py-20 lg:text-left"
      aria-label={label}
    >
      <ul className="wrapper grid max-w-320 grid-cols-1 gap-6 lg:grid-cols-2">
        {cards.map(({ icon, eyebrow, heading, description }, index) => {
          const Icon = icons[icon];
          return (
            <Reveal as="li" key={icon} delay={index * 0.08}>
              <article className="border-brand-red bg-surface h-full rounded-b-md border-t-4 p-6 sm:p-8">
                <div className="flex flex-col items-center gap-4 lg:flex-row">
                  <span
                    className="bg-proof-accent text-hero-heading grid size-14 shrink-0 place-items-center rounded-lg"
                    aria-hidden="true"
                  >
                    <Icon size={27} />
                  </span>
                  <Eyebrow>{eyebrow}</Eyebrow>
                </div>
                <h2 className="text-hero-heading mt-5 text-xl leading-snug font-bold tracking-tight md:text-2xl">
                  {heading}
                </h2>
                <p className="text-hero-copy mt-4 text-base leading-relaxed lg:text-lg">
                  {description}
                </p>
              </article>
            </Reveal>
          );
        })}
      </ul>
    </section>
  );
}
