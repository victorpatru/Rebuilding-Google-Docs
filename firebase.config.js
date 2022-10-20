import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC9scV08MTBg4o1o3t1XuSn-BKiUPPLYgE",
  authDomain: "docs-2-3a3dd.firebaseapp.com",
  projectId: "docs-2-3a3dd",
  storageBucket: "docs-2-3a3dd.appspot.com",
  messagingSenderId: "289029707762",
  appId: "1:289029707762:web:d52393a6327bac46547d6b",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
