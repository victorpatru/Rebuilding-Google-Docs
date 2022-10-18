import type { NextPage } from "next";
import { getSession, useSession } from "next-auth/react";
import Head from "next/head";
import Header from "../components/Header";
import MyDocuments from "../components/MyDocuments";
import NewDocument from "../components/NewDocument";
import Login from "../components/Login";

const Home: NextPage = () => {
  const { data: session } = useSession();

  if (!session) return <Login />;

  return (
    <div>
      <Head>
        <title>Google Docs</title>
        <link rel="icon" href="/google_docs_favicon.webp" />
      </Head>

      <Header />
      <NewDocument />
      <MyDocuments />
    </div>
  );
};

export default Home;
