import { Formik } from "formik";
import styled from "styled-components";
import { Input } from "../styles/styledComponents/form";

interface LoginFormProps {}
const Container = styled.div`
  background: #000000;
  width: 400px;
  height: 400px;
  padding: 20px;
`;
export const LoginForm: React.FC<LoginFormProps> = ({}) => {
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <Container>
        <Input />
      </Container>
    </Formik>
  );
};
