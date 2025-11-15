import React from "react";
import Image from "next/image";

const Step1 = () => {
  return (
    <div className="w-full mx-auto flex flex-col items-center px-6 mt-10 py-10 bg-gray-50 rounded-2xl shadow-md">

      {/* Outer Box */}
      <div className="w-full max-w-4xl bg-amber-50 mx-auto shadow-lg pb-10 mt-20 px-4 sm:px-10">

        {/* CIRCLE */}
        <div className="w-16 h-16 bg-gray-300 rounded-full mx-auto -mt-8 flex items-center justify-center text-white text-4xl font-bold mb-6">
          1
        </div>

        {/* H5 Heading */}
        <div className="mb-4 text-center">
          <h5 className="text-xl sm:text-2xl font-semibold text-blue-950">
            Assigning coins to a Pool
          </h5>
        </div>

        {/* Paragraph */}
        <div className="max-w-3xl mx-auto text-center mt-6 bg-white py-6 px-4 sm:px-10 rounded-xl">
          <p className="text-gray-400 text-md sm:text-lg leading-relaxed">
            We use 3 different pools with cryptocurrencies of different
            combinations of sources. You can assign your cryptocurrencies to one
            of the three pools by setting the fee to the respective range. The
            higher the percentage, the cleaner the cryptocurrencies inside the pool.
          </p>
        </div>
      </div>

      {/* 3 Horizontal Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl mt-20 px-4">

        {/* Card 1 */}
        <div className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition">
          <Image
            src="/stander.svg"
            alt="img1"
            width={200}
            height={200}
            className="w-40 h-40 sm:w-48 sm:h-48 object-cover rounded-full mx-auto"
          />
          <h6 className="text-lg text-center font-bold text-blue-950 mt-6">
            STANDARD POOL
          </h6>
          <p className="text-gray-400 text-md text-center leading-relaxed mt-6">
            The Standard Pool is a peer-to-peer (P2P) system. Your
            cryptocurrencies will be mixed with the funds of many other clients.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition">
          <Image
            src="/stander.svg"
            alt="img2"
            width={200}
            height={200}
            className="w-40 h-40 sm:w-48 sm:h-48 object-cover rounded-full mx-auto"
          />
          <h6 className="text-lg text-center font-bold text-blue-950 mt-6">
            SMART POOL
          </h6>
          <p className="text-gray-400 text-md text-center leading-relaxed mt-6">
            Works like the Standard Pool but also includes reserves from the
            SmartMixer and funds from investors.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition">
          <Image
            src="/stander.svg"
            alt="img3"
            width={200}
            height={200}
            className="w-40 h-40 sm:w-48 sm:h-48 object-cover rounded-full mx-auto"
          />
          <h6 className="text-lg text-center font-bold text-blue-950 mt-6">
            STEALTH POOL
          </h6>
          <p className="text-gray-400 text-md text-center leading-relaxed mt-6">
            Works without a peer-to-peer system — only SmartMixer reserves and
            investor funds are used in this pool.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Step1;
