import React from 'react';
import { LogoImg } from '../../styles/styledComponents/timer/header';

interface LogoProps {
  src: string;
}

export const Logo: React.FC<LogoProps> = ({ src }) => {
  return <LogoImg src={src} />;
};
