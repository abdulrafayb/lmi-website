import homeData from "../../../data/Home.json";

const { heading, placeholderLabel, logos } = homeData.sectionTwo;

export default function SectionTwo() {
  return (
    <section className="home-trust" aria-labelledby="home-trust-heading">
      <div className="wrapper home-trust-layout">
        <h2 id="home-trust-heading" className="home-trust-heading">
          {heading}
        </h2>
        <div className="home-trust-strip">
          <div
            className="home-trust-scroll focus-visible:outline-2"
            role="region"
            aria-labelledby="home-trust-heading"
            tabIndex={0}
          >
            <ul className="home-trust-logos">
              {logos.map(({ name, src }) => (
                <li key={name} className="home-trust-logo">
                  {src ? (
                    <img
                      src={src}
                      alt={name}
                      className="max-h-8 max-w-36 object-contain"
                      loading="lazy"
                    />
                  ) : (
                    <>
                      <span
                        className="home-trust-placeholder"
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
          </div>
        </div>
      </div>
    </section>
  );
}
