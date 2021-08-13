import { Button, makeStyles } from '@material-ui/core';
import { Formik, FormikHelpers } from 'formik';
import React from 'react';
import { Login } from '../generated/graphql';
import { Form, FormContainer } from '../styles/styledComponents/form';
import { loginValidationSchema } from '../validation/login';
import { InputField } from './InputField';

interface LoginFormProps {
  onSubmit: (cridentials: Login) => Promise<void>;
}
const useStyles = makeStyles({
  root: {
    backgroundColor: '#1f1e22',
    borderRadius: '10px',
  },
  input: {
    color: '#FFFFFF',
  },
});

export const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
  const classes = useStyles();
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
              placeholder="Email"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <InputField
              name="password"
              label="Password"
              placeholder="Password"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <Button
              variant="contained"
              color="secondary"
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
