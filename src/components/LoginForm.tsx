import { Button, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Formik } from 'formik';
import React from 'react';
import { Login } from '../generated/graphql';
import { InputContainer } from '../styles/styledComponents/containers';
import { Form, FormContainer } from '../styles/styledComponents/form';
import { loginValidationSchema } from '../validation/login';

const useStyles = makeStyles({
  button: {
    backgroundColor: '#FFFFFF',
  },
});

interface LoginFormProps {
  onSubmit: (cridentials: Login) => void;
}
export const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
  const styles = useStyles();
  return (
    <FormContainer>
      <Formik
        initialValues={{ email: '', password: '' } as Login}
        validationSchema={loginValidationSchema}
        onSubmit={(values) => {
          onSubmit(values);
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
                className={styles.button}
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
                className={styles.button}
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
