import React from "react";
import { Grid } from "../../../shared/grid";
import { DesignListProps } from "../../../types";
import { DesignCard } from "../design-card";

function CardList({ list }: DesignListProps) {
  return (
    <Grid>
      {list.map((l) => (
        <DesignCard key={l.id} {...l} />
      ))}
    </Grid>
  );
}

export default CardList;
