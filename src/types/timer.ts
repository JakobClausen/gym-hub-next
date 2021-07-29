import { GymClass } from '../generated/graphql';

export type ClassesType = Partial<GymClass>;

export interface FormatedClassesType extends ClassesType {
  isActive?: boolean;
  hasPassed?: boolean;
}
