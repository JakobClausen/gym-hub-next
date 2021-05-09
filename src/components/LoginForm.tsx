import { Formik } from "formik";
import { Form, Input, SubmitButton } from "../styles/styledComponents/form";

interface LoginFormProps {}
export const LoginForm: React.FC<LoginFormProps> = ({}) => {
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ handleSubmit, handleChange, handleBlur, values, isSubmitting }) => (
        <Form onSubmit={handleSubmit}>
          <Input
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <Input
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <SubmitButton type="submit" disabled={isSubmitting}>
            Login
          </SubmitButton>
        </Form>
      )}
    </Formik>
  );
};
