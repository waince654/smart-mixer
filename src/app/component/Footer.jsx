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
    <footer className="bg-blue-100 text-blue-950 py-10 px-4  sm:px-8">
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
      <div className="flex flex-col md:flex-row justify-between items-start gap-8">
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

      {/* Copyright */}
      <div className=" flex items-center justify-center text-lg font-medium text-gray-500 mt-10  border-gray-700 pt-4">
        Copyright ⓒ 2020 <p className="font-semibold">SmartMixer</p> - All
        rights reserved
      </div>
    </footer>
  );
}
