import React from 'react';
import { BarLoader } from 'react-spinners';
import { CardLoader } from '../../../styles/styledComponents/schedule';

interface ScheduleCardLoaderProps {}

export const ScheduleCardLoader: React.FC<ScheduleCardLoaderProps> = ({}) => {
  return (
    <CardLoader>
      <BarLoader loading={true} color={'#FFFFFF'} />
    </CardLoader>
  );
};
