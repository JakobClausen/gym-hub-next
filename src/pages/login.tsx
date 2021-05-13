import { LoginForm } from "../components/LoginForm";
import { useLoginMutation, Login } from "../generated/graphql";
import { setAccessToken } from "../utils/accessToken";
import { useRouter } from "next/router";
import React from "react";
import { PrimaryContainer } from "../styles/styledComponents/containers";
import { H1 } from "../styles/styledComponents/titles";

interface SigninProps {}
const Signin: React.FC<SigninProps> = ({}) => {
  const router = useRouter();
  const [login, { error }] = useLoginMutation();

  const handleLogin = async (cridentials: Login) => {
    const response = await login({ variables: cridentials });
    if (response && response.data) {
      setAccessToken(response.data.loginUser.accessToken);
      router.push("/dashboard");
      return;
    }
  };

  return (
    <PrimaryContainer>
      <H1>Login</H1>
      <LoginForm onSubmit={handleLogin} />
      {error && <p>{error.message}</p>}
    </PrimaryContainer>
  );
};

export default Signin;
