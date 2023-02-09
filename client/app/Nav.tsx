import Link from "next/link";
import { SignIn, SignOut } from "./actions";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../pages/api/auth/[...nextauth]";

type User = {
  user: {
    name: string;
    email: string;
    image: string;
  };
};

export default async function Navbar() {
  const session: User | null = await getServerSession(authOptions);
  return (
    <div className="navbar bg-zinc-600 fixed z-50 top-0 bg-opacity-60 backdrop-blur-md">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-2xl text-orange-500 font-bold md:text-3xl">
          RustFlix
        </a>
      </div>
      <div className="flex-shrink pr-1 md:tex-2xl lg:pr-5">
        <ul className="menu menu-horizontal md:px-1">
          <li>
            <Link href={"/"} className="text-white rounded-md">
              Home
            </Link>
          </li>
          <li>
            <Link href={"/about"} className="text-white rounded-md">
              About
            </Link>
          </li>
          <li>{session ? <SignOut /> : <SignIn />}</li>
        </ul>
      </div>
    </div>
  );
}
