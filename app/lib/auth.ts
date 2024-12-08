import NextAuth from "next-auth";
import { firebaseCert } from "./firebase";
import Google from "next-auth/providers/google";
import { FirestoreAdapter } from "@auth/firebase-adapter";

export const { auth, handlers, signIn, signOut } = NextAuth({
  adapter: FirestoreAdapter({
    credential: firebaseCert,
  }),
  providers: [Google],
  events: {},
  callbacks: {},
});
