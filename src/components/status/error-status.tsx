"use client";

import React, { useTransition } from "react";
import Retry from "../icons/Retry";
import { Button } from "../ui/button";
import Logout from "../icons/Logout";
import { logout } from "@/features/login/action/login";
import { useRouter } from "next-nprogress-bar";
import { toast } from "sonner";

const ErrorStatusPage = ({ error }: { error: any }) => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition()

  return (
    <section className="flex flex-col justify-center items-center gap-3 min-h-svh w-5/6 mx-auto">
      <div className=" text-muted-foreground/35">
        <Retry size={100} />
      </div>
      {error.error && (
        <>
          <p className="text-center  text-muted-foreground">
            This account does not have access for this content. Please sign in
            with another account or contact our service.
          </p>
          <p className="text-xs text-muted-foreground/50">{error.error}</p>
        </>
      )}

      {error?.cause?.errno === -4073 && (
        <>
          <p className="text-center  text-muted-foreground">
            Check your internet connection
          </p>
          <p className="text-xs text-muted-foreground/50">{error.error}</p>
        </>
      )}

      <Button
        variant={"secondary"}
        onClick={() => {
          startTransition(async() => {
            const res = await logout()
            if(res.error) {
                toast.error(res.error)
            } else {
                toast.success(res.success)
                router.push('/')
            }
          })
        }}
        disabled={isPending}
      >
        <Logout />
        Logout
      </Button>
    </section>
  );
};

export { ErrorStatusPage };
