import { motion } from 'framer-motion';
import React from 'react';
import { NewScheduleBtn } from '../../../styles/styledComponents/schedule';

interface AddGymClassBtnProps {}

export const AddGymClassBtn: React.FC<AddGymClassBtnProps> = ({}) => {
  return (
    <motion.div layout>
      <NewScheduleBtn>+</NewScheduleBtn>
    </motion.div>
  );
};
