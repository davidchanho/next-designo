import React from "react";
import { Card } from "./Designs.styles";
import { Props } from "./Designs.types";
import ViewProjects from "./ViewProjects";

const CategoryCard = ({ link }: Props) => {
  return (
    <Card>
      <div className='highlight' />
      <img
        src={`/assets/home/desktop/image-${link}-design.jpg`}
        alt=""
        width={541}
        height={640}
      />
      <hgroup>
        <h3>{link} design</h3>
        <ViewProjects link={link} />
      </hgroup>
    </Card>
  );
};

export default CategoryCard;
