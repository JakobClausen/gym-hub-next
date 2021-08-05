import { DashLayout } from '../../components/dashboard/DashLayout';
import { DashContentContainer } from '../../styles/styledComponents/dashboard';
import { H4 } from '../../styles/styledComponents/titles';

interface RemoteProps {}

const Remote: React.FC<RemoteProps> = ({}) => {
  return (
    <DashLayout>
      <DashContentContainer>
        <H4>remote</H4>
      </DashContentContainer>
    </DashLayout>
  );
};

export default Remote;
