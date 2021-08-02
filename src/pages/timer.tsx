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
import { FormatedClassesType } from '../types/timer';
import { formatGymClasses } from '../utils/timerUtils';

interface TimerProps {}

const fakeClasses: Partial<GymClass>[] = [
  {
    type: 'Crossfit',
    startTime: '11:00',
    endTime: '12:00',
  },
  {
    type: 'Crossfit',
    startTime: '12:00',
    endTime: '13:00',
  },
  {
    type: 'Crossfit',
    startTime: '13:00',
    endTime: '14:00',
  },
  {
    type: 'Gymnastics',
    startTime: '15:00',
    endTime: '15:25 ',
  },
  {
    type: 'Crossfit',
    startTime: '19:00',
    endTime: '19:53',
  },
  {
    type: 'Crossfit',
    startTime: '21:00',
    endTime: '22:00',
  },
];

const Timer: React.FC<TimerProps> = ({}) => {
  const [classes, setClasses] = useState<null | Partial<FormatedClassesType>[]>(
    null
  );

  const [clock, setClock] = useState<string>(dayjs().format('HH:mm'));

  const [getGymClasses, { data, loading }] = useGetGymClassesLazyQuery();

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

  useEffect(() => {
    if (data && clock) {
      const formatedClasses = formatGymClasses(fakeClasses, clock);
      setClasses(formatedClasses);
    }
  }, [data, clock]);

  if (loading) return <Loader />;

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
