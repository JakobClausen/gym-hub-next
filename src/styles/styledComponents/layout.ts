import styled from 'styled-components';

export const LayoutContainer = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  min-height: 100vh;
  background: ${(props) => props.theme.colors.primary};
  padding: ${(props) => props.theme.padding.border};
  background: ${(props) => props.theme.colors.primary};
`;

export const TopLayout = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 10vh;
  padding: ${(props) => `24px ${props.theme.padding.border}`};
  z-index: 999;
  background: ${(props) => props.theme.colors.primary};
`;

export const BottomNav = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 999;
  height: 8vh;
  background: ${(props) => props.theme.colors.primary};
`;
