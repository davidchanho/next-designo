import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Card, Grid } from "./Designs.styles";

function Designs() {
  return (
    <Grid>
      <Link href="/web-design">
        <Card>
          <Image
            src="/assets/home/desktop/image-web-design-large.jpg"
            alt=""
            width={541}
            height={640}
          />
          <hgroup>
            <h2>WEB DESIGN</h2>
            <h3>
              VIEW PROJECTS{" "}
              <img
                src="/assets/shared/desktop/icon-right-arrow.svg"
                alt=""
                width={4}
                height={8}
              />{" "}
            </h3>
          </hgroup>
        </Card>
      </Link>

      <Link href="/app-design">
        <Card>
          <Image
            src="/assets/home/desktop/image-app-design.jpg"
            alt=""
            width={541}
            height={308}
          />
          <hgroup>
            <h2>APP DESIGN</h2>
            <h3>
              VIEW PROJECTS{" "}
              <img
                src="/assets/shared/desktop/icon-right-arrow.svg"
                alt=""
                width={4}
                height={8}
              />{" "}
            </h3>
          </hgroup>
        </Card>
      </Link>
      <Link href="/app-design">
        <Card>
          <Image
            src="/assets/home/desktop/image-graphic-design.jpg"
            alt=""
            width={541}
            height={308}
          />
          <hgroup>
            <h2>GRAPHIC DESIGN</h2>
            <h3>
              VIEW PROJECTS{" "}
              <img
                src="/assets/shared/desktop/icon-right-arrow.svg"
                alt=""
                width={4}
                height={8}
              />{" "}
            </h3>
          </hgroup>
        </Card>
      </Link>
    </Grid>
  );
}

export default Designs;
