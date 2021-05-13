import { Formik } from "formik";
import { Login } from "../generated/graphql";
import { Form, Input, SubmitButton } from "../styles/styledComponents/form";

interface LoginFormProps {
  onSubmit: (cridentials: Login) => void;
}
export const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{ email: "", password: "" } as Login}
      onSubmit={(values) => {
        onSubmit(values);
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
          <SubmitButton type="submit">Login</SubmitButton>
        </Form>
      )}
    </Formik>
  );
};
