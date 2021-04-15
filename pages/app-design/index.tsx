import React from "react";
import DesignTemplate from "../../components/designs/design-template";
import { useAppContext } from "../../context";


function AppDesign() {
  const { app } = useAppContext();
  return <DesignTemplate {...app} />;
}

export default AppDesign;
