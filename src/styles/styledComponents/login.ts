import styled from 'styled-components';

export const CenterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: ${(props) => props.theme.padding.border};
`;

export const TopContainer = styled.div`
  width: 100%;
  height: 30vh;
`;

export const LogoContainer = styled.div`
  width: 100%;
  height: 65%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: blue;
`;
