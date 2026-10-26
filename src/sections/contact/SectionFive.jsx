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
        <Reveal className="text-center lg:text-left">
          <p className="text-brand-red mb-4 text-xs font-semibold tracking-[0.16em] uppercase">
            {eyebrow}
          </p>
          <h2
            id="contact-faq-heading"
            className="text-hero-heading text-2xl leading-snug font-bold tracking-tight md:text-3xl lg:text-4xl"
          >
            {heading}
          </h2>
        </Reveal>
        <Reveal className="mt-7">
          <Accordion items={items} defaultOpenIndex={0} columns={2} />
        </Reveal>
      </div>
    </section>
  );
}
