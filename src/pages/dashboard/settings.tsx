import { useRouter } from "next/router";
import { DashLayout } from "../../components/dashboard/DashLayout";
import { useLogoutMutation } from "../../generated/graphql";
import { DashContentContainer } from "../../styles/styledComponents/dashboard";
import { H4 } from "../../styles/styledComponents/titles";
import { Button } from "../../styles/styledComponents/buttons";
import { BottomContainer } from "../../styles/styledComponents/containers";

interface SettingsProps {}

const Settings: React.FC<SettingsProps> = ({}) => {
  const [logout] = useLogoutMutation();
  const router = useRouter();
  return (
    <DashLayout>
      <DashContentContainer>
        <H4>Settings</H4>
        <BottomContainer>
          <Button
            onClick={() => {
              logout();
              router.push("/");
            }}
          >
            Logout
          </Button>
        </BottomContainer>
      </DashContentContainer>
    </DashLayout>
  );
};

export default Settings;
