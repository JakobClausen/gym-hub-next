import { Formik, FormikHelpers } from 'formik';
import React from 'react';
import { Login } from '../generated/graphql';
import { Button } from '../styles/styledComponents/buttons';
import { Form, FormContainer } from '../styles/styledComponents/form';
import { loginValidationSchema } from '../validation/login';
import { InputField } from './InputField';

interface LoginFormProps {
  onSubmit: (cridentials: Login) => Promise<void>;
}

export const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
  return (
    <FormContainer>
      <Formik
        initialValues={{ email: '', password: '' } as Login}
        validationSchema={loginValidationSchema}
        onSubmit={async (values, { setSubmitting }: FormikHelpers<Login>) => {
          await onSubmit(values);
          setSubmitting(false);
        }}
      >
        {({ handleSubmit, handleChange, handleBlur, isSubmitting }) => (
          <Form onSubmit={handleSubmit}>
            <InputField
              name="email"
              label="Email"
              placeholder="jakob.fridmar@gmail.com"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <InputField
              name="password"
              label="Password"
              type="password"
              placeholder="yourpassword123"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <Button type="submit" disabled={isSubmitting}>
              Login
            </Button>
          </Form>
        )}
      </Formik>
    </FormContainer>
  );
};
