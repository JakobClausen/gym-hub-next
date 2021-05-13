import Head from "next/head";
import { useEffect, useState } from "react";
import { MeQuery, useMeQuery } from "../generated/graphql";

const Home = () => {
  const { data, error } = useMeQuery();
  return (
    <div>
      <Head>
        <title>Gym Hub</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
        {data && <p>{data?.me.firstName}</p>}
      </main>
    </div>
  );
};

export default Home;
