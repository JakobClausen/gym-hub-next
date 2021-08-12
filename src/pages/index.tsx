import Head from 'next/head';
import React from 'react';
import { LinkButton } from '../components/LinkButton';
import { CenterHorizontal } from '../styles/styledComponents/align';
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
          <LinkButton title="Login" as="/login" href="/login" />
        </BottomContainer>
      </PrimaryContainer>
    </div>
  );
};

export default Home;
