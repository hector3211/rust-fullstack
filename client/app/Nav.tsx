import Link from "next/link";

export default function Navbar() {
  return (
    <div className="navbar bg-zinc-600">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-2xl font-bold">
          Rusty Movies
        </a>
      </div>
      <div className="flex-none text-xl">
        <ul className="menu menu-horizontal px-1">
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
        </ul>
      </div>
    </div>
  );
}
