/* Our react-draft import does not work because NextJS renders it on the server where the window object is not defined. 

We use "dynamic" import from next to get around this error */

import dynamic from "next/dynamic";
import { ComponentType, useEffect, useState } from "react";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorProps } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import {
  doc,
  DocumentData,
  DocumentSnapshot,
  getDoc,
  setDoc,
} from "firebase/firestore";
import { useRouter } from "next/router";
import { db } from "../firebase.config";
import { convertFromRaw, convertToRaw } from "draft-js";
import { useDocumentOnce } from "react-firebase-hooks/firestore";
import Login from "./Login";

const Editor: ComponentType<EditorProps> = dynamic(
  // @ts-ignore
  () => import("react-draft-wysiwyg").then((module) => module.Editor),
  {
    ssr: false,
  }
);

function TextEditor({ session }: any) {
  if (!session) return <Login />;
  const router = useRouter();
  const { id } = router.query;

  const [editorState, setEditorState] = useState<EditorState>(
    EditorState.createEmpty()
  );

  const [snapshot] = useDocumentOnce(
    // @ts-ignore
    doc(db, "userDocs", session.user?.email ?? "", "docs", id)
  );

  useEffect(() => {
    // @ts-ignore
    if (snapshot?.data().editorState) {
      setEditorState(
        EditorState.createWithContent(
          convertFromRaw(snapshot?.data()?.editorState)
        )
      );
    }
  }, [snapshot]);

  const onEditorStateChange = (editorState: EditorState) => {
    // Manager Rich Editor Text
    setEditorState(editorState);
    // Put our Rich Editor Text into Firestore
    // @ts-ignore
    const docRef = doc(db, "userDocs", session.user?.email ?? "", "docs", id);

    setDoc(
      docRef,
      { editorState: convertToRaw(editorState.getCurrentContent()) },
      { merge: true }
    );
  };

  return (
    <section className="bg-[#F8F9FA] min-h-screen pb-16">
      <Editor
        toolbarClassName="flex sticky top-0 z-50 !justify-center mx-auto"
        editorClassName="mt-6 p-10 bg-white shadow-lg max-w-5xl mx-auto mb-12 border rounded-xl !h-[1000px]"
        editorState={editorState}
        onEditorStateChange={onEditorStateChange}
      />
    </section>
  );
}
export default TextEditor;
