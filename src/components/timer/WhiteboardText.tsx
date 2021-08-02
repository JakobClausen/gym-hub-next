import React from 'react';
import { WorkoutSection } from '../../generated/graphql';
import { WhiteboardContainerItem } from '../../styles/styledComponents/timer/containers';
import {
  WhiteboardBody,
  WhiteboardTitle,
} from '../../styles/styledComponents/timer/titles';

interface WhiteboardTextProps {
  section: {
    __typename?: 'WorkoutSection' | undefined;
  } & Pick<WorkoutSection, 'title' | 'body' | 'order'>;
}

export const WhiteboardText: React.FC<WhiteboardTextProps> = ({
  section: { title, body },
}) => {
  return (
    <WhiteboardContainerItem>
      <WhiteboardTitle>{title}</WhiteboardTitle>
      <WhiteboardBody dangerouslySetInnerHTML={{ __html: body }} />
    </WhiteboardContainerItem>
  );
};
