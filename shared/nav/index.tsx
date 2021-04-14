import styled from "styled-components";
import { Row } from "../row";

export const Nav = styled(Row)`
  li {
    &:not(:last-child) {
      margin-right: 1rem;
    }
  }
`;
