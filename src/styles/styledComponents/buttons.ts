import styled from 'styled-components';

export const Button = styled.button`
  width: 100%;
  height: 50px;
  border-radius: 8px;
  opacity: ${(props) => (props.disabled ? 0.4 : 1)};
  margin: ${(props) => `${props.theme.spacing.button} 0px`};
  background: ${(props) => props.theme.colors.secondary};
  border: none;
  cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
  color: ${(props) => props.theme.colors.whiteText};
`;
