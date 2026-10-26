import Eyebrow from "../../ui/Eyebrow";
import {
  Truck,
  ShieldCheck,
  GearSix,
  Stack,
  Users,
} from "@phosphor-icons/react";
import Reveal from "../../components/Reveal";
import homeData from "../../../data/Home.json";

const { eyebrow, heading, benefits, equipment } = homeData.sectionFive;
const icons = {
  equipment: Truck,
  safety: ShieldCheck,
  expertise: GearSix,
  network: Stack,
  people: Users,
};

export default function SectionFive() {
  return (
    <section
      className="bg-proof-surface py-12 text-center md:py-16 lg:py-20 lg:text-left"
      aria-labelledby="home-why-heading"
    >
      <div className="wrapper grid max-w-280 items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <Eyebrow className="mb-4">{eyebrow}</Eyebrow>
          <h2
            id="home-why-heading"
            className="text-hero-heading mx-auto max-w-lg text-2xl leading-snug font-bold tracking-tight md:text-3xl lg:mx-0 lg:text-4xl"
          >
            {heading}
          </h2>
          <ul className="mt-7 space-y-5">
            {benefits.map(({ icon, title, description }) => {
              const Icon = icons[icon];
              return (
                <li
                  key={icon}
                  className="flex flex-col items-center gap-4 lg:flex-row lg:items-start"
                >
                  <span
                    className="bg-proof-accent text-hero-heading grid size-10 shrink-0 place-items-center rounded-md"
                    aria-hidden="true"
                  >
                    <Icon size={21} />
                  </span>
                  <div>
                    <h3 className="text-hero-heading text-base leading-snug font-bold">
                      {title}
                    </h3>
                    <p className="text-hero-copy mt-1 text-sm leading-relaxed">
                      {description}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </Reveal>
        <Reveal
          delay={0.1}
          className="border-trust-border bg-surface min-w-0 rounded-xl border p-4 shadow-[0_0.5rem_1.5rem_var(--color-hero-shadow)] sm:p-6"
        >
          <table className="text-hero-heading w-full table-fixed text-center text-sm lg:text-left">
            <caption className="text-hero-copy pb-4 text-center text-xs font-semibold tracking-[0.12em] uppercase">
              {equipment.caption}
            </caption>
            <thead>
              <tr className="border-trust-border text-hero-copy border-b text-[11px] font-semibold tracking-[0.12em] uppercase">
                <th scope="col" className="w-1/2 pr-2 pb-2">
                  {equipment.cargoHeading}
                </th>
                <th scope="col" className="pb-2 text-center lg:text-right">
                  {equipment.equipmentHeading}
                </th>
              </tr>
            </thead>
            <tbody>
              {equipment.rows.map(({ cargo, vehicle }) => (
                <tr
                  key={cargo}
                  className="border-trust-border border-b last:border-b-0"
                >
                  <th
                    scope="row"
                    className="py-3 pr-2 font-medium wrap-anywhere"
                  >
                    {cargo}
                  </th>
                  <td className="py-3 text-center lg:text-right">
                    <span className="bg-equipment-badge inline-flex max-w-full flex-col items-center gap-2 rounded-full px-3 py-2 text-xs font-medium lg:flex-row">
                      <Truck
                        size={15}
                        className="shrink-0"
                        aria-hidden="true"
                      />
                      <span className="wrap-anywhere">{vehicle}</span>
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>
      </div>
    </section>
  );
}
