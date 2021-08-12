import Link from 'next/link';
import { useRouter } from 'next/router';
import { DashLayout } from '../../components/dashboard/DashLayout';
import { useLogoutMutation } from '../../generated/graphql';
import { Button } from '../../styles/styledComponents/buttons';
import { BottomContainer } from '../../styles/styledComponents/containers';
import { DashContentContainer } from '../../styles/styledComponents/dashboard';
import { H3 } from '../../styles/styledComponents/titles';

interface SettingsProps {}

const Settings: React.FC<SettingsProps> = ({}) => {
  const [logout] = useLogoutMutation();
  const router = useRouter();

  const handleLogout = () => logout();
  return (
    <DashLayout>
      <DashContentContainer>
        <H3>Settings</H3>
        <BottomContainer>
          <Link as="/" href="/">
            <a style={{ width: '100%' }}>
              <Button onClick={handleLogout}>Logout</Button>
            </a>
          </Link>
        </BottomContainer>
      </DashContentContainer>
    </DashLayout>
  );
};

export default Settings;
