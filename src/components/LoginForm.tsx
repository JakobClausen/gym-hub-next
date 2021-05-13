import { Formik } from "formik";
import { Login } from "../generated/graphql";
import {
  FormContainer,
  Input,
  SubmitButton,
  Label,
  Form,
} from "../styles/styledComponents/form";
import { loginValidationSchema } from "../utils/validationSchemas";

interface LoginFormProps {
  onSubmit: (cridentials: Login) => void;
}
export const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
  return (
    <FormContainer>
      <Formik
        initialValues={{ email: "", password: "" } as Login}
        validationSchema={loginValidationSchema}
        onSubmit={(values) => {
          onSubmit(values);
        }}
      >
        {({ handleSubmit, handleChange, handleBlur, values, isSubmitting }) => (
          <Form onSubmit={handleSubmit}>
            <Label>
              Email
              <Input
                type="email"
                name="email"
                placeholder="Email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </Label>
            <Label>
              Password
              <Input
                type="password"
                name="password"
                placeholder="Password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </Label>
            <SubmitButton type="submit" disabled={isSubmitting}>
              Login
            </SubmitButton>
          </Form>
        )}
      </Formik>
    </FormContainer>
  );
};
