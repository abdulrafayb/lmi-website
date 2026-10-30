import Button from "../../ui/Button";
import Reveal from "../../components/Reveal";
import data from "../../../data/Insights.json";
const section = data.sectionSeven;
export default function SectionSeven() {
  return (
    <section
      aria-labelledby="insights-profile-heading"
      className="bg-proof-surface py-12 text-center md:py-16 lg:py-20 lg:text-left"
    >
      <div className="wrapper max-w-320">
        <Reveal className="border-trust-border bg-surface flex flex-col items-center gap-5 rounded-xl border p-6 lg:flex-row">
          <span className="bg-brand-red text-surface flex h-16 w-12 shrink-0 items-center justify-center rounded-md text-xs font-bold">
            {section.badge}
          </span>
          <div className="min-w-0 flex-1">
            <h2
              id="insights-profile-heading"
              className="text-hero-heading text-xl font-bold"
            >
              {section.heading}
            </h2>
            <p className="text-hero-copy mt-2 leading-relaxed">
              {section.description}
            </p>
            <p className="text-hero-copy mt-2 text-xs">{section.metadata}</p>
          </div>
          <Button href={section.action.path} download className="shrink-0">
            {section.action.label}
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
