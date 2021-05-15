import { H3 } from "../../styles/styledComponents/titles";

interface HelloProps {
  name: string;
}

export const Hello: React.FC<HelloProps> = ({ name }) => {
  return (
    <H3 style={{ fontSize: "20px", fontWeight: "bold" }}>{`Hello, ${name}`}</H3>
  );
};
