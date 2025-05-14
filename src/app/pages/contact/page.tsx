"use client"

import { motion } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";

const ContactPage = () => {

  const [success, setSuccess] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(false)

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* IMAGE CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative">
          <div className="">
            <Image
              src="/light.png"
              alt="Marketing strategy icons created by Dewi Sari - Flaticon"
              className="object-contain"
              fill
            />
          </div>
        </div>
        {/* FORM CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 bg-red-100 rounded-xl text-xl flex flex-col gap-8 justify-center p-24">
          <span>Dear Cocci</span>
          <textarea rows={6} className="bg-transparent border-b-2 border-b-black outline-none resize-none"/>
          <span>My email is</span>
          <input type="text" className="bg-transparent border-b-2 border-b-black outline-none" />
          <span>Cheers</span>
          <button className="bg-purple-200 rounded font-semibold text-grey-600 p-4">Send</button>
          {success && <span className="text-green-600">Sent</span>}
          {error && <span className="text-red-600">Not sent</span>}
        </div>
      </div>
    </motion.div>
  );
};

export default ContactPage;
