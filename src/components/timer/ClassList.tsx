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

type classesType = Partial<GymClass>;

interface ClassListProps {
  classes: null | classesType[];
}

export const ClassList: React.FC<ClassListProps> = ({ classes }) => {
  const [activeClass, setActiveClass] = useState<null | classesType>(null);

  const [filteredClasses, setFilteredClasses] = useState<null | classesType[]>(
    null
  );

  useEffect(() => {
    if (classes) {
      setActiveClass(classes[0]);
      setFilteredClasses(classes);
    }
  }, [classes]);
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
