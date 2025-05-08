"use client";
import { IoMdAddCircle } from "react-icons/io";

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
      <nav className="bg-slate-900 flex justify-between rounded-4xl items-center px-10 py-4">
        <h2 className="text-3xl font-bold text-white">
          My<span className="text-[#c2cc33]">App</span>
        </h2>
        <ul className="flex space-x-8 text-2xl font-bold text-white">
          {links.map((link) => (
            <Link
              className={`${
                pathName === link.path &&
                "ring-2 ring-[#c2cc33] rounded-4xl px-2 py-1"
              }`}
              key={link.path}
              href={link.path}
            >
              {link.title}
            </Link>
          ))}
        </ul>
        <div className="space-x-4">
          <button className="font-bold text-black rounded-xl px-2 py-2 bg-[#c2cc33] border">
            <Link href={"/addStudent"}>
              {" "}
              <div className="flex justify-center items-center">
                <IoMdAddCircle />
                Add Student
              </div>
            </Link>
          </button>
          <button
            className="font-bold text-black rounded-xl px-2 py-2 bg-[#c2cc33] border"
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
