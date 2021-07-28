import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const Timeline = styled.div`
  width: 2px;
  height: 100%;
  background-color: whitesmoke;
  border-radius: 8px;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const TimelineFadeUp = styled.div`
  width: 2px;
  height: 2%;
  background: linear-gradient(to bottom, black 0%, white 50%);
  border-radius: 8px;
`;
export const TimelineFadeDown = styled.div`
  width: 2px;
  height: 2%;
  background: linear-gradient(to top, black 0%, white 50%);
  border-radius: 8px;
`;

export const List = styled.div`
  width: 100%;
  padding: 0px 20px;
`;

export const GymClassCard = styled.div`
  width: 100%;
  height: 70px;
  background-color: #222222;
  border-radius: 8px;
  margin-bottom: 30px;
  padding: 10px;
`;

export const GymClassCardActive = styled.div`
  width: 100%;
  height: 70px;
  background-color: green;
  border-radius: 8px;
  margin-bottom: 30px;
  padding: 10px;
`;

export const Text = styled.p`
  color: antiquewhite;
  font-size: 18px;
  margin: 0px;
`;
