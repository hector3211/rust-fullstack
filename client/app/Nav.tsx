import Link from "next/link";
import { SignIn, SignOut } from "./actions";
import { unstable_getServerSession } from "next-auth/next";
import { authOptions } from "../pages/api/auth/[...nextauth]";
import UserInfo from "./user";

export default async function Navbar() {
  const session = await unstable_getServerSession(authOptions);
  return (
    <div className="navbar bg-zinc-600 fixed z-50 top-0 bg-opacity-60 backdrop-blur-md">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-3xl text-orange-500 font-bold">
          RustFlix
        </a>
      </div>
      <div className="flex-none text-xl">
        <ul className="menu menu-horizontal px-1">
          {/* 
// @ts-ignore */}
          {session && <li>{<UserInfo user={session.user} />}</li>}
          <li>
            <Link href={"/"} className="text-white">
              Home
            </Link>
          </li>
          <li>
            <Link href={"/about"} className="text-white">
              About
            </Link>
          </li>
          <li>
            <Link href={"/team"} className="text-white">
              Team
            </Link>
          </li>
          <li>{session ? <SignOut /> : <SignIn />}</li>
        </ul>
      </div>
    </div>
  );
}
