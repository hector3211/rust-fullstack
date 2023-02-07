"use client";
import { signIn, signOut } from "next-auth/react";

export function SignOut() {
  return (
    <button className={"text-white"} onClick={() => signOut()}>
      Sign out
    </button>
  );
}

export function SignIn() {
  return (
    <button className={"text-white"} onClick={() => signIn()}>
      Sign in
    </button>
  );
}
