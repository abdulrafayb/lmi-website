import { Users } from "@phosphor-icons/react";
import Reveal from "../../components/Reveal";
import contactData from "../../../data/Contact Us.json";

const { eyebrow, heading, description, email, emailHref, action } =
  contactData.sectionSix;

export default function SectionSix() {
  return (
    <section
      className="bg-surface py-10 text-center md:py-12 lg:text-left"
      aria-labelledby="contact-careers-heading"
    >
      <div className="wrapper max-w-280">
        <Reveal className="border-trust-border border-l-proof-accent flex flex-col items-center gap-6 rounded-md border border-l-4 p-6 sm:p-8 lg:flex-row lg:gap-8">
          <span
            className="bg-proof-accent text-hero-heading grid size-14 shrink-0 place-items-center rounded-md"
            aria-hidden="true"
          >
            <Users size={26} />
          </span>
          <div className="min-w-0 flex-1">
            <p className="text-brand-red mb-3 text-xs font-semibold tracking-[0.16em] uppercase">
              {eyebrow}
            </p>
            <h2
              id="contact-careers-heading"
              className="text-hero-heading text-xl leading-snug font-bold tracking-tight md:text-2xl"
            >
              {heading}
            </h2>
            <p className="text-hero-copy mt-3 text-sm leading-relaxed">
              {description}{" "}
              <a
                href={emailHref}
                className="text-hero-heading outline-brand-red font-semibold wrap-anywhere underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4"
              >
                {email}
              </a>
              .
            </p>
          </div>
          <a
            href={action.href}
            className="border-brand-red bg-brand-red text-surface outline-brand-red hover:border-brand-red-dark hover:bg-brand-red-dark inline-flex min-h-11 shrink-0 items-center justify-center rounded-sm border px-6 py-3 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-4"
          >
            {action.label}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
