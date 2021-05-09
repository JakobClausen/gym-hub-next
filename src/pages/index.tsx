import { gql, useQuery } from "@apollo/client";
import Head from "next/head";

const Home = () => {
  const { data, loading } = useQuery(
    gql`
      {
        hello
      }
    `
  );
  if (loading) return <p>Loading...</p>;
  console.log(data);
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
      </main>
    </div>
  );
};

export default Home;
