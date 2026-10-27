import { Check } from "@phosphor-icons/react";
import Eyebrow from "../../../ui/Eyebrow";
import Reveal from "../../../components/Reveal";
import data from "../../../../data/Fleet And Visiblity/Shipment Tracking And Visibility.json";
const section = data.sectionThree;
export default function SectionThree() {
  return (
    <section
      aria-labelledby="tracking-benefits-heading"
      className="bg-proof-surface py-12 text-center md:py-16 lg:py-20 lg:text-left"
    >
      <div className="wrapper grid max-w-320 items-start gap-10 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
        <Reveal>
          <Eyebrow className="mb-4">{section.eyebrow}</Eyebrow>
          <h2
            id="tracking-benefits-heading"
            className="text-hero-heading text-2xl leading-snug font-bold tracking-tight md:text-3xl lg:text-4xl"
          >
            {section.heading}
          </h2>
          <ul className="mt-7 space-y-4">
            {section.benefits.map((benefit) => (
              <li
                key={benefit}
                className="text-hero-copy flex flex-col items-center gap-3 leading-relaxed lg:flex-row lg:items-start"
              >
                <span className="bg-proof-accent text-hero-heading flex size-5 shrink-0 items-center justify-center rounded-full">
                  <Check size={14} weight="bold" aria-hidden="true" />
                </span>
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal className="border-trust-border bg-surface min-w-0 rounded-xl border p-5 shadow-[0_0.5rem_1.5rem_var(--color-hero-shadow)] sm:p-6">
          <div className="flex flex-wrap items-center justify-center gap-3 lg:justify-between">
            <h3 className="text-hero-heading text-lg font-bold">
              {section.panelHeading}
            </h3>
            <span className="bg-proof-accent text-hero-heading rounded-full px-3 py-1 text-xs font-semibold">
              {section.status}
            </span>
          </div>
          <div className="border-trust-border mt-5 flex aspect-[2/1] items-center justify-center rounded-md border bg-[repeating-linear-gradient(135deg,var(--color-hero-stripe-light)_0_0.625rem,var(--color-hero-stripe-dark)_0.625rem_1.25rem)]">
            <span className="text-hero-copy px-4 text-center text-xs">
              {section.mapPlaceholder}
            </span>
          </div>
          <dl className="mt-4">
            {section.details.map((detail) => (
              <div
                key={detail.label}
                className="border-trust-border flex flex-col gap-2 border-t py-3 text-sm sm:flex-row sm:justify-between"
              >
                <dt className="text-hero-copy">{detail.label}</dt>
                <dd className="text-hero-heading font-semibold">
                  {detail.value}
                </dd>
              </div>
            ))}
          </dl>
          <p className="text-hero-copy mt-5 text-xs leading-relaxed">
            {section.note}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
