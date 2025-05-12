"use client";

import { motion } from "framer-motion";
import {
  aboutDes,
  aboutMotto,
  aboutTitle,
  expTitle,
  skillsList,
  skillsTitle,
} from "../../../public/content";
import Timeline from "@/components/timeline";
import Image from "next/image";

const AboutPage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="h-full overflow-scroll lg:flex">
        {/* TEXT */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:w-1/2">
          {/* BIOGRAPHY */}
          <div className="flex flex-col gap-12 justify-center">
            <h1 className="font-bold text-2xl uppercase">{aboutTitle}</h1>
            <p className="text-lg">{aboutDes}</p>
            <p className="italic">{aboutMotto}</p>
            {/* SCROLL DOWN SVG */}
            <svg
              width="50px"
              height="50px"
              viewBox="0 0 24.00 24.00"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                  stroke="#000000"
                  stroke-width="0.504"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
                <path
                  d="M12 6V14"
                  stroke="#000000"
                  stroke-width="0.504"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
                <path
                  d="M15 11L12 14L9 11"
                  stroke="#000000"
                  stroke-width="0.504"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
              </g>
            </svg>{" "}
          </div>
          {/* SKILLS */}
          <div className="flex flex-col gap-12 justify-center">
            <h1 className="font-bold text-2xl uppercase">{skillsTitle}</h1>
            {/* SKILLS LIST */}
            <div className="flex flex-wrap gap-4">
              {skillsList &&
                skillsList.map((skill) => (
                  <div
                    key={skill}
                    className="rounded p-2 text-sm cursor-pointer bg-blue-800 text-white hover:bg-white hover:text-blue-800"
                  >
                    {skill}
                  </div>
                ))}
            </div>
            {/* SCROLL DOWN SVG */}
            <svg
              width="50px"
              height="50px"
              viewBox="0 0 24.00 24.00"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                  stroke="#000000"
                  stroke-width="0.504"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
                <path
                  d="M12 6V14"
                  stroke="#000000"
                  stroke-width="0.504"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
                <path
                  d="M15 11L12 14L9 11"
                  stroke="#000000"
                  stroke-width="0.504"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
              </g>
            </svg>{" "}
          </div>
          {/* EXPERIENCE */}
          <div className="flex flex-col gap-12 justify-center pb-48">
            <h1 className="font-bold text-2xl uppercase">{expTitle}</h1>
            <Timeline />
          </div>
        </div>
        {/* SVG */}
        <div className="hidden lg:block w-1/3 sticky top-0 xl:w-1/2">
          <div className="">
            <Image
              src="/brain.png"
              alt="guy picture"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
