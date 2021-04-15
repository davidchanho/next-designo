import React from "react";
import Hero from "../components/home/hero";
import WhyUs from "../components/home/why-us";
import CategoryDesigns from "../shared/designs";
import Template from "../shared/template";

export default function Home() {
  const links = ["web", "app", "graphic"];

  return (
    <Template>
      <Hero />
      <CategoryDesigns links={links} />
      <WhyUs />
    </Template>
  );
}
