import React from 'react';
import {
  ClockContainer,
  ClockText,
  Container,
  Logo,
} from '../../styles/styledComponents/timer/header';

interface TimerHeaderProps {
  clock: string;
}

export const TimerHeader: React.FC<TimerHeaderProps> = ({ clock }) => {
  return (
    <Container>
      <ClockContainer>
        <ClockText>{clock}</ClockText>
      </ClockContainer>
      <Logo>JAKOB</Logo>
    </Container>
  );
};
