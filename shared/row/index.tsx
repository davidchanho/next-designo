import styled from "styled-components";

export const Row = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
  }
`;
