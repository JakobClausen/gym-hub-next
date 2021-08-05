import { createContext, useContext } from 'react';
import { AppContextType } from '../types/context';

export const AppContext = createContext<Partial<AppContextType>>({});

export const useAppContext = () => {
  return useContext(AppContext);
};
