import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import NewDocument from "../components/NewDocument";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Google Docs</title>
        <link rel="icon" href="/google_docs_favicon.webp" />
      </Head>

      <Header />
      <NewDocument />
    </div>
  );
};

export default Home;
