import Link from "next/link";
import React from "react";
import { Props } from "./Designs.types";

const ViewProjects = ({ link }: Props) => {
  return (
    <Link href={`/${link}-design`}>
      <h3>
        VIEW PROJECTS{" "}
        <img
          src="/assets/shared/desktop/icon-right-arrow.svg"
          alt=""
          width={4}
          height={8}
        />{" "}
      </h3>
    </Link>
  );
};
export default ViewProjects;
