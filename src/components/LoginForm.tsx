import { Button, TextField } from '@material-ui/core';
import { Formik, FormikHelpers } from 'formik';
import React from 'react';
import { Login } from '../generated/graphql';
import { InputContainer } from '../styles/styledComponents/containers';
import { Form, FormContainer } from '../styles/styledComponents/form';
import { loginValidationSchema } from '../validation/login';

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
        {({ handleSubmit, handleChange, handleBlur, values, isSubmitting }) => (
          <Form onSubmit={handleSubmit}>
            <InputContainer>
              <TextField
                id="email"
                name="email"
                label="Email"
                variant="filled"
                fullWidth
                onChange={handleChange}
                onBlur={handleBlur}
                color="secondary"
              />
            </InputContainer>
            <InputContainer>
              <TextField
                id="password"
                name="password"
                label="Password"
                variant="filled"
                fullWidth
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </InputContainer>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              fullWidth
              disabled={isSubmitting}
            >
              Login
            </Button>
          </Form>
        )}
      </Formik>
    </FormContainer>
  );
};
