import React, { useState } from "react";
import type { NextPage } from "next";
import { GetServerSideProps } from "next";
import { getSession, useSession } from "next-auth/react";
import Head from "next/head";
import Header from "../components/Header";
import MyDocuments from "../components/MyDocuments";
import NewDocument from "../components/NewDocument";
import Login from "../components/Login";
import {
  Dialog,
  DialogBody,
  DialogFooter,
  Button,
} from "@material-tailwind/react";
import toast, { Toaster } from "react-hot-toast";

const Home: NextPage = () => {
  const { data: session } = useSession();
  const [showModal, setShowModal] = useState<boolean>(false);
  const [input, setInput] = useState<string>("");

  const createDocument = () => {
    if (!input) {
      // toast.error("Please input a valid document name.");
      setShowModal(false);
      toast.error("Please input a valid document name.");
    }
  };

  const cancelModal = () => {
    setShowModal(false);
    setInput("");
  };

  if (!session) return <Login />;

  const modal = (
    <Dialog
      size="lg"
      open={showModal}
      handler={() => setShowModal(false)}
      animate={{
        mount: { scale: 1, y: 0 },
        unmount: { scale: 0.9, y: -100 },
      }}
    >
      <DialogBody>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="outline-none w-full"
          placeholder="Enter name of document..."
          onKeyDown={(e) => e.key === "Enter" && createDocument()}
        />
      </DialogBody>
      <DialogFooter>
        <Button color="blue" onClick={cancelModal} ripple={true}>
          Cancel
        </Button>

        <Button
          color="blue"
          onClick={createDocument}
          ripple={true}
          className="ml-3"
        >
          Create
        </Button>
      </DialogFooter>
    </Dialog>
  );

  return (
    <div>
      <Head>
        <title>Google Docs</title>
        <link rel="icon" href="/google_docs_favicon.webp" />
      </Head>
      <div>
        <Toaster />
      </div>

      <Header />
      {modal}
      <NewDocument setShowModal={setShowModal} />
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
