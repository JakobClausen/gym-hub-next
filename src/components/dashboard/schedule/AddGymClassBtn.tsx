import { Button } from '@material-ui/core';
import { motion } from 'framer-motion';
import React from 'react';

interface AddGymClassBtnProps {
  onClick: () => void;
  disabled: boolean;
}

export const AddGymClassBtn: React.FC<AddGymClassBtnProps> = ({
  onClick,
  disabled,
}) => {
  return (
    <motion.div layout>
      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={onClick}
        disabled={disabled}
      >
        Add new class
      </Button>
    </motion.div>
  );
};
