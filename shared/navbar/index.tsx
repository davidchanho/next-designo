import React from "react";
import Nav from "../nav";
import { Row } from "../row";
import Brand from "./Brand";
import { Container } from "./Navbar.styles";

function Navbar() {
  return (
    <Container>
      <Row>
        <Brand />
        <span>
          <img
            src="/assets/shared/mobile/icon-hamburger.svg"
            alt=""
            width={24}
            height={20}
          />
          <img
            src="/assets/shared/mobile/icon-close.svg"
            alt=""
            width={24}
            height={20}
          />
        </span>
        <Nav />
      </Row>
    </Container>
  );
}

export default Navbar;
