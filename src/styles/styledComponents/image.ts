import styled from 'styled-components';

interface INavIcon {
  isActive: boolean;
}

export const NavIcon = styled.img<INavIcon>`
  width: 20px;
  height: 20px;
  opacity: ${(props) => (props.isActive ? 1 : 0.4)};
`;

export const WelcomeEmoji = styled.img`
  width: 30px;
  height: 30px;
  margin-left: 8px;
`;
