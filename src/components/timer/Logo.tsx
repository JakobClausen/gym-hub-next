import React from 'react';
import { LogoImg } from '../../styles/styledComponents/timer/header';

interface LogoProps {}

export const Logo: React.FC<LogoProps> = ({}) => {
  return (
    <LogoImg src="https://raw.githubusercontent.com/JakobClausen/ex-timer-web/master/src/assets/icons/logo_fysiken.png" />
  );
};
