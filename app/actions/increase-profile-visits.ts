"use server";

import { FieldValue } from "firebase-admin/firestore";
import { db } from "../lib/firebase";

export async function increaseProfileVisits(profileId: string) {
  const profileRef = db.collection("profiles").doc(profileId);

  await db.runTransaction(async (transaction) => {
    const profile = await transaction.get(profileRef);

    if (!profile.exists) return;

    transaction.update(profileRef, { totalVisits: FieldValue.increment(1) });
  });
}
