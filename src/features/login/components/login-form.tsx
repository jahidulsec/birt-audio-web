"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useFormState, useFormStatus } from "react-dom";
import { login } from "../action/login";
import { Spinner } from "@/components/ui/spinner";
import { useEffect } from "react";
import { toast } from "sonner";
import { useRouter } from "next-nprogress-bar";
import { useParams } from "next/navigation";

export function LoginForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  const [data, action] = useFormState(login, null);
  const router = useRouter();
  const params = useParams();

  useEffect(() => {
    if (data?.db) {
      toast.error(data.db);
    } else if (data?.success) {
      toast.success(data?.success);
      router.replace(`/${params.id}/playlist`);
    }
  }, [data, router, params]);

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="bg-muted/5 backdrop-blur-sm border-transparent text-primary-foreground">
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Welcome back</CardTitle>
          <CardDescription className="text-muted/90">
            Login below to get your audio guide
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form action={action}>
            <div className="grid gap-6">
              <div className="grid gap-2">
                <Label htmlFor="username">Username</Label>
                <Input id="username" placeholder="Username" name="username" />
                {data?.error?.username && (
                  <div className="text-destructive text-sm mt-1">
                    {data.error.username[0]}
                  </div>
                )}
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  name="password"
                  placeholder="Password"
                />
                {data?.error?.password && (
                  <div className="text-destructive text-sm mt-1">
                    {data.error.password || data.error.password[0]}
                  </div>
                )}
              </div>
              <SubmitButton />
            </div>
          </form>
        </CardContent>
      </Card>
      <div className="text-balance text-center text-xs [&_a]:underline [&_a]:underline-offset-4 [&_a]:hover:text-secondary text-primary-foreground ">
        By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
        and <a href="#">Privacy Policy</a>.
      </div>
    </div>
  );
}

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending}>
      {pending && (
        <Spinner
          borderBottomColor="border-b-background"
          className="mr-2 size-4"
        />
      )}
      {pending ? `Login...` : `Login`}
    </Button>
  );
};
