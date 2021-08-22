import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { LoginForm } from '../components/LoginForm';
import { SnackbarAlert } from '../components/SnackbarAlert';
import { Login as LoginTypes, useLoginMutation } from '../generated/graphql';
import { PrimaryContainer } from '../styles/styledComponents/containers';
import {
  BottomInfoContainer,
  Logo,
  LogoContainer,
  TopContainer,
} from '../styles/styledComponents/login';
import { ParagraphFadedSmall } from '../styles/styledComponents/text';
import { H2 } from '../styles/styledComponents/titles';
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
      <TopContainer>
        <LogoContainer>
          <Logo />
        </LogoContainer>
        <H2 style={{ textAlign: 'center' }}>Login</H2>
      </TopContainer>
      <LoginForm onSubmit={handleLogin} />
      <BottomInfoContainer>
        <ParagraphFadedSmall>Don't have an accout yet?</ParagraphFadedSmall>
        <ParagraphFadedSmall>
          Click <b>here</b> to enroll in the bete program
        </ParagraphFadedSmall>
      </BottomInfoContainer>
      {error && <SnackbarAlert message={error} severity="error" />}
    </PrimaryContainer>
  );
};

export default Login;
