import { Button } from '@material-ui/core';
import React from 'react';

interface BigButtonProps {
  onClick: () => void;
  disabled: boolean;
  title: string;
}

export const BigButton: React.FC<BigButtonProps> = ({
  onClick,
  disabled,
  title,
}) => {
  return (
    <Button
      variant="contained"
      color="primary"
      fullWidth
      onClick={onClick}
      disabled={disabled}
    >
      {title}
    </Button>
  );
};
