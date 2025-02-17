"use client";

import Logout from "@/components/icons/Logout";
import Policy from "@/components/icons/Policy";
import Terms from "@/components/icons/Terms";
import { LogoImage } from "@/components/logo/logo";
import { Button } from "@/components/ui/button";
import { logout } from "@/features/login/action/login";
import { User } from "@/types/user";
import { useRouter } from "next-nprogress-bar";
import Link from "next/link";
import React, { ReactNode, useTransition } from "react";
import { toast } from "sonner";

const linkList = [
  {
    id: 1,
    title: "Privacy Policy",
    icon: <Policy />,
    url: "/privacy-policy",
  },
  {
    id: 2,
    title: "Terms of Service",
    icon: <Terms />,
    url: "/terms",
  },
];

const ProfileSection = ({ user }: { user: User }) => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  return (
    <section>
      <div className="flex flex-col justify-center items-center gap-5 pt-10">
        {/* icon */}
        <div className="flex justify-center items-center">
          <LogoImage className="w-20 border rounded-full border-secondary" />
        </div>

        {/* name */}
        <h2 className="text-center font-Semibold text-lg">{user.name}</h2>

        <Button
          variant={"secondary"}
          onClick={() => {
            startTransition(async () => {
              const res = await logout();
              if (res.error) {
                toast.error(res.error);
              } else {
                toast.success(res.success);
                router.push("/");
              }
            });
          }}
          disabled={isPending}
        >
          <Logout />
          Logout
        </Button>
      </div>

      <div className="flex flex-col gap-5 my-10">
        {linkList.map((item) => (
          <CustomButton {...item} key={item.id} />
        ))}
      </div>
    </section>
  );
};

const CustomButton = ({
  icon,
  title,
  url,
}: {
  icon: ReactNode;
  title: string;
  url: string;
}) => {
  return (
    <Button
      variant={"accent"}
      className="text-primary flex justify-start sm:justify-center"
    >
      <Link href={url} className="flex justify-start sm:justify-center gap-5">
        {icon} {title}
      </Link>
    </Button>
  );
};

export { ProfileSection };
