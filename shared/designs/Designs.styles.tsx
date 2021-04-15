import { cover } from "polished";
import styled from "styled-components";

export const Grid = styled.section`
  width: 80vw;
  margin: 0 auto;
  display: grid;
  gap: 1.875rem;
  align-items: center;
  justify-content: center;

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    grid-template-areas:
      "web app"
      "web graphic";
  }
  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    grid-template-areas:
      "web"
      "app"
      "graphic";
  }
`;

export const Card = styled.div`
  position: relative;
  cursor: pointer;
  .highlight {
    ${cover()};
    &:hover {
      background-color: ${(props) => props.theme.colors.primary};
      opacity: 0.7;
      border-radius: ${(props) => props.theme.utils.borderRadius};
    }
  }

  &:first-child {
    grid-area: web;
  }
  &:nth-child(2) {
    grid-area: app;
  }
  &:last-child {
    grid-area: graphic;
  }

  img {
    border-radius: ${(props) => props.theme.utils.borderRadius};
  }

  hgroup {
    width: 100%;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: ${(props) => props.theme.colors.white};

    h3 {
      display: flex;
      align-items: center;
      justify-content: center;
      text-transform: uppercase;
      img {
        margin-left: 1.3125rem;
      }
    }
  }
`;
