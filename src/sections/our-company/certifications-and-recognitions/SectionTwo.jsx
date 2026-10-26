import {
  ArrowRight,
  ClipboardText,
  Users,
  ShieldCheck,
  ChartBar,
} from "@phosphor-icons/react";
import Button from "../../../ui/Button";
import Eyebrow from "../../../ui/Eyebrow";
import Reveal from "../../../components/Reveal";
import certificationsData from "../../../../data/Our Company/Certifications And Recognitions.json";

const { eyebrow, heading, paragraphs, action, standardsHeading, standards } =
  certificationsData.sectionTwo;
const icons = {
  process: ClipboardText,
  people: Users,
  safety: ShieldCheck,
  improvement: ChartBar,
};

export default function SectionTwo() {
  return (
    <section
      className="bg-surface py-12 text-center md:py-16 lg:py-20 lg:text-left"
      aria-labelledby="certifications-standards-heading"
    >
      <div className="wrapper grid max-w-320 items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <Eyebrow className="mb-5">{eyebrow}</Eyebrow>
          <h2
            id="certifications-standards-heading"
            className="text-hero-heading text-2xl leading-snug font-bold tracking-tight md:text-3xl lg:text-4xl"
          >
            {heading}
          </h2>
          <div className="text-hero-copy mt-7 space-y-4 text-base leading-relaxed lg:text-lg">
            {paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <Button to={action.path} variant="secondary" className="mt-7">
            {action.label}
            <ArrowRight size={17} aria-hidden="true" />
          </Button>
        </Reveal>
        <Reveal
          delay={0.1}
          className="border-trust-border bg-surface min-w-0 rounded-2xl border p-6 shadow-[0_0.5rem_1.5rem_var(--color-hero-shadow)] sm:p-8"
        >
          <h3 className="text-hero-copy pb-5 text-xs font-semibold tracking-[0.12em] uppercase">
            {standardsHeading}
          </h3>
          <ul className="divide-trust-border border-trust-border divide-y border-t">
            {standards.map(({ icon, heading, description }) => {
              const Icon = icons[icon];
              return (
                <li
                  key={icon}
                  className="flex flex-col items-center gap-4 py-5 last:pb-0 lg:flex-row"
                >
                  <span
                    className="bg-proof-accent text-hero-heading grid size-12 shrink-0 place-items-center rounded-lg"
                    aria-hidden="true"
                  >
                    <Icon size={25} />
                  </span>
                  <div>
                    <h4 className="text-hero-heading text-base leading-snug font-semibold lg:text-lg">
                      {heading}
                    </h4>
                    <p className="text-hero-copy mt-1 text-sm leading-relaxed lg:text-base">
                      {description}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
