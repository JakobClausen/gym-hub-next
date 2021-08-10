import { TextField } from '@material-ui/core';
import React from 'react';

interface InputFieldProps {
  name: string;
  placeholder: string;
  value: string;
  handleChange: () => {};
}

export const InputField: React.FC<InputFieldProps> = ({
  name,
  placeholder,
  value,
  handleChange,
}) => {
  return (
    <TextField
      id={name}
      label={name}
      name={name}
      placeholder={placeholder}
      variant="filled"
      fullWidth
      value={value}
      onChange={handleChange}
    />
  );
};
