import {
  Check,
  ArrowRight,
  ArrowDown,
  ArrowLeft,
  ArrowUp,
} from "@phosphor-icons/react";
import Eyebrow from "../../../ui/Eyebrow";
import Reveal from "../../../components/Reveal";
import certificationsData from "../../../../data/Our Company/Certifications And Recognitions.json";

const { eyebrow, heading, description, points, cycleHeading, steps } =
  certificationsData.sectionFive;
const positions = [
  "col-start-1 row-start-1",
  "col-start-2 row-start-1",
  "col-start-2 row-start-2",
  "col-start-1 row-start-2",
];

export default function SectionFive() {
  return (
    <section
      className="bg-proof-surface py-12 text-center md:py-16 lg:py-20 lg:text-left"
      aria-labelledby="certifications-assurance-heading"
    >
      <div className="wrapper grid max-w-320 items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <Eyebrow className="mb-4">{eyebrow}</Eyebrow>
          <h2
            id="certifications-assurance-heading"
            className="text-hero-heading text-2xl leading-snug font-bold tracking-tight md:text-3xl lg:text-4xl"
          >
            {heading}
          </h2>
          <p className="text-hero-copy mt-6 text-base leading-relaxed">
            {description}
          </p>
          <ul className="mt-5 space-y-4">
            {points.map((point) => (
              <li
                key={point}
                className="text-hero-copy flex flex-col items-center gap-3 text-sm leading-relaxed lg:flex-row lg:items-start lg:text-base"
              >
                <span
                  className="bg-proof-accent text-hero-heading grid size-5 shrink-0 place-items-center rounded-full lg:mt-0.5"
                  aria-hidden="true"
                >
                  <Check size={14} />
                </span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal
          delay={0.1}
          className="border-trust-border bg-surface min-w-0 rounded-xl border p-4 shadow-[0_0.5rem_1.5rem_var(--color-hero-shadow)] sm:p-6"
        >
          <figure>
            <figcaption
              id="assurance-cycle-caption"
              className="text-hero-copy mb-5 text-xs font-semibold tracking-[0.12em] uppercase"
            >
              {cycleHeading}
            </figcaption>
            <div className="relative">
              <ol
                aria-labelledby="assurance-cycle-caption"
                className="grid auto-rows-fr grid-cols-2 gap-x-8 gap-y-10 text-center"
              >
                {steps.map(({ heading, description }, index) => (
                  <li
                    key={heading}
                    className={`bg-proof-surface flex min-h-24 min-w-0 flex-col items-center justify-center rounded-md px-2 py-4 sm:px-4 ${positions[index]}`}
                  >
                    <h3 className="text-hero-heading text-sm leading-snug font-semibold wrap-anywhere">
                      {heading}
                    </h3>
                    <p className="text-hero-copy mt-2 text-xs leading-relaxed wrap-anywhere">
                      {description}
                    </p>
                  </li>
                ))}
              </ol>
              <ArrowRight
                size={23}
                className="text-brand-red absolute top-[calc(25%-0.625rem)] left-1/2 -translate-1/2"
                aria-hidden="true"
              />
              <ArrowDown
                size={23}
                className="text-brand-red absolute top-1/2 left-[calc(75%+0.5rem)] -translate-1/2"
                aria-hidden="true"
              />
              <ArrowLeft
                size={23}
                className="text-brand-red absolute top-[calc(75%+0.625rem)] left-1/2 -translate-1/2"
                aria-hidden="true"
              />
              <ArrowUp
                size={23}
                className="text-brand-red absolute top-1/2 left-[calc(25%-0.5rem)] -translate-1/2"
                aria-hidden="true"
              />
            </div>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
