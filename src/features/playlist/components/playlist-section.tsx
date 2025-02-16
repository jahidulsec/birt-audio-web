import Audio from "@/components/icons/Audio";
import { AudioPlaceLang } from "@/types/audio";
import React from "react";
import { CardContainer } from "./card";
import { HeaderWithIcon } from "@/components/header/header";

const PlaylistSection = ({ data }: { data: AudioPlaceLang[] }) => {
  return (
    <section className="flex flex-col gap-5">
      <HeaderWithIcon icon={<Audio />} title={data[0].place.name} />
      <CardContainer data={data} />
    </section>
  );
};

export { PlaylistSection };
