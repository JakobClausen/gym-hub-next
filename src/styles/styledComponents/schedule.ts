import styled from 'styled-components';

export const WeekdayBtn = styled.button`
  width: 100px;
  padding: 10px;
  cursor: pointer;
`;

export const Container = styled.div`
  width: 100%;
  margin: 20px 0px;
`;

export const Card = styled.div`
  width: 100%;
  height: 100px;
  border-radius: 8px;
  background-color: gray;
  margin: 10px 0px;
  cursor: pointer;
`;

export const NewScheduleBtn = styled.div`
  width: 100%;
  height: 100px;
  border-radius: 8px;
  background-color: gray;
  margin: 10px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  font-size: 60px;
  cursor: pointer;
`;

export const InputContainer = styled.div`
  margin-bottom: 10px;
`;

export const InputContainerFlex = styled.div`
  width: 100%;
  margin-bottom: 10px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
`;

export const BtnContainerFlex = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 65% auto;
  gap: 10px;
`;

export const CardLoader = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #000000;
  opacity: 0.4;
  display: flex;
  justify-content: center;
  align-items: center;
`;
