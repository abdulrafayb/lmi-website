import Eyebrow from "../../../ui/Eyebrow";
import Reveal from "../../../components/Reveal";
import data from "../../../../data/Fleet And Visiblity/Nationwide Network.json";
const section = data.sectionFour;
export default function SectionFour() {
  return (
    <section
      aria-labelledby="network-locations-heading"
      className="bg-surface py-12 text-center md:py-16 lg:py-20 lg:text-left"
    >
      <div className="wrapper max-w-320">
        <Reveal className="text-center">
          <Eyebrow className="mb-4">{section.eyebrow}</Eyebrow>
          <h2
            id="network-locations-heading"
            className="text-hero-heading text-2xl leading-snug font-bold tracking-tight md:text-3xl lg:text-4xl"
          >
            {section.heading}
          </h2>
          <p className="text-hero-copy mt-5 leading-relaxed">
            {section.description}
          </p>
        </Reveal>
        <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {section.locations.map((location, index) => (
            <Reveal
              as="li"
              key={location.heading}
              delay={index * 0.04}
              className={`border-trust-border rounded-md border p-5 ${index === 4 ? "sm:col-span-2 lg:col-span-4" : ""}`}
            >
              <div className="border-trust-border flex h-36 items-center justify-center overflow-hidden rounded-md border bg-[repeating-linear-gradient(135deg,var(--color-hero-stripe-light)_0_0.625rem,var(--color-hero-stripe-dark)_0.625rem_1.25rem)]">
                {location.image ? (
                  <img
                    src={location.image}
                    alt={location.imageAlt}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <span className="text-hero-copy px-4 text-center text-xs">
                    {location.imagePlaceholder}
                  </span>
                )}
              </div>
              <h3 className="text-hero-heading mt-5 text-lg font-bold">
                {location.heading}
              </h3>
              <p className="text-hero-copy mt-3 text-sm leading-relaxed">
                {location.description}
              </p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
