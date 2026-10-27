import Eyebrow from "../../../ui/Eyebrow";
import Reveal from "../../../components/Reveal";
import data from "../../../../data/Services/Petroleum Transportation.json";

const section = data.sectionTwo;
const borders = [
  "border-brand-red",
  "border-proof-accent",
  "border-hero-heading",
];
export default function SectionTwo() {
  return (
    <section
      aria-labelledby="petroleum-service-operation-heading"
      className="bg-surface py-12 text-center md:py-16 lg:py-20 lg:text-left"
    >
      <div className="wrapper max-w-320">
        <Reveal className="text-center">
          <Eyebrow className="mb-4">{section.eyebrow}</Eyebrow>
          <h2
            id="petroleum-service-operation-heading"
            className="text-hero-heading text-2xl leading-snug font-bold tracking-tight md:text-3xl lg:text-4xl"
          >
            {section.heading}
          </h2>
        </Reveal>
        <Reveal className="text-hero-copy mt-5 text-center text-base leading-relaxed">
          {section.description}
        </Reveal>
        <ul className="mt-9 grid gap-5 lg:grid-cols-3">
          {section.cards.map((card, index) => (
            <Reveal
              as="li"
              key={card.heading}
              delay={index * 0.05}
              className={`bg-proof-surface rounded-b-md border-t-4 p-6 ${borders[index]}`}
            >
              <Eyebrow className="mb-4">{card.eyebrow}</Eyebrow>
              <h3 className="text-hero-heading text-xl font-bold">
                {card.heading}
              </h3>
              <div className="text-hero-copy mt-4 space-y-3 leading-relaxed">
                {card.paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
