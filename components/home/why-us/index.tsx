import Image from "next/image";
import React from "react";
import { Row } from "../../../shared/row";
import { Card } from "./WhyUs.styles";

function WhyUs() {
  return (
    <Row>
      <Card>
        <Image
          src="/assets/home/desktop/illustration-passionate.svg"
          alt=""
          width={202}
          height={202}
        />
        <h3>PASSIONATE</h3>
        <p>
          Each project starts with an in-depth brand research to ensure we only
          create products that serve a purpose. We merge art, design, and
          technology into exciting new solutions.
        </p>
      </Card>
      <Card>
        <Image
          src="/assets/home/desktop/illustration-resourceful.svg"
          alt=""
          width={202}
          height={202}
        />
        <h3>RESOURCEFUL</h3>
        <p>
          Everything that we do has a strategic purpose. We use an agile
          approach in all of our projects and value customer collaboration. It
          guarantees superior results that fulfill our clients’ needs.
        </p>
      </Card>
      <Card>
        <Image
          src="/assets/home/desktop/illustration-friendly.svg"
          alt=""
          width={202}
          height={202}
        />
        <h3>FRIENDLY</h3>
        <p>
          We are a group of enthusiastic folks who know how to put people first.
          Our success depends on our customers, and we strive to give them the
          best experience a company can provide.
        </p>
      </Card>
    </Row>
  );
}

export default WhyUs;
