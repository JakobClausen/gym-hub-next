import Link from 'next/link';
import { BaseRoutes } from '../../constants/routes';
import {
  ButtonLink,
  IconContainer,
} from '../../styles/styledComponents/dashboard';
import { NavIcon } from '../../styles/styledComponents/image';

interface DashNavButtonProps {
  src: string;
  endpoint?: string;
}

export const DashNavButton: React.FC<DashNavButtonProps> = ({
  src,
  endpoint,
}) => {
  const path = endpoint
    ? `${BaseRoutes.DASHBOARD}${endpoint}`
    : BaseRoutes.DASHBOARD;
  return (
    <Link as={path} href={path}>
      <ButtonLink>
        <IconContainer>
          <NavIcon src={src} />
        </IconContainer>
      </ButtonLink>
    </Link>
  );
};
