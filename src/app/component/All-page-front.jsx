import React from "react";
import Image from "next/image";

const Allpagefront = ({ heading, para }) => {
  return (
    <div>
      <div className="relative w-full">
        <div className="w-full min-h-[60vh] flex items-center bg-gradient-to-b from-blue-0 to-blue-100 lg:mt-2">
          <div className="px-4 sm:px-8 lg:ml-25 lg:px-16 py-8 md:py-12 w-full">
            {/* Image Section */}
            <div className="relative mt-5 flex justify-center lg:justify-start items-center text-center">
              <Image
                src="/lines.svg"
                alt="lines"
                width={20}
                height={20} 
                className="w-15 h-auto"
              />
            </div>

            {/* Heading Section */}
            <div className="mt-6 text-center lg:text-left">
              <h3 className="text-blue-950 font-sans-serif-35px text-xl sm:text-2xl md:text-3xl lg:text-[48px] font-bold">
                {heading}
              </h3>
              <p className="max-w-full sm:max-w-xl md:max-w-2xl text-sm sm:text-base md:text-lg text-gray-500 mx-auto lg:mx-0 mt-2 leading-relaxed">
                {para}
              </p>
            </div>
          </div>
        </div>

        {/* SVG Wave */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 500 120"
            preserveAspectRatio="none"
            className="w-full h-16 sm:h-20 md:h-24"
          >
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,60 C150,220 350,-100 500,60 L500,120 L0,120 Z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Allpagefront;
