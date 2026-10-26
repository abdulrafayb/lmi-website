import { ArrowRight } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
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
          <p className="text-brand-red mb-4 text-xs font-semibold tracking-[0.16em] uppercase">
            {insights.eyebrow}
          </p>
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
                  <p className="text-brand-red text-xs font-semibold tracking-[0.12em] uppercase">
                    {category}
                  </p>
                  <h3 className="text-hero-heading mt-2 text-sm font-semibold md:text-base">
                    {title}
                  </h3>
                </article>
              </li>
            ))}
          </ul>
          <Link
            to={insights.action.path}
            className="secondary outline-brand-red mt-4 inline-flex min-h-10 items-center justify-center gap-2 rounded-sm border px-5 py-2 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-4"
          >
            {insights.action.label}
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-brand-red mb-4 text-xs font-semibold tracking-[0.16em] uppercase">
            {caseStudies.eyebrow}
          </p>
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
          <Link
            to={caseStudies.action.path}
            className="secondary outline-brand-red mt-3 inline-flex min-h-10 items-center justify-center gap-2 rounded-sm border px-5 py-2 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-4"
          >
            {caseStudies.action.label}
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
