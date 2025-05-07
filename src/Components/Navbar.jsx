"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const Navbar = () => {
  const pathName = usePathname();
  const router = useRouter();
  const links = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Contact",
      path: "/contact",
    },
    {
      title: "Blogs",
      path: "/blogs",
    },
  ];

  const gotoLogin = () => {
    router.push("/home");
  };

  return (
    <div>
      <nav className="bg-red-400 flex justify-between items-center px-4 p-4">
        <h2 className="text-3xl font-bold">
          My<span className="text-emerald-300">App</span>
        </h2>
        <ul className="flex space-x-8 text-2xl">
          {links.map((link) => (
            <Link
              className={`${pathName === link.path && "text-bold text-white"}`}
              key={link.path}
              href={link.path}
            >
              {link.title}
            </Link>
          ))}
        </ul>
        <div className="space-x-4">
          <button className="font-bold text-black rounded-xl px-2 py-2 bg-emerald-300 border">
            <Link href={"/addStudent"}>Add Student</Link>
          </button>
          <button
            className="font-bold text-black rounded-xl px-2 py-2 bg-emerald-300 border"
            onClick={gotoLogin}
          >
            Login
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
