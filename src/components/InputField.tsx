import React, { InputHTMLAttributes } from 'react';
import { InputContainer } from '../styles/styledComponents/containers';
import { Input, Label } from '../styles/styledComponents/form';

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

export const InputField: React.FC<InputFieldProps> = ({
  name,
  label,
  ...rest
}) => {
  return (
    <InputContainer>
      <Label htmlFor={name}>{label}</Label>
      <Input {...rest} name={name} />
    </InputContainer>
  );
};
