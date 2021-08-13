import styled from 'styled-components';

export const PrimaryContainer = styled.div`
  height: 100vh;
  width: 100%;
  padding: ${(props) => props.theme.padding.border};
  background: ${(props) => props.theme.colors.primary};
  position: relative;
`;

export const BottomContainer = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  padding: ${(props) => props.theme.padding.border};
  background: ${(props) => props.theme.colors.primary};
`;

export const TopBottomSpace = styled.div`
  margin: ${(props) => `${props.theme.padding.border} 0px`};
`;

export const InputContainer = styled.div`
  margin-bottom: 10px;
`;
