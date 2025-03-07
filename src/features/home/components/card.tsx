import Location from "@/components/icons/Location";
import Play from "@/components/icons/Play";
import { cn } from "@/lib/utils";
import { Place } from "@/types/places";
import Image from "next/image";
import Link from "next/link";
import React, { PropsWithChildren } from "react";

type CardProps = {
  place: Place;
};

const CardContainer = ({
  children,
  className,
}: PropsWithChildren & { className?: string }) => {
  return (
    <section className={cn("md:grid grid-cols-2 gap-5", className)}>
      {children}
    </section>
  );
};

const Card = ({ place }: CardProps) => {
  return (
    <article className="w-full aspect-video md:aspect-[16/7] bg-muted/10 rounded-lg relative overflow-hidden">
      {/* bg image */}
      <div className="absolute top-0 w-full -z-[1]">
        <div className="w-full aspect-video relative overflow-hidden">
          <Image src={`${process.env.NEXT_PUBLIC_API_URL}${place.imgUrl}`} alt={place.name} fill objectFit="cover" />
        </div>
      </div>

      {/* play icon */}
      <Link
        href={"/" + place.id + "/playlist/"}
        className="flex justify-center items-center absolute top-[50%] -translate-y-[50%] mx-auto w-full"
      >
        <div className="w-14 aspect-square bg-muted/95 flex justify-center items-center rounded-full border border-transparent hover:border-primary transition-colors duration-300">
          <Play size={24} />
        </div>
      </Link>

      {/* description */}
      <div className="absolute bottom-0 bg-foreground/35 w-full py-3 flex items-center px-2 gap-2">
        <Location />
        <h4 className="text-md font-Semibold text-background">{place.name}</h4>
      </div>
    </article>
  );
};

export { Card, CardContainer };
