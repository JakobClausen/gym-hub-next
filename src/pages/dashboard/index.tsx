import React from 'react';
import { DashLayout } from '../../components/dashboard/DashLayout';
import { Hello } from '../../components/dashboard/Hello';
import { LinkButton } from '../../components/LinkButton';
import { Loading } from '../../components/Loading';
import { useAppContext } from '../../context/AppContext';
import { BottomContainerDash } from '../../styles/styledComponents/containers';
import { DashContentContainer } from '../../styles/styledComponents/dashboard';
import { isMobile } from '../../utils/platformUtils';

interface DashboardProps {}

const Dashboard: React.FC<DashboardProps> = ({}) => {
  const { user } = useAppContext();
  if (!user) return <Loading />;
  return (
    <DashLayout>
      <DashContentContainer>
        <Hello name={user.firstName}></Hello>
      </DashContentContainer>
      {!isMobile() && (
        <BottomContainerDash>
          <LinkButton as="/timer" href="/timer">
            Go to timer
          </LinkButton>
        </BottomContainerDash>
      )}
    </DashLayout>
  );
};

export default Dashboard;
