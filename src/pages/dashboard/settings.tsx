import { DashLayout } from "../../components/dashboard/DashLayout";
import { DashContentContainer } from "../../styles/styledComponents/dashboard";
import { H4 } from "../../styles/styledComponents/titles";

interface SettingsProps {}

const Settings: React.FC<SettingsProps> = ({}) => {
  return (
    <DashLayout>
      <DashContentContainer>
        <H4>Settings</H4>
      </DashContentContainer>
    </DashLayout>
  );
};

export default Settings;
