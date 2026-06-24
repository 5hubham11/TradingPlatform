import React from "react";
import Award from "./Award.jsx";
import Education from "./Education.jsx";
import Hero from "./Hero.jsx";
import Stats from "./Stats.jsx";
import Pricing from "./Pricing.jsx";
import OpenAc from "../OpenAc.jsx";
import NavBar from "../NavBar.jsx";
import Footer from "../Footer.jsx";
export default function HomePage() {
  return (
    <>
      <Hero />
      <Award />
      <Stats />
      <Pricing />
      <Education />
      <OpenAc />
    </>
  );
}
