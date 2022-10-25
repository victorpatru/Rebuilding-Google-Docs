import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { FirestoreAdapter } from "@next-auth/firebase-adapter";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),
  ],
  adapter: FirestoreAdapter({
    apiKey: "AIzaSyC9scV08MTBg4o1o3t1XuSn-BKiUPPLYgE",
    authDomain: "docs-2-3a3dd.firebaseapp.com",
    projectId: "docs-2-3a3dd",
    storageBucket: "docs-2-3a3dd.appspot.com",
    messagingSenderId: "289029707762",
    appId: "1:289029707762:web:d52393a6327bac46547d6b",
  }),
  secret: process.env.SECRET,
};
export default NextAuth(authOptions);
