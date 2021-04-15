import styled from "styled-components";

export const AboutSection = styled.section`
  margin-bottom: 4.875rem;
  img {
    margin-bottom: 4.875rem;
  }
  h3 {
    color: ${(props) => props.theme.colors.secondary};
  }
  p {
    color: ${(props) => props.theme.colors.primaryText};
  }

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    text-align: center;
  }
`;
