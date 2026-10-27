import Eyebrow from "../../../ui/Eyebrow";
import Reveal from "../../../components/Reveal";
import data from "../../../../data/Fleet And Visiblity/Nationwide Network.json";
const section = data.sectionThree;
export default function SectionThree() {
  return (
    <section
      aria-labelledby="network-routes-heading"
      className="bg-proof-surface py-12 text-center md:py-16 lg:py-20 lg:text-left"
    >
      <div className="wrapper max-w-320">
        <div className="grid items-start gap-10 lg:grid-cols-2">
          <Reveal>
            <Eyebrow className="mb-4">{section.eyebrow}</Eyebrow>
            <h2
              id="network-routes-heading"
              className="text-hero-heading text-2xl leading-snug font-bold tracking-tight md:text-3xl lg:text-4xl"
            >
              {section.heading}
            </h2>
            <p className="text-hero-copy mt-6 leading-relaxed">
              {section.description}
            </p>
          </Reveal>
          <Reveal className="bg-surface border-trust-border min-w-0 rounded-xl border p-5">
            <figure>
              <div className="relative aspect-square w-full">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 100 100"
                  className="stroke-proof-accent absolute inset-0 h-full w-full fill-none"
                >
                  {section.destinations.map((city) => (
                    <line
                      key={city.name}
                      x1="25"
                      y1="78"
                      x2={city.x}
                      y2={city.y}
                      strokeWidth=".5"
                      strokeDasharray="1.5 1"
                    />
                  ))}
                </svg>
                <div className="bg-brand-red text-surface absolute top-[78%] left-1/4 flex size-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full text-xs font-bold">
                  {section.hub}
                </div>
                {section.destinations.map((city) => (
                  <div
                    key={city.name}
                    style={{ left: `${city.x}%`, top: `${city.y}%` }}
                    className="absolute -translate-x-1/2 -translate-y-1/2"
                  >
                    <span className="text-hero-heading absolute bottom-full left-1/2 mb-1 -translate-x-1/2 text-xs font-semibold">
                      {city.name}
                    </span>
                    <span className="border-brand-red bg-surface block size-4 rounded-full border-2" />
                  </div>
                ))}
              </div>
              <figcaption className="text-hero-copy text-center text-xs leading-relaxed">
                {section.mapNote}
              </figcaption>
            </figure>
          </Reveal>
        </div>
        <Reveal className="mt-10">
          <h3 className="text-hero-copy text-sm font-semibold tracking-wider uppercase">
            {section.routesHeading}
          </h3>
        </Reveal>
        <ul className="mt-4 grid gap-5 lg:grid-cols-3">
          {section.routes.map((route, index) => (
            <Reveal
              as="li"
              key={route.heading}
              delay={index * 0.04}
              className="bg-surface border-editorial-border rounded-md border-2 border-dashed p-6"
            >
              <h4 className="text-hero-heading text-lg font-bold">
                {route.heading}
              </h4>
              <ul className="text-hero-copy mt-4 space-y-2 text-sm leading-relaxed">
                {route.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
