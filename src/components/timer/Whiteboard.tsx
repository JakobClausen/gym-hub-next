import React from 'react';
import { useGetWorkoutQuery } from '../../generated/graphql';
import { WhiteboardContainer } from '../../styles/styledComponents/timer/containers';
import { WhiteboardText } from './WhiteboardText';

interface WhiteboardProps {}

export const Whiteboard: React.FC<WhiteboardProps> = ({}) => {
  const { data } = useGetWorkoutQuery({
    variables: {
      type: 'Crossfit',
      day: 4,
    },
  });
  return (
    <WhiteboardContainer>
      {data?.getWorkoutByDay?.workoutSection?.map((section) => {
        return <WhiteboardText key={section.title} section={section} />;
      })}
    </WhiteboardContainer>
  );
};
