import Head from "next/head";
import {
  BottomContainer,
  PrimaryContainer,
} from "../styles/styledComponents/containers";
import { H1 } from "../styles/styledComponents/titles";
import { CenterHorizontal } from "../styles/styledComponents/align";
import React from "react";
import Link from "next/link";
import { Button } from "../styles/styledComponents/buttons";

const Home = () => {
  return (
    <div>
      <Head>
        <title>Gym Hub</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PrimaryContainer>
        <CenterHorizontal>
          <H1>Gymhub</H1>
        </CenterHorizontal>
        <BottomContainer>
          <Link as="/login" href="/login">
            <a style={{ width: "100%" }}>
              <Button>Login</Button>
            </a>
          </Link>
        </BottomContainer>
      </PrimaryContainer>
    </div>
  );
};

export default Home;
