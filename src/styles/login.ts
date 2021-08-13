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
