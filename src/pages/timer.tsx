import React, { useState } from 'react';
import { ClassList } from '../components/timer/ClassList';
import { Whiteboard } from '../components/timer/Whiteboard';
import { GymClass, useGetGymClassesQuery } from '../generated/graphql';
import {
  HorizontalGrid,
  TimerContainer,
  VerticalGrid,
} from '../styles/styledComponents/timer/containers';

interface TimerProps {}

const Timer: React.FC<TimerProps> = ({}) => {
  const [classes, setClasses] = useState<null | Partial<GymClass>[]>(null);

  useGetGymClassesQuery({
    variables: { day: 2 },
    onCompleted: (data) => setClasses(data.classes),
  });

  return (
    <TimerContainer>
      <VerticalGrid>
        <div
          style={{ backgroundColor: '#d6e266', width: '100%', height: '100%' }}
        ></div>
        <HorizontalGrid>
          <ClassList classes={classes} />
          <Whiteboard />
        </HorizontalGrid>
      </VerticalGrid>
    </TimerContainer>
  );
};

export default Timer;
