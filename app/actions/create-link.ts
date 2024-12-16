"use server";

import { Timestamp } from "firebase-admin/firestore";
import { auth } from "../lib/auth";
import { db } from "../lib/firebase";

export async function createLink(link: string) {
  const session = await auth();

  if (!session?.user) return;

  try {
    await db.collection("profiles").doc(link).set({
      userId: session.user.id,
      totalVisits: 0,
      createdAt: Timestamp.now().toMillis(),
    });

    return true;
  } catch (error) {
    return false;
  }
}
