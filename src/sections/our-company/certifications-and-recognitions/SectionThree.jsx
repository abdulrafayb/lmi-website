import Eyebrow from "../../../ui/Eyebrow";
import Reveal from "../../../components/Reveal";
import certificationsData from "../../../../data/Our Company/Certifications And Recognitions.json";

const { eyebrow, heading, imagePlaceholder, credentials } =
  certificationsData.sectionThree;

export default function SectionThree() {
  return (
    <section
      className="bg-proof-surface py-12 text-center md:py-16 lg:py-20 lg:text-left"
      aria-labelledby="certifications-credentials-heading"
    >
      <div className="wrapper max-w-320">
        <Reveal className="text-center">
          <Eyebrow className="mb-4">{eyebrow}</Eyebrow>
          <h2
            id="certifications-credentials-heading"
            className="text-hero-heading text-2xl leading-snug font-bold tracking-tight md:text-3xl lg:text-4xl"
          >
            {heading}
          </h2>
        </Reveal>
        <ul className="mt-9 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {credentials.map(({ title, description, image }, index) => (
            <Reveal as="li" key={title} delay={(index % 4) * 0.05}>
              <article className="border-trust-border bg-surface h-full min-w-0 rounded-md border p-4">
                <div className="border-editorial-border flex aspect-[3/2] items-center justify-center overflow-hidden rounded-sm border-2 border-dashed">
                  {image ? (
                    <img
                      src={image}
                      alt={title}
                      loading="lazy"
                      className="h-full w-full object-contain"
                    />
                  ) : (
                    <span
                      className="text-hero-copy px-3 text-center text-xs leading-relaxed"
                      aria-hidden="true"
                    >
                      {imagePlaceholder}
                    </span>
                  )}
                </div>
                <h3 className="text-hero-heading mt-4 text-base leading-snug font-bold lg:text-lg">
                  {title}
                </h3>
                <p className="text-hero-copy mt-2 text-sm leading-relaxed">
                  {description}
                </p>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
