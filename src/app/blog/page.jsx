import React from "react";
import Header2 from "../component/Header2";
import Image from "next/image";
import Bloggrid from "./Blog-grid";
import Belowfaq from "../component/hero/Below-faq";
import Footer from "../component/Footer";

const page = () => {
  return (
    <>
      <div className=" relative w-full ">
        <Header2 />
        <div className="w-full h-[40vh] flex  items-center bg-gradient-to-b from-blue-0 to-blue-100 mt-10">
          <div className="px-4 sm:px-8  lg:ml-25 lg:px-16 py-8 md:py-12">
            <div className="relative mt-5 flex  items-center">
              <Image
                src="/lines.svg"
                alt="lines"
                width={300}
                height={300}
                className="w-auto h-auto"
              />
            </div>

            <div>
              <h3 className="text-blue-950 mt-6 font-sans-serif-35px text-xl sm:text-2xl md:text-3xl lg:text-[48px] font-bold ">
                Blog
              </h3>
            </div>
          </div>
        </div>
        {/* for design below the image */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 500 120"
            preserveAspectRatio="none"
            className="w-full h-24"
          >
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,60 C150,220 350,-100 500,60 L500,120 L0,120 Z"
            />
          </svg>
        </div>
      </div>
      <Bloggrid />
      <Belowfaq />
      <Footer />
    </>
  );
};

export default page;
