import Button from "../../ui/Button";
import Eyebrow from "../../ui/Eyebrow";
import { ArrowRight } from "@phosphor-icons/react";
import Reveal from "../../components/Reveal";
import homeData from "../../../data/Home.json";

const { insights, caseStudies } = homeData.sectionNine;

export default function SectionNine() {
  return (
    <section
      className="bg-proof-surface py-12 text-center md:py-16 lg:py-20 lg:text-left"
      aria-labelledby="home-insights-heading home-cases-heading"
    >
      <div className="wrapper grid max-w-280 items-start gap-10 lg:grid-cols-2 lg:gap-14">
        <Reveal>
          <Eyebrow className="mb-4">{insights.eyebrow}</Eyebrow>
          <h2
            id="home-insights-heading"
            className="text-hero-heading text-2xl leading-snug font-bold tracking-tight md:text-3xl lg:text-4xl"
          >
            {insights.heading}
          </h2>
          <ul className="mt-7 space-y-3">
            {insights.items.map(({ id, category, title }) => (
              <li key={id}>
                <article className="border-editorial-border bg-surface rounded-md border-2 border-dashed px-4 py-4">
                  <Eyebrow>{category}</Eyebrow>
                  <h3 className="text-hero-heading mt-2 text-sm font-semibold md:text-base">
                    {title}
                  </h3>
                </article>
              </li>
            ))}
          </ul>
          <Button
            to={insights.action.path}
            variant="secondary"
            className="mt-4"
          >
            {insights.action.label}
            <ArrowRight size={16} aria-hidden="true" />
          </Button>
        </Reveal>
        <Reveal delay={0.1}>
          <Eyebrow className="mb-4">{caseStudies.eyebrow}</Eyebrow>
          <h2
            id="home-cases-heading"
            className="text-hero-heading text-2xl leading-snug font-bold tracking-tight md:text-3xl lg:text-4xl"
          >
            {caseStudies.heading}
          </h2>
          <p className="text-hero-copy mt-7 text-sm leading-relaxed md:text-base">
            {caseStudies.description}
          </p>
          <ol className="mt-4 flex flex-wrap justify-center gap-2 lg:justify-start">
            {caseStudies.stages.map((stage) => (
              <li
                key={stage}
                className="bg-surface text-hero-heading rounded-full px-4 py-2.5 text-sm font-semibold"
              >
                {stage}
              </li>
            ))}
          </ol>
          <Button
            to={caseStudies.action.path}
            variant="secondary"
            className="mt-3"
          >
            {caseStudies.action.label}
            <ArrowRight size={16} aria-hidden="true" />
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
