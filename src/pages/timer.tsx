import dayjs from 'dayjs';
import React, { useEffect, useState } from 'react';
import { Loader } from '../components/Loader';
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

const fakeClasses: Partial<GymClass>[] = [
  {
    name: 'Crossfit',
    startTime: '11:00',
    endTime: '12:00',
  },
  {
    name: 'Crossfit',
    startTime: '12:00',
    endTime: '13:00',
  },
  {
    name: 'Crossfit',
    startTime: '13:00',
    endTime: '14:00',
  },
  {
    name: 'Crossfit',
    startTime: '14:00',
    endTime: '15:00',
  },
];

const Timer: React.FC<TimerProps> = ({}) => {
  const [classes, setClasses] = useState<null | Partial<GymClass>[]>(null);

  const [clock, setClock] = useState<string>(dayjs().format('HH:mm'));

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
    if (!classes) {
      getGymClasses({ variables: { day: 2 } });
    }

    if (clock === '03:00' || clock === '03:01') {
      getGymClasses({ variables: { day: 2 } });
    }
  }, [clock]);

  if (loading) return <Loader />;

  return (
    <TimerContainer>
      <VerticalGrid>
        <TimerHeader clock={clock} />
        <HorizontalGrid>
          <ClassList classes={fakeClasses} clock={clock} />
          <Whiteboard />
        </HorizontalGrid>
      </VerticalGrid>
    </TimerContainer>
  );
};

export default Timer;
