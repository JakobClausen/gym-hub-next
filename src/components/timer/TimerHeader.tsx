import React from 'react';
import {
  ClockContainer,
  ClockText,
  Container,
} from '../../styles/styledComponents/timer/header';
import { Logo } from './Logo';

interface TimerHeaderProps {
  clock: string;
}

export const TimerHeader: React.FC<TimerHeaderProps> = ({ clock }) => {
  return (
    <Container>
      <ClockContainer>
        <ClockText>{clock}</ClockText>
      </ClockContainer>
      <Logo />
    </Container>
  );
};
