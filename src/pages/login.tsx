import { useRouter } from 'next/router';
import React from 'react';
import { LoginForm } from '../components/LoginForm';
import { Login as LoginTypes, useLoginMutation } from '../generated/graphql';
import { PrimaryContainer } from '../styles/styledComponents/containers';
import { H1 } from '../styles/styledComponents/titles';
import { setAccessToken } from '../utils/authUtils';

interface LoginProps {}
const Login: React.FC<LoginProps> = ({}) => {
  const router = useRouter();
  const [login, { error }] = useLoginMutation();

  const handleLogin = async (cridentials: LoginTypes) => {
    const response = await login({ variables: cridentials });
    if (response && response.data) {
      setAccessToken(response.data.loginUser.accessToken);
      router.push('/dashboard');
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

export default Login;
