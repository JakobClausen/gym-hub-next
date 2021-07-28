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
  clock?: string;
}

export const GymClassCard: React.FC<GymClassCardProps> = ({
  gymClass,
  isActive,
  clock,
}) => {
  const [classCountdown, setClassCountdown] = useState<null | string>(null);
  const { name, startTime, endTime } = gymClass;

  useEffect(() => {
    if (isActive) {
      const classCountdown = calcGymClassCountdown(endTime!);
      setClassCountdown(classCountdown);
    }
  }, [isActive, clock]);
  return (
    <Card isActive={isActive}>
      <TextContainer>
        <CardText>{name}</CardText>
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
