"use client";

import { motion, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useLabels } from "../hooks/useLabels";

const Carousel = ({ scrollYProgress }) => {

  const labels = useLabels()
  const carouselContent = labels?.labels?.components?.carousel && {...labels.labels.components.carousel}

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
      <motion.div style={{ x }} className="flex">
        <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-blue-300 to-purple-300" />
        {carouselContent?.projects &&
          carouselContent.projects.map((project) => {
            return (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${project.bg}`}
                key={project.title}
              >
                <div className="flex flex-col gap-8 text-white">
                  <h1 className="text-xl font-bold md:text-4xl lg:text-6xl xl:text-8xl text-center">
                    {project.title}
                  </h1>
                  <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] ml-auto mr-auto">
                    <Image src={project.img} alt={project.alt} fill />
                  </div>
                  <p className="w-80 md:w-96 lg:w-[500px] lg:text-lg xl:w-[400px] text-center ml-auto mr-auto">
                    {project.desc}
                  </p>
                  <Link
                    href={project.link}
                    target="_blank"
                    className="flex justify-end"
                  >
                    <button className="p-2 text-sm md:p-4 md:text-md lg:p-6 lg:text-lg bg-white text-blue-800 font-bold m-4 border-2 border-black rounded">
                      See Source Code
                    </button>
                  </Link>
                </div>
              </div>
            );
          })}
      </motion.div>
    </div>
  );
};

export default Carousel;
