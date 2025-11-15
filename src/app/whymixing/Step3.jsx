import React from "react";
import Image from "next/image";
import Link from "next/link";
import { PiGreaterThanBold } from "react-icons/pi";

const Step3 = () => {
  return (
    <>    <div className="w-full mx-auto flex flex-col items-center px-6 mt-10 py-10 bg-gray-50 rounded-2xl shadow-md">
      <div className="max-w-6xl mx-auto   flex flex-col md:flex-row items-center md:items-start justify-between gap-8 md:gap-12 p-4  mt-10  ">
        {/*LEFT SIDE – IMAGE */}
        <div className="md:w-1/3 flex justify-center mt-10">
          <img
            src="/step3.png"
            alt="Right Side"
            className="w-40 sm:w-50 md:w-58 lg:w-69 h-auto object-contain"
          />
        </div>
        {/* RIGHT SIDE */}
        <div className="flex flex-col md:w-2/3 bg-blue-50 p-6      ">
          {/* Circle + Heading Horizontal */}
          <div className="flex items-center    gap-6 mt-6 -ml-14  ">
            {/* Small Circle */}
            <div className="w-16 h-16 bg-gray-300 rounded-full   flex items-center justify-center text-white text-4xl font-bold mb-6">
              3
            </div>
            {/* Heading */}
            <h5 className="text-xl md:text-2xl font-semibold text-gray-300  mb-4">
              Sending out the Coins to the Provided Receiver Address
            </h5>
          </div>

          {/* Paragraph */}
          <p className="mt-4  bg-white p-6 px-10 w-full text-gray-400 text-md md:text-lg leading-relaxed">
            After making your cryptocurrencies anonymous using our mixing
            process, we send it to the receiver addresses you provide. You are
            at liberty to provide a receiver address of any person or company
            you want to pay, or you can provide your personal addresses if your
            concern is to clear the history of your cryptocurrency transactions.
          </p>
        </div>
      </div>
    </div>
    {/* button mix my cripto */}
    
          <div className="flex justify-center mt-8 items-center min-h-[18vh]">
        <Link href="/#">  <button className=" flex lg:px-16 py-1 lg:py-3 gap-9 text-xl font-bold text-white bg-cyan-300 rounded-2xl hover:-translate-y-2 transition-all duration-300 shadow-md active:scale-95 sm:px-20 sm:py-4">
         
          Mix My Cryptos   <span className="mt-2"> <PiGreaterThanBold /></span>
        </button></Link>
        </div>
    </>
  );
};

export default Step3;
