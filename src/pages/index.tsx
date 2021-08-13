import Head from 'next/head';
import React from 'react';
import { LinkButton } from '../components/LinkButton';
import { LeftHorizontal } from '../styles/styledComponents/align';
import {
  BottomContainer,
  PrimaryContainer,
} from '../styles/styledComponents/containers';
import { ParagraphFrontPage } from '../styles/styledComponents/text';
import { H2, H3 } from '../styles/styledComponents/titles';

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
        <LeftHorizontal>
          <H2>Gymhub</H2>
        </LeftHorizontal>
        <BottomContainer>
          <div>
            <H3>Gym hub</H3>
            <ParagraphFrontPage>
              ext ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It h
            </ParagraphFrontPage>
          </div>
          <LinkButton as="/login" href="/login">
            Login
          </LinkButton>
          <LinkButton as="/login" href="/login" disabled={true}>
            Signup is not available in beta
          </LinkButton>
        </BottomContainer>
      </PrimaryContainer>
    </div>
  );
};

export default Home;
