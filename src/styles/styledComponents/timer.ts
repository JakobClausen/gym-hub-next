import styled from "styled-components";

export const TimerContainer = styled.div`
  height: 100vh;
  width: 100vw;
  padding: ${(props) => props.theme.timer.padding.border};
  background: ${(props) => props.theme.timer.color.background};
`;

export const GridOne = styled.div`
  display: grid;
  height: 100%;
  width: 100%;
  grid-template-columns: auto;
  grid-template-rows: 10% auto;
  gap: 20px;
`;

export const GridTwo = styled.div`
  display: grid;
  height: 100%;
  width: 100%;
  grid-template-columns: 25% auto;
  grid-template-rows: auto;
  gap: 20px;
`;

export const WhiteboardPlaceholder = styled.div`
  height: 100%;
  width: 100%;
  border-radius: 8px;
  background-color: #fffafa;
`;
