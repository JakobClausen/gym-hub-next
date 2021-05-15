import Head from "next/head";
import { PrimaryContainer } from "../styles/styledComponents/containers";
import { H1 } from "../styles/styledComponents/titles";
import { CenterHorizontal } from "../styles/styledComponents/align";

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
      </PrimaryContainer>
    </div>
  );
};

export default Home;
