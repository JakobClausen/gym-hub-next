import React from "react";
import { LoginForm } from "../components/LoginForm";

interface loginProps {}
const Login: React.FC<loginProps> = ({}) => {
  return (
    <div>
      <p>Login</p>
      <LoginForm />
    </div>
  );
};

export default Login;
