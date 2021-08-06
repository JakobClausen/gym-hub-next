import React from 'react';
import { GymClass } from '../../../generated/graphql';
import {
  Card,
  Container,
  NewScheduleBtn,
} from '../../../styles/styledComponents/schedule';

interface ScheduleListProps {
  list: null | Pick<GymClass, 'type' | 'startTime' | 'endTime'>[];
}

export const ScheduleList: React.FC<ScheduleListProps> = ({ list }) => {
  return (
    <Container>
      {list && list.length > 0 ? (
        list.map((item) => <Card key={item.startTime}>{item.type}</Card>)
      ) : (
        <>
          <p style={{ color: 'white' }}>No Classes today</p>
        </>
      )}
      <NewScheduleBtn>+</NewScheduleBtn>
    </Container>
  );
};
