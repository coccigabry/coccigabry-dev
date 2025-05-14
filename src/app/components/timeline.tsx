"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLabels } from "../hooks/useLabels";

const Timeline = () => {

  const labels = useLabels()
  const timelineContent = labels?.labels?.components?.timeline && { ...labels.labels.components.timeline }

  const jobRef = useRef(null);
  const jobOnView = useInView(jobRef, {once: true});

  return (
    <div className="">
      {timelineContent?.jobs &&
        timelineContent.jobs.map((job, idx) => {
          const lastExperience = timelineContent.jobs[timelineContent.jobs.length - 1];
          const increasingDelay = idx * 0.2;
          return (
            <div key={idx} className="flex justify-between h-48" ref={jobRef}>
              {/* LEFT */}
              <div className="w-1/3">
                {idx % 2 == 0 && (
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={jobOnView ? { scale: 1, opacity: 1 } : {}}
                    transition={{
                      duration: 0.3,
                      delay: increasingDelay,
                      ease: "easeOut",
                    }}
                    className=""
                  >
                    <div className="border-2 border-black bg-white p-3 font-semibold rounded-2xl rounded-se-none text-blue-800 w-fit ml-auto">
                      {job.role}
                    </div>
                    <div className="p-3 text-sm font-semibold text-right">
                      {job.date}
                    </div>
                    <div className="bg-white p-2 text-blue-800 text-sm font-semibold w-fit ml-auto">
                      {job.company}
                    </div>
                  </motion.div>
                )}
              </div>
              {/* CENTER */}
              <div className="w-1/6 flex justify-center">
                {/* LINE */}
                <div className={job !== lastExperience ? "w-1 h-full bg-gray-700 rounded relative" : "relative"}>
                  {/* POINTER */}
                  <div className="absolute w-5 h-5 rounded-full ring-4 ring-yellow-500 bg-white -left-2"></div>
                </div>
              </div>
              {/* RIGHT */}
              <div className="w-1/3">
                {idx % 2 !== 0 && (
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={jobOnView ? { scale: 1, opacity: 1 } : {}}
                    transition={{
                      duration: 0.4,
                      delay: increasingDelay,
                      ease: "easeOut",
                    }}
                    className=""
                  >
                    <div className="border-2 border-black bg-white p-3 font-semibold rounded-2xl rounded-ss-none text-blue-800 w-fit mr-auto">
                      {job.role}
                    </div>
                    <div className="p-3 text-sm font-semibold text-left">
                      {job.date}
                    </div>
                    <div className="bg-white p-2 text-blue-800 text-sm font-semibold w-fit mr-auto">
                      {job.company}
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Timeline;
