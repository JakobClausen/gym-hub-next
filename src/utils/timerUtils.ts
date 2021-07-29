import dayjs from 'dayjs';
import { GymClass } from '../generated/graphql';
import { FormatedClassesType } from '../types/timer';

export const formatGymClasses = (
  classes: Partial<GymClass>[],
  clock: string
): Partial<FormatedClassesType>[] =>
  classes.map((gymClass) => {
    const { endTime, startTime } = gymClass;
    const isActive = clock >= startTime! && clock < endTime!;
    const hasPassed = clock > endTime!;

    return {
      ...gymClass,
      isActive,
      hasPassed,
    };
  });

export const calcGymClassCountdown = (endTime: string) => {
  const end = dayjs(endTime, 'HH:mm').valueOf();
  const now = dayjs().valueOf();
  const dif = end - now;
  const minutes = Math.floor((dif % (1000 * 60 * 60)) / (1000 * 60));
  return `${minutes + 1} min`;
};
