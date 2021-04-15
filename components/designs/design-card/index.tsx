import Image from "next/image";
import React from "react";
import { DesignProps } from "../../../types";
import { DesignCardContainer } from "./DesignCard.styles";

export const DesignCard = ({ src, title, subtitle }: DesignProps) => {
  if (!src) {
    return null;
  }

  return (
    <DesignCardContainer>
      <Image src={src} alt="" width={327} height={320} />
      <div>
        <h3>{title}</h3>
        <p>{subtitle}</p>
      </div>
    </DesignCardContainer>
  );
};
