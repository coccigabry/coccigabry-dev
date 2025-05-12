"use client";

import { jobs } from "../../public/content";

const Timeline = () => {
  return (
    <div className="">
      {jobs &&
        jobs.map((job, idx) => (
          <div key={idx} className="flex justify-between h-48">
            {/* LEFT */}
            <div className="w-1/3">
              {idx % 2 == 0 && (
                <>
                  <div className="bg-white p-3 font-semibold rounded text-blue-800">
                    {job.role}
                  </div>
                  <div className="p-3 text-sm font-semibold">{job.date}</div>
                  <div className="bg-white p-2 text-blue-800 text-sm font-semibold w-fit">
                    {job.company}
                  </div>
                </>
              )}
            </div>
            {/* CENTER */}
            <div className="w-1/6 flex justify-center">
              {/* LINE */}
              <div className="w-1 h-full bg-gray-700 rounded relative">
                {/* POINTER */}
                <div className="absolute w-5 h-5 rounded-full ring-4 ring-yellow-500 bg-white -left-2"></div>
              </div>
            </div>
            {/* RIGHT */}
            <div className="w-1/3">
              {idx % 2 !== 0 && (
                <>
                  <div className="bg-white p-3 font-semibold rounded text-blue-800">
                    {job.role}
                  </div>
                  <div className="p-3 text-sm font-semibold">{job.date}</div>
                  <div className="bg-white p-2 text-blue-800 text-sm font-semibold w-fit">
                    {job.company}
                  </div>
                </>
              )}
            </div>
          </div>
        ))}
    </div>
  );
};

export default Timeline;
