import Link from 'next/link';
import React from 'react';
import { BaseRoutes } from '../../constants/routes';
import {
  ButtonLink,
  IconContainer,
  NavigationLine,
} from '../../styles/styledComponents/dashboard';
import { NavIcon } from '../../styles/styledComponents/image';

interface DashNavButtonProps {
  src: string;
  isActive: boolean;
  endpoint: string;
  name: string;
}

export const DashNavButton: React.FC<DashNavButtonProps> = ({
  src,
  endpoint,
  isActive,
  name,
}) => {
  const path =
    endpoint === BaseRoutes.DASHBOARD
      ? BaseRoutes.DASHBOARD
      : `${BaseRoutes.DASHBOARD}${endpoint}`;
  return (
    <Link as={path} href={path}>
      <ButtonLink>
        <IconContainer>
          <NavIcon src={src} isActive={isActive} />
          {isActive && <NavigationLine />}
        </IconContainer>
      </ButtonLink>
    </Link>
  );
};
