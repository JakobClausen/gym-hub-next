import React from 'react';
import { DashLayout } from '../../components/dashboard/DashLayout';
import { Hello } from '../../components/dashboard/Hello';
import { LinkButton } from '../../components/LinkButton';
import { Loading } from '../../components/Loading';
import { useAppContext } from '../../context/AppContext';
import { TopBottomSpace } from '../../styles/styledComponents/containers';
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
        <TopBottomSpace>
          <LinkButton title="Go to timer" as="/timer" href="/timer" />
        </TopBottomSpace>
      )}
    </DashLayout>
  );
};

export default Dashboard;
