import dayjs from 'dayjs';
import { GymClass } from '../generated/graphql';

export const fitlerGymClasses = (
  classes: Partial<GymClass>[],
  clock: string
) => {
  const aciveClass = classes.find(
    ({ endTime, startTime }) => clock >= startTime! && clock < endTime!
  );
  const futureClasses = classes.filter(({ startTime }) => startTime! > clock);
  return { aciveClass: aciveClass ?? null, futureClasses };
};

export const calcGymClassCountdown = (endTime: string) => {
  const end = dayjs(endTime, 'HH:mm').valueOf();
  const now = dayjs().valueOf();
  const dif = end - now;
  const minutes = Math.floor((dif % (1000 * 60 * 60)) / (1000 * 60));
  return `${minutes + 1} min`;
};
