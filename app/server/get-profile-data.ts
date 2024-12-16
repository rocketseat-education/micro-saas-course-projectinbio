"use server";

import { db } from "../lib/firebase";

export type ProfileData = {
  userId: string;
  totalVisits: number;
  createdAt: number;
  // adicionar mais depois - todo
};

export async function getProfileData(profileId: string) {
  const snapshot = await db.collection("profiles").doc(profileId).get();

  return snapshot.data() as ProfileData;
}
