/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { useState, useEffect } from "react";
import { GiPerspectiveDiceSixFacesFour } from "@react-icons/all-files/gi/GiPerspectiveDiceSixFacesFour";
import { ImQuotesRight } from "@react-icons/all-files/im/ImQuotesRight";

const Hero = () => {
  const [text, setText] = useState([]);

  const fetchAdvice = async () => {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();

    console.log(data);

    setText(data.slip);
  };

  useEffect(() => {
    fetchAdvice();
  }, []);

  return (
    <div className="mx-2 mt-12 text-center md:mx-32 lg:mx-96 font-Roboto">
      <div>
        {/* Card */}
        <div className="py-10 mx-auto rounded-lg shadow-lg md:px-12 dark:border-none bg-neutral-100 md:max-w-xl shadow-20 dark:bg-zinc-800">
          <p className="text-sm font-bold tracking-widest text-cyan-500 dark:text-cyan-200 ">
            ADVICE #{text.id}
          </p>

          <h2 className="mx-6 text-xl font-medium my-7 md:text-2xl">
            {text.advice}
          </h2>

          {/* Horizontal Line */}
          <div className="flex justify-center mt-8">
            <ImQuotesRight size={28} className="dark:text-cyan-200" />
          </div>
        </div>
        {/* Button */}
        <div>
          <button
            className="relative z-50 px-2 py-2 mt-5 font-bold text-black rounded-md bg-cyan-300 hover:bg-cyan-400 "
            onClick={fetchAdvice}
          >
            <GiPerspectiveDiceSixFacesFour size={48} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
