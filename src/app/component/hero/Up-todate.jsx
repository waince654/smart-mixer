import React from "react";
import Image from "next/image";

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
    
              <div >
                <h3 className="text-blue-950 mt-6 font-sans-serif-25px text-xl sm:text-xl md:text-2xl lg:text-[30px] font-bold ">
               Be Smart and Stay up to Date
                </h3>
              </div>
            </div>
          </div>
  
    <div>
      <div className="w-full px-4 py-8">
        {/* Parent Container */}
        <div className="flex flex-col md:flex-row gap-6 justify-center items-stretch">
          {/* Box 1 */}
          <div className="flex-1 bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            
            <div className="relative">
            <img
              src="/thumbnail.jpg"
              alt="Scenario 1"
              className="w-full h-56 object-cover"
            />
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
              <h6 className="text-lg font-semibold text-slate-800 mb-2">
                Cryptocurrency Mixing and Crypto Mergers and Acquisitions
              </h6>
              <p className="text-slate-600 text-sm leading-relaxed">
                Crypto mergers and acquisition is defining how crypto companies
                are doing business in the post ICO era. However, how are other
                factors in the space important is seeing a success in such
                ventures? Read here for more.
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
              <h6 className="text-lg font-semibold text-slate-800 mb-2">
                The Best Cryptocurrency Tumblers in the Market
              </h6>
              <p className="text-slate-600 text-sm leading-relaxed">
                Cryptocurrency mixers help crypto users to attain privacy while
                transacting online. Everyone should use them and this article
                tells you of the three leading tumblers. Read on for more info.
              </p>
            </div>
          </div>

          {/* Box 3 */}
          <div className="flex-1 bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
           
           <div className="relative">
            <img
              src="/how-buy.jpg"
              alt="Scenario 3"
              className="w-full h-56 object-cover"
            />
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
              <h6 className="text-lg font-semibold text-slate-800 mb-2">
                Buy Bitcoin Anonymously
              </h6>
              <p className="text-slate-600 text-sm leading-relaxed">
                How to buy Bitcoin anonymously must be one of the issues that
                post-novice cryptocurrency enthusiasts grapple with. Well, this
                narrative explains how, so, read on.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Uptodate;
