import {
  ArrowRight,
  ShieldCheck,
  Truck,
  ClipboardText,
  Users,
} from "@phosphor-icons/react";
import Button from "../../../ui/Button";
import Eyebrow from "../../../ui/Eyebrow";
import Reveal from "../../../components/Reveal";
import certificationsData from "../../../../data/Our Company/Certifications And Recognitions.json";

const { eyebrow, heading, commitments, description, action, policy } =
  certificationsData.sectionFour;
const icons = {
  safety: ShieldCheck,
  fleet: Truck,
  discipline: ClipboardText,
  customers: Users,
};

export default function SectionFour() {
  return (
    <section
      className="bg-surface py-12 text-center md:py-16 lg:py-20 lg:text-left"
      aria-labelledby="certifications-commitments-heading"
    >
      <div className="wrapper max-w-320">
        <Reveal>
          <Eyebrow className="mb-4">{eyebrow}</Eyebrow>
          <h2
            id="certifications-commitments-heading"
            className="text-hero-heading text-2xl leading-snug font-bold tracking-tight md:text-3xl lg:text-4xl"
          >
            {heading}
          </h2>
        </Reveal>
        <ul className="lg:divide-trust-border mt-9 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0 lg:divide-x">
          {commitments.map(({ icon, label }, index) => {
            const Icon = icons[icon];
            return (
              <Reveal
                as="li"
                key={icon}
                delay={index * 0.05}
                className="text-hero-heading flex flex-col items-center gap-4 lg:flex-row lg:px-4"
              >
                <span
                  className="bg-proof-accent grid size-12 shrink-0 place-items-center rounded-lg"
                  aria-hidden="true"
                >
                  <Icon size={25} />
                </span>
                <h3 className="text-base leading-snug font-bold">{label}</h3>
              </Reveal>
            );
          })}
        </ul>
        <div className="mt-10 grid items-start gap-8 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <p className="text-hero-copy text-base leading-relaxed lg:text-lg">
              {description}
            </p>
            <Button to={action.path} variant="secondary" className="mt-6">
              {action.label}
              <ArrowRight size={17} aria-hidden="true" />
            </Button>
          </Reveal>
          <Reveal
            delay={0.1}
            className="bg-proof-surface flex min-w-0 flex-col items-center gap-6 rounded-xl p-6 lg:flex-row"
          >
            <div
              className="bg-brand-red text-surface flex h-48 w-36 shrink-0 flex-col justify-between rounded-md p-4 text-left shadow-[0_0.75rem_1.5rem_var(--color-hero-shadow)]"
              aria-hidden="true"
            >
              <span className="text-proof-accent text-2xl font-extrabold italic">
                {policy.coverBrand}
              </span>
              <div>
                <ShieldCheck size={29} />
                <p className="mt-3 text-base font-bold">{policy.coverTitle}</p>
              </div>
            </div>
            <div className="min-w-0">
              <Eyebrow className="mb-3">{policy.eyebrow}</Eyebrow>
              <h3 className="text-hero-heading text-xl leading-snug font-bold lg:text-2xl">
                {policy.heading}
              </h3>
              <p className="text-hero-copy mt-3 text-sm leading-relaxed lg:text-base">
                {policy.description}
              </p>
              <p
                id="policy-file-note"
                className="text-hero-copy mt-2 text-xs leading-relaxed wrap-anywhere"
              >
                {policy.fileNote}
              </p>
              <Button
                href={policy.action.href}
                variant="secondary"
                className="mt-4"
                aria-describedby="policy-file-note"
                action={
                  policy.action.isPlaceholder
                    ? (event) => event.preventDefault()
                    : undefined
                }
              >
                {policy.action.label}
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
