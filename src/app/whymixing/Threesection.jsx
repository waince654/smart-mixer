import React from 'react'
import Image from 'next/image'

const Threesection = () => {
  return (
    <div>
      <div className="mt-20 sm:mt-16 lg:mt-0 w-full max-w-5xl mx-auto">
        <div className="px-4 sm:px-8 lg:px-16 py-8 md:py-12">

          {/* Image Section */}
          <div className="relative mt-5 flex justify-center items-center">
            <Image
              src="/lines.svg"
              alt="lines"
              width={300}
              height={300}
              className="w-20 sm:w-36 md:w-48 lg:w-auto h-auto"
            />
          </div>

          {/* Heading Section */}
          <div className="text-center">
            <h3 className="text-blue-950 mt-6 font-sans-serif-25px 
              text-lg sm:text-2xl md:text-3xl lg:text-[42px] 
              font-bold leading-snug">
              Your Cryptos will go through a process with 3 Steps
            </h3>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Threesection
