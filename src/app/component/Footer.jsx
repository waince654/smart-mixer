"use client";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react"; // for arrows
import Image from "next/image";

export default function Footer() {
  // scroll refs for first two scrollable divs
  const scrollRef1 = useRef(null);
  const scrollRef2 = useRef(null);

  const scroll = (ref, direction) => {
    if (ref.current) {
      const scrollAmount = direction === "left" ? -150 : 150;
      ref.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <>
      <footer className="w-full relative bg-blue-50 overflow-hidden">
                 {/* Wave Top Background */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            className="absolute top-0 left-0 w-full h-32"
            preserveAspectRatio="none"
          >
            <path
              fill="rgb(255, 255, 255)" // ye same color rakhein jo footer ke background se thoda halka ho
              d="M0,160 C360,-40 1080,360 1440,160 L1440,0 L0,0Z"
            ></path>
          </svg>
        
        {/* Rest of your footer content ↓ */}

        <div className="   flex justify-center items-center mt-20 bg-blue-50 ">
          <div className=" w-[90%] px-4  pb-2  sm:px-8">
            {/* Logo */}
            <div className=" flex items-center justify-center   mb-8">
              <Image
                src="/mainIcon.gif"
                alt="Smart Mixer Logo"
                width={350}
                height={100}
                className="rounded-2xl font-bold"
                priority
              />
            </div>

            {/* Main Footer Content */}
            <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-10 md:gap-20 max-w-6xl mx-auto">
              <div className="flex flex-col md:flex-row justify-between w-full gap-15">
                {/* Column 1*/}

                <div className="flex-1 min-w-[250px]">
                  <div className="flex  mb-4">
                    <Image
                      src="/icon-footer.svg"
                      alt="Smart Mixer Logo"
                      width={35}
                      height={35}
                      className="rounded-2xl font-bold"
                      priority
                    />
                    <h6 className="text-blue-400 text-base  sm:text-lg lg:text-xl font-semibold  ml-4 pt-2">
                      Donation BTC
                    </h6>
                  </div>
                  <div className="relative flex items-center">
                    {/* Scrollable Text */}
                    <div
                      ref={scrollRef1}
                      className="overflow-x-auto whitespace-nowrap scrollbar-hide px-6"
                    >
                      <p className="inline-block text-sm sm:text-base text-gray-400 bg-amber-50 w-fit h-20 px-4 py-2">
                        1SmartVVURsMUZr2JSjF5aZ2mwAWMDDbU
                      </p>
                    </div>
                  </div>
                </div>

                {/* Column 2  */}
                <div className="flex-1 min-w-[250px]">
                  <div className="flex  mb-4">
                    <Image
                      src="/icon-footer.svg"
                      alt="Smart Mixer Logo"
                      width={35}
                      height={35}
                      className="rounded-2xl font-bold"
                      priority
                    />
                    <h6 className="text-blue-400 text-base  sm:text-lg lg:text-xl font-semibold  ml-4 pt-2">
                      Official Tor mirror
                    </h6>
                  </div>
                  <div className="relative flex items-center">
                    {/* Scrollable Text */}
                    <div
                      ref={scrollRef2}
                      className="overflow-x-auto whitespace-nowrap scrollbar-hide px-6"
                    >
                      <p className="inline-block text-sm sm:text-base text-gray-400 bg-amber-50 w-fit h-20 px-4 py-2 ">
                        smrtmxdxognxhv64.onion
                      </p>
                    </div>
                  </div>
                </div>

                {/* Column 3*/}
                <div className="flex-1 min-w-[250px] h-25">
                  <div className="flex  mb-4">
                    <Image
                      src="/icon-footer.svg"
                      alt="Smart Mixer Logo"
                      width={35}
                      height={35}
                      className="rounded-2xl font-bold"
                      priority
                    />

                    <h6 className="text-blue-400 text-base  sm:text-lg lg:text-xl font-semibold ml-4 pt-2">
                      Stay connected with us
                    </h6>
                  </div>
                  <p className="flex items-center justify-center gap-3 bg-amber-50 w-78 h-20 px-4 py-2">
                    <img
                      src="/email_icon.png"
                      alt="email"
                      width={50}
                      height={50}
                      className=" object-contain"
                    />
                    <img
                      src="/telegram.svg"
                      alt="Twitter"
                      width={50}
                      height={50}
                      className=" object-contain"
                    />
                  </p>
                </div>
              </div>
            </div>
            {/* Footer Section navbar menu */}
            <div className="  mt-10 flex flex-col gap-5">
              <div className="bg-amber-50 max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center md:items-start md:justify-between gap-12 px-4 md:px-8 pb-0">
                {/* Left: navigation (5 menu items) */}
                <nav
                  className="flex flex-wrap justify-start  mt-7 gap-2 md:gap-8 text-sm md:text-base w-full md:w-auto"
                  aria-label="Footer navigation"
                >
                  <a
                    href="/"
                    className="text-gray-700 hover:text-blue-400 hover:underline"
                  >
                    Home
                  </a>
                  <a
                    href="#"
                    className="text-gray-700 hover:text-blue-400 hover:underline"
                  >
                    Start Mixing
                  </a>
                  <a
                    href="#"
                    className="text-gray-700 hover:text-blue-400 hover:underline"
                  >
                    Referral
                  </a>
                  <a
                    href="/faq"
                    className="text-gray-700 hover:text-blue-400 hover:underline"
                  >
                   FAQ
                  </a>
                  <a
                    href="#"
                    className="text-gray-700 hover:text-blue-400 hover:underline"
                  >
                   Fees
                  </a>
                </nav>

                {/* Right: short paragraph (1 line, 3-4 words) + 2 images */}
                <div className="flex flex-col sm:flex-row items-center justify-center md:justify-end gap-4 md:gap-8 text-center md:text-right mt-7">
                  <p className="text-gray-500 text-sm md:text-base whitespace-nowrap">
                    SmartMixer App <span className="bg-pink-600 text-white font-semibold">  Soon  </span>
                  </p>

                  {/* Images */}
                  <div className="flex items-center justify-center gap-4 sm:gap-8">
                    <img
                      src="/playStore.png"
                      alt="Play Store"
                      className="h-10 w-32 sm:h-12 sm:w-36 object-contain"
                    />
                    <img
                      src="/appStore.png"
                      alt="App Store"
                      className="h-10 w-32 sm:h-12 sm:w-36 object-contain"
                    />
                  </div>
                </div>
              </div>

              {/* Copyright */}

              <div className="bg-amber-50 flex flex-row flex-wrap sm:flex-nowrap items-center justify-center text-center gap-2 pt-6 mt-8 text-base sm:text-lg md:text-xl text-gray-500 font-medium whitespace-nowrap">
                <span>Copyright ⓒ 2020</span>
                <p className="font-semibold text-gray-700">SmartMixer</p>
                <span>- All rights reserved</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
