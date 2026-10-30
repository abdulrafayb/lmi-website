import { Link } from "react-router-dom";
import Eyebrow from "../../ui/Eyebrow";
import Reveal from "../../components/Reveal";
import data from "../../../data/Insights.json";
const section = data.sectionSix;
export default function SectionSix() {
  return (
    <section
      aria-labelledby="insights-browse-heading"
      className="bg-surface py-12 text-center md:py-16 lg:py-20"
    >
      <div className="wrapper max-w-320">
        <Reveal>
          <Eyebrow className="mb-4">{section.eyebrow}</Eyebrow>
          <h2
            id="insights-browse-heading"
            className="text-hero-heading text-2xl leading-snug font-bold tracking-tight md:text-3xl lg:text-4xl"
          >
            {section.heading}
          </h2>
        </Reveal>
        {section.groups.map((group) => (
          <Reveal key={group.heading} className="mt-8">
            <h3 className="text-hero-copy text-xs font-semibold tracking-wider uppercase">
              {group.heading}
            </h3>
            <ul className="mt-4 flex flex-wrap justify-center gap-3">
              {group.links.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="border-editorial-border text-hero-heading hover:border-brand-red hover:text-brand-red inline-flex rounded-full border px-5 py-3 text-sm font-semibold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
