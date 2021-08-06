import dayjs from 'dayjs';
import { AnimateSharedLayout, motion } from 'framer-motion';
import React from 'react';
import { GymClass } from '../../../generated/graphql';
import {
  Container,
  NewScheduleBtn,
} from '../../../styles/styledComponents/schedule';
import { Weekdays } from '../../../types/schedule';
import { ScheduleCard } from './ScheduleCard';

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
        <AnimateSharedLayout>
          <motion.ul layout style={{ padding: 0 }}>
            {list.map((item) => (
              <ScheduleCard key={item.startTime} gymClass={item}></ScheduleCard>
            ))}
          </motion.ul>
          <motion.div layout>
            <NewScheduleBtn>+</NewScheduleBtn>
          </motion.div>
        </AnimateSharedLayout>
      ) : (
        <>
          <p style={{ color: 'white' }}>{`No Classes ${dayTitle}`}</p>
          <NewScheduleBtn>+</NewScheduleBtn>
        </>
      )}
    </Container>
  );
};
