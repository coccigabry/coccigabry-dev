"use client";

import Image from "next/image";
import {
  homeContactBtn,
  homeDesc,
  homeProjectsBtn,
  homeTitle,
} from "../../public/content";
import { motion } from "framer-motion";

const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col px-4 lg:flex-row sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* IMAGE CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative">
          <Image
            src="/hero.png"
            alt="guy picture"
            fill
            className="object-contain"
          />
        </div>
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
          {/* TITLE */}
          <h1 className="text-4xl md:text-6xl font-bold">{homeTitle}</h1>
          {/* DESCRIPTION */}
          <p className="md:text-xl">{homeDesc}</p>
          {/* BUTTONS */}
          <div className="flex gap-4">
            <button className="p-4 rounded-lg ring-1 ring-black bg-blue-800 text-white">
              {homeProjectsBtn}
            </button>
            <button className="p-4 rounded-lg ring-1 ring-black">
              {homeContactBtn}
            </button>
            <button></button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
