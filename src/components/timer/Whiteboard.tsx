import React from 'react';
import { GetWorkoutQuery } from '../../generated/graphql';
import { WhiteboardContainer } from '../../styles/styledComponents/timer/containers';
import { WhiteboardText } from './WhiteboardText';

interface WhiteboardProps {
  workout: GetWorkoutQuery;
}

export const Whiteboard: React.FC<WhiteboardProps> = ({ workout }) => {
  return (
    <WhiteboardContainer
      length={workout?.getWorkoutByDay?.workoutSection?.length}
    >
      {workout?.getWorkoutByDay?.workoutSection?.map((section) => {
        return (
          <WhiteboardText
            key={section.title}
            section={section}
            externalApiProvider={workout.getWorkoutByDay.externalApiProvider}
          />
        );
      })}
    </WhiteboardContainer>
  );
};
