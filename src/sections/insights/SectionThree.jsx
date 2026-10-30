import Eyebrow from "../../ui/Eyebrow";
import Reveal from "../../components/Reveal";
import data from "../../../data/Insights.json";
const section = data.sectionThree;
export default function SectionThree() {
  return (
    <section
      aria-labelledby="insights-leadership-label"
      className="bg-proof-surface py-12 text-center md:py-16 lg:py-20 lg:text-left"
    >
      <div className="wrapper grid max-w-320 items-start gap-10 lg:grid-cols-2">
        <Reveal className="mx-auto">
          <div className="border-trust-border flex size-48 items-center justify-center overflow-hidden rounded-full border bg-[repeating-linear-gradient(135deg,var(--color-hero-stripe-light)_0_0.625rem,var(--color-hero-stripe-dark)_0.625rem_1.25rem)] sm:size-56">
            {section.image ? (
              <img
                src={section.image}
                alt={section.name}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            ) : (
              <span className="text-hero-copy px-5 text-center text-sm">
                {section.imagePlaceholder}
              </span>
            )}
          </div>
        </Reveal>
        <Reveal>
          <Eyebrow id="insights-leadership-label" className="mb-4">
            {section.eyebrow}
          </Eyebrow>
          <figure>
            <blockquote className="text-hero-heading text-xl leading-relaxed font-semibold italic md:text-2xl">
              {section.quote}
            </blockquote>
            <figcaption className="mt-5">
              <p className="text-hero-heading font-semibold">{section.name}</p>
              <p className="text-hero-copy mt-1 text-sm">{section.role}</p>
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
