import React from "react";
import Image from "next/image";
import Threesection from "./Threesection";
import Link from "next/link";
const Smartcode = () => {
  return (
    <>
    <div className="overflow-x-hidden w-full">
    {/* line image */}
      <div className="max-w-6xl mx-auto mt-10">
        <div className="w-full overflow-hidden hidden sm:block  ">
          <img
            src="/break-line.png"
            alt="Break Line"
            className="w-full brightness-60 h-auto object-cover md:h-[180px]"
          />
        </div>
      </div>
      {/* what is smart mixer */}

      <Threesection heading="What is a Smart Code ?" />
      <div className="md:max-w-6xl h-auto mx-auto">
        <p className="mt-4 bg-white max-w-6xl text-center p-2 text-gray-400 text-sm  md:text-lg leading-relaxed">
          A Smart Code is a cryptographic identifier that the system generates
          and assigns to you after your first mixing operation. It is very
          important to use this code in every future mixing operation you want
          to do at SmartMixer. The identifier prevents our system from sending
          you the same cryptocurrencies you had sent to the system before.
          (Additionally, it helps the system to determine the discount payable
          to you so you may save on mixing operations when our Loyalty Program
          benefits are applied)
        </p>
      </div>
      {/* Read more button*/}

      <div className="flex justify-center mt-8 items-center min-h-[18vh]">
        <Link href="/#">
          {" "}
          <button className=" flex lg:px-8 py-1 lg:py-3 text-xl font-bold bg-amber-50 text-cyan-400 rounded-2xl hover:-translate-y-2 transition-all duration-300 shadow-md active:scale-95 sm:py-4">
            Read More
          </button>
        </Link>
      </div>
         {/* line image */}
      <div className="max-w-6xl mx-auto mt-10">
        <div className="w-full overflow-hidden hidden sm:block  ">
          <img
            src="/break-line.png"
            alt="Break Line"
            className="w-full   brightness-60  h-auto object-cover  md:h-[180px]"
          />
        </div>
      </div>
      </div>
    </>
  );
};

export default Smartcode;
