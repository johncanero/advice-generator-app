/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { GiPerspectiveDiceSixFacesFour } from "@react-icons/all-files/gi/GiPerspectiveDiceSixFacesFour";
import { ImQuotesRight } from "@react-icons/all-files/im/ImQuotesRight"

const Hero = () => {
  return (
    <div className="mx-2 mt-12 text-center md:mx-32 lg:mx-96 font-Roboto">
      <div>
        {/* Card */}
        <div className="py-10 mx-auto rounded-lg shadow-lg md:px-12 dark:border-none bg-neutral-100 md:max-w-xl shadow-20 dark:bg-zinc-800">
          <p className="text-sm font-bold tracking-widest text-orange-400 ">
            ADVICE # 1
          </p>

          <h2 className="mx-6 my-8 text-xl font-medium md:text-2xl">
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
            ducimus pariatur dolor accusantium deserunt"
          </h2>

          {/* Horizontal Line */}
          <div className="flex mt-8">
            <hr className="h-px mx-auto mt-4 bg-gray-700 border-0 w-28 md:w-32 lg:w-40 dark:bg-neutral-700" />
            <ImQuotesRight size={28} />
            <hr className="h-px mx-auto mt-4 bg-gray-700 border-0 w-28 md:w-32 lg:w-40 dark:bg-neutral-700" />
          </div>
        </div>
        {/* Button */}
        <div>
          <button className="relative z-50 px-2 py-2 mt-5 font-bold text-black bg-orange-400 rounded hover:bg-orange-500">
            <GiPerspectiveDiceSixFacesFour size={48} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
