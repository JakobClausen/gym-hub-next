import styled from 'styled-components';

export const IconContainer = styled.div`
  height: 8vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const ButtonLink = styled.a`
  width: 100%;
  cursor: pointer;
`;

export const DashContentContainer = styled.div`
  margin: 10vh 0px;
  width: 100%;
  height: auto;
  background: ${(props) => props.theme.colors.primary};
`;

export const NavigationLine = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: #000000;
`;

export const NavigationTitle = styled.p`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  color: ${(props) => props.theme.colors.blackText};
  font-size: 10px;
  text-align: center;
`;
