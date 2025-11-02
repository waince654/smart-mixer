import React from "react";
import Image from "next/image";

const Logoarea = () => {
  return (
    <div>
      <div className="flex flex-wrap justify-center items-center gap-10 mt-20">
        {/* logo-1 */}
        <div className="relative flex flex-col items-center justify-center w-45 h-45 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300 transition-transform hover:scale-105 ">
          <div className="absolute inset-0 rounded-full border-r-[14px] border-t-[2px] border-b-[2px] border-blue-50 border-l-0  "></div>

          {/* Logo Image */}
          <img
            src="/bitcoin-logo.svg"
            alt="bitcoin-logo"
            className="w-16 h-16 object-contain relative z-10"
          />

          {/* Logo Text */}
          <span className=" text-based  text-center mt-4 relative z-10">
            Bitcoin
          </span>
        </div>

        {/* logo-2 */}
        <div className="relative flex flex-col items-center justify-center w-45 h-45 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300 transition-transform hover:scale-105 ">
          <div className="absolute inset-0 rounded-full border-r-[14px] border-t-[2px] border-b-[2px] border-blue-50 border-l-0  "></div>

          {/* Logo Image */}
          <img
            src="/litecoin.svg"
            alt="litecoin"
            className="w-16 h-16 object-contain relative z-10"
          />

          {/* Logo Text */}
          <span className=" text-based  text-center mt-4 relative z-10">
            Litecoin
          </span>
        </div>

        {/* logo-3 */}
        <div className="relative flex flex-col items-center justify-center w-45 h-45 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300 transition-transform hover:scale-105 ">
          <div className="absolute inset-0 rounded-full border-r-[14px] border-t-[2px] border-b-[2px] border-blue-50 border-l-0  "></div>

          {/* Logo Image */}
          <img
            src="/bitcoin-logo2.svg"
            alt="bitcoin-logo2"
            className="w-16 h-16 object-contain relative z-10"
          />

          {/* Logo Text */}
          <span className=" text-based  text-center mt-4 relative z-10">
            Bitcoin Cash
          </span>
        </div>

        {/* logo-4 */}
        <div className="relative flex flex-col items-center justify-center w-45 h-45 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300 transition-transform hover:scale-105 ">
          <div className="absolute inset-0 rounded-full border-r-[14px] border-t-[2px] border-b-[2px] border-blue-50 border-l-0  "></div>

          {/* Logo Image */}
          <img
            src="/ethereum.svg"
            alt="Ethereum"
            className="w-16 h-16 object-contain relative z-10"
          />

          {/* Logo Text */}
          <span className=" text-based  text-center mt-4 relative z-10">
            Ethereum
          </span>
        </div>
      </div>
    </div>
  );
};

export default Logoarea;
