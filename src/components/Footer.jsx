import { Link } from "react-router-dom";
import { MotionConfig, motion } from "framer-motion";
import {
  Phone,
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
  MapPin,
  Envelope,
} from "@phosphor-icons/react";
import footerData from "../../data/Footer.json";
import { logo } from "../../data/Header.json";

const { description, socials, columns, contact, copyright } = footerData;

const SOCIAL_ICONS = {
  facebook: FacebookLogo,
  linkedin: LinkedinLogo,
  instagram: InstagramLogo,
};

const DIVIDER = "border-t border-white/[0.18]";

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.5, ease: "easeOut" },
};

export default function Footer() {
  return (
    <MotionConfig reducedMotion="user">
      <footer className="border-brand-red bg-brand-ink border-t-4 text-white">
        <motion.div
          {...reveal}
          className="wrapper grid grid-cols-1 gap-10 py-12 sm:grid-cols-2 lg:grid-cols-[1.5fr_0.8fr_1.3fr_1.3fr_1fr] lg:gap-8 lg:py-14"
        >
          <div className="sm:col-span-2 lg:col-span-1">
            <img src={logo.src} alt={logo.alt} className="w-52 max-w-full" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/70">
              {description}
            </p>

            <ul className="mt-6 flex gap-3">
              {socials.map(({ platform, label, href }) => {
                const Icon = SOCIAL_ICONS[platform];
                return (
                  <li key={platform}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="hover:border-brand-red hover:bg-brand-red focus-visible:outline-brand-red grid size-10 place-items-center border border-white/30 text-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-2"
                    >
                      {Icon && <Icon size={20} aria-hidden="true" />}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {columns.map(({ title, links }) => (
            <nav key={title} aria-label={title}>
              <h2 className="text-base font-semibold text-white">{title}</h2>
              <ul className="mt-4 space-y-3">
                {links.map(({ label, path }) => (
                  <li key={path}>
                    <Link
                      to={path}
                      className="focus-visible:outline-brand-red text-sm text-white/70 transition-colors hover:text-white focus-visible:text-white focus-visible:outline-2 focus-visible:outline-offset-4"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </motion.div>

        {/* BAND 2: contact (centered) */}
        <div className={DIVIDER}>
          <div className="wrapper py-8 text-center">
            {/* <h2 className="text-base font-semibold text-white">
              {contact.title}
            </h2> */}

            <ul className="flex flex-col items-center gap-7 lg:flex lg:w-full lg:flex-row lg:items-center lg:justify-between lg:gap-6 lg:divide-x lg:divide-white/18">
              <li className="max-w-full min-w-0 lg:flex-1 lg:px-4">
                <a
                  href={contact.phone.href}
                  className="focus-visible:outline-brand-red flex flex-col items-center gap-2 text-sm wrap-anywhere text-white/80 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 lg:flex-row lg:justify-center lg:gap-3 lg:text-base"
                >
                  <Phone
                    aria-hidden="true"
                    size={22}
                    className="shrink-0 text-white"
                  />
                  <span className="min-w-0">{contact.phone.label}</span>
                </a>
              </li>

              <li className="max-w-full min-w-0 lg:flex-1 lg:px-4">
                <a
                  href={contact.email.href}
                  className="focus-visible:outline-brand-red flex flex-col items-center gap-2 text-sm wrap-anywhere text-white/80 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 lg:flex-row lg:justify-center lg:gap-3 lg:text-base"
                >
                  <Envelope
                    aria-hidden="true"
                    size={22}
                    className="shrink-0 text-white"
                  />
                  <span className="min-w-0">{contact.email.label}</span>
                </a>
              </li>

              <li className="max-w-full min-w-0 lg:flex-1 lg:px-4">
                <address className="flex items-center justify-center gap-2 text-sm wrap-anywhere text-white/80 not-italic lg:text-base">
                  <MapPin
                    aria-hidden="true"
                    size={22}
                    className="shrink-0 text-white"
                  />
                  <span className="min-w-0">{contact.address}</span>
                </address>
              </li>
            </ul>
          </div>
        </div>

        {/* BAND 3: copyright */}
        <div className={DIVIDER}>
          <p className="wrapper py-6 text-center text-sm text-white/70">
            © {new Date().getFullYear()} {copyright}
          </p>
        </div>
      </footer>
    </MotionConfig>
  );
}
