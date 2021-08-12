import { DashLayout } from '../../components/dashboard/DashLayout';
import { DashContentContainer } from '../../styles/styledComponents/dashboard';
import { H3 } from '../../styles/styledComponents/titles';

interface RemoteProps {}

const Remote: React.FC<RemoteProps> = ({}) => {
  return (
    <DashLayout>
      <DashContentContainer>
        <H3>remote</H3>
      </DashContentContainer>
    </DashLayout>
  );
};

export default Remote;
