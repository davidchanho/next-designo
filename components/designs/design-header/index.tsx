import React from "react";
import DesignHeaderContainer from "./DesignHeader.styles";

interface Props {
  title: string;
  subtitle: string;
}

function DesignHeader({ title, subtitle }: Props) {
  return (
    <DesignHeaderContainer>
      <h3>{title}</h3>
      <p>{subtitle}</p>
    </DesignHeaderContainer>
  );
}

export default DesignHeader;
