import React from "react";

const Hero = () => {
  return (
    <div className="text-center mx-96">
      <div>
        {/* Card */}
        <div className="p-6 mx-auto rounded-lg bg-gray-50 md:max-w-xl shadow-20 dark:bg-zinc-800">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
            ducimus pariatur dolor accusantium deserunt
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
            ducimus pariatur dolor accusantium deserunt
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
            ducimus pariatur dolor accusantium deserunt
          </p>

          {/* Button */}
          <div>
            <button className="relative z-50 px-4 py-2 mt-4 font-bold text-black rounded bg-custom-green hover:bg-green-400">
              Logo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
