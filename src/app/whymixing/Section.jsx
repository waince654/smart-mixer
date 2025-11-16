"use client";
import React, { useState } from "react";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
const Section = () => {
  const [isOn, setIsOn] = useState(false);

  return (
    <div className="flex flex-col md:flex-row  w-[90%] p-6 mx-auto mt-6  ">
      {/* LEFT SIDE */}
      <div className="flex flex-col   md:w-1/3 mb-6 md:mb-0">
        <div className="relative mt-2 ">
          <Image
            src="/lines.svg"
            alt="lines"
            width={300}
            height={300}
            className="w-auto h-auto"
          />
        </div>

        <h3 className="text-blue-950 mt-6 font-sans-serif-32px text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold text-center md:text-left ">
          How does Mixing work?
        </h3>
        <p className="text-gray-400 text-md   mt-8 leading-relaxed">
          There are many ways and methods of successfully making
          cryptocurrencies untraceable. You can find other mixers that deliver
          the same service as we do. However, our approach is unique because our
          main goal is to break the connection between the sender and the
          receiver.
        </p>
      </div>

      {/* RIGHT SIDE */}
      <div className="relative flex items-center justify-end md:w-2/3 w-full">
        {/* Large Image */}
        <Image
          src="/why-mixing1.png"
          alt="Main"
          width={800}
          height={600}
          className="w-full max-w-lg sm:max-w-xl md:max-w-2xl object-cover"
        />

        {/* Overlay content on image */}
        <div className=" flex flex-col items-start space-y-2">
          {/* Paragraph */}
          <p className="text-blue-300 absolute top-4 left-2 lg:left-34 text-sm sm:text-base font-bold drop-shadow-md">
            Without Mixing
          </p>

          {/* Switch + text */}
          <div className="  absolute top-4 right-2    flex items-center space-x-1   px-3 py-2 rounded-full">
            {/* Switch */}
            <button
              onClick={() => setIsOn(!isOn)}
              className={`w-12 h-6 flex items-end rounded-full p-1 transition-all duration-300 ${
                isOn ? "bg-green-500" : "bg-gray-400"
              }`}
            >
              <div
                className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                  isOn ? "translate-x-6" : "translate-x-0"
                }`}
              />
            </button>

            {/* Click here text + arrow with animation */}
            <div className="flex items-center space-x-1 animate-shake">
              <ArrowLeft size={20} className="text-blue-300 " />
              <span className=" text-blue-600 text-md">Click here</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
