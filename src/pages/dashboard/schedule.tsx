import dayjs from 'dayjs';
import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import { DashLayout } from '../../components/dashboard/DashLayout';
import { ScheduleList } from '../../components/dashboard/schedule/ScheduleList';
import { Loader } from '../../components/Loader';
import { WeekdaysSelectOptions } from '../../constants/schedule';
import { GymClass, useGetGymClassesLazyQuery } from '../../generated/graphql';
import { DashContentContainer } from '../../styles/styledComponents/dashboard';
import { Container } from '../../styles/styledComponents/schedule';
import { H3, H4 } from '../../styles/styledComponents/titles';
import { WeekdayOption, Weekdays } from '../../types/schedule';

interface ScheduleProps {}

const Schedule: React.FC<ScheduleProps> = ({}) => {
  const [day, setDay] = useState(dayjs().day());
  const [selectedOption, setSelectedOption] = useState<WeekdayOption>(
    WeekdaysSelectOptions[dayjs().day()]
  );
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
          <Select
            isClearable={false}
            isSearchable={false}
            value={selectedOption}
            onChange={(selectedOption) => {
              if (selectedOption) {
                setSelectedOption(selectedOption);
                setDay(selectedOption?.value);
              }
            }}
            options={WeekdaysSelectOptions}
          />
        </Container>
        <H4 style={{ marginTop: '20px' }}>{Weekdays[day]}</H4>
        <ScheduleList list={schedule} />
      </DashContentContainer>
    </DashLayout>
  );
};

export default Schedule;
