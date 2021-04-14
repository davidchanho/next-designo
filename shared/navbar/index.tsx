import Link from "next/link";
import React from "react";
import { Nav } from "../nav";
import { Row } from "../row";
import Brand from "./Brand";

function Navbar() {
  return (
    <header>
      <Row>
        <Brand />
        <Nav>
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
        </Nav>
      </Row>
    </header>
  );
}

export default Navbar;
