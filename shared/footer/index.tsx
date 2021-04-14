import Link from "next/link";
import React from "react";
import { Nav } from "../nav";
import { Row } from "../row";
import { Container, Contact } from "./Footer.styles";

function Footer() {
  return (
    <Container>
      <Row>
        <Link href="/">
          <img
            src="/assets/shared/desktop/logo-light.png"
            alt=""
            width={404}
            height={54}
          />
        </Link>

        <ul>
          <Nav>
            <li>Our Company</li>
            <li>Locations</li>
            <li>Contact</li>
          </Nav>
        </ul>
      </Row>
      <Contact>
        <div>
          <p>Designo Central Office</p>
          <p>3886 Wellington Street</p>
          <p>Toronto, Ontario M9C 3J5</p>
        </div>
        <div>
          <p>Contact Us (Central Office)</p>
          <p>P : +1 253-863-8967</p>
          <p>M : contact@designo.co</p>
        </div>
        <div>
          <ul>
            <Nav>
              <li>
                <img src="/assets/shared/desktop/icon-facebook.svg" />
              </li>
              <li>
                <img src="/assets/shared/desktop/icon-youtube.svg" />
              </li>
              <li>
                <img src="/assets/shared/desktop/icon-twitter.svg" />
              </li>
              <li>
                <img src="/assets/shared/desktop/icon-pinterest.svg" />
              </li>
              <li>
                <img src="/assets/shared/desktop/icon-instagram.svg" />
              </li>
            </Nav>
          </ul>
        </div>
      </Contact>
    </Container>
  );
}

export default Footer;
