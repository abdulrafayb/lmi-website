import { Envelope, Users, ClipboardText, Truck } from "@phosphor-icons/react";
import Reveal from "../../components/Reveal";
import contactData from "../../../data/Contact Us.json";

const { eyebrow, heading, steps } = contactData.sectionThree;
const icons = {
  share: Envelope,
  review: Users,
  discuss: ClipboardText,
  coordinate: Truck,
};

export default function SectionThree() {
  return (
    <section
      className="bg-proof-surface py-12 md:py-16 lg:py-20"
      aria-labelledby="contact-process-heading"
    >
      <div className="wrapper max-w-280">
        <Reveal className="text-center">
          <p className="text-brand-red mb-4 text-xs font-semibold tracking-[0.16em] uppercase">
            {eyebrow}
          </p>
          <h2
            id="contact-process-heading"
            className="text-hero-heading text-2xl leading-snug font-bold tracking-tight md:text-3xl lg:text-4xl"
          >
            {heading}
          </h2>
        </Reveal>
        <ol className="mt-14 grid grid-cols-1 gap-x-5 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {steps.map(({ number, icon, title, description }, index) => {
            const Icon = icons[icon];
            return (
              <Reveal
                as="li"
                key={number}
                delay={index * 0.06}
                className="border-trust-border bg-surface relative rounded-lg border px-5 pt-16 pb-7 text-center shadow-[0_0.5rem_1.5rem_var(--color-hero-shadow)] lg:text-left"
              >
                <span
                  className="border-proof-surface bg-brand-red text-surface absolute -top-6 left-1/2 grid size-14 -translate-x-1/2 place-items-center rounded-full border-4 lg:left-5 lg:translate-x-0"
                  aria-hidden="true"
                >
                  <Icon size={25} />
                </span>
                <span
                  className="text-process-number absolute top-4 right-4 text-4xl leading-none font-extrabold"
                  aria-hidden="true"
                >
                  {number}
                </span>
                <h3 className="text-hero-heading text-base font-bold">
                  {title}
                </h3>
                <p className="text-hero-copy mt-2 text-sm leading-relaxed">
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
