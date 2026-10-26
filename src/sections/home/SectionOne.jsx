import { ArrowRight } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import homeData from "../../../data/Home.json";

const { heading, description, actions, photoCaption } = homeData.sectionOne;

export default function SectionOne() {
  return (
    <section className="home-hero" aria-labelledby="home-hero-heading">
      <div className="home-hero-content">
        <div className="home-hero-card">
          <h1 id="home-hero-heading" className="home-hero-heading">
            {heading.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h1>
          <p className="home-hero-description">{description}</p>
          <div className="mt-6 flex flex-wrap gap-2.5">
            {actions.map(({ label, path, variant, showArrow }) => (
              <Link
                key={path}
                to={path}
                className={`home-hero-action ${
                  variant === "primary"
                    ? "home-hero-action-primary"
                    : "home-hero-action-secondary"
                }`}
              >
                {label}
                {showArrow && <ArrowRight size={17} aria-hidden="true" />}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <p className="home-hero-caption">{photoCaption}</p>
    </section>
  );
}
