"use server";

import { auth } from "../lib/auth";
import { db } from "../lib/firebase";

export type Link = {
  title: string;
  url: string;
};

export default async function addCustomLinks({
  link1,
  link2,
  link3,
  profileId,
}: {
  profileId: string;
  link1: Link;
  link2: Link;
  link3: Link;
}) {
  const session = await auth();

  if (!session) return;

  try {
    await db.collection("profiles").doc(profileId).update({
      link1,
      link2,
      link3,
    });
  } catch (error) {
    console.error(error);
  }
}
