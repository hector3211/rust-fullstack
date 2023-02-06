"use client";
import { useEffect, useState } from "react";
import ModalAdd from "./components/addmodal";

type Token = {
  userRole: string;
};

export default function TheFooter() {
  const [token, setToken] = useState<Token>();
  useEffect(() => {
    async function fetchToken() {
      const res = await fetch("/api/jwt");
      const token = await res.json();
      setToken(token);
    }
    fetchToken();
  }, []);
  return (
    <footer className="relative bottom-0 w-full py-4">
      {token?.userRole === "admin" && <ModalAdd />}
    </footer>
  );
}
