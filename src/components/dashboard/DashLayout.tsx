import { DashboardRouts } from '../../constants/routes';
import { SpaceBetween } from '../../styles/styledComponents/align';
import { Avatar } from '../../styles/styledComponents/image';
import {
  BottomNav,
  LayoutContainer,
  TopLayout,
} from '../../styles/styledComponents/layout';
import { H4 } from '../../styles/styledComponents/titles';
import { DashNavButton } from './DashNavButton';

interface DashLayoutProps {}

export const DashLayout: React.FC<DashLayoutProps> = ({ children }) => {
  return (
    <LayoutContainer>
      <TopLayout>
        <SpaceBetween>
          <H4>Dashboard</H4>
          <Avatar src="/images/fysikenAvatar.jpeg" />
        </SpaceBetween>
      </TopLayout>
      {children}
      <BottomNav>
        <SpaceBetween>
          <DashNavButton src="/icons/dashboard.svg" />
          <DashNavButton
            src="/icons/whiteboard.png"
            endpoint={DashboardRouts.WHITEBOARD}
          />
          <DashNavButton
            src="/icons/remote.png"
            endpoint={DashboardRouts.REMOTE}
          />
          <DashNavButton
            src="/icons/remote.png"
            endpoint={DashboardRouts.SCHEDULE}
          />
          <DashNavButton
            src="/icons/settings.png"
            endpoint={DashboardRouts.SETTINGS}
          />
        </SpaceBetween>
      </BottomNav>
    </LayoutContainer>
  );
};
