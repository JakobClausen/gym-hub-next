import dayjs from 'dayjs';
import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import { DashLayout } from '../../components/dashboard/DashLayout';
import { Loader } from '../../components/Loader';
import { WeekdaysSelectOptions } from '../../constants/schedule';
import {
  GetWorkoutQuery,
  useGetWorkoutLazyQuery,
} from '../../generated/graphql';
import { DashContentContainer } from '../../styles/styledComponents/dashboard';
import { H3 } from '../../styles/styledComponents/titles';
import {
  Container,
  ErrInfoText,
} from '../../styles/styledComponents/whiteboard';
import { WeekdayOption } from '../../types/schedule';

interface WhiteboardProps {}

const Whiteboard: React.FC<WhiteboardProps> = ({}) => {
  const [selectedDay, setSelectedDay] = useState(dayjs().day());
  const [selectedOption, setSelectedOption] = useState<WeekdayOption>(
    WeekdaysSelectOptions[dayjs().day()]
  );
  const [workout, setWorkout] = useState<null | GetWorkoutQuery>(null);
  const [getWorkout, { loading: sectionsLoading }] = useGetWorkoutLazyQuery({
    variables: {
      type: 'Crossfit',
      day: selectedDay,
    },
    onCompleted: (data) => data && setWorkout(data),
    fetchPolicy: 'no-cache',
  });

  useEffect(() => {
    getWorkout();
  }, [selectedDay]);

  if (sectionsLoading) return <Loader />;
  return (
    <DashLayout>
      <DashContentContainer>
        <H3>Whiteboard</H3>

        {workout?.getWorkoutByDay.externalApiProvider ? (
          <ErrInfoText>{`You can't edit the whiteboard when using ${workout.getWorkoutByDay.externalApiProvider}`}</ErrInfoText>
        ) : (
          <Container>
            <Select
              isClearable={false}
              isSearchable={false}
              value={selectedOption}
              onChange={(selectedOption) => {
                if (selectedOption) {
                  setSelectedOption(selectedOption);
                  setSelectedDay(selectedOption?.value);
                }
              }}
              options={WeekdaysSelectOptions}
            />
          </Container>
        )}
      </DashContentContainer>
    </DashLayout>
  );
};

export default Whiteboard;
