import { NavIcon } from "../../styles/styledComponents/image";
import { IconContainer } from "../../styles/styledComponents/dashboard";

interface DashNavButtonProps {
  src: string;
}

export const DashNavButton: React.FC<DashNavButtonProps> = ({ src }) => {
  return (
    <IconContainer>
      <NavIcon src={src} />
    </IconContainer>
  );
};
