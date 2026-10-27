import Eyebrow from "../../../ui/Eyebrow";
import Reveal from "../../../components/Reveal";
import data from "../../../../data/Services/Dry Cargo Transportation.json";

const { eyebrow, heading, logoPlaceholder, clients, testimonial } =
  data.sectionFive;

export default function SectionFive() {
  return (
    <section
      className="bg-proof-surface py-12 text-center md:py-16 lg:py-20 lg:text-left"
      aria-labelledby="dry-service-clients-heading"
    >
      <div className="wrapper max-w-320">
        <Reveal className="mx-auto max-w-4xl text-center">
          <Eyebrow className="mb-4">{eyebrow}</Eyebrow>
          <h2
            id="dry-service-clients-heading"
            className="text-hero-heading text-2xl leading-snug font-bold tracking-tight md:text-3xl lg:text-4xl"
          >
            {heading}
          </h2>
        </Reveal>
        <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {clients.map(({ id, name, image, placeholder }, index) => (
            <Reveal
              as="li"
              key={id}
              delay={index * 0.04}
              className={`border-trust-border bg-surface flex min-h-28 flex-col items-center justify-center gap-2 rounded-md border px-5 py-6 text-center ${placeholder ? "border-dashed" : ""}`}
            >
              {image ? (
                <img
                  src={image}
                  alt={name}
                  loading="lazy"
                  className="h-12 max-w-full object-contain"
                />
              ) : (
                <>
                  <span className="text-hero-copy text-xs" aria-hidden="true">
                    {logoPlaceholder}
                  </span>
                  <span
                    className={`text-sm font-semibold ${placeholder ? "text-hero-copy" : "text-hero-heading"}`}
                  >
                    {name}
                  </span>
                </>
              )}
            </Reveal>
          ))}
        </ul>
        <Reveal className="border-proof-accent bg-surface mx-auto mt-9 max-w-4xl rounded-b-md border-t-4 p-6 sm:p-8 lg:mx-0">
          <figure>
            <blockquote>
              <p className="text-hero-heading text-lg leading-relaxed font-semibold lg:text-xl">
                {testimonial.quote}
              </p>
            </blockquote>
            <figcaption className="text-hero-copy mt-4 text-sm leading-relaxed">
              {testimonial.attribution}
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
