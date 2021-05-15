import { SpaceBetween } from "../../styles/styledComponents/align";
import { H4 } from "../../styles/styledComponents/titles";
import { PrimaryContainer } from "../../styles/styledComponents/containers";
import { Avatar, NavIcon } from "../../styles/styledComponents/image";
import { TopLayout, BottomNav } from "../../styles/styledComponents/dashboard";
import { DashNavButton } from "./DashNavButton";

interface DashLayoutProps {}

export const DashLayout: React.FC<DashLayoutProps> = ({ children }) => {
  return (
    <PrimaryContainer>
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
    </PrimaryContainer>
  );
};
