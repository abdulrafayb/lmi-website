import Accordion from "../../../ui/Accordion";
import Eyebrow from "../../../ui/Eyebrow";
import Reveal from "../../../components/Reveal";
import chemicalsData from "../../../../data/Industries/Chemicals And Petrochemicals.json";

const { eyebrow, heading, items } = chemicalsData.sectionSix;

export default function SectionSix() {
  return (
    <section
      className="bg-surface py-12 text-center md:py-16 lg:py-20 lg:text-left"
      aria-labelledby="chemicals-faq-heading"
    >
      <div className="wrapper max-w-320">
        <Reveal className="text-center">
          <Eyebrow className="mb-4">{eyebrow}</Eyebrow>
          <h2
            id="chemicals-faq-heading"
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
