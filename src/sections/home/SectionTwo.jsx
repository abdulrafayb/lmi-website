import homeData from "../../../data/Home.json";

const { heading, placeholderLabel, logos } = homeData.sectionTwo;

export default function SectionTwo() {
  return (
    <section className="bg-surface py-4.5" aria-labelledby="home-trust-heading">
      <div className="wrapper flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-6">
        <h2
          id="home-trust-heading"
          className="text-hero-copy shrink-0 text-sm font-semibold tracking-[0.12em] uppercase"
        >
          {heading}
        </h2>
        <div className="before:from-surface before:to-surface-transparent after:from-surface after:to-surface-transparent relative min-w-0 flex-1 before:pointer-events-none before:absolute before:inset-y-0 before:left-0 before:z-10 before:w-5 before:bg-linear-to-r before:content-[''] after:pointer-events-none after:absolute after:inset-y-0 after:right-0 after:z-10 after:w-5 after:bg-linear-to-l after:content-['']">
          <div
            className="group outline-brand-red overflow-hidden rounded-md outline-offset-4 focus-visible:outline-2 motion-reduce:overflow-x-auto"
            role="region"
            aria-labelledby="home-trust-heading"
            tabIndex={0}
          >
            <div className="motion-safe:animate-logo-scroll flex w-max min-w-[200%] group-focus-within:[animation-play-state:paused] group-hover:[animation-play-state:paused] group-focus:[animation-play-state:paused] motion-reduce:min-w-full">
              {[false, true].map((isDuplicate) => (
                <ul
                  key={String(isDuplicate)}
                  aria-hidden={isDuplicate ? true : undefined}
                  className={`flex flex-1 gap-4 pr-4 ${isDuplicate ? "motion-reduce:hidden" : ""}`}
                >
                  {logos.map(({ name, src }) => (
                    <li
                      key={name}
                      className="border-trust-border text-hero-heading flex h-12.5 min-w-43 flex-[1_0_auto] items-center justify-center gap-2 rounded-md border px-4 text-base font-semibold"
                    >
                      {src ? (
                        <img
                          src={src}
                          alt={name}
                          className="max-h-8 max-w-36 object-contain"
                        />
                      ) : (
                        <>
                          <span
                            className="text-hero-copy text-[0.6875rem] font-normal"
                            aria-hidden="true"
                          >
                            {placeholderLabel}
                          </span>
                          <span>{name}</span>
                        </>
                      )}
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
