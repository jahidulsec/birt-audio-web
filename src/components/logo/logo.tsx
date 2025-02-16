import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

const Logo = ({ logoTextColor }: { logoTextColor?: string }) => {
  return (
    <div className="flex justify-center items-center">
      <div className="relative w-10 aspect-square">
        <Image
          src={"/icons/adaptive-icon.png"}
          fill
          objectFit="cover"
          alt="birt-logo"
        />
      </div>
      <h1 className={cn("font-Semibold text-xl", logoTextColor)}>BIRT</h1>
    </div>
  );
};

export { Logo };
