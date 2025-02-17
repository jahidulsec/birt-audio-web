import { HeaderWithBack } from "@/components/header/header";
import { ErrorStatusPage } from "@/components/status/error-status";
import { ProfileSection } from "@/features/profile/components/profile-section";
import { getUserDetails } from "@/features/profile/db/user";
import { User } from "@/types/user";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import React from "react";

export default async function ProfilePage() {
  const cookie = await cookies().get("session");

  if (!cookie) redirect(`/`);

  let data: User | null = null;
  let err: any | null = null;

  try {
    data = await getUserDetails(cookie.value);
  } catch (error) {
    console.error(error);
    err = error;
  }

  return (
    <div>
      <HeaderWithBack title="Profile" showIcon={false} />
      <main className="px-4 container mx-auto">
        {err && <ErrorStatusPage error={err} />}
        {data && <ProfileSection user={data} />}
      </main>
    </div>
  );
}
