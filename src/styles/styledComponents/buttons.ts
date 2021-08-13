import styled from 'styled-components';

export const Button = styled.button`
  width: 100%;
  height: 50px;
  border-radius: 8px;
  background: ${(props) => props.theme.colors.secondary};
  border: none;
  cursor: pointer;
  color: ${(props) => props.theme.colors.whiteText};
`;
