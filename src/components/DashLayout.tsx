import { SpaceBetween } from "../styles/styledComponents/align";
import { H2 } from "../styles/styledComponents/titles";
import { PrimaryContainer } from "../styles/styledComponents/containers";
import { Avatar } from "../styles/styledComponents/image";
import { TopLayout, BottomNav } from "../styles/styledComponents/dashboard";

interface DashLayoutProps {
  firstName: string;
}

export const DashLayout: React.FC<DashLayoutProps> = ({
  children,
  firstName,
}) => {
  return (
    <PrimaryContainer>
      <TopLayout>
        <SpaceBetween>
          <H2>{`Welcome ${firstName}`}</H2>
          <Avatar />
        </SpaceBetween>
      </TopLayout>
      {children}
      <BottomNav>
        <SpaceBetween>
          <H2>{`Welcome ${firstName}`}</H2>
          <Avatar />
        </SpaceBetween>
      </BottomNav>
    </PrimaryContainer>
  );
};
