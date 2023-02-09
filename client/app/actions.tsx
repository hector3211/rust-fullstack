"use client";
import { signIn, signOut } from "next-auth/react";

export function SignOut() {
  return (
    <button
      className={"text-white btn btn-primary rounded-md"}
      onClick={() => signOut()}
    >
      Sign out
    </button>
  );
}

export function SignIn() {
  return (
    <button
      className={"text-white btn bg-orange-500 rounded-md hover:bg-orange-700"}
      onClick={() => signIn()}
    >
      Sign in
    </button>
  );
}
