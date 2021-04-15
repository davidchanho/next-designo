import styled from "styled-components";

interface Props {
  primary?: boolean;
}

const Button = styled.button<Props>`
  background-color: ${(props) =>
    props.primary
      ? props.theme.colors.primary
      : props.theme.colors.secondary};
  color: ${(props) =>
    props.primary
      ? props.theme.colors.primaryText
      : props.theme.colors.secondaryText};
  border-radius: 0.5rem;
  max-width: 9.5rem;
  width: 100%;
  height: 3.25rem;
  font-weight: 500;
  text-transform: uppercase;

  &:hover {
    background-color: ${(props) => props.theme.colors.hover};
    color: ${(props) => props.theme.colors.hoverText};
  }
`;

export default Button;
