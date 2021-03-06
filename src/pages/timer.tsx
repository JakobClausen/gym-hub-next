import dayjs from 'dayjs';
import React, { useEffect, useState } from 'react';
import { Loader } from '../components/Loader';
import { ClassList } from '../components/timer/ClassList';
import { TimerHeader } from '../components/timer/TimerHeader';
import { Whiteboard } from '../components/timer/Whiteboard';
import { useAppContext } from '../context/AppContext';
import {
  GetWorkoutQuery,
  GymClass,
  useGetGymClassesLazyQuery,
  useGetWorkoutQuery,
} from '../generated/graphql';
import {
  HorizontalGrid,
  TimerContainer,
  VerticalGrid,
} from '../styles/styledComponents/timer/containers';
import { formatGymClasses } from '../utils/timerUtils';

interface TimerProps {}

const Timer: React.FC<TimerProps> = ({}) => {
  const { gym } = useAppContext();
  const [classes, setClasses] = useState<null | Partial<GymClass>[]>(null);

  const [clock, setClock] = useState<string>(dayjs().format('HH:mm'));
  const [workout, setWorkout] = useState<null | GetWorkoutQuery>(null);

  const [getGymClasses, { data, loading: classesLoading }] =
    useGetGymClassesLazyQuery();

  const { loading: sectionsLoading } = useGetWorkoutQuery({
    variables: {
      type: 'Crossfit',
      day: 4,
    },
    onCompleted: (data) => data && setWorkout(data),
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

  useEffect(() => {
    if (data && clock) {
      const formatedClasses = formatGymClasses(fakeClasses, clock);
      setClasses(formatedClasses);
    }
  }, [data, clock]);

  if (classesLoading || sectionsLoading) return <Loader />;

  return (
    <TimerContainer>
      <VerticalGrid>
        <TimerHeader clock={clock} logo={gym!.logoUrl} />
        <HorizontalGrid>
          <ClassList classes={classes} clock={clock} />
          {workout && <Whiteboard workout={workout} />}
        </HorizontalGrid>
      </VerticalGrid>
    </TimerContainer>
  );
};

export default Timer;

const fakeClasses: Partial<GymClass>[] = [
  {
    type: 'Crossfit',
    startTime: '09:19',
    endTime: '09:20',
  },
  {
    type: 'Crossfit',
    startTime: '09:21',
    endTime: '09:22',
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
