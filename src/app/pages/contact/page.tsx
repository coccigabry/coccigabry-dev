"use client"

import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { useLabels } from "../../hooks/useLabels";

const ContactPage = () => {

  const [success, setSuccess] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)

  const labels = useLabels()
  const contactContent = labels?.labels?.pages?.contact && { ...labels.labels.pages.contact }


  const formRef = useRef(null)

  const sendEmail = (e) => {
    e.preventDefault()
    setLoading(true)
    setError(false)
    setError(false)

    emailjs.sendForm(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID, process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, formRef.current, {
      publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
    })
      .then(
        result => {
          setSuccess(true)
          setLoading(false)
          formRef.current.reset()
        },
        error => {
          setError(true)
          setLoading(false)
          console.log(error)
        }
      )
  }

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col items-center justify-center lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* IMAGE CONTAINER */}
        <div className="hidden lg:block lg:h-full lg:w-1/2 relative">
          <div className="">
            <Image
              src="/light.png"
              alt="Marketing strategy icons created by Dewi Sari - Flaticon"
              className="object-contain p-20"
              fill
            />
          </div>
        </div>
        {/* FORM CONTAINER */}
        <form ref={formRef} onSubmit={sendEmail} className="overflow-hidden p-14 sm:p-24 lg:w-1/2 bg-amber-100 rounded-xl text-xl flex flex-col justify-center gap-8 ">
          <span>{contactContent?.message ?? ""}</span>
          <textarea name="message" rows={5} className="bg-transparent border-b-2 border-b-black outline-none resize-none" />
          <span>{contactContent?.email ?? ""}</span>
          <input name="email" type="text" className="bg-transparent border-b-2 border-b-black outline-none" />
          {loading ? (
            <div className="grid w-full place-items-center overflow-x-scroll rounded-lg p-6 lg:overflow-visible">
              <svg className="text-gray-300 animate-spin" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"
                width="24" height="24">
                <path
                  d="M32 3C35.8083 3 39.5794 3.75011 43.0978 5.20749C46.6163 6.66488 49.8132 8.80101 52.5061 11.4939C55.199 14.1868 57.3351 17.3837 58.7925 20.9022C60.2499 24.4206 61 28.1917 61 32C61 35.8083 60.2499 39.5794 58.7925 43.0978C57.3351 46.6163 55.199 49.8132 52.5061 52.5061C49.8132 55.199 46.6163 57.3351 43.0978 58.7925C39.5794 60.2499 35.8083 61 32 61C28.1917 61 24.4206 60.2499 20.9022 58.7925C17.3837 57.3351 14.1868 55.199 11.4939 52.5061C8.801 49.8132 6.66487 46.6163 5.20749 43.0978C3.7501 39.5794 3 35.8083 3 32C3 28.1917 3.75011 24.4206 5.2075 20.9022C6.66489 17.3837 8.80101 14.1868 11.4939 11.4939C14.1868 8.80099 17.3838 6.66487 20.9022 5.20749C24.4206 3.7501 28.1917 3 32 3L32 3Z"
                  stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"></path>
                <path
                  d="M32 3C36.5778 3 41.0906 4.08374 45.1692 6.16256C49.2477 8.24138 52.7762 11.2562 55.466 14.9605C58.1558 18.6647 59.9304 22.9531 60.6448 27.4748C61.3591 31.9965 60.9928 36.6232 59.5759 40.9762"
                  stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" className="text-gray-900">
                </path>
              </svg>
            </div>
          ) : (
            <button className="bg-red-200 rounded font-semibold text-grey-600 p-4 hover:bg-red-300">{contactContent?.sendBtn ?? ""}</button>
          )}
          {success && <span className="text-green-600 text-semibold">{contactContent?.successMsg ?? ""}</span>}
          {error && <span className="text-red-600">{contactContent?.errorMsg ?? ""}</span>}
        </form>
      </div>
    </motion.div>
  );
};

export default ContactPage;
