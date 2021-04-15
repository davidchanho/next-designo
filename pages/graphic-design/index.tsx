import React from "react";
import DesignTemplate from "../../components/designs/design-template";
import { useAppContext } from "../../context";

function GraphicDesign() {
  const { graphic } = useAppContext();
  return <DesignTemplate {...graphic} />;
}

export default GraphicDesign;
