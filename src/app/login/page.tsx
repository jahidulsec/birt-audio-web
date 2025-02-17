"use client";

import { LoginForm } from "@/features/login/components/login-form";
import { Logo } from "@/components/logo/logo";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Back from "@/components/icons/Back";
import { useRouter } from "next-nprogress-bar";

export default function LoginPage() {

  const router = useRouter()

  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10 relative bg-primary">
      <Button className="absolute top-5 left-5 z-10 rounded-full" size={'icon'} onClick={() => router.back()}>
        <Back /> <span className="sr-only">back to previous page</span>
      </Button>

      <div className="flex w-full max-w-sm flex-col gap-6 relative z-[1]">
        <Link
          target="_blank"
          href="https://www.bestinrometours.com"
          className="flex items-center gap-2 self-center font-medium"
        >
          <Logo logoTextColor="text-background" />
        </Link>
        <LoginForm />
      </div>

      {/* background */}
      <div className="absolute top-0 left-0 w-full h-full opacity-15">
        <Image fill src={"/images/bg-login.jpg"} alt="" objectFit="cover" />
      </div>
    </div>
  );
}
