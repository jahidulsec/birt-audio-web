import Play from "@/components/icons/Play";
import { Button } from "@/components/ui/button";
import { AudioPlaceLang } from "@/types/audio";
import Image from "next/image";
import { SetStateAction } from "react";

const CardContainer = ({
  data,
  onPlaySong,
  onIsPlaying,
  playSong,
}: {
  data: AudioPlaceLang[];
  playSong: AudioPlaceLang | null;
  onPlaySong: React.Dispatch<any>;
  onIsPlaying: React.Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <div className="flex flex-col gap-3 mb-5">
      {data.map((item) => (
        <Card
          key={item.id}
          audio={item}
          onIsPlaying={onIsPlaying}
          onPlaySong={onPlaySong}
          playSong={playSong}
        />
      ))}
    </div>
  );
};

const Card = ({
  audio,
  onPlaySong,
  onIsPlaying,
  playSong,
}: {
  audio: AudioPlaceLang;
  onPlaySong: React.Dispatch<any>;
  onIsPlaying: React.Dispatch<SetStateAction<boolean>>;
  playSong: AudioPlaceLang | null;
}) => {
  return (
    <div data-state={playSong && playSong.id === audio.id} className="flex justify-between items-center gap-2 border hover:border-primary transition-colors duration-500 p-2 px-4 rounded-lg data-[state=true]:border-primary">
      <div className="flex items-center gap-3">
        <div className="relative w-8 aspect-square">
          <Image
            fill
            src={audio.language.imgUrl}
            alt={audio.language.name}
            objectFit="cover"
          />
        </div>
        <h4>{audio.language.name}</h4>
      </div>

      <Button
        size={"icon"}
        className="rounded-full"
        onClick={() => {
          onPlaySong(audio);
          onIsPlaying(true);
        }}
        disabled={!!(playSong && playSong.id === audio.id)}
      >
        <Play />
      </Button>
    </div>
  );
};

export { Card, CardContainer };
