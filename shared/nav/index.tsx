import Link from "next/link";
import React from "react";
import { Row } from "../row";
import { Container } from "./Nav.styles";

const Nav = () => {
  return (
    <Container>
      <ul>
        <Row>
          <li>
            <Link href="/about">Our Company</Link>
          </li>
          <li>
            <Link href="/locations">Locations</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </Row>
      </ul>
    </Container>
  );
};

export default Nav;
