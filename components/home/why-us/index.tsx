import Image from "next/image";
import React from "react";
import { Row } from "../../../shared/row";
import { Card } from "./WhyUs.styles";

const list = [
  {
    id: "why-us-1",
    src: "/assets/home/desktop/illustration-passionate.svg",
    title: "PASSIONATE",
    subtitle:
      "Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.",
  },
  {
    id: "why-us-2",
    src: "/assets/home/desktop/illustration-resourceful.svg",
    title: "RESOURCEFUL",
    subtitle:
      "Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs.",
  },
  {
    id: "why-us-3",
    src: "/assets/home/desktop/illustration-friendly.svg",
    title: "FRIENDLY",
    subtitle:
      "We are a group of enthusiastic folks who know how to put people first.Our success depends on our customers, and we strive to give them the best experience a company can provide.",
  },
];

function WhyUs() {
  return (
    <Row>
      {list.map(({ id, src, title, subtitle }) => (
        <Card key={id}>
          <Image src={src} alt="" width={202} height={202} />
          <h3>{title}</h3>
          <p>{subtitle}</p>
        </Card>
      ))}
    </Row>
  );
}

export default WhyUs;
