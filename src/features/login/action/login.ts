"use server";

import { API_URL } from "@/lib/data";
import { error } from "console";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { z } from "zod";

const authSchema = z.object({
  username: z.string().min(1, { message: "Enter your username" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
});

export const login = async (prevState: unknown, formData: FormData) => {
  try {
    const result = authSchema.safeParse(Object.fromEntries(formData.entries()));

    if (result.success === false) {
      return {
        error: result.error.formErrors.fieldErrors,
        success: null,
        db: null,
      };
    }

    const response = await fetch(API_URL + "/api/v1/login/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: result.data.username,
        password: result.data.password,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw data;
    }

    const expiresAt = new Date(Date.now() + 1 * 24 * 60 * 60 * 1000);

    await cookies().set("session", data.accessToken, {
      httpOnly: true,
      secure: process.env.NEXT_PUBLIC_URL_SSL === "true",
      expires: expiresAt,
      sameSite: "lax",
      path: "/",
    });

    return {
      error: null,
      success: "Your are logged in!",
      db: null,
    };
  } catch (error: any) {
    console.error(JSON.stringify(error));
    if (error?.errors) {
      return {
        error: error.errors,
        success: null,
        db: null,
      };
    } else if (error?.error) {
      return {
        error: null,
        success: null,
        db: error.error,
      };
    }
    return {
      error: null,
      success: null,
      db: error.message,
    };
  }
};

export const logout = async () => {
  try {
    await cookies().delete("session");
    return {
      success: "Your are logged out successfully",
      error: null,
    };
  } catch (error: any) {
    console.error(error);
    return {
      success: null,
      error: error.message,
    };
  }
};
