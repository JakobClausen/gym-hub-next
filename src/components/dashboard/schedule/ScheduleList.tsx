import React from 'react';
import { GymClass } from '../../../generated/graphql';
import {
  Card,
  Container,
  NewScheduleBtn,
} from '../../../styles/styledComponents/schedule';

interface ScheduleListProps {
  list: Pick<GymClass, 'type' | 'startTime' | 'endTime'>[];
}

export const ScheduleList: React.FC<ScheduleListProps> = ({ list }) => {
  return (
    <Container>
      {list.map((item) => (
        <Card key={item.startTime}>{item.type}</Card>
      ))}
      <NewScheduleBtn>+</NewScheduleBtn>
    </Container>
  );
};
