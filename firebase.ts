import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyCeJuSjUhjZe9JKoFD8J5UUMSjCTAaBF6Q",
  authDomain: "docs-77aa5.firebaseapp.com",
  projectId: "docs-77aa5",
  storageBucket: "docs-77aa5.appspot.com",
  messagingSenderId: "77467614981",
  appId: "1:77467614981:web:d395e1611f5d757665816c",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };