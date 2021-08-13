import styled from 'styled-components';
import Theme from '../theme';

interface IBtn {
  btnType?: keyof typeof Theme.colors;
}

export const Button = styled.button<IBtn>`
  width: 100%;
  height: 50px;
  border-radius: 8px;
  opacity: ${(props) => (props.disabled ? 0.4 : 1)};
  margin: ${(props) => `${props.theme.spacing.button} 0px`};
  background: ${(props) =>
    props.btnType
      ? props.theme.colors[props.btnType]
      : props.theme.colors.secondary};
  border: none;
  cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
  color: ${(props) => props.theme.colors.whiteText};
`;
