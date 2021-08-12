import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { LoginForm } from '../components/LoginForm';
import { SnackbarAlert } from '../components/SnackbarAlert';
import { Login as LoginTypes, useLoginMutation } from '../generated/graphql';
import { PrimaryContainer } from '../styles/styledComponents/containers';
import { H1 } from '../styles/styledComponents/titles';
import { setAccessToken } from '../utils/authUtils';

interface LoginProps {}
const Login: React.FC<LoginProps> = ({}) => {
  const [error, setError] = useState<null | string>(null);
  const router = useRouter();
  const [login] = useLoginMutation({
    onError: (error) => setError(error.message),
  });

  const handleLogin = async (cridentials: LoginTypes) => {
    const response = await login({ variables: cridentials });
    if (response?.data) {
      setAccessToken(response.data.loginUser.accessToken);
      router.push('/dashboard');
    }
  };

  return (
    <PrimaryContainer>
      <H1>Login</H1>
      <LoginForm onSubmit={handleLogin} />
      {error && <SnackbarAlert message={error} severity="error" />}
    </PrimaryContainer>
  );
};

export default Login;
