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
  padding-left: 20px;
`;

export const Card = styled.div<{ isActive?: boolean; hasPassed?: boolean }>`
  width: 100%;
  height: 90px;
  background-color: ${(props) => {
    return props.isActive
      ? props.theme.colors.activeGymClass
      : props.theme.colors.inactiveGymClass;
  }};
  border-radius: 8px;
  margin-bottom: 30px;
  padding: 10px;
  display: flex;
  opacity: ${(props) => (props.hasPassed ? 0.4 : 1)};
`;

export const TextContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const TimeContainer = styled.div`
  width: 100%;
  text-align: right;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const CardText = styled.p`
  color: antiquewhite;
  font-size: 18px;
  margin: 0px;
`;

export const TimeText = styled.p`
  color: antiquewhite;
  font-size: 18px;
  margin: 0px;
`;
