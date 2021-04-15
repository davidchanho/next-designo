import React from "react";
import CategoryCard from "./CategoryCard";
import { Grid } from "./Designs.styles";

interface Props {
  links: string[];
}

function CategoryDesigns({ links }: Props) {
  return (
    <Grid>
      {links.map((link, index) => {
        return <CategoryCard key={`design-card-${index}`} link={link} />;
      })}
    </Grid>
  );
}

export default CategoryDesigns;
