import {
  ClipboardText,
  MapPin,
  ShieldCheck,
  Users,
} from "@phosphor-icons/react";
import homeData from "../../../data/Home.json";

const { label, items } = homeData.sectionThree;
const icons = {
  legacy: ClipboardText,
  coverage: MapPin,
  safety: ShieldCheck,
  team: Users,
};

export default function SectionThree() {
  return (
    <section className="bg-proof-surface py-7.5" aria-label={label}>
      <ul className="wrapper lg:divide-proof-divider grid max-w-290 grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0 lg:divide-x">
        {items.map(({ icon, text }) => {
          const Icon = icons[icon];
          return (
            <li
              key={icon}
              className="text-hero-heading flex min-w-0 items-center gap-4 lg:px-5"
            >
              <span
                className="bg-proof-accent grid size-11 shrink-0 place-items-center rounded-md"
                aria-hidden="true"
              >
                <Icon size={24} />
              </span>
              <span className="text-base leading-snug font-bold">{text}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
