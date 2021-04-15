import Link from "next/link";
import React from "react";
import { Row } from "../row";
import { Contact, Container, Nav, Social } from "./Footer.styles";

function Footer() {
  return (
    <Container>
      <Row>
        <Link href="/">
          <img
            src="/assets/shared/desktop/logo-light.png"
            alt=""
            width={202}
            height={27}
          />
        </Link>

        <Nav>
          <li>
            <Link href="/about">Our Company</Link>
          </li>
          <li>
            <Link href="/locations">Locations</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </Nav>
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
          <Social>
            <li>
              <Link href="https://www.facebook.com/">
                <img
                  src="/assets/shared/desktop/icon-facebook.svg"
                  alt=""
                  width={24}
                  height={24}
                />
              </Link>
            </li>
            <li>
              <Link href="https://www.youtube.com/">
                <img
                  src="/assets/shared/desktop/icon-youtube.svg"
                  alt=""
                  width={24}
                  height={24}
                />
              </Link>
            </li>
            <li>
              <Link href="https://twitter.com/">
                <img
                  src="/assets/shared/desktop/icon-twitter.svg"
                  alt=""
                  width={24}
                  height={24}
                />
              </Link>
            </li>
            <li>
              <Link href="https://www.pinterest.com/">
                <img
                  src="/assets/shared/desktop/icon-pinterest.svg"
                  alt=""
                  width={24}
                  height={24}
                />
              </Link>
            </li>
            <li>
              <Link href="https://www.instagram.com/">
                <img
                  src="/assets/shared/desktop/icon-instagram.svg"
                  alt=""
                  width={24}
                  height={24}
                />
              </Link>
            </li>
          </Social>
        </div>
      </Contact>
    </Container>
  );
}

export default Footer;
