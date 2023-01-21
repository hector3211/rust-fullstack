"use client";

import { DefaultSession } from "next-auth";
import { useSession } from "next-auth/react";
export default function User({ user }: { user: DefaultSession["user"] }) {
  const { data: session } = useSession();
  if (session) {
    return <div>{user?.email}</div>;
  }
  return <div></div>;
}
