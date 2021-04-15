import React from "react";
import { useAppContext } from "../../../context";
import { Row } from "../../../shared/row";
import OfficeCard from "../office-card";

function OfficeList() {
  const { locations } = useAppContext();

  return (
    <Row>
      {locations.map((location) => (
        <OfficeCard key={location.id} {...location} />
      ))}
    </Row>
  );
}

export default OfficeList;
