"use client";

import Audio from "@/components/icons/Audio";
import { AudioPlaceLang } from "@/types/audio";
import React, { useEffect, useRef, useState } from "react";
import { CardContainer } from "./card";
import { HeaderWithIcon } from "@/components/header/header";
import Pause from "@/components/icons/Pause";
import Play from "@/components/icons/Play";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { AudioLines, Dot, X } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { Separator } from "@/components/ui/separator";
import { Drawer, DrawerContent, DrawerTitle } from "@/components/ui/drawer";
import {
  Carousel,
  CarouselContent,
  CarouselDotButtons,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const PlaylistSection = ({ data }: { data: AudioPlaceLang[] }) => {
  const [playSong, setPlaySong] = useState<AudioPlaceLang | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(500);
  const [open, setOpen] = useState(false);

  const audioRef = useRef<HTMLAudioElement>(null);

  const handlePlay = () => {
    audioRef.current?.play();
    setIsPlaying(true);
  };

  const handlePause = () => {
    audioRef.current?.pause();
    setIsPlaying(false);
  };

  const handlePlayPause = () => {
    if (isPlaying) {
      handlePause();
    } else {
      handlePlay();
    }
  };

  const handleUpdateTime = () => {
    setCurrentTime(Number(audioRef.current?.currentTime));
    setDuration(Number(audioRef.current?.duration));
  };

  const formatDuration = (durationSeconds: number) => {
    const minutes = Math.floor(durationSeconds / 60);
    const seconds = Math.floor(durationSeconds % 60);
    const formatSeconds = seconds.toString().padStart(2, "0");
    return `${minutes}:${formatSeconds}`;
  };

  useEffect(() => {
    audioRef.current?.addEventListener("timeupdate", handleUpdateTime);

    return () => {
      audioRef.current?.removeEventListener("timeupdate", handleUpdateTime);
    };
  }, [playSong]);

  return (
    <section className="flex flex-col gap-5">
      <HeaderWithIcon icon={<Audio />} title={data[0].place.name} />
      <CardContainer
        data={data}
        onPlaySong={setPlaySong}
        onIsPlaying={setIsPlaying}
        playSong={playSong}
      />

      {playSong && (
        <>
          <audio
            src={`${process.env.NEXT_PUBLIC_API_URL}${playSong.fileUrl}`}
            controls
            autoPlay
            className="hidden"
            ref={audioRef}
          />

          {/* bottom player */}
          <div className="sticky bottom-3 bg-primary/65 backdrop-blur-sm rounded-xl flex items-center justify-between gap-2 p-4 w-full">
            <div className="flex items-center gap-3 flex-1 w-full grow">
              {/* image */}
              <div
                className="relative bg-muted min-h-10 min-w-10 h-16 aspect-square rounded-xl overflow-hidden cursor-pointer"
                onClick={() => {
                  setOpen(true);
                }}
              >
                <Image
                  src={`${process.env.NEXT_PUBLIC_API_URL}${playSong.imgUrl[0]}`}
                  fill
                  objectFit="cover"
                  alt={playSong.language.name}
                />
              </div>

              {/* details */}
              <div className="flex flex-col-reverse w-full gap-2">
                <div className="flex items-center gap-2 text-primary-foreground">
                  <h5 className="text-sm font-Semibold">
                    {playSong.place.name}
                  </h5>
                  <Dot />
                  <h6 className="text-xs text-primary-foreground">
                    {playSong.language.name}
                  </h6>
                </div>

                <div className="flex flex-col gap-2 w-full ">
                  {/* duration */}
                  <div className="flex w-full items-center justify-between">
                    <p className="text-xs text-primary-foreground min-w-10">
                      {formatDuration(currentTime)}
                    </p>
                    <p className="text-xs text-primary-foreground ml-3">
                      {formatDuration(duration || 0)}
                    </p>
                  </div>

                  {/* controls */}
                  <div className="flex w-full items-center relative z-10">
                    {/* progress bar */}
                    <Slider
                      min={0}
                      max={duration}
                      value={[currentTime]}
                      onValueChange={(value) => {
                        if (audioRef.current) {
                          audioRef.current.currentTime = value[0];
                          setCurrentTime(value[0]);
                        }
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <Separator orientation="vertical" className="h-8" />

            <div className="relative">
              {/* play control */}
              <button
                className="min-w-10 rounded-full aspect-square bg-primary [&_svg]:fill-primary-foreground [&_svg]:size-4 flex items-center justify-center text-primary-foreground hover:bg-primary/90"
                onClick={handlePlayPause}
              >
                {isPlaying ? <Pause /> : <Play />}
              </button>
            </div>

            {/* close player button */}
            <Button
              size={"icon"}
              variant={"outline"}
              className="min-w-8 aspect-square hover:text-destructive ml-auto rounded-full absolute -top-4 -right-1 bg-muted"
              onClick={() => {
                setPlaySong(null);
                setIsPlaying(false);
              }}
            >
              <X className="size-4" />
            </Button>
          </div>

          {/* modal player */}
          <Drawer open={open} onOpenChange={setOpen}>
            <DrawerContent className="bg-primary/35 backdrop-blur-md border-transparent">
              <DrawerTitle className="flex items-center gap-3 text-primary-foreground">
                <AudioLines className="text-secondary" /> Audio Player
              </DrawerTitle>

              <div className="mt-10">
                <Carousel
                  opts={{
                    loop: true,
                  }}
                  plugins={[
                    Autoplay({
                      delay: 5000,
                    }),
                  ]}
                >
                  <CarouselContent className="aspect-square w-5/6 md:w-1/2 max-w-[20rem] mx-auto">
                    {playSong.imgUrl.map((item, index) => (
                      <CarouselItem key={index} className="basic pl-0">
                        {/* image */}
                        <div className="relative bg-muted w-full aspect-square rounded-xl overflow-hidden">
                          <Image src={`${process.env.NEXT_PUBLIC_API_URL}${item}`} fill objectFit="cover" alt={item} />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselDotButtons />
                </Carousel>
                <div className="flex items-center flex-col gap-3">
                  {/* details */}
                  <div className="flex flex-col text-center my-3 text-primary-foreground">
                    <h5 className="text-lg font-Semibold">
                      {playSong.place.name}
                    </h5>
                    <h6 className="text-sm">{playSong.language.name}</h6>
                  </div>
                </div>

                {/* duration */}
                <div className="flex justify-between items-center gap-5 mb-4">
                  <p className="text-xs text-primary-foreground min-w-10">
                    {formatDuration(currentTime)}
                  </p>

                  <p className="text-xs text-primary-foreground ml-3">
                    {formatDuration(duration || 0)}
                  </p>
                </div>

                {/* progress bar */}
                <Slider
                  min={0}
                  max={duration}
                  value={[currentTime]}
                  onValueChange={(value) => {
                    if (audioRef.current) {
                      audioRef.current.currentTime = value[0];
                      setCurrentTime(value[0]);
                    }
                  }}
                />

                {/* play control */}
                <button
                  className="mx-auto mt-10 min-w-16 rounded-full aspect-square bg-primary [&_svg]:fill-primary-foreground [&_svg]:size-8 flex items-center justify-center text-primary-foreground hover:bg-primary/90"
                  onClick={handlePlayPause}
                >
                  {isPlaying ? <Pause /> : <Play />}
                </button>
              </div>
            </DrawerContent>
          </Drawer>
        </>
      )}
    </section>
  );
};

export { PlaylistSection };
