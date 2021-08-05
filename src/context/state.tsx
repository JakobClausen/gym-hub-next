import React, { ReactNode, useState } from 'react';
import { Loading } from '../components/Loading';
import { useGetGymQuery, useGetUserQuery } from '../generated/graphql';
import { GymType, UserType } from '../types/context';
import { AppContext } from './AppContext';

type Props = {
  children: ReactNode;
};

export const AppState = ({ children }: Props) => {
  const [user, setUser] = useState<null | UserType>(null);
  const [gym, setGym] = useState<null | GymType>(null);
  useGetUserQuery({
    onCompleted: (data) => data?.getUser && setUser(data.getUser),
  });
  useGetGymQuery({
    onCompleted: (data) => data?.getGym && setGym(data.getGym),
  });

  if (!user || !gym) return <Loading />;
  return (
    <AppContext.Provider value={{ user, gym }}>{children}</AppContext.Provider>
  );
};
