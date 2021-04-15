import styled from "styled-components";
import { Card } from "../../../shared/card";

export const DesignCardContainer = styled(Card)`
  div {
    background-color: ${(props) => props.theme.colors.hover};
  }
  h3 {
    text-transform: uppercase;
    color: ${(props) => props.theme.colors.secondary};
  }
  P {
    color: ${(props) => props.theme.colors.darker};
  }
`;
