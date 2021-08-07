import { Input } from 'formik-semantic-ui-react';
import React from 'react';

interface InputFieldProps {
  name: string;
  placeholder: string;
}

export const InputField: React.FC<InputFieldProps> = ({
  name,
  placeholder,
}) => {
  return <Input fluid name={name} placeholder={placeholder} errorPrompt />;
};
