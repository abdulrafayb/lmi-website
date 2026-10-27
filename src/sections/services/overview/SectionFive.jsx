import Eyebrow from "../../../ui/Eyebrow";
import Reveal from "../../../components/Reveal";
import data from "../../../../data/Services/Overview.json";
import { Link } from "react-router-dom";
const section = data.sectionFive;
export default function SectionFive() {
  return (
    <section
      aria-labelledby="services-load-heading"
      className="bg-proof-surface py-12 text-center md:py-16 lg:py-20 lg:text-left"
    >
      <div className="wrapper max-w-320">
        <Reveal className="text-center">
          <Eyebrow className="mb-4">{section.eyebrow}</Eyebrow>
          <h2
            id="services-load-heading"
            className="text-hero-heading text-2xl leading-snug font-bold tracking-tight md:text-3xl lg:text-4xl"
          >
            {section.heading}
          </h2>
        </Reveal>
        <ul className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {section.groups.map((group, index) => (
            <Reveal
              as="li"
              key={group.heading}
              delay={index * 0.04}
              className="border-trust-border bg-surface overflow-hidden rounded-md border"
            >
              <h3 className="bg-brand-red text-surface px-5 py-4 text-xs font-semibold tracking-wider uppercase">
                {group.heading}
              </h3>
              <ul className="space-y-3 p-5">
                {group.services.map((service) => (
                  <li
                    key={service.path}
                    className="border-proof-accent border-l-2 pl-3"
                  >
                    <Link
                      to={service.path}
                      className="text-hero-heading hover:text-brand-red focus-visible:outline-brand-red font-semibold"
                    >
                      {service.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
