import styled from "styled-components";
import { Row } from "../row";

export const Container = styled(Row)`
  li {
    &:not(:last-child) {
      margin-right: 2.625rem;
    }
  }

  @media (max-width: ${(props) =>
      props.theme.breakpoints.tablet}) and (min-width: ${(props) =>
      props.theme.breakpoints.mobile}) {
    display: none;
  }
`;
