import { HeaderWithBack } from "@/components/header/header";
import { ErrorStatusPage } from "@/components/status/error-status";
import { NoData } from "@/components/status/no-data";
import { HeroSection } from "@/features/playlist/components/hero-section";
import { PlaylistSection } from "@/features/playlist/components/playlist-section";
import { getPlaylist } from "@/features/playlist/db/playlist";
import { AudioPlaceLang } from "@/types/audio";
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

  let data: AudioPlaceLang[] = [];
  let err: any | null = null;

  try {
    data = await getPlaylist(id, cookie.value);
  } catch (error) {
    console.error(error);
    err = error;
  }

  return (
    <div>
      <HeaderWithBack title="Playlist" />
      <main className="flex flex-col gap-6 px-4 sm:px-0 container mx-auto">
        {!err && data && data.length > 0 ? (
          <>
            <HeroSection imgUrl={data?.[0].place.imgUrl} />
            <PlaylistSection data={data} />
          </>
        ) : (
          <div className=" pt-20">
            <NoData />
          </div>
        )}
        {err && <ErrorStatusPage error={err} />}
      </main>
    </div>
  );
}
