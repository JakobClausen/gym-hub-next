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
}

export const DashNavButton: React.FC<DashNavButtonProps> = ({
  src,
  endpoint,
  isActive,
}) => {
  const path =
    endpoint === BaseRoutes.DASHBOARD
      ? BaseRoutes.DASHBOARD
      : `${BaseRoutes.DASHBOARD}${endpoint}`;
  return (
    <Link as={path} href={path}>
      <ButtonLink>
        <IconContainer>
          <NavIcon src={src} />
          {isActive && <NavigationLine />}
        </IconContainer>
      </ButtonLink>
    </Link>
  );
};
