import styled from "styled-components";

export const IconContainer = styled.div`
  height: 10vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DashContentContainer = styled.div`
  margin-top: 10vh;
  width: 100%;
  height: auto;
  background: ${(props) => props.theme.colors.primary};
`;
