import type { NextPage } from "next";
import { GetServerSideProps } from "next";
import { getSession, useSession } from "next-auth/react";
import Head from "next/head";
import Header from "../components/Header";
import MyDocuments from "../components/MyDocuments";
import NewDocument from "../components/NewDocument";
import Login from "../components/Login";

const Home: NextPage = () => {
  const { data: session, status } = useSession();

  if (!session) return <Login />;
  // if (status === "unauthenticated") return <Login />;

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

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
};
