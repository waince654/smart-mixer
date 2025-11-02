import React from "react";
import Image from "next/image";

const Utubelink = () => {
  return (
    <>
      <div className="flex justify-center items-center gap-3 mt-10 mb-4">
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline text-center mt-2 font-sans-serif-18px"
        >
          Understand SmartMixer in less than 30 seconds
        </a>
        <div className="shadow-2xl rounded-lg animate-pulse hover:animate-none transition-all duration-300 ">
          <Image
            src="/preview.png"
            alt="preview"
            width={125}
            height={125}
            className="rounded-2xl w-auto h-auto  "
          />
        </div>
      </div>
    </>
  );
};

export default Utubelink;
