import React from "react";
import Image from "next/image";

const Herointro = () => {
  return (
    <div className="font-sans-serif-13px">
      <div className="items-center justify-center flex mx-auto -mt-4">
        <Image
          src="/mainIcon.gif"
          alt="Smart Mixer Logo"
          width={550}
          height={136}
          className="rounded-3xl font-extra-bold"
          priority
        />
      </div>
     
      <div className="text-center mt-4">
        <h1 className="text-3xl font-bold text-blue-950 mb-2 font-sans-serif-32px">
          Act Smart! - Value your Privacy
        </h1>
        <h1 className="text-[28px] font-bold text-blue-950 mt-4 font-sans-serif-27px">
          Make your Cryptos untraceable
        </h1>
        <p className="text-2xl font-light text-blue-500  mt-6 font-sans-serif-24px">
         Select the desired coin and Mix Now!
        </p>
      </div>
    </div>
  );
};

export default Herointro;
