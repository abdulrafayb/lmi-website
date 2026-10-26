import { ArrowRight } from "@phosphor-icons/react";
import Button from "../../../ui/Button";
import Eyebrow from "../../../ui/Eyebrow";
import Reveal from "../../../components/Reveal";
import aboutData from "../../../../data/Our Company/About Us.json";

const {
  eyebrow,
  heading,
  description,
  action,
  image,
  imageAlt,
  imagePlaceholder,
} = aboutData.sectionOne;

export default function SectionOne() {
  return (
    <section
      className="bg-proof-surface py-12 text-center md:py-16 lg:py-20 lg:text-left"
      aria-labelledby="about-heading"
    >
      <div className="wrapper grid max-w-320 items-center gap-10 lg:grid-cols-2 lg:gap-12">
        <Reveal>
          <Eyebrow className="mb-5">{eyebrow}</Eyebrow>
          <h1
            id="about-heading"
            className="text-hero-heading text-3xl leading-[1.12] font-extrabold tracking-tight sm:text-4xl lg:text-5xl xl:text-[3.25rem]"
          >
            {heading.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h1>
          <p className="text-hero-copy mx-auto mt-6 max-w-xl text-base leading-relaxed lg:mx-0 lg:text-lg">
            {description}
          </p>
          <Button to={action.path} className="mt-8">
            {action.label}
            <ArrowRight size={19} aria-hidden="true" />
          </Button>
        </Reveal>
        <Reveal
          delay={0.1}
          className="border-trust-border flex aspect-[10/7] w-full items-center justify-center overflow-hidden rounded-lg border bg-[repeating-linear-gradient(135deg,var(--color-hero-stripe-light)_0_0.625rem,var(--color-hero-stripe-dark)_0.625rem_1.25rem)]"
        >
          {image ? (
            <img
              src={image}
              alt={imageAlt}
              className="h-full w-full object-cover"
            />
          ) : (
            <span
              className="text-hero-copy px-6 text-center text-sm"
              aria-hidden="true"
            >
              {imagePlaceholder}
            </span>
          )}
        </Reveal>
      </div>
    </section>
  );
}
