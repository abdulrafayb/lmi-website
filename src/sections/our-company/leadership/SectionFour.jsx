import Eyebrow from "../../../ui/Eyebrow";
import Reveal from "../../../components/Reveal";
import leadershipData from "../../../../data/Our Company/Leadership.json";

const { eyebrow, heading, members } = leadershipData.sectionFour;

export default function SectionFour() {
  return (
    <section
      className="bg-surface py-12 text-center md:py-16 lg:py-20"
      aria-labelledby="leadership-people-heading"
    >
      <div className="wrapper max-w-320">
        <Reveal>
          <Eyebrow className="mb-4">{eyebrow}</Eyebrow>
          <h2
            id="leadership-people-heading"
            className="text-hero-heading text-2xl leading-snug font-bold tracking-tight md:text-3xl lg:text-4xl"
          >
            {heading}
          </h2>
        </Reveal>
        <ul className="mt-9 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {members.map(({ name, initials, role, image }, index) => (
            <Reveal as="li" key={name} delay={index * 0.05}>
              <article className="border-trust-border h-full min-w-0 rounded-md border p-5">
                <div className="mx-auto flex size-22 items-center justify-center overflow-hidden rounded-full bg-[repeating-linear-gradient(135deg,var(--color-hero-stripe-light)_0_0.625rem,var(--color-hero-stripe-dark)_0.625rem_1.25rem)]">
                  {image ? (
                    <img
                      src={image}
                      alt={name}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <span
                      className="text-brand-red text-2xl font-semibold"
                      aria-hidden="true"
                    >
                      {initials}
                    </span>
                  )}
                </div>
                <h3 className="text-hero-heading mt-4 text-lg leading-snug font-bold">
                  {name}
                </h3>
                <p className="text-brand-red mt-2 text-sm leading-relaxed font-semibold">
                  {role}
                </p>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
