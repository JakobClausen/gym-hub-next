import { H3 } from "../../styles/styledComponents/titles";
import { WelcomeEmoji } from "../../styles/styledComponents/image";
import { Flex } from "../../styles/styledComponents/align";

interface HelloProps {
  name: string;
}

export const Hello: React.FC<HelloProps> = ({ name }) => {
  return (
    <>
      <H3 style={{ fontSize: "38px", fontWeight: "bold" }}>Hello,</H3>
      <Flex>
        <H3 style={{ fontSize: "38px", fontWeight: "bold" }}>{name}</H3>
        <WelcomeEmoji src="/icons/hand-emoji.png" />
      </Flex>
    </>
  );
};
