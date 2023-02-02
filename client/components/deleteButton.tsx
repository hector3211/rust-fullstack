"use client";

import { useRouter } from "next/navigation";

type ButtonProps = {
  id: number;
};

export default function TheButton({ id }: ButtonProps) {
  const router = useRouter();
  async function handleDelete() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/delete/${id}`);
    const status = res.status;
    if (status === 200) {
      router.refresh();
    }
  }
  return (
    <button
      className="btn btn-sm btn-ghost hover:btn-error"
      onClick={handleDelete}
    >
      Delete
    </button>
  );
}
