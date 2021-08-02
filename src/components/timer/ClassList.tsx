import React from 'react';
import {
  Container,
  List,
  Timeline,
  TimelineFadeDown,
  TimelineFadeUp,
} from '../../styles/styledComponents/timer/gymClasses';
import { FormatedClassesType } from '../../types/timer';
import { GymClassCard } from './GymClassCard';

interface ClassListProps {
  classes: null | FormatedClassesType[];
  clock: string;
}

export const ClassList: React.FC<ClassListProps> = ({ classes, clock }) => {
  return (
    <Container>
      <Timeline>
        <TimelineFadeUp />
        <TimelineFadeDown />
      </Timeline>
      <List>
        {classes &&
          classes.map((gymClass) => {
            const { startTime, isActive, hasPassed } = gymClass;
            return (
              <GymClassCard
                key={startTime}
                clock={clock}
                gymClass={gymClass}
                isActive={isActive}
                hasPassed={hasPassed}
              />
            );
          })}
      </List>
    </Container>
  );
};
