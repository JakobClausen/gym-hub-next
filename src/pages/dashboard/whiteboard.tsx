import { DashLayout } from "../../components/dashboard/DashLayout";
import { DashContentContainer } from "../../styles/styledComponents/dashboard";
import { H4 } from "../../styles/styledComponents/titles";

interface WhiteboardProps {}

const Whiteboard: React.FC<WhiteboardProps> = ({}) => {
  return (
    <DashLayout>
      <DashContentContainer>
        <H4>whiteboard</H4>
      </DashContentContainer>
    </DashLayout>
  );
};

export default Whiteboard;
