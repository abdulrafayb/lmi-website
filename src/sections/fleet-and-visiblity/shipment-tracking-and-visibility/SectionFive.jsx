import { Link } from "react-router-dom";
import Eyebrow from "../../../ui/Eyebrow";
import Reveal from "../../../components/Reveal";
import data from "../../../../data/Fleet And Visiblity/Shipment Tracking And Visibility.json";
const section = data.sectionFive;
export default function SectionFive() {
  return (
    <section
      aria-labelledby="tracking-services-heading"
      className="bg-proof-surface py-12 text-center md:py-16 lg:py-20"
    >
      <div className="wrapper max-w-320">
        <Reveal>
          <Eyebrow className="mb-4">{section.eyebrow}</Eyebrow>
          <h2
            id="tracking-services-heading"
            className="text-hero-heading text-2xl leading-snug font-bold tracking-tight md:text-3xl lg:text-4xl"
          >
            {section.heading}
          </h2>
        </Reveal>
        <ul className="mt-8 flex flex-wrap justify-center gap-3">
          {section.services.map((service, index) => (
            <Reveal as="li" key={service.path} delay={index * 0.04}>
              <Link
                to={service.path}
                className="border-editorial-border bg-surface text-hero-heading hover:border-brand-red hover:text-brand-red inline-flex rounded-full border px-5 py-3 text-sm font-semibold"
              >
                {service.label}
              </Link>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
