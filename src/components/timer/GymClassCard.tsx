import React, { useEffect, useState } from 'react';
import { GymClass } from '../../generated/graphql';
import {
  Card,
  CardText,
  TextContainer,
  TimeContainer,
  TimeText,
} from '../../styles/styledComponents/timer/gymClasses';
import { calcGymClassCountdown } from '../../utils/timerUtils';

interface GymClassCardProps {
  gymClass: Partial<GymClass>;
  isActive?: boolean;
  hasPassed?: boolean;
  clock?: string;
}

export const GymClassCard: React.FC<GymClassCardProps> = ({
  gymClass,
  isActive,
  hasPassed,
  clock,
}) => {
  const [classCountdown, setClassCountdown] = useState<null | string>(null);
  const { type, startTime, endTime } = gymClass;

  useEffect(() => {
    if (isActive) {
      const classCountdown = calcGymClassCountdown(endTime!);
      setClassCountdown(classCountdown);
    }
    if (!isActive) {
      setClassCountdown(null);
    }
  }, [isActive, clock]);
  return (
    <Card isActive={isActive} hasPassed={hasPassed}>
      <TextContainer>
        <CardText>{type}</CardText>
        <CardText>{`${startTime} - ${endTime}`}</CardText>
      </TextContainer>
      {classCountdown && (
        <TimeContainer>
          <TimeText>{classCountdown}</TimeText>
        </TimeContainer>
      )}
    </Card>
  );
};
