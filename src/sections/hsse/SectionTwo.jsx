import {
  User,
  Truck,
  Cube,
  ClipboardText,
  ArrowRight,
} from "@phosphor-icons/react";
import Eyebrow from "../../ui/Eyebrow";
import Reveal from "../../components/Reveal";
import data from "../../../data/HSSE.json";
const section = data.sectionTwo;
const icons = {
  people: User,
  vehicles: Truck,
  cargo: Cube,
  operations: ClipboardText,
};
const positions = [
  "top-0 left-1/2 -translate-x-1/2",
  "top-1/2 left-0 -translate-y-1/2",
  "top-1/2 right-0 -translate-y-1/2",
  "bottom-0 left-1/2 -translate-x-1/2",
];
export default function SectionTwo() {
  return (
    <section
      aria-labelledby="hsse-pillars-heading"
      className="bg-surface py-12 text-center md:py-16 lg:py-20 lg:text-left"
    >
      <div className="wrapper grid max-w-320 items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <Reveal>
          <div className="relative mx-auto aspect-square w-full max-w-md">
            <div
              aria-hidden="true"
              className="bg-proof-accent absolute top-1/2 right-[15%] left-[15%] h-px"
            />
            <div
              aria-hidden="true"
              className="bg-proof-accent absolute top-[15%] bottom-[15%] left-1/2 w-px"
            />
            <div className="bg-brand-red text-surface absolute top-1/2 left-1/2 z-10 flex size-24 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full sm:size-32">
              <span className="text-2xl font-bold">{section.centerLabel}</span>
              <span className="mt-1 text-[0.6rem] font-semibold uppercase sm:text-xs">
                {section.centerCaption}
              </span>
            </div>
            {section.pillars.map((pillar, index) => {
              const Icon = icons[pillar.icon];
              return (
                <div
                  key={pillar.heading}
                  className={`border-proof-accent bg-surface absolute z-10 flex size-20 flex-col items-center justify-center gap-2 rounded-full border-2 sm:size-28 ${positions[index]}`}
                >
                  <Icon
                    size={24}
                    className="text-brand-red"
                    aria-hidden="true"
                  />
                  <span className="text-hero-heading text-xs font-semibold sm:text-sm">
                    {pillar.heading}
                  </span>
                </div>
              );
            })}
          </div>
        </Reveal>
        <Reveal>
          <Eyebrow className="mb-4">{section.eyebrow}</Eyebrow>
          <h2
            id="hsse-pillars-heading"
            className="text-hero-heading text-2xl leading-snug font-bold tracking-tight md:text-3xl lg:text-4xl"
          >
            {section.heading}
          </h2>
          <ul className="mt-7 space-y-5">
            {section.pillars.map((pillar) => (
              <li
                key={pillar.heading}
                className="border-proof-accent border-t-2 pt-4"
              >
                <h3 className="text-hero-heading text-lg font-bold">
                  {pillar.heading}
                </h3>
                <p className="text-hero-copy mt-2 leading-relaxed">
                  <ArrowRight
                    size={16}
                    className="text-brand-red mr-2 inline"
                    aria-hidden="true"
                  />
                  {pillar.description}
                </p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
