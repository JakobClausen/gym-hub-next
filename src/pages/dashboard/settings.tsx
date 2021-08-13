import React from 'react';
import { DashLayout } from '../../components/dashboard/DashLayout';
import { LinkButton } from '../../components/LinkButton';
import { useLogoutMutation } from '../../generated/graphql';
import { BottomContainerDash } from '../../styles/styledComponents/containers';
import { DashContentContainer } from '../../styles/styledComponents/dashboard';
import { H3 } from '../../styles/styledComponents/titles';

interface SettingsProps {}

const Settings: React.FC<SettingsProps> = ({}) => {
  const [logout] = useLogoutMutation();

  const handleLogout = () => logout();
  return (
    <DashLayout>
      <DashContentContainer>
        <H3>Settings</H3>
        <BottomContainerDash>
          <LinkButton as="/" href="/" onClick={handleLogout}>
            Logout
          </LinkButton>
        </BottomContainerDash>
      </DashContentContainer>
    </DashLayout>
  );
};

export default Settings;
