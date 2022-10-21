import { Button } from "@material-tailwind/react";
import { useRouter } from "next/router";
import { db } from "../../firebase.config";
import { getSession, signOut, useSession } from "next-auth/react";
import Login from "../../components/Login";
import toast from "react-hot-toast";
import { useState, useEffect } from "react";
import { getDoc, doc } from "firebase/firestore";
import { DocumentSnapshot, DocumentData } from "firebase/firestore";
import TextEditor from "../../components/TextEditor";
import { GetServerSideProps } from "next";

function EditorPage() {
  const { data: session } = useSession();
  if (!session) return <Login />;

  const router = useRouter();
  const [snapshot, setSnapshot] =
    useState<DocumentSnapshot<DocumentData> | null>(null);
  const { id } = router.query;

  useEffect(() => {
    const getDocuments = async () => {
      // @ts-ignore
      const docRef = doc(db, "userDocs", session.user?.email ?? "", "docs", id);

      const querySnapshot = await getDoc(docRef);
      // @ts-ignore
      setSnapshot(querySnapshot);
    };

    getDocuments();
  }, []);

  const handleSignOut = () => {
    toast.promise(
      signOut(),
      {
        loading: "Loading",
        success: "Successfully signed out!",
        error: "Could not sign out!",
      },
      {
        style: {
          minWidth: "250px",
        },
        success: {
          duration: 10000,
          icon: "🔥",
        },
        error: {
          duration: 5000,
          icon: "🚫",
        },
      }
    );
  };

  return (
    <section>
      <header className="flex justify-between items-center p-5 border-b-2">
        <div className="flex items-center">
          <i
            className="fa-solid fa-file-word cursor-pointer text-5xl text-[#1e96f2]"
            onClick={() => router.push("/")}
          ></i>
          <div className="ml-5">
            <h2 className="text-xl text-gray-700 font-medium mb-1 pl-1">
              {
                // @ts-ignore
                snapshot?.data().filename
              }
            </h2>
            <ul className="flex space-x-1 text-gray-500 text-sm">
              <li className="option">File</li>
              <li className="option">Edit</li>
              <li className="option">View</li>
              <li className="option">Insert</li>
              <li className="option">Format</li>
              <li className="option">Tools</li>
            </ul>
          </div>
        </div>
        <div className="flex items-center">
          <Button className="hidden md:inline-flex h-10">
            <i className="fa-solid fa-user-group"></i>
            <span className="ml-1 uppercase">Share</span>
          </Button>
          <img
            loading="lazy"
            // @ts-ignore
            src={session?.user?.image}
            className="hidden sm:block cursor-pointer h-12 w-12 rounded-full ml-4"
            alt="user profile picture"
            onClick={handleSignOut}
          />
        </div>
      </header>

      <TextEditor session={session} />
    </section>
  );
}
export default EditorPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
};
