import { Button } from '@material-ui/core';
import React from 'react';

interface BigButtonProps {
  onClick: () => void;
  title: string;
  disabled?: boolean;
}

export const BigButton: React.FC<BigButtonProps> = ({
  onClick,
  disabled = false,
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
