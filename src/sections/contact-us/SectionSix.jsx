import Button from "../../ui/Button";
import Eyebrow from "../../ui/Eyebrow";
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
            <Eyebrow className="mb-3">{eyebrow}</Eyebrow>
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
          <Button href={action.href} className="shrink-0">
            {action.label}
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
