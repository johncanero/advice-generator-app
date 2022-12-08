/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { GiPerspectiveDiceSixFacesFour } from "@react-icons/all-files/gi/GiPerspectiveDiceSixFacesFour"


const Hero = () => {
  return (
    <div className="text-center mx-96 font-Roboto">
      <div>
        {/* Card */}
        <div className="px-12 py-6 mx-auto rounded-lg bg-neutral-200 md:max-w-xl shadow-20 dark:bg-zinc-800">
          <p className="tracking-widest text-orange-400">
             ADVICE # 1
          </p>

          <h2 className="mt-6 text-3xl">
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
            ducimus pariatur dolor accusantium deserunt"
          </h2>
    
          {/* Horizontal Line */}
          <hr className="h-px mx-auto my-8 bg-gray-700 border-0 dark:bg-neutral-700 w-60"/>

            
        </div>
          {/* Button */}
          <div>
            <button className="relative z-50 px-2 py-2 mt-4 font-bold text-black bg-orange-400 rounded hover:bg-orange-600">
              <GiPerspectiveDiceSixFacesFour size={48} /> 
            </button>
          </div>
      </div>
    </div>
  );
};

export default Hero;
