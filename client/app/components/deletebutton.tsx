"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type ButtonProps = {
  id: number;
};

type Token = {
  userRole: string;
};

export default function TheButton({ id }: ButtonProps) {
  const [token, setToken] = useState<Token>();
  const router = useRouter();
  useEffect(() => {
    async function fetchToken() {
      const res = await fetch("/api/jwt");
      const token = await res.json();
      setToken(token);
    }
    fetchToken();
  }, []);
  async function handleDelete() {
    console.log(id);
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/delete/${id}`, {
      method: "DELETE",
    });
    const status = res.status;
    if (status === 200) {
      router.refresh();
    }
  }
  return (
    <div>
      {token?.userRole === process.env.NEXT_PUBLIC_ADMIN_SECRET ? (
        <button
          className="btn btn-sm btn-ghost hover:btn-error"
          onClick={handleDelete}
        >
          Delete
        </button>
      ) : (
        <div></div>
      )}
    </div>
  );
}
