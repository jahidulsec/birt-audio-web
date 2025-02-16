import Image from "next/image";
import React from "react";

const HeroSection = ({ imgUrl }: { imgUrl: string }) => {
  return (
    <section>
      <div className="relative w-full aspect-[16/6] rounded-lg overflow-hidden">
        <Image fill src={imgUrl} alt="" objectFit="cover" />
      </div>
    </section>
  );
};

export { HeroSection };
