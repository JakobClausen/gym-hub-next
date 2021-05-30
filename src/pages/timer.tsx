import React from "react";
import { Whiteboard } from "../components/timer/Whiteboard";
import {
  HorizontalGrid,
  TimerContainer,
  VerticalGrid,
} from "../styles/styledComponents/timer/containers";

interface TimerProps {}

const Timer: React.FC<TimerProps> = ({}) => {
  return (
    <TimerContainer>
      <VerticalGrid>
        <div
          style={{ backgroundColor: "#d6e266", width: "100%", height: "100%" }}
        ></div>
        <HorizontalGrid>
          <div
            style={{
              backgroundColor: "#ff0000",
              width: "100%",
              height: "100%",
            }}
          ></div>
          <Whiteboard />
        </HorizontalGrid>
      </VerticalGrid>
    </TimerContainer>
  );
};

export default Timer;
