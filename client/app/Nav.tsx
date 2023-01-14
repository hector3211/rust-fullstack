import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex justify-end items-center px-5 text-2xl">
      <Link className="px-2" href={"/"}>
        Home
      </Link>
      <Link className="px-2" href={"/about"}>
        About
      </Link>
    </div>
  );
}
