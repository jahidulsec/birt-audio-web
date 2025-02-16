import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import React from "react";

export default async function Playlist({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const cookie = await cookies().get("session");
  const { id } = await params;

  console.log("asdf", cookie);

  if (!cookie) redirect(`/${id}/login`);
  return <div>Playlist</div>;
}
