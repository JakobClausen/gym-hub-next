import React from 'react';
import {
  ClockContainer,
  ClockText,
  Container,
} from '../../styles/styledComponents/timer/header';
import { Logo } from './Logo';

interface TimerHeaderProps {
  clock: string;
  logo: string;
}

export const TimerHeader: React.FC<TimerHeaderProps> = ({ clock, logo }) => {
  return (
    <Container>
      <ClockContainer>
        <ClockText>{clock}</ClockText>
      </ClockContainer>
      {logo && <Logo src={logo} />}
    </Container>
  );
};
