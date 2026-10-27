import Eyebrow from "../../../ui/Eyebrow";
import Reveal from "../../../components/Reveal";
import data from "../../../../data/Fleet And Visiblity/Shipment Tracking And Visibility.json";
const section = data.sectionFour;
export default function SectionFour() {
  return (
    <section
      aria-labelledby="tracking-updates-heading"
      className="bg-surface py-12 text-center md:py-16 lg:py-20 lg:text-left"
    >
      <div className="wrapper grid max-w-320 items-start gap-10 lg:grid-cols-2 lg:gap-12">
        <Reveal>
          <Eyebrow className="mb-4">{section.eyebrow}</Eyebrow>
          <h2
            id="tracking-updates-heading"
            className="text-hero-heading text-2xl leading-snug font-bold tracking-tight md:text-3xl lg:text-4xl"
          >
            {section.heading}
          </h2>
          <p className="text-hero-copy mt-6 leading-relaxed">
            {section.description}
          </p>
        </Reveal>
        <ol className="space-y-5">
          {section.steps.map((step, index) => (
            <Reveal
              as="li"
              key={step.heading}
              delay={index * 0.04}
              className="relative flex flex-col items-center gap-4 pb-3 lg:flex-row lg:items-start lg:gap-6"
            >
              <span className="bg-brand-red text-surface relative z-10 flex size-10 shrink-0 items-center justify-center rounded-full font-bold">
                {index + 1}
              </span>
              {index < 4 && (
                <span
                  aria-hidden="true"
                  className="bg-proof-accent absolute top-10 bottom-0 left-5 hidden w-px -translate-x-1/2 lg:block"
                />
              )}
              <div>
                <h3 className="text-hero-heading text-lg font-bold">
                  {step.heading}
                </h3>
                <p className="text-hero-copy mt-2 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
