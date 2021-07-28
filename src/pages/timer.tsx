import dayjs from 'dayjs';
import React, { useEffect, useState } from 'react';
import { ClassList } from '../components/timer/ClassList';
import { TimerHeader } from '../components/timer/TimerHeader';
import { Whiteboard } from '../components/timer/Whiteboard';
import { GymClass, useGetGymClassesLazyQuery } from '../generated/graphql';
import {
  HorizontalGrid,
  TimerContainer,
  VerticalGrid,
} from '../styles/styledComponents/timer/containers';

interface TimerProps {}

const Timer: React.FC<TimerProps> = ({}) => {
  const [classes, setClasses] = useState<null | Partial<GymClass>[]>(null);

  const [clock, setClock] = useState<null | string>(null);

  const [getGymClasses, { loading }] = useGetGymClassesLazyQuery({
    onCompleted: (data) => setClasses(data.classes),
  });

  useEffect(() => {
    var timer = setInterval(() => setClock(dayjs().format('HH:mm')), 1000);
    return () => {
      clearInterval(timer);
    };
  });

  useEffect(() => {
    if (clock) {
      if (!classes) {
        getGymClasses({ variables: { day: 2 } });
      }

      if (clock === '03:00' || clock === '03:01') {
        getGymClasses({ variables: { day: 2 } });
      }
    }
  }, [clock]);

  if (!clock || loading) return <p>Loading</p>;

  return (
    <TimerContainer>
      <VerticalGrid>
        <TimerHeader clock={clock} />
        <HorizontalGrid>
          <ClassList classes={classes} clock={clock} />
          <Whiteboard />
        </HorizontalGrid>
      </VerticalGrid>
    </TimerContainer>
  );
};

export default Timer;
