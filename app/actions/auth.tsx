"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function Login(formData: FormData) {
  const email = formData.get("email");
  const password = formData.get("pass");

  if (email == "admin@test.com" && password == "123456") {
    const cookieStore = await cookies();
    cookieStore.set("auth", "true", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
    });
    redirect("/dashboard");
  }
  throw new Error("Invalid Credentials");
}

export async function logout() {
  const cookieStore = await cookies();
  cookieStore.delete("auth");
  redirect("/login");
}
