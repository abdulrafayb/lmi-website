import {
  ArrowRight,
  ArrowDown,
  Truck,
  Users,
  ChartBar,
  ShieldCheck,
  Wrench,
} from "@phosphor-icons/react";
import Button from "../../../ui/Button";
import Eyebrow from "../../../ui/Eyebrow";
import Reveal from "../../../components/Reveal";
import leadershipData from "../../../../data/Our Company/Leadership.json";

const {
  eyebrow,
  heading,
  description,
  executiveHeading,
  executiveRole,
  functions,
  note,
  action,
} = leadershipData.sectionFive;
const icons = {
  operations: Truck,
  commercial: Users,
  finance: ChartBar,
  safety: ShieldCheck,
  maintenance: Wrench,
};

export default function SectionFive() {
  return (
    <section
      className="bg-proof-surface py-12 text-center md:py-16 lg:py-20"
      aria-labelledby="leadership-model-heading"
    >
      <div className="wrapper max-w-320">
        <Reveal className="mx-auto max-w-4xl">
          <Eyebrow className="mb-4">{eyebrow}</Eyebrow>
          <h2
            id="leadership-model-heading"
            className="text-hero-heading text-2xl leading-snug font-bold tracking-tight md:text-3xl lg:text-4xl"
          >
            {heading}
          </h2>
          <p className="text-hero-copy mt-5 text-base leading-relaxed">
            {description}
          </p>
        </Reveal>
        <Reveal className="mt-10">
          <div className="bg-brand-red text-surface lg:after:bg-proof-accent relative mx-auto w-fit max-w-full rounded-md px-7 py-5 lg:after:absolute lg:after:top-full lg:after:left-1/2 lg:after:h-5 lg:after:w-0.5 lg:after:-translate-x-1/2 lg:after:content-['']">
            <h3 className="text-lg leading-snug font-bold">
              {executiveHeading}
            </h3>
            <p className="mt-2 text-sm font-semibold">{executiveRole}</p>
          </div>
          <ArrowDown
            size={25}
            className="text-proof-accent mx-auto mt-4 lg:hidden"
            aria-hidden="true"
          />
          <ul className="lg:before:bg-proof-accent relative mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-10 lg:grid-cols-5 lg:before:absolute lg:before:-top-5 lg:before:right-[10%] lg:before:left-[10%] lg:before:h-0.5 lg:before:content-['']">
            {functions.map(({ icon, label }) => {
              const Icon = icons[icon];
              return (
                <li
                  key={icon}
                  className="border-trust-border bg-surface lg:before:bg-proof-accent relative rounded-md border px-4 py-5 lg:before:absolute lg:before:-top-5 lg:before:left-1/2 lg:before:h-5 lg:before:w-0.5 lg:before:-translate-x-1/2 lg:before:content-['']"
                >
                  <span
                    className="bg-proof-accent text-hero-heading mx-auto grid size-12 place-items-center rounded-md"
                    aria-hidden="true"
                  >
                    <Icon size={25} />
                  </span>
                  <h4 className="text-hero-heading mt-4 text-sm leading-snug font-semibold lg:text-base">
                    {label}
                  </h4>
                </li>
              );
            })}
          </ul>
        </Reveal>
        <p className="text-hero-copy mt-7 text-sm leading-relaxed">{note}</p>
        <div className="mt-5 flex justify-center">
          <Button to={action.path} variant="secondary">
            {action.label}
            <ArrowRight size={17} aria-hidden="true" />
          </Button>
        </div>
      </div>
    </section>
  );
}
