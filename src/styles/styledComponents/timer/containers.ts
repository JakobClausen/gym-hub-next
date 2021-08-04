import styled from 'styled-components';

export const TimerContainer = styled.div`
  height: 100vh;
  width: 100vw;
  padding: ${(props) => props.theme.timer.padding.border};
  background: ${(props) => props.theme.timer.color.background};
`;

export const VerticalGrid = styled.div`
  display: grid;
  height: 100%;
  width: 100%;
  grid-template-columns: auto;
  grid-template-rows: 10% auto;
  gap: 20px;
`;

export const HorizontalGrid = styled.div`
  display: grid;
  height: 100%;
  width: 100%;
  grid-template-columns: 25% auto;
  grid-template-rows: auto;
  gap: 20px;
`;

export const WhiteboardContainer = styled.div<{ length?: number }>`
  height: 100%;
  width: 100%;
  border-radius: 8px;
  display: grid;
  grid-template-columns: ${(props) => `repeat(${props.length}, 1fr)`};
  grid-template-rows: 1fr;
  gap: 7px;
  overflow: hidden;
  background-color: #000000;
`;

export const WhiteboardContainerItem = styled.div`
  height: 100%;
  width: 100%;
  background-color: #fff1f1;
  padding: 20px;
`;
