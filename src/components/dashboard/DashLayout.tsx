import { SpaceBetween } from "../../styles/styledComponents/align";
import { H4 } from "../../styles/styledComponents/titles";
import { Avatar } from "../../styles/styledComponents/image";
import {
  LayoutContainer,
  TopLayout,
  BottomNav,
} from "../../styles/styledComponents/layout";
import { DashNavButton } from "./DashNavButton";
import Link from "next/link";

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
          <Link as="/dashboard" href="/dashboard">
            <a style={{ width: "100%" }}>
              <DashNavButton src="/icons/dashboard.svg" />
            </a>
          </Link>
          <Link as="/dashboard/whiteboard" href="/dashboard/whiteboard">
            <a style={{ width: "100%" }}>
              <DashNavButton src="/icons/whiteboard.png" />
            </a>
          </Link>
          <Link as="/dashboard/remote" href="/dashboard/remote">
            <a style={{ width: "100%" }}>
              <DashNavButton src="/icons/remote.png" />
            </a>
          </Link>
          <Link as="/dashboard/settings" href="/dashboard/settings">
            <a style={{ width: "100%" }}>
              <DashNavButton src="/icons/settings.png" />
            </a>
          </Link>
        </SpaceBetween>
      </BottomNav>
    </LayoutContainer>
  );
};
