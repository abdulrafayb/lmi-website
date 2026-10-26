import Eyebrow from "../../ui/Eyebrow";
import Accordion from "../../ui/Accordion";
import Reveal from "../../components/Reveal";
import contactData from "../../../data/Contact Us.json";

const { eyebrow, heading, items } = contactData.sectionFive;

export default function SectionFive() {
  return (
    <section
      className="bg-proof-surface py-12 md:py-16 lg:py-20"
      aria-labelledby="contact-faq-heading"
    >
      <div className="wrapper max-w-280">
        <Reveal className="text-center">
          <Eyebrow className="mb-4">{eyebrow}</Eyebrow>
          <h2
            id="contact-faq-heading"
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
