import styled from "styled-components";

export const PrimaryContainer = styled.div`
  height: 100vh;
  width: 100%;
  padding: ${(props) => props.theme.padding.border};
  background: ${(props) => props.theme.colors.primary};
`;
