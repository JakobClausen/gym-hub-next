import { SpaceBetween } from "../../styles/styledComponents/align";
import { H4 } from "../../styles/styledComponents/titles";
import { Avatar } from "../../styles/styledComponents/image";
import {
  LayoutContainer,
  TopLayout,
  BottomNav,
} from "../../styles/styledComponents/layout";
import { DashNavButton } from "./DashNavButton";

interface DashLayoutProps {}

export const DashLayout: React.FC<DashLayoutProps> = ({ children }) => {
  return (
    <LayoutContainer>
      <TopLayout>
        <SpaceBetween>
          <H4>Dashboard</H4>
          <Avatar />
        </SpaceBetween>
      </TopLayout>
      {children}
      <BottomNav>
        <SpaceBetween>
          <DashNavButton src="/icons/dashboardsvg.svg" />
          <DashNavButton src="/icons/dashboardsvg.svg" />
          <DashNavButton src="/icons/dashboardsvg.svg" />
          <DashNavButton src="/icons/dashboardsvg.svg" />
        </SpaceBetween>
      </BottomNav>
    </LayoutContainer>
  );
};
