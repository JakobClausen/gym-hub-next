import React, { useEffect, useState } from 'react';
import { GymClass } from '../../generated/graphql';
import {
  Container,
  GymClassCard,
  GymClassCardActive,
  List,
  Text,
  Timeline,
  TimelineFadeDown,
  TimelineFadeUp,
} from '../../styles/styledComponents/timer/gymClasses';
import { fitlerGymClasses } from '../../utils/timerUtils';

type ClassesType = Partial<GymClass>;

interface ClassListProps {
  classes: null | ClassesType[];
  clock: null | string;
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
          <GymClassCardActive>
            <Text>{`${activeClass.startTime} - ${activeClass.endTime}`}</Text>
          </GymClassCardActive>
        )}
        {filteredClasses &&
          filteredClasses.map((gymClass) => {
            return (
              <GymClassCard key={gymClass.startTime}>
                <Text>{`${gymClass.startTime} - ${gymClass.endTime}`}</Text>
              </GymClassCard>
            );
          })}
      </List>
    </Container>
  );
};
