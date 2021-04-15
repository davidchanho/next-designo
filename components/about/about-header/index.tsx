import styled from "styled-components";

export const AboutHeader = styled.header`
  margin-bottom: 4.875rem;
  background-color: ${(props) => props.theme.colors.secondary};
  img {
    margin-bottom: 4.875rem;
  }
  h3 {
    color: ${(props) => props.theme.colors.secondaryText};
  }
  p {
    color: ${(props) => props.theme.colors.secondaryText};
  }

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    text-align: center;
  }
`;
