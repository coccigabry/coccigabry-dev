"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";
import Link from "next/link";
import { useLabels } from "./hooks/useLabels";
import { Languages } from "./types/index";

const languages: Languages[] = [
  {
    lang: "en",
    img: "/uk_flag.jpg",
    alt: "Image by Pete Linforth from Pixabay",
  },
  {
    lang: "it",
    img: "/it_flag.png",
    alt: "Image by OpenClipart-Vectors from Pixabay",
  },
  {
    lang: "es",
    img: "/es_flag.png",
    alt: "Image by Clker-Free-Vector-Images from Pixabay",
  },
];

const LanguageSelector = () => {
  const { setLang } = useLabels();

  const setLanguage = (event) => {
    const lang = event.currentTarget.dataset.lang;
    if (lang) {
      setLang(lang);
    }
  };

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col px-4 lg:flex-row sm:p-8 md:p-12 lg:p-20 xl:p-30">
        {/* TEXT CONTAINER */}
        <div className="h-1/3 sm:h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
          {/* TITLE */}
          <h1 className="text-4xl md:text-6xl font-bold ">SELECT LANGUAGE</h1>
        </div>
        {/* IMAGE CONTAINER */}
        <div className="h-1/2 flex gap-4 flex-col items-center sm:flex-row sm:justify-center sm:gap-10 lg:h-full lg:w-1/2 lg:flex-col lg:items-center xl:gap-10 ">
          {
            languages && languages.map(lang => (
              <div key={lang.lang} className="w-[150px] lg:w-[200px] xl:w-[220px] h-1/3 relative">
                <Link
                  href="/pages/home"
                  data-lang={lang.lang}
                  onClick={(e) => setLanguage(e)}
                >
                  <Image
                    src={lang.img}
                    alt={lang.alt}
                    className="object-contain"
                    fill
                  />
                </Link>
              </div>
            ))
          }
        </div>
      </div>
    </motion.div>
  );
};

export default LanguageSelector;
