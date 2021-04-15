import React from "react";
import CategoryDesigns from "../../../shared/designs";
import Template from "../../../shared/template";
import { DesignProps } from "../../../types";
import CardList from "../card-list";
import DesignHeader from "../design-header";


interface Props {
  title: string;
  subtitle: string;
  list: DesignProps[];
  links: string[];
}

function DesignTemplate({ title, subtitle, list, links }: Props) {
  return (
    <Template>
      <DesignHeader title={title} subtitle={subtitle} />
      <CardList list={list} />
      <CategoryDesigns links={links} />
    </Template>
  );
}

export default DesignTemplate;
