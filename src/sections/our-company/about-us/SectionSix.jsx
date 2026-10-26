import Eyebrow from "../../../ui/Eyebrow";
import Reveal from "../../../components/Reveal";
import aboutData from "../../../../data/Our Company/About Us.json";

const { eyebrow, heading, description, placeholderLabel, partners } =
  aboutData.sectionSix;

export default function SectionSix() {
  return (
    <section
      className="bg-surface py-12 md:py-16 lg:py-20"
      aria-labelledby="about-partners-heading"
    >
      <div className="wrapper max-w-320">
        <Reveal className="mx-auto max-w-3xl text-center">
          <Eyebrow className="mb-4">{eyebrow}</Eyebrow>
          <h2
            id="about-partners-heading"
            className="text-hero-heading text-2xl leading-snug font-bold tracking-tight md:text-3xl lg:text-4xl"
          >
            {heading}
          </h2>
          <p className="text-hero-copy mt-5 text-base leading-relaxed">
            {description}
          </p>
        </Reveal>
        <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {partners.map(({ name, image }, index) => (
            <Reveal
              as="li"
              key={name}
              delay={(index % 4) * 0.04}
              className="border-trust-border flex min-h-28 flex-col items-center justify-center gap-2 rounded-md border px-5 py-6 text-center"
            >
              {image ? (
                <img
                  src={image}
                  alt={name}
                  className="h-12 max-w-full object-contain"
                  loading="lazy"
                />
              ) : (
                <>
                  <span className="text-hero-copy text-xs" aria-hidden="true">
                    {placeholderLabel}
                  </span>
                  <span className="text-hero-heading text-base font-semibold">
                    {name}
                  </span>
                </>
              )}
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
