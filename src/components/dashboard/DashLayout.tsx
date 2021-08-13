import { useRouter } from 'next/router';
import { bottomNav } from '../../constants/routes';
import { useAppContext } from '../../context/AppContext';
import { SpaceBetween } from '../../styles/styledComponents/align';
import {
  BottomNav,
  LayoutContainer,
  TopLayout,
} from '../../styles/styledComponents/layout';
import { H4 } from '../../styles/styledComponents/titles';
import { activeBottomNav } from '../../utils/routeUtils';
import { DashNavButton } from './DashNavButton';

interface DashLayoutProps {}

export const DashLayout: React.FC<DashLayoutProps> = ({ children }) => {
  const { gym } = useAppContext();
  const router = useRouter();
  const activeRoute = activeBottomNav(router.pathname);

  return (
    <LayoutContainer>
      <TopLayout>
        <SpaceBetween>
          <H4>Dashboard</H4>
          <H4>{gym?.name}</H4>
        </SpaceBetween>
      </TopLayout>
      {children}
      <BottomNav>
        <SpaceBetween>
          {bottomNav.map((nav) => {
            return (
              <DashNavButton
                key={nav.endpoint}
                src={nav.src}
                isActive={nav.endpoint === activeRoute}
                endpoint={nav.endpoint}
                name={nav.name}
              />
            );
          })}
        </SpaceBetween>
      </BottomNav>
    </LayoutContainer>
  );
};
