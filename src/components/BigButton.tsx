import { Button } from '@material-ui/core';
import React from 'react';

interface BigButtonProps {
  title: string;
  onClick?: () => void;
  disabled?: boolean;
}

export const BigButton: React.FC<BigButtonProps> = ({
  title,
  disabled = false,
  onClick,
}) => {
  return (
    <Button
      variant="contained"
      color="primary"
      fullWidth
      onClick={onClick ?? (() => {})}
      disabled={disabled}
    >
      {title}
    </Button>
  );
};
