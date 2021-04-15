import { transparentize } from "polished";
import styled from "styled-components";
import { Row } from "../row";

export const Container = styled.footer`
  background-color: ${(props) => props.theme.colors.black};
  color: ${(props) => props.theme.colors.white};
  text-align: center;

  img {
    text-align: center;
  }

  a {
    color: ${(props) => props.theme.colors.white};
  }
`;

export const Nav = styled(Row)`
  list-style-type: none;
  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    li {
      &:not(:last-child) {
        margin-right: 1rem;
      }
    }
  }
`;

export const Social = styled.ul`
  display: flex;
  flex-direction: row;
  li {
    cursor: pointer;

    &:not(:last-child) {
      margin-right: 1rem;
    }
  }

  img {
    &:hover {
      color: ${(props) => props.theme.colors.hover};
    }
  }
`;

export const Contact = styled(Row)`
  border-top: 1px solid ${(props) => props.theme.colors.darker};
  color: ${(props) => transparentize(0.5, props.theme.colors.white)};

  p {
    margin: 0;
    padding: 0;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    align-items: flex-end;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    align-items: center;
  }
`;
