import React from 'react'
import Link from 'next/link'
import { PiGreaterThanBold } from 'react-icons/pi'

const Belowfaq = () => {
  return (
    <div>
       <div className="relative mt-5 flex justify-center items-center gap-2">
        <h4 className="text-blue-900 mt-6 font-sans-serif-16px text-xl sm:text-2xl md:text-3xl lg:text-[35px] font-bold ">
                   Do Something for Your Privacy
        </h4>
        </div>
        <div className="relative mt-4 flex justify-center items-center gap-2">
        <p className="text-center text-blue-600  mt-13 max-w-2xl mx-auto text-xl sm:text-2xl md:text-3xl  ">Be Smart, Be Anonymous!</p>
        </div>
        {/* mix my crpto  button */}
          <div className="flex justify-center mt-8 items-center min-h-[18vh]">
        <Link href="/#">  <button className=" flex lg:px-20 py-1 lg:py-3 gap-9 text-xl font-bold text-white bg-cyan-300 rounded-4xl hover:-translate-y-2 transition-all duration-300 shadow-md active:scale-95 sm:px-20 sm:py-4">
         
          Mix My Cryptos   <span className="mt-2"> <PiGreaterThanBold /></span>
        </button></Link>
       
      </div>
    </div>
  )
}

export default Belowfaq;

