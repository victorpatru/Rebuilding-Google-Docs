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
    apiKey: "AIzaSyCeJuSjUhjZe9JKoFD8J5UUMSjCTAaBF6Q",
    authDomain: "docs-77aa5.firebaseapp.com",
    projectId: "docs-77aa5",
    storageBucket: "docs-77aa5.appspot.com",
    messagingSenderId: "77467614981",
    appId: "1:77467614981:web:d395e1611f5d757665816c",
  }),
};
export default NextAuth(authOptions);
