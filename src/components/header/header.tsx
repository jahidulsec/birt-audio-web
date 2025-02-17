"use client";

import React from "react";
import { Button } from "../ui/button";
import Back from "../icons/Back";
import { LogoImage } from "../logo/logo";
import { useRouter } from "next-nprogress-bar";

const HeaderWithBack = ({ title }: { title: string }) => {
  const router = useRouter();

  return (
    <header className="px-4 py-2 flex items-center justify-between gap-1">
      {/* left */}
      <div className="flex items-center gap-1" onClick={() => router.back()}>
        <Button variant={"ghost"} size={"icon"}>
          <Back />
        </Button>
        <h1 className="text-xl font-Semibold">{title}</h1>
      </div>

      <button onClick={() => router.push("/profile")}>
        <LogoImage />
      </button>
    </header>
  );
};

const HeaderWithIcon = ({
  title,
  icon,
}: {
  title: string;
  icon: React.ReactNode;
}) => {
  return (
    <div className="flex items-center gap-2 text-primary">
      {icon}
      <h2 className="font-Semibold text-lg">{title}</h2>
    </div>
  );
};

export { HeaderWithBack, HeaderWithIcon };
