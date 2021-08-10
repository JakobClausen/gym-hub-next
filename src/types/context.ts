import { Gym, User } from '../generated/graphql';

export type UserType = Pick<User, 'firstName'> | null;
export type GymType = Pick<Gym, 'name' | 'logoUrl'> | null;

export type AppContextType = {
  user: UserType;
  gym: GymType;
};
