import Eyebrow from "../../../ui/Eyebrow";
import Reveal from "../../../components/Reveal";
import industriesData from "../../../../data/Industries/Overview.json";

const { eyebrow, heading, industryLabel, services, statusLabels, rows, note } =
  industriesData.sectionFive;

function ServiceStatus({ status }) {
  return (
    <>
      {status === "none" ? (
        <span className="text-editorial-border" aria-hidden="true">
          –
        </span>
      ) : (
        <span
          className={`inline-block size-3.5 rounded-full ${status === "main" ? "bg-brand-red" : "border-proof-accent border-2"}`}
          aria-hidden="true"
        />
      )}
      <span className="sr-only">{statusLabels[status]}</span>
    </>
  );
}

export default function SectionFive() {
  return (
    <section
      className="bg-proof-surface py-12 md:py-16 lg:py-20"
      aria-labelledby="industries-service-matrix-heading"
    >
      <div className="wrapper max-w-320">
        <Reveal className="text-center">
          <Eyebrow className="mb-4">{eyebrow}</Eyebrow>
          <h2
            id="industries-service-matrix-heading"
            className="text-hero-heading text-2xl leading-snug font-bold tracking-tight md:text-3xl lg:text-4xl"
          >
            {heading}
          </h2>
        </Reveal>
        <Reveal className="mt-9">
          <div
            role="region"
            aria-labelledby="industries-service-matrix-heading"
            aria-describedby="industries-service-matrix-note"
            tabIndex={0}
            className="border-trust-border bg-surface outline-brand-red relative overflow-x-auto border focus-visible:outline-2 focus-visible:outline-offset-4"
          >
            <table className="text-hero-heading w-full min-w-225 border-collapse text-center text-sm">
              <caption className="sr-only">{heading}</caption>
              <thead>
                <tr className="border-trust-border border-b">
                  <th
                    scope="col"
                    className="text-hero-copy px-4 py-4 text-left text-xs font-semibold tracking-[0.12em] uppercase"
                  >
                    {industryLabel}
                  </th>
                  {services.map((service) => (
                    <th
                      key={service}
                      scope="col"
                      className="px-3 py-4 font-semibold"
                    >
                      {service}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map(({ industry, usage }) => (
                  <tr
                    key={industry}
                    className="border-trust-border border-b last:border-b-0"
                  >
                    <th
                      scope="row"
                      className="px-4 py-4 text-left font-semibold"
                    >
                      {industry}
                    </th>
                    {usage.map((status, index) => (
                      <td key={services[index]} className="px-3 py-4">
                        <ServiceStatus status={status} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="text-hero-copy mt-4 flex flex-wrap justify-center gap-x-7 gap-y-3 text-sm lg:justify-start">
            {["main", "additional"].map((status) => (
              <span key={status} className="inline-flex items-center gap-2">
                <span
                  className={`inline-block size-3.5 rounded-full ${status === "main" ? "bg-brand-red" : "border-proof-accent border-2"}`}
                  aria-hidden="true"
                />
                {statusLabels[status]}
              </span>
            ))}
            <p
              id="industries-service-matrix-note"
              className="text-center lg:text-left"
            >
              {note}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
