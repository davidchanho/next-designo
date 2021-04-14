import styled from "styled-components";

export const Container = styled.section`
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.primaryText};
  border-radius: ${(props) => props.theme.utils.borderRadius};
  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
  }
`;
