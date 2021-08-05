import dayjs from 'dayjs';
import React, { useEffect, useState } from 'react';
import { DashLayout } from '../../components/dashboard/DashLayout';
import { ScheduleList } from '../../components/dashboard/schedule/ScheduleList';
import { Loader } from '../../components/Loader';
import { GymClass, useGetGymClassesLazyQuery } from '../../generated/graphql';
import { DashContentContainer } from '../../styles/styledComponents/dashboard';
import { Container, WeekdayBtn } from '../../styles/styledComponents/schedule';
import { H3, H4 } from '../../styles/styledComponents/titles';
import { Weekdays } from '../../types/schedule';

interface ScheduleProps {}

const Schedule: React.FC<ScheduleProps> = ({}) => {
  const [day, setDay] = useState(dayjs().day());
  const [schedule, setSchedule] = useState<
    null | Pick<GymClass, 'type' | 'startTime' | 'endTime'>[]
  >(null);

  const [getGymClasses, { loading }] = useGetGymClassesLazyQuery({
    variables: { day },
    onCompleted: (data) => data && setSchedule(data?.classes),
  });

  useEffect(() => {
    getGymClasses();
  }, [day]);

  useEffect(() => {
    if (schedule) {
      console.log(schedule);
    }
  }, [schedule]);

  if (loading) return <Loader />;
  return (
    <DashLayout>
      <DashContentContainer>
        <H3>Schedule</H3>
        <Container>
          {Weekdays.map((weekday, i) => (
            <WeekdayBtn key={i} onClick={() => setDay(i)}>
              {weekday}
            </WeekdayBtn>
          ))}
        </Container>
        <H4 style={{ marginTop: '20px' }}>{Weekdays[day]}</H4>
        {schedule && schedule.length > 0 ? (
          <ScheduleList list={schedule} />
        ) : (
          <p style={{ color: 'white' }}>No Classes today</p>
        )}
      </DashContentContainer>
    </DashLayout>
  );
};

export default Schedule;
