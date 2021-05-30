import React from "react";
import {
  GridOne,
  GridTwo,
  TimerContainer,
  WhiteboardPlaceholder,
} from "../styles/styledComponents/timer";

interface TimerProps {}

const Timer: React.FC<TimerProps> = ({}) => {
  return (
    <TimerContainer>
      <GridOne>
        <div
          style={{ backgroundColor: "#d6e266", width: "100%", height: "100%" }}
        ></div>
        <GridTwo>
          <div
            style={{
              backgroundColor: "#ff0000",
              width: "100%",
              height: "100%",
            }}
          ></div>
          <WhiteboardPlaceholder />
        </GridTwo>
      </GridOne>
    </TimerContainer>
  );
};

export default Timer;
