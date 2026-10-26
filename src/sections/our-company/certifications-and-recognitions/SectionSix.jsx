import Accordion from "../../../ui/Accordion";
import Eyebrow from "../../../ui/Eyebrow";
import Reveal from "../../../components/Reveal";
import certificationsData from "../../../../data/Our Company/Certifications And Recognitions.json";

const { eyebrow, heading, items } = certificationsData.sectionSix;

export default function SectionSix() {
  return (
    <section
      className="bg-surface py-12 md:py-16 lg:py-20"
      aria-labelledby="certifications-faq-heading"
    >
      <div className="wrapper max-w-320">
        <Reveal className="text-center">
          <Eyebrow className="mb-4">{eyebrow}</Eyebrow>
          <h2
            id="certifications-faq-heading"
            className="text-hero-heading text-2xl leading-snug font-bold tracking-tight md:text-3xl lg:text-4xl"
          >
            {heading}
          </h2>
        </Reveal>
        <Reveal className="mt-7">
          <Accordion items={items} defaultOpenIndex={0} />
        </Reveal>
      </div>
    </section>
  );
}
