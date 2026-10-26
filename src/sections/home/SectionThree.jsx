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
    <section className="home-proof" aria-label={label}>
      <ul className="wrapper home-proof-list">
        {items.map(({ icon, text }) => {
          const Icon = icons[icon];
          return (
            <li key={icon} className="home-proof-item">
              <span className="home-proof-icon" aria-hidden="true">
                <Icon size={24} />
              </span>
              <span className="home-proof-text">{text}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
