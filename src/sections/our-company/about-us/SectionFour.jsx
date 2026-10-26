import {
  ClipboardText,
  Stack,
  ChartBar,
  ShieldCheck,
  Users,
  Truck,
} from "@phosphor-icons/react";
import Eyebrow from "../../../ui/Eyebrow";
import Reveal from "../../../components/Reveal";
import aboutData from "../../../../data/Our Company/About Us.json";

const { eyebrow, heading, description, values } = aboutData.sectionFour;
const icons = {
  planning: ClipboardText,
  innovation: Stack,
  performance: ChartBar,
  safety: ShieldCheck,
  customers: Users,
  progress: Truck,
};

export default function SectionFour() {
  return (
    <section
      className="bg-surface py-12 text-center md:py-16 lg:py-20 lg:text-left"
      aria-labelledby="about-values-heading"
    >
      <div className="wrapper grid max-w-320 gap-6 lg:grid-cols-3">
        <Reveal className="bg-brand-red text-surface flex flex-col justify-center rounded-xl p-7 sm:p-8">
          <Eyebrow tone="light" className="mb-4">
            {eyebrow}
          </Eyebrow>
          <h2
            id="about-values-heading"
            className="text-2xl leading-tight font-bold tracking-tight md:text-3xl lg:text-4xl"
          >
            {heading}
          </h2>
          <p className="mt-5 text-base leading-relaxed lg:text-lg">
            {description}
          </p>
        </Reveal>
        <ol className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-2">
          {values.map(({ number, icon, heading, description }, index) => {
            const Icon = icons[icon];
            return (
              <Reveal
                as="li"
                key={number}
                delay={(index % 2) * 0.06}
                className="bg-proof-surface relative rounded-xl p-6"
              >
                <span
                  className="text-process-number absolute top-5 right-5 text-4xl leading-none font-extrabold sm:text-5xl"
                  aria-hidden="true"
                >
                  {number}
                </span>
                <span
                  className="bg-proof-accent text-hero-heading relative mx-auto grid size-12 place-items-center rounded-lg lg:mx-0"
                  aria-hidden="true"
                >
                  <Icon size={25} />
                </span>
                <h3 className="text-hero-heading mt-4 text-lg leading-snug font-bold lg:text-xl">
                  {heading}
                </h3>
                <p className="text-hero-copy mt-3 text-sm leading-relaxed lg:text-base">
                  {description}
                </p>
              </Reveal>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
