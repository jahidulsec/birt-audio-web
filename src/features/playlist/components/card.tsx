import Play from "@/components/icons/Play";
import { Button } from "@/components/ui/button";
import { AudioPlaceLang } from "@/types/audio";
import Image from "next/image";

const CardContainer = ({ data }: { data: AudioPlaceLang[] }) => {
  return (
    <div className="flex flex-col gap-3 mb-5">
      {data.map((item) => (
        <Card key={item.id} audio={item} />
      ))}
    </div>
  );
};

const Card = ({ audio }: { audio: AudioPlaceLang }) => {
  return (
    <div className="flex justify-between items-center gap-2 border hover:border-primary transition-colors duration-500 p-2 px-4 rounded-lg">
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

      <Button size={"icon"} className="rounded-full">
        <Play />
      </Button>
    </div>
  );
};

export { Card, CardContainer };
