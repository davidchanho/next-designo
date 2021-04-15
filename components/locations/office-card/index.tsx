import Image from "next/image";
import React from "react";
import { Card } from "../../../shared/card";

function OfficeCard({
  map,
  country,
  office: { name, street, city, region, postCode },
  contact: { phone, email },
}) {
  return (
    <Card id={`#${country}`}>
      <Image src={map} alt="" width={375} height={320} />
      <h2>{country}</h2>
      <div>
        <h3>{name}</h3>
        <p>{street}</p>
        <p>
          {city} {region} {postCode}
        </p>
      </div>
      <div>
        <h3>Contact</h3>
        <p>P: {phone}</p>
        <p>M: {email}</p>
      </div>
    </Card>
  );
}

export default OfficeCard;
