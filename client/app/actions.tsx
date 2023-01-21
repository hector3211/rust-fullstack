"use client";
import { signIn, signOut } from "next-auth/react";

export function SignOut() {
  return (
    <button className={"btn btn-secondary"} onClick={() => signOut()}>
      Sign out
    </button>
  );
}

export function SignIn() {
  return (
    <button className={"btn btn-primary"} onClick={() => signIn()}>
      Sign in
    </button>
  );
}
