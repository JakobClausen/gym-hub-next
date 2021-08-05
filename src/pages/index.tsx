import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import { CenterHorizontal } from '../styles/styledComponents/align';
import { Button } from '../styles/styledComponents/buttons';
import {
  BottomContainer,
  PrimaryContainer,
} from '../styles/styledComponents/containers';
import { H1 } from '../styles/styledComponents/titles';

const Home = () => {
  return (
    <div>
      <Head>
        <title>Gym Hub</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo&family=Karla&display=swap"
          rel="stylesheet"
        />
      </Head>
      <PrimaryContainer>
        <CenterHorizontal>
          <H1>Gymhub</H1>
        </CenterHorizontal>
        <BottomContainer>
          <Link as="/login" href="/login">
            <a style={{ width: '100%' }}>
              <Button>Login</Button>
            </a>
          </Link>
        </BottomContainer>
      </PrimaryContainer>
    </div>
  );
};

export default Home;
