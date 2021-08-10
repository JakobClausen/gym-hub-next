import dayjs from 'dayjs';
import { AnimateSharedLayout, motion } from 'framer-motion';
import React from 'react';
import { DeleteGymClassMutationFn, GymClass } from '../../../generated/graphql';
import {
  Container,
  NewScheduleBtn,
} from '../../../styles/styledComponents/schedule';
import { Weekdays } from '../../../types/schedule';
import { ScheduleCard } from './ScheduleCard';

interface ScheduleListProps {
  list: null | Pick<GymClass, 'id' | 'type' | 'startTime' | 'endTime'>[];
  selectedDay: number;
  deleteGymClass: DeleteGymClassMutationFn;
}

export const ScheduleList: React.FC<ScheduleListProps> = ({
  list,
  selectedDay,
  deleteGymClass,
}) => {
  const dayTitle =
    selectedDay === dayjs().day() ? 'today' : `on ${Weekdays[selectedDay]}`;
  return (
    <Container>
      <AnimateSharedLayout>
        {list && list.length > 0 ? (
          <>
            <motion.ul layout style={{ padding: 0 }}>
              {list.map((item) => (
                <ScheduleCard
                  key={item.id}
                  gymClass={item}
                  deleteGymClass={deleteGymClass}
                ></ScheduleCard>
              ))}
            </motion.ul>
            <motion.div layout>
              <NewScheduleBtn>+</NewScheduleBtn>
            </motion.div>
          </>
        ) : (
          <>
            <p style={{ color: 'white' }}>{`No Classes ${dayTitle}`}</p>
            <NewScheduleBtn>+</NewScheduleBtn>
          </>
        )}
      </AnimateSharedLayout>
    </Container>
  );
};
