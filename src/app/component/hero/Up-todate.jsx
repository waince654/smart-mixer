import React from "react";
import Image from "next/image";
import { MdRemoveRedEye } from "react-icons/md";

const Uptodate = () => {
  return (
    <>
      <div className=" mt-20 sm:mt-16 lg:mt-0">
        <div className="px-4 sm:px-8 lg:px-16 py-8 md:py-12">
          <div className="relative mt-5">
            <Image
              src="/lines.svg"
              alt="lines"
              width={300}
              height={300}
              className="w-auto h-auto"
            />
          </div>

          <div>
            <h3 className="text-blue-950 mt-6 font-sans-serif-25px text-xl sm:text-xl md:text-2xl lg:text-[30px] font-bold ">
              Be Smart and Stay up to Date
            </h3>
          </div>
        </div>
      </div>
      {/* 3 boxes with its image and content */}
      <div>
        <div className="w-full px-4 py-8 ">
          {/* Parent Container */}
          <div className="flex flex-col md:flex-row gap-7 justify-center items-stretch ">
            {/* Box 1 */}
            <div className="flex-1 bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 pb-40">
              <div className="relative">
                <img
                  src="/thumbnail.jpg"
                  alt="Scenario 1"
                  className="w-full h-56 object-cover"
                />
                      {/* for design below the image */}
                <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
                  <svg
                    viewBox="0 0 500 50"
                    preserveAspectRatio="none"
                    className="w-full h-10"
                  >
                    <path
                      d="M0,30 C150,70 350,0 500,30 L500,50 L0,50 Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
              <div className="p-4 text-center">
                <h6 className="text-lg font-semibold text-blue-950 mb-2">
                  Cryptocurrency Mixing and Crypto Mergers and Acquisitions
                </h6>
                {/* date and eye icon */}
                <div className="flex justify-between gap-2 flex-nowrap whitespace-nowrap">
                  <a href="#" className="flex items-center gap-2 no-underline">
                    <img
                      src="/dateimg.svg"
                      alt="date img"
                      className="w-full h-auto object-cover opacity-600"
                    />
                    <span className="text-[11px] sm:text-sm leading-none text-blue-700">
                      Juanary 17, 2020
                    </span>
                  </a>

                  <span className="flex items-center gap-1 text-[11px] sm:text-sm leading-none text-blue-700">
                    <MdRemoveRedEye className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="font-medium">329</span>
                  </span>
                </div>
                {/* paragraph */}
                <p className="text-gray-400 text-md leading-relaxed">
                  Crypto mergers and acquisition is defining how crypto
                  companies are doing business in the post ICO era. However, how
                  are other factors in the space important is seeing a success
                  in such ventures? Read here for more.
                </p>
              </div>
            </div>

            {/* Box 2 */}
            <div className="flex-1 bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative">
                <img
                  src="/best-crypto.jpg"
                  alt="Scenario 2"
                  className="w-full h-56 object-cover"
                />
                      {/* for design below the image */}
                <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
                  <svg
                    viewBox="0 0 500 50"
                    preserveAspectRatio="none"
                    className="w-full h-10"
                  >
                    <path
                      d="M0,30 C150,70 350,0 500,30 L500,50 L0,50 Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
              <div className="p-4 text-center">
                <h6 className="text-lg font-semibold text-blue-950 mb-2">
                  The Best Cryptocurrency Tumblers in the Market
                </h6>
                {/* date and eye icon */}
                <div className="flex justify-between gap-2 flex-nowrap whitespace-nowrap">
                  <a href="#" className="flex items-center gap-2 no-underline">
                    <img
                      src="/dateimg.svg"
                      alt="date img"
                      className="w-full h-auto object-cover opacity-600"
                    />
                    <span className="text-[11px] sm:text-sm leading-none text-blue-700">
                     Juanary 10, 2020
                    </span>
                  </a>

                  <span className="flex items-center gap-1 text-[11px] sm:text-sm leading-none text-blue-700">
                    <MdRemoveRedEye className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="font-medium">3039</span>
                  </span>
                </div>
                {/* paragraph */}
                <p className="text-gray-400 text-md leading-relaxed">
                  Cryptocurrency mixers help crypto users to attain privacy
                  while transacting online. Everyone should use them and this
                  article tells you of the three leading tumblers. Read on for
                  more info.
                </p>
              </div>
            </div>

            {/* Box 3 */}
            <div className="flex-1 bg-white rounded-2xl shadow-md  overflow-hidden hover:shadow-lg transition-shadow duration-300 ">
              <div className="relative">
                <img
                  src="/how-buy.jpg"
                  alt="Scenario 3"
                  className="w-full h-56 object-cover"
                />
                {/* for design below the image */}
                <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
                  <svg
                    viewBox="0 0 500 50"
                    preserveAspectRatio="none"
                    className="w-full h-10"
                  >
                    <path
                      d="M0,30 C150,70 350,0 500,30 L500,50 L0,50 Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
              <div className="p-4 text-center">
                <h6 className="text-lg font-semibold  text-blue-950 mb-9">
                  Buy Bitcoin Anonymously <br/>
                </h6>
                {/* date and eye icon */}
                <div className="flex justify-between gap-2 flex-nowrap whitespace-nowrap">
                  <a href="#" className="flex items-center gap-2 no-underline">
                    <img
                      src="/dateimg.svg"
                      alt="date img"
                      className="w-full h-auto object-cover opacity-600"
                    />
                    <span className="text-[11px] sm:text-sm leading-none text-blue-700">
                    Juanary 03, 2020
                    </span>
                  </a>

                  <span className="flex items-center gap-1 text-[11px] sm:text-sm leading-none text-blue-700">
                    <MdRemoveRedEye className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="font-medium">4759</span>
                  </span>
                </div>
                {/* paragraph */}
                <p className="text-gray-400  text-md leading-relaxed">
                  How to buy Bitcoin anonymously must be one of the issues that
                  post-novice cryptocurrency enthusiasts grapple with. Well,
                  this narrative explains how, so, read on.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* view more articles button */}
      <div className="flex justify-center mt-8 items-center min-h-[18vh]">
        <button className="px-10 py-1 lg:py-3 text-lg font-semibold text-white bg-blue-300 rounded-4xl hover:bg-gray-500 transition-all duration-300 shadow-md active:scale-95 sm:px-10 sm:py-4">
          View More Articles
        </button>
      </div>
    </>
  );
};

export default Uptodate;
