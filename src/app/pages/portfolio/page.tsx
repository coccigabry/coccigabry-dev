"use client";

import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Carousel from "../../components/carousel";
import React from "react";
import { useLabels } from "../../hooks/useLabels";

const PortfolioPage = () => {

  const labels = useLabels()
  const portfolioContent = labels?.labels?.pages?.portfolio && { ...labels.labels.pages.portfolio }


  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        {/* TITLE */}
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">
          {portfolioContent?.title ?? ""}
        </div>
        {/* CAROUSEL */}
        <Carousel scrollYProgress={scrollYProgress} />
      </div>
      {/* CONTACT ME */}
      <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center">
        <h1 className="text-8xl">{portfolioContent?.getTouchText ?? ""}</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px]"
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-4xl">
                {portfolioContent?.rotatingText ?? ""}
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/pages/contact"
            className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
          >
            {portfolioContent?.getTouchBtn ?? ""}
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;
