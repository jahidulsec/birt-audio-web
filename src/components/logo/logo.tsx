import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="relative w-16 aspect-square">
        <Image
          src={"/icons/adaptive-icon.png"}
          fill
          objectFit="cover"
          alt="birt-logo"
        />
      </div>
      <h1 className="font-Semibold text-lg">BIRT</h1>
    </div>
  );
};

export { Logo };
