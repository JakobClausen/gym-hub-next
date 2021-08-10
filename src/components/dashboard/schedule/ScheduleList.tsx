import { QueryLazyOptions } from '@apollo/client';
import dayjs from 'dayjs';
import { AnimateSharedLayout, motion } from 'framer-motion';
import React from 'react';
import { Exact, GymClass } from '../../../generated/graphql';
import { Container } from '../../../styles/styledComponents/schedule';
import { Weekdays } from '../../../types/schedule';
import { AddGymClassBtn } from './AddGymClassBtn';
import { ScheduleCard } from './ScheduleCard';

interface ScheduleListProps {
  list: null | Pick<GymClass, 'id' | 'type' | 'startTime' | 'endTime'>[];
  selectedDay: number;
  getGymClasses: (
    options?:
      | QueryLazyOptions<
          Exact<{
            day: number;
          }>
        >
      | undefined
  ) => void;
}

export const ScheduleList: React.FC<ScheduleListProps> = ({
  list,
  selectedDay,
  getGymClasses,
}) => {
  const dayTitle =
    selectedDay === dayjs().day() ? 'today' : `on ${Weekdays[selectedDay]}`;
  return (
    <Container>
      <AnimateSharedLayout>
        {list && list.length > 0 ? (
          <motion.ul layout style={{ padding: 0 }}>
            {list.map((item) => (
              <ScheduleCard
                key={item.id}
                gymClass={item}
                getGymClasses={getGymClasses}
              ></ScheduleCard>
            ))}
          </motion.ul>
        ) : (
          <p style={{ color: 'white' }}>{`No Classes ${dayTitle}`}</p>
        )}
        <AddGymClassBtn />
      </AnimateSharedLayout>
    </Container>
  );
};
