import React from "react";
import Threesection from "./Threesection";
const Howtomix = () => {
  return (
    <>
      {/* line image */}
      <Threesection heading="How to Mix with SmartMixer?" />
      {/* HOw to mix smart mix */}
      <div className="w-full mx-auto  flex flex-col md:flex-row items-center md:items-start gap-10 p-6">
        {/* LEFT DIV */}
        <div
          className="w-full md:w-1/2 bg-cover bg-center rounded-2xl  relative brightness-100   "
          style={{ backgroundImage: "url('/ellipse1.png')" }}
        >
          {/* number 1 */}
          <div className="w-12 h-12 mx-auto rounded-full bg-white flex items-center justify-center text-blue-700 font-bold shadow-md">
            1
          </div>
          <p className="text-xl font-semibold text-center bg-white rounded-3xl shadow-2xl   md:w-[35%] p-4 mx-auto  mt-4 text-blue-300">
            Choose your currency
          </p>
          <ul className="mt-3 space-y-2 bg-white mx-auto  md:w-[70%]   text-blue-950">
            <li>- Decide between the available currencies</li>
          </ul>
          {/* number 3 */}
          <div className="w-12 h-12 mx-auto rounded-full bg-white flex items-center justify-center text-blue-700 font-bold shadow-md">
            3
          </div>
          <p className="text-xl font-semibold text-center bg-white rounded-3xl shadow-2xl   md:w-[35%] p-4 mx-auto  mt-4 text-blue-300">
            Terms
          </p>
          <ul className="mt-3 space-y-2   bg-white mx-auto  md:w-[70%]   text-blue-950">
            <li>- Read and agree to our terms </li>
          </ul>
          {/* number 5 */}
          <div className="w-12 h-12 mx-auto rounded-full bg-white flex items-center justify-center text-blue-700 font-bold shadow-md">
            5
          </div>
          <p className="text-xl font-semibold text-center bg-white rounded-3xl shadow-2xl   md:w-[35%] p-4 mx-auto  mt-4 text-blue-300">
            Finish
          </p>
          <ul className="mt-3 space-y-2 bg-white mx-auto  md:w-[70%]   text-blue-950">
            <li>
              - The amount will be sent to receiver Address(es) you have
              provided The order page and all other logs will be deleted 24
              hours after at the latest{" "}
            </li>
          </ul>
        </div>

        {/* RIGHT DIV */}
        <div
          className="w-full md:w-1/2 bg-cover bg-center rounded-2xl relative brightness-100"
          style={{ backgroundImage: "url('/ellipse1.png')" }}
        >
          {/* number 2 */}
          <div className="w-12 h-12 mx-auto rounded-full bg-white flex items-center justify-center text-blue-700 font-bold shadow-md">
            2
          </div>
          <p className="text-xl font-semibold text-center bg-white rounded-3xl shadow-2xl   md:w-[35%] p-4 mx-auto  mt-4 text-blue-300">
            Order Details
          </p>
          <ul className="mt-3 space-y-2 p-10  bg-white mx-auto md:w-[70%]   text-blue-950">
            <li>- Enter the receiver address(es) </li>
            <li>- Set the percentage fee </li>
            <li>- Set the delay duration </li>
          </ul>
          {/* number 4 */}
          <div className="w-12 h-12 mx-auto rounded-full bg-white flex items-center justify-center text-blue-700 font-bold shadow-md">
            4
          </div>
          <p className="text-xl font-semibold text-center bg-white rounded-3xl shadow-2xl   md:w-[35%] p-4 mx-auto  mt-4 text-blue-300">
            Send to Address
          </p>
          <ul className="mt-3 space-y-2 p-10  bg-white mx-auto  md:w-[70%]   text-blue-950">
            <li>- Download the Letter of Guarantee</li>
            <li>- Send the amount you wish to mix to the generated address</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Howtomix;
