import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import React from "react";

export default async function ProfilePage() {
  const cookie = await cookies().get("session");

  if (!cookie) redirect(`/`);

//   let data: Admin[] = [];
//   let err: any | null = null;

//   try {
//     data = await getPlaylist(id, cookie.value);
//   } catch (error) {
//     console.error(error);
//     err = error;
//   }
  return <div>ProfilePage</div>;
}
