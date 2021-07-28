import React, { useEffect, useState } from 'react';
import { GymClass } from '../../generated/graphql';
import {
  Container,
  List,
  Timeline,
  TimelineFadeDown,
  TimelineFadeUp,
} from '../../styles/styledComponents/timer/gymClasses';
import { fitlerGymClasses } from '../../utils/timerUtils';
import { GymClassCard } from './GymClassCard';

type ClassesType = Partial<GymClass>;

interface ClassListProps {
  classes: null | ClassesType[];
  clock: string;
}

export const ClassList: React.FC<ClassListProps> = ({ classes, clock }) => {
  const [activeClass, setActiveClass] = useState<null | ClassesType>(null);

  const [filteredClasses, setFilteredClasses] = useState<null | ClassesType[]>(
    null
  );

  useEffect(() => {
    if (classes && clock) {
      const { aciveClass, futureClasses } = fitlerGymClasses(classes, clock);
      setActiveClass(aciveClass);
      setFilteredClasses(futureClasses);
    }
  }, [classes, clock]);

  return (
    <Container>
      <Timeline>
        <TimelineFadeUp />
        <TimelineFadeDown />
      </Timeline>
      <List>
        {activeClass && (
          <GymClassCard gymClass={activeClass} isActive={true} clock={clock} />
        )}
        {filteredClasses &&
          filteredClasses.map((gymClass) => {
            return (
              <GymClassCard key={gymClass.startTime} gymClass={gymClass} />
            );
          })}
      </List>
    </Container>
  );
};
