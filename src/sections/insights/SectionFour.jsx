import Eyebrow from "../../ui/Eyebrow";
import Reveal from "../../components/Reveal";
import data from "../../../data/Insights.json";
const section = data.sectionFour;
export default function SectionFour() {
  return (
    <section
      id="case-study-approach"
      aria-labelledby="insights-approach-heading"
      className="bg-surface scroll-mt-24 py-12 text-center md:py-16 lg:py-20 lg:text-left"
    >
      <div className="wrapper grid max-w-320 items-start gap-10 lg:grid-cols-2 lg:gap-12">
        <Reveal>
          <Eyebrow className="mb-4">{section.eyebrow}</Eyebrow>
          <h2
            id="insights-approach-heading"
            className="text-hero-heading text-2xl leading-snug font-bold tracking-tight md:text-3xl lg:text-4xl"
          >
            {section.heading}
          </h2>
          <p className="text-hero-copy mt-6 leading-relaxed">
            {section.description}
          </p>
        </Reveal>
        <Reveal className="border-trust-border rounded-xl border p-6 shadow-[0_0.5rem_1.5rem_var(--color-hero-shadow)]">
          <Eyebrow className="mb-3">{section.panelEyebrow}</Eyebrow>
          <h3 className="text-hero-heading text-xl font-bold">
            {section.panelHeading}
          </h3>
          <dl className="mt-5">
            {section.rows.map((row) => (
              <div
                key={row.label}
                className="border-trust-border grid gap-2 border-t py-4 text-sm leading-relaxed sm:grid-cols-[6rem_1fr]"
              >
                <dt className="text-brand-red font-semibold">{row.label}</dt>
                <dd className="text-hero-copy">{row.description}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
