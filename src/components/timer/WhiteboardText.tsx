import React from 'react';
import { Maybe, WorkoutSection } from '../../generated/graphql';
import { WhiteboardContainerItem } from '../../styles/styledComponents/timer/containers';
import {
  WhiteboardBody,
  WhiteboardTitle,
} from '../../styles/styledComponents/timer/titles';

interface WhiteboardTextProps {
  section: Partial<WorkoutSection>;
  externalApiProvider: Maybe<string> | undefined;
}

export const WhiteboardText: React.FC<WhiteboardTextProps> = ({
  section: { title, body },
  externalApiProvider,
}) => {
  return (
    <WhiteboardContainerItem>
      <WhiteboardTitle>{title}</WhiteboardTitle>
      {externalApiProvider &&
        body &&
        body
          .split('\n')
          .map((n, i) => <WhiteboardBody key={n + i}>{n}</WhiteboardBody>)}
      {!externalApiProvider && body && (
        <WhiteboardBody dangerouslySetInnerHTML={{ __html: body }} />
      )}
    </WhiteboardContainerItem>
  );
};
