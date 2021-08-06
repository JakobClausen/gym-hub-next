import dayjs from 'dayjs';
import React from 'react';
import { GymClass } from '../../../generated/graphql';
import {
  Card,
  Container,
  NewScheduleBtn,
} from '../../../styles/styledComponents/schedule';
import { Weekdays } from '../../../types/schedule';

interface ScheduleListProps {
  list: null | Pick<GymClass, 'type' | 'startTime' | 'endTime'>[];
  selectedDay: number;
}

export const ScheduleList: React.FC<ScheduleListProps> = ({
  list,
  selectedDay,
}) => {
  const dayTitle =
    selectedDay === dayjs().day() ? 'today' : `on ${Weekdays[selectedDay]}`;
  return (
    <Container>
      {list && list.length > 0 ? (
        list.map((item) => <Card key={item.startTime}>{item.type}</Card>)
      ) : (
        <p style={{ color: 'white' }}>{`No Classes ${dayTitle}`}</p>
      )}
      <NewScheduleBtn>+</NewScheduleBtn>
    </Container>
  );
};
