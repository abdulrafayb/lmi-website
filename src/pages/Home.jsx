import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import SectionOne from "../sections/home/SectionOne";
import SectionTwo from "../sections/home/SectionTwo";
import SectionThree from "../sections/home/SectionThree";
import SectionFour from "../sections/home/SectionFour";
import SectionFive from "../sections/home/SectionFive";
import SectionSix from "../sections/home/SectionSix";
import SectionSeven from "../sections/home/SectionSeven";
import SectionEight from "../sections/home/SectionEight";
import SectionNine from "../sections/home/SectionNine";

import SectionTen from "../sections/home/SectionTen";

export default function Home() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const frame = requestAnimationFrame(() => {
      document
        .getElementById(hash.slice(1))
        ?.scrollIntoView({ behavior: "instant", block: "start" });
    });
    return () => cancelAnimationFrame(frame);
  }, [hash]);

  return (
    <>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <SectionSeven />
      <SectionEight />
      <SectionNine />
      <SectionTen />
    </>
  );
}
