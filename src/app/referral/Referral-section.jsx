"use client";
import { Heading6 } from "lucide-react";
import Image from "next/image";

export default function Referralsection() {
  const items = [
    {
      id: 1,
      logo: "/icon1.svg",
      title: "Commission for each Referral",
      color: "text-blue-950",
    },
    {
      id: 2,
      logo: "/level1.svg",
      title: "55 % Commission on the fees",
      color: "text-blue-950",
    },
    {
      id: 3,
      logo: "/level2.svg",
      title: "10 % Commission on the fees",
      color: "text-blue-950",
    },
    {
      id: 4,
      logo: "/level3.svg",
      title: "5 % Commission on the fees",
      color: "text-blue-950",
    },
    {
      id: 5,
      logo: "/icon2.svg",
      title: "Instant and Mixed Payouts",
      color: "text-blue-950",
    },
    { id: 6, logo: null, title: "Yes", color: "text-blue-700" },
    {
      id: 7,
      logo: "/icon3.svg",
      title: "Payout Intervall",
      color: "text-blue-950",
    },
    {
      id: 8,
      logo: null,
      title: "Immediate Credit on your Balance",
      color: "text-blue-700",
    },
    {
      id: 9,
      logo: "/icon4.svg",
      title: "Access to Referral Program",
      color: "text-blue-950",
    },
    {
      id: 10,
      logo: null,
      title: "Lifetime and for Free",
      color: "text-blue-700",
    },
    {
      id: 11,
      logo: "/icon5.svg",
      title: "Affiliate Dashboard with Statistics",
      color: "text-blue-950",
    },
    { id: 12, logo: null, title: "Yes", color: "text-blue-700" },
  ];

  return (
    <>
      <div className="w-[85%]  lg:ml-20  ">
        <div className="w-full  py-2 px-4">
          <div className=" bg-white rounded-2xl  p-6 text-center sm:text-left">
            {/* Image */}
            <div className="relative mt-5 flex justify-center lg:justify-start items-center text-center">
              <Image
                src="/lines.svg"
                alt="lines"
                width={300}
                height={300}
                className="w-auto h-auto"
              />
            </div>

            {/* Heading */}
            <h4 className="mt-4 text-xl sm:text-2xl font-semibold text-blue-950">
              Smartmixer's Referral Program
            </h4>

            {/* Paragraphs */}
            <p className="mt-5 text-blue-950 leading-relaxed text-lg ">
              Earn the highest commissions with Smartmixer's Multilevel Referral
              Program. - Up to 70% Commission!
            </p>

            <p className="mt-5 text-blue-950 leading-relaxed text-lg ">
              For every Referral you introduce to Smartmixer yourself, you will
              earn a 55% commission on all fees the referral pays to use our
              service. For the second and third level, another 10% commission
              and 5% commissions, respectively will be distributed to you on all
              referrals that your referrals invite to Smartmixer! Simply enter
              your Bitcoin address below and share the generated referral link
              with your friends, relatives and partners.
            </p>
          </div>
        </div>

        {/* .... */}
        <div className="w-full px-4 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex items-center  h-60 bg-white rounded-2xl shadow-md p-4 hover:shadow-lg transition"
              >
                {/* Logo (optional) */}
                {item.logo && (
                  <div className="w-25 h-25 flex-shrink-0 mr-4">
                    <Image
                      src={item.logo}
                      alt={item.title}
                      width={100}
                      height={100}
                      className="object-contain"
                    />
                  </div>
                )}

                {/* Heading */}
                <h6
                  className={`font-semibold text-base sm:text-lg ${item.color}`}
                >
                  {item.title}
                </h6>
              </div>
            ))}
          </div>
        </div>
        {/* ..... */}
        <div className="w-full flex justify-center items-center py-10 px-4">
          <div className=" bg-white  p-6 text-center sm:text-left">
            {/* Image */}
            <div className="relative mt-5 flex justify-center ">
              <Image
                src="/lines.svg"
                alt="lines"
                width={300}
                height={300}
                className="w-auto h-auto"
              />
            </div>
            {/* Heading */}
            <h4 className="mt-4 text-2xl sm:text-4xl font-bold text-blue-950  text-center">
              Join the Smartmixer Referral Program
            </h4>
            <h6 className="mt-4 text-lg  font-bold text-blue-950 text-center">
              And start earning on every Mixing Operation your Referrals make,
              lifetime!
            </h6>
          </div>
          {/* input */}
        </div>
        <div className="w-full flex justify-center items-center pb-8 px-4">
          <div className="w-full max-w-xl">
            {/* Label */}
            <label
              htmlFor="btcAddress"
              className="block text-gray-700 font-bold mb-2 text-xl "
            >
              Your Bitcoin Address
            </label>

            {/* Input + Button */}
            <div className="flex items-center bg-blue-50  rounded-md shadow-sm overflow-hidden">
              <input
                id="btcAddress"
                type="text"
                placeholder="Bitcoin address"
                className="flex-grow px-4 py-3 text-sm sm:text-base focus:outline-none"
              />

              <button className="bg-blue-300 text-white px-13 py-3 text-sm sm:text-base font-semibold hover:bg-blue-500 transition-all">
                Join
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
