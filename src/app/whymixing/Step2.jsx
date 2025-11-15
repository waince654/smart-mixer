import React from "react";

const Step2 = () => {
  return (
    <div className="w-full mx-auto flex flex-col items-center px-6 mt-10 py-10 bg-gray-50 rounded-2xl shadow-md">
      <div className="max-w-6xl mx-auto   flex flex-col md:flex-row items-center md:items-start justify-between gap-8 md:gap-12 p-4  mt-10  ">
        {/* LEFT SIDE */}
        <div className="flex flex-col md:w-2/3 bg-blue-50 p-6      ">
          {/* Circle + Heading Horizontal */}
          <div className="flex items-center    gap-6 mt-6 -ml-14  ">
            {/* Small Circle */}
                <div className="w-16 h-16 bg-gray-300 rounded-full   flex items-center justify-center text-white text-4xl font-bold mb-6">
          2
        </div>
            {/* Heading */}
            <h5 className="text-xl md:text-2xl font-semibold text-gray-300  mb-4">
              Mixing in the Pool
            </h5>
          </div>

          {/* Paragraph */}
          <p className="mt-4  bg-white   p-6 px-10     w-full text-gray-400 text-md md:text-lg leading-relaxed">
            After your cryptocurrencies have been assigned to a pool, they will
            be mixed with other cryptocurrencies from the sources mentioned
            above. In doing so, the SmartMixer breaks all connections between
            the real sender and the receiver. In the end, you get coins that are
            not traceable to you.
          </p>
        </div>

        {/* RIGHT SIDE – IMAGE */}
        <div className="md:w-1/3 flex justify-center md:justify-end">
          <img
            src="/step2.png"
            alt="Right Side"
            className="w-40 sm:w-50 md:w-58 lg:w-69 h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Step2;
