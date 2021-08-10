import React, { useState } from 'react';
import { DashLayout } from '../../components/dashboard/DashLayout';
import { Loader } from '../../components/Loader';
import { GetWorkoutQuery, useGetWorkoutQuery } from '../../generated/graphql';
import { DashContentContainer } from '../../styles/styledComponents/dashboard';
import { H3 } from '../../styles/styledComponents/titles';
import { ErrInfoText } from '../../styles/styledComponents/whiteboard';

interface WhiteboardProps {}

const Whiteboard: React.FC<WhiteboardProps> = ({}) => {
  const [workout, setWorkout] = useState<null | GetWorkoutQuery>(null);
  const { loading: sectionsLoading } = useGetWorkoutQuery({
    variables: {
      type: 'Crossfit',
      day: 4,
    },
    onCompleted: (data) => data && setWorkout(data),
  });

  if (!workout || sectionsLoading) return <Loader />;
  console.log(workout);
  return (
    <DashLayout>
      <DashContentContainer>
        <H3>Whiteboard</H3>
        {workout.getWorkoutByDay.externalApiProvider && (
          <ErrInfoText>{`You can't edit the whiteboard when using ${workout.getWorkoutByDay.externalApiProvider}`}</ErrInfoText>
        )}
      </DashContentContainer>
    </DashLayout>
  );
};

export default Whiteboard;
