import styled from "styled-components";
import { Row } from "../row";

export const Container = styled(Row)`
  margin-bottom: 7.5rem;
`;

export const Card = styled.article`
  margin: 0 auto;
  text-align: center;
  max-width: 20.4375rem;

  img {
    margin-bottom: 2.6875rem;
    background-image: url("assets/shared/desktop/bg-pattern-small-circle.svg");
    background-repeat: no-repeat;
    background-position: center center;
    /* &:first-child {
      transform: rotate(180deg);
    }
    &:nth-child(2) {
      transform: rotate(-90deg);
    }
    &:last-child {
      transform: rotate(90deg);
    } */
  }

  h3 {
    margin-bottom: 2rem;
  }

  button {
    margin-bottom: 2rem;
  }
`;
