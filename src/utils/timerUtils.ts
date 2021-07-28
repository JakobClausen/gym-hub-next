import { GymClass } from '../generated/graphql';

export const fitlerGymClasses = (
  classes: Partial<GymClass>[],
  clock: string
) => {
  console.log(clock);
  const aciveClass = classes.find(
    ({ endTime, startTime }) => clock >= startTime! && clock <= endTime!
  );
  const futureClasses = classes.filter(({ startTime }) => startTime! > clock);
  return { aciveClass: aciveClass ?? null, futureClasses };
};
