import styled from "styled-components";

export const TopLayout = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: ${(props) => props.theme.padding.border};
`;

export const BottomNav = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`;
