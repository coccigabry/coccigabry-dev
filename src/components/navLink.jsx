"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ link }) => {
  const pathName = usePathname();

  const selected = pathName === link.url ? "bg-black text-white" : "";

  return (
    <Link key={link.title} className={`rounded p-2 ${selected}`} href={link.url}>
      {link.title}
    </Link>
  );
};

export default NavLink;
