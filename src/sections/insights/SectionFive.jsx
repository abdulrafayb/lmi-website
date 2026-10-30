import Eyebrow from "../../ui/Eyebrow";
import Reveal from "../../components/Reveal";
import data from "../../../data/Insights.json";
const section = data.sectionFive;
export default function SectionFive() {
  return (
    <section
      aria-labelledby="insights-articles-heading"
      className="bg-proof-surface py-12 text-center md:py-16 lg:py-20 lg:text-left"
    >
      <div className="wrapper max-w-320">
        <Reveal className="text-center">
          <Eyebrow className="mb-4">{section.eyebrow}</Eyebrow>
          <h2
            id="insights-articles-heading"
            className="text-hero-heading text-2xl leading-snug font-bold tracking-tight md:text-3xl lg:text-4xl"
          >
            {section.heading}
          </h2>
        </Reveal>
        <ul className="mt-9 grid gap-5 lg:grid-cols-3">
          {section.cards.map((card, index) => (
            <Reveal
              as="li"
              key={card.heading}
              delay={index * 0.04}
              className="border-editorial-border rounded-md border-2 border-dashed p-6"
            >
              <Eyebrow className="mb-3">{card.eyebrow}</Eyebrow>
              <h3 className="text-hero-heading text-xl font-bold">
                {card.heading}
              </h3>
              <p className="text-hero-copy mt-4 text-sm leading-relaxed">
                {card.description}
              </p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
