import { ArrowRight } from "@phosphor-icons/react";
import Button from "../../../ui/Button";
import Reveal from "../../../components/Reveal";
import certificationsData from "../../../../data/Our Company/Certifications And Recognitions.json";

const { heading, description, action } = certificationsData.sectionSeven;

export default function SectionSeven() {
  return (
    <section
      className="bg-brand-red text-surface py-12 text-center md:py-14 lg:py-16 lg:text-left"
      aria-labelledby="certifications-contact-heading"
    >
      <Reveal className="wrapper flex max-w-320 flex-col items-center justify-between gap-7 lg:flex-row lg:gap-12">
        <div>
          <h2
            id="certifications-contact-heading"
            className="text-2xl leading-snug font-bold tracking-tight md:text-3xl lg:text-4xl"
          >
            {heading}
          </h2>
          <p className="mt-4 text-sm leading-relaxed md:text-base">
            {description}
          </p>
        </div>
        <Button to={action.path} variant="tertiary" className="shrink-0">
          {action.label}
          <ArrowRight size={19} aria-hidden="true" />
        </Button>
      </Reveal>
    </section>
  );
}
