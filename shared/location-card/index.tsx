import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useAppContext } from "../../context";
import Button from "../button";
import { Card, Container } from "./LocationCard.styles";

function Location() {
  const { locations } = useAppContext();
  return (
    <Container>
      {locations.map(({ id, src, country, link }) => (
        <Card key={id}>
          <Image src={src} alt="" width={202} height={202} />
          <h3>{country}</h3>
          <Link href={link}>
            <Button primary>SEE LOCATION</Button>
          </Link>
        </Card>
      ))}
    </Container>
  );
}

export default Location;
