import { transparentize } from "polished";
import styled from "styled-components";
import { Row } from "../row";

export const Container = styled.footer`
  background-color: ${(props) => props.theme.colors.black};
  color: ${(props) => props.theme.colors.white};
`;

export const Contact = styled(Row)`
  border-top: 1px solid ${(props) => props.theme.colors.darker};
  color: ${(props) => transparentize(0.5, props.theme.colors.white)};

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    align-items: flex-end;
  }
`;
