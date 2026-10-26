import Eyebrow from "../../../ui/Eyebrow";
import Reveal from "../../../components/Reveal";
import aboutData from "../../../../data/Our Company/About Us.json";

const { eyebrow, heading, paragraphs, milestones } = aboutData.sectionTwo;

export default function SectionTwo() {
  return (
    <section
      className="bg-surface py-12 text-center md:py-16 lg:py-20 lg:text-left"
      aria-labelledby="about-history-heading"
    >
      <div className="wrapper max-w-320">
        <Reveal>
          <Eyebrow className="mb-5">{eyebrow}</Eyebrow>
          <h2
            id="about-history-heading"
            className="text-hero-heading text-2xl leading-snug font-bold tracking-tight md:text-3xl lg:text-4xl"
          >
            {heading}
          </h2>
          <div className="text-hero-copy mt-7 grid gap-6 text-base leading-relaxed lg:grid-cols-2 lg:gap-16 lg:text-lg">
            {paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </Reveal>
        <ol className="lg:before:bg-proof-accent relative mt-12 grid grid-cols-1 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:mt-24 lg:grid-cols-6 lg:gap-y-0 lg:before:absolute lg:before:inset-x-0 lg:before:top-3.5 lg:before:h-1 lg:before:content-['']">
          {milestones.map(({ year, description }, index) => (
            <Reveal
              as="li"
              key={year}
              delay={index * 0.04}
              className="relative px-3 lg:pr-5 lg:pl-0"
            >
              <span
                className="border-brand-red bg-surface relative mx-auto block size-8 rounded-full border-[7px] lg:mx-0"
                aria-hidden="true"
              />
              <h3 className="text-hero-heading mt-5 text-2xl font-bold">
                {year}
              </h3>
              <p className="text-hero-copy mx-auto mt-2 max-w-xs text-sm leading-relaxed lg:mx-0 lg:text-base">
                {description}
              </p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
