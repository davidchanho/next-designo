import React from "react";
import Designs from "../components/home/designs";
import Hero from "../components/home/hero";
import WhyUs from "../components/home/why-us";
import Template from "../shared/template";

export default function Home() {
  return (
    <Template>
      <Hero />
      <Designs />
      <WhyUs />
    </Template>
  );
}
