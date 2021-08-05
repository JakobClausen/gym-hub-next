import Link from 'next/link';
import React from 'react';
import { DashLayout } from '../../components/dashboard/DashLayout';
import { Hello } from '../../components/dashboard/Hello';
import { useAppContext } from '../../context/AppContext';
import { Button } from '../../styles/styledComponents/buttons';
import { TopBottomSpace } from '../../styles/styledComponents/containers';
import { DashContentContainer } from '../../styles/styledComponents/dashboard';
import { isMobile } from '../../utils/platformUtils';

interface DashboardProps {}

const Dashboard: React.FC<DashboardProps> = ({}) => {
  const { user } = useAppContext();
  return (
    <DashLayout>
      <DashContentContainer>
        <Hello name={user!.firstName}></Hello>
      </DashContentContainer>
      {!isMobile() && (
        <TopBottomSpace>
          <Link as="/timer" href="/timer">
            <a style={{ width: '100%' }}>
              <Button>Go to timer</Button>
            </a>
          </Link>
        </TopBottomSpace>
      )}
    </DashLayout>
  );
};

export default Dashboard;
