"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import NavLink from "./navLink";
import { motion } from "framer-motion";
import { useLabels } from "../hooks/useLabels";
import { usePathname } from "next/navigation";

const Navbar = () => {

  const pathName = usePathname()

  const labels = useLabels()
  const navbarContent = labels?.labels?.components?.navbar && { ...labels.labels.components.navbar }

  const [open, setOpen] = useState(false);

  const burgerTopLineVariants = {
    closed: { rotate: 0 },
    opened: { rotate: 45, backgroundColor: "rgb(255,255,255)" },
  };
  const burgerCenterLineVariants = {
    closed: { opacity: 1 },
    opened: { opacity: 0 },
  };
  const burgerBottomLineVariants = {
    closed: { rotate: 0 },
    opened: { rotate: -45, backgroundColor: "rgb(255,255,255)" },
  };
  const menuListVariants = {
    closed: { x: "100vw" },
    opened: { x: 0, transition: { when: "beforeChildren", staggerChildren: 0.2 } },
  };
  const menuListItemVariants = {
    closed: { x: -10, opacity: 0 },
    opened: { x: 0, opacity: 1 },
  };

  const handleMenuClick = () => setOpen(!open);

  if (pathName !== "/") return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
      {/* LINKS */}
      <div className="hidden md:flex gap-4 w-1/3">
        {navbarContent?.links && navbarContent.links.map((link) => (
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
        {navbarContent?.social && navbarContent.social.map((item) => (
          <Link
            key={item.name}
            href={item.url}
            target="_blank"
            className="bg-white rounded-2xl"
          >
            <Image src={item.src} alt={item.name} width={30} height={30} />
          </Link>
        ))}
      </div>
      {/* RESPONSIVE MENU */}
      <div className="md:hidden">
        {/* BURGER MENU */}
        <button
          className="w-10 h-8 flex flex-col justify-between z-50 relative"
          onClick={handleMenuClick}
        >
          <motion.div
            variants={burgerTopLineVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
          <motion.div
            variants={burgerCenterLineVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded"
          ></motion.div>
          <motion.div
            variants={burgerBottomLineVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
        </button>
        {/* MENU LIST */}
        {open && (
          <motion.div
            variants={menuListVariants}
            initial="closed"
            animate="opened"
            className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl z-40"
          >
            {navbarContent?.links && navbarContent.links.map((link) => (
              <motion.div
                key={link.title}
                variants={menuListItemVariants}
                className=""
              >
                <Link href={link.url}>{link.title}</Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};
export default Navbar;
