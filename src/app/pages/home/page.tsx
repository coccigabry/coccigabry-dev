"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useLabels } from "../../hooks/useLabels";
import React from "react";
import Link from "next/link";

const Homepage = () => {

  const labels = useLabels()
  const homeContent = labels?.labels?.pages?.homepage && { ...labels.labels.pages.homepage }

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
          <h1 className="text-4xl md:text-6xl font-bold">{homeContent?.title ?? ''}</h1>
          {/* DESCRIPTION */}
          <p className="md:text-xl">{homeContent?.desc ?? ""}</p>
          {/* BUTTONS */}
          <div className="flex gap-4">
            <Link href="/pages/portfolio">
              <button className="p-4 rounded-lg ring-1 ring-black bg-blue-800 text-white">
                {homeContent?.projectsBtn ?? ""}
              </button>
            </Link>
            <Link href="/pages/contact">
              <button className="p-4 rounded-lg ring-1 ring-black">
                {homeContent?.contactBtn ?? ""}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
