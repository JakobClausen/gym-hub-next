import { Gym, User } from '../generated/graphql';

export type UserType = Pick<User, 'firstName'>;
export type GymType = Pick<Gym, 'name' | 'logoUrl'>;

export type AppContextType = {
  user: UserType;
  gym: GymType;
};
