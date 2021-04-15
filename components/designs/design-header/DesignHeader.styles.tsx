import styled from "styled-components";

const DesignHeaderContainer = styled.div`
  width: 100%;
  text-align: center;
  color: ${(props) => props.theme.colors.secondaryText};
  background-color: ${(props) => props.theme.colors.secondary};
`;

export default DesignHeaderContainer;
