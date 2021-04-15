import styled from "styled-components";

export const Container = styled.section`
  background-color: ${(props) => props.theme.colors.darkBackground};
  color: ${(props) => props.theme.colors.darkText};
  text-align: center;
  width: 100%;
  background-image: url("/assets/home/desktop/image-hero-phone.png");
  background-repeat: no-repeat;

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {

  }
  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) and (min-width: ${(props) => props.theme.breakpoints.mobile}) {
    border-radius: ${(props) => props.theme.utils.borderRadius};
  }
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    border-radius: ${(props) => props.theme.utils.borderRadius};
    height: 843px;
    background-position: 0 0;
  }
`;
