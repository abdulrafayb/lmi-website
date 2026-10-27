import Eyebrow from "../../../ui/Eyebrow";
import Reveal from "../../../components/Reveal";
import data from "../../../../data/Services/Full Truckload.json";
const section = data.sectionFive;
export default function SectionFive() {
  return (
    <section
      aria-labelledby="ftl-service-clients-heading"
      className="bg-proof-surface py-12 text-center md:py-16 lg:py-20 lg:text-left"
    >
      <div className="wrapper max-w-320">
        <Reveal className="text-center">
          <Eyebrow className="mb-4">{section.eyebrow}</Eyebrow>
          <h2
            id="ftl-service-clients-heading"
            className="text-hero-heading text-2xl leading-snug font-bold tracking-tight md:text-3xl lg:text-4xl"
          >
            {section.heading}
          </h2>
        </Reveal>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {section.clients.map((client, index) => (
            <Reveal
              as="li"
              key={client.id}
              delay={index * 0.04}
              className="border-editorial-border bg-surface text-hero-copy flex min-h-28 items-center justify-center rounded-md border-2 border-dashed p-5 text-center text-sm leading-relaxed"
            >
              {client.placeholder}
            </Reveal>
          ))}
        </ul>
        <Reveal className="border-proof-accent bg-surface mx-auto mt-9 max-w-4xl rounded-b-md border-t-4 p-6 sm:p-8 lg:mx-0">
          <figure>
            <blockquote>
              <p className="text-hero-heading text-lg leading-relaxed font-semibold lg:text-xl">
                {section.testimonial.quote}
              </p>
            </blockquote>
            <figcaption className="text-hero-copy mt-4 text-sm leading-relaxed">
              {section.testimonial.attribution}
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
