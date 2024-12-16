"use server";

import { db } from "../lib/firebase";

export async function verifyLink(link: string) {
  const snapshot = await db.collection("profiles").doc(link).get();

  return snapshot.exists;
}
