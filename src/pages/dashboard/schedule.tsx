import { DashLayout } from '../../components/dashboard/DashLayout';
import { DashContentContainer } from '../../styles/styledComponents/dashboard';
import { H4 } from '../../styles/styledComponents/titles';

interface ScheduleProps {}

const Schedule: React.FC<ScheduleProps> = ({}) => {
  return (
    <DashLayout>
      <DashContentContainer>
        <H4>Schedule</H4>
      </DashContentContainer>
    </DashLayout>
  );
};

export default Schedule;
