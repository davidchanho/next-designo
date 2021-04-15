import Link from "next/link";
import React from "react";
import Button from "../../../shared/button";
import { Container } from "./Hero.styles";

function Hero() {
  return (
    <Container>
      <h1>Award-winning custom designs and digital branding solutions</h1>
      <p>
        With over 10 years in the industry, we are experienced in creating fully
        responsive websites, app design, and engaging brand experiences. Find
        out more about our services.
      </p>
      <Link href="/about">
        <Button>Learn More</Button>
      </Link>
    </Container>
  );
}

export default Hero;
