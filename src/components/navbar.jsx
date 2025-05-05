"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import NavLink from "./navLink";

const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
];

const social = [
  { url: "https://github.com/coccigabry", src: "/github.png", name: "Github" },
  {
    url: "https://it.linkedin.com/in/gabriele-cocilovo-b44458315",
    src: "/linkedin.png",
    name: "LinkedIn",
  },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleMenuClick = () => setOpen(!open);

  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
      {/* LINKS */}
      <div className="hidden md:flex gap-4 w-1/3">
        {links.map((link) => (
          <NavLink key={link.title} link={link} />
        ))}
      </div>
      {/* LOGO */}
      <div className="rounded-xl p-1 md:hidden lg:flex justify-center">
        <Link
          href="/"
          className="border-4 border-black text-sm bg-white rounded-md p-1 font-semibold flex items-center justify-center"
        >
          <span className="text-blue-800 mr-1">Cocci</span>
          <span className="w-15 h-8 rounded bg-blue-800 text-white flex items-center justify-center px-2">
            Gabry
          </span>
        </Link>
      </div>
      {/* SOCIAL */}
      <div className="hidden md:flex gap-4 justify-center w-1/3">
        {social.map((item) => (
          <Link key={item.name} href={item.url} className="bg-white rounded-2xl">
            <Image src={item.src} alt={item.name} width={30} height={30} />
          </Link>
        ))}
      </div>
      {/* RESPONSIVE MENU */}
      <div className="md:hidden">
        {/* MENU BUTTON */}
        <button
          className="w-10 h-8 flex flex-col justify-between z-50 relative"
          onClick={handleMenuClick}
        >
          <div className="w-10 h-1 bg-black rounded"></div>
          <div className="w-10 h-1 bg-black rounded"></div>
          <div className="w-10 h-1 bg-black rounded"></div>
        </button>
        {/* MENU LIST */}
        {open && (
          <div className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl">
            {links.map((link) => (
              <Link key={link.title} href={link.url}>
                {link.title}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
export default Navbar;
