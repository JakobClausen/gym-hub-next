import React from "react";
import { WhiteboardContainer } from "../../styles/styledComponents/timer/containers";
import { WhiteboardText } from "./WhiteboardText";

interface WhiteboardProps {}

export const Whiteboard: React.FC<WhiteboardProps> = ({}) => {
  return (
    <WhiteboardContainer>
      {[1, 2, 3].map((item) => {
        return <WhiteboardText key={item} />;
      })}
    </WhiteboardContainer>
  );
};
