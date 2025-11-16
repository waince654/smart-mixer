"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const scenarios = [
  {
    id: "s1",
    title: "Send Crypto's to Friends",
    text: `
On the left is Lisa who uses Smartmixer to send cryptocurrencies to friends and relatives anonymously. Lisa is a crypto-enthusiast who loves the fact that cryptocurrencies allow her to transfer value easily without third-parties. But what she didn't know was that her friends and relatives can easily check the transaction history of her wallet and the amount she has therein with help of the Blockchain.
         

Since she knew about Smartmixer, Lisa uses it to send cryptocurrencies anonymously by just entering the recipient’s address. Through Smartmixer, all connections between the sender and recipient are encrypted. As result, the recipient will see an unknown address, instead of Lisa's.`,
    logo: "/boy.svg",
  },
  {
    id: "s2",
    title: "Value Your Privacy",
    text: `On the left is Mia who uses Smartmixer because she prioritizes her privacy. Mia is somewhat a privacy nerd. In her opinion, no one should collect information about her, and that's her right! Mia uses all kinds of options to stay private in the internet, like VPN servers that hide her IP address, and encrypted communication systems etc.
Whenever Mia wants to shop online and has the option to pay in cryptocurrencies, she does so via Smartmixer. When she pays from her private wallet, the merchant can connect the wallet with Mia's identity and that is something she is not excited about. Mia values her privacy!  `,
    logo: "/girl.svg",
  },
  {
    id: "s3",
    title: "Anonymous Salaries",
    text: `
On the left is Frank who uses Smartmixer to hide his huge balances. Frank is an entrepreneur and has gotten a fortune from his businesses. He currently, runs a business in the cryptocurrency industry that pays out salaries to his employees via cryptocurrency. Because he doesn't want his employees to see the amount of funds remaining in the company's wallet, Frank uses Smartmixer to hide the real company's address.

Frank uses Smartmixer to pay his own salaries as well so that his accountants and anyone who may access the company's wallet, cannot see the balance of his personal wallet. With Smartmixer, he hides his huge fortunes.`,
    logo: "/men.svg",
  },
  {
    id: "s4",
    title: "Anonymous Investing",
    text: `This is Cheng. He uses Smartmixer to invest in Cryptocurrency Trading and Mining, although it's not allowed in his country. Cheng lives in China, where trading and mining with cryptocurrency is strictly forbidden. However, Cheng is highly convinced about the capabilities and the future of the technology of cryptocurrencies and would like to increase his funds. Cheng asks himself,

“Why should I let a state forbid me from investing something so grand?”

Cheng searched for a solution and found Smartmixer. He invests with SmartMixer, and withdraws his profits to a brand new wallet with SmartMixer. By doing so, no one can trace anything back to Cheng. Cheng can now invest and increase his Cryptocurrency funds anonymously, even though it is forbidden in his country.`,
    logo: "/old.svg",
  },
];

export default function Sceneriosection() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowRight") setActive((p) => (p + 1) % scenarios.length);
      if (e.key === "ArrowLeft")
        setActive((p) => (p - 1 + scenarios.length) % scenarios.length);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <>
      <div className=" mt-20 sm:mt-16 lg:mt-0">
        <div className="px-4 sm:px-8 lg:px-16 py-8 md:py-12">
          <div className="relative mt-5 flex justify-center items-center">
            <Image
              src="/lines.svg"
              alt="lines"
              width={300}
              height={300}
              className="w-auto h-auto"
            />
          </div>

          <div className="text-center">
            <h3 className="text-blue-950 mt-6 font-sans-serif-25px text-xl sm:text-2xl md:text-3xl lg:text-[42px] font-bold ">
              Scenarios
            </h3>
          </div>
        </div>
      </div>

      <section className="max-w-6xl mx-auto px-4 py-10">
        {/* Main Scenario  */}
        <div className="relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={scenarios[active].id}
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -50, opacity: 0 }}
              transition={{ duration: 0.45 }}
              className="flex flex-col md:flex-row items-center bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-6 md:p-8"
            >
              {/* Left logo  */}
              <div className="flex flex-col md:flex-row items-center w-full  md:w-[100%]  ">
                <div className="flex-shrink-0 w-full md:w-1/3 flex items-center md:justify-end p-4 md:p-6">
                  <div className="relative w-36 h-36 md:w-44 md:h-44 lg:w-52 lg:h-52">
                    <Image
                      src={scenarios[active].logo}
                      alt={scenarios[active].title}
                      fill
                      className="object-contain rounded-xl"
                    />
                  </div>
                </div>

                {/* Right content  */}
                <div className="w-full md:w-1/2 pl-0 md:pl-8 mt-4 md:mt-0 md:mb-6">
                  <h4 className="text-2xl md:text-4xl font-bold text-blue-400 ">
                    {scenarios[active].title}
                  </h4>
                  <p className="mt-3 text-sm md:text-base leading-relaxed    text-blue-950 dark:text-slate-300">
                    {scenarios[active].text}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* 4 clickable logos  */}
        <div className="mt-12 flex justify-center flex-wrap gap-4 md:gap-6">
          {scenarios.map((s, i) => (
            <button
              key={s.id}
              onClick={() => setActive(i)}
              className={`w-16 sm:w-20 md:w-24 lg:w-28 h-16 sm:h-20 md:h-24 lg:h-28 rounded-lg p-2 transition-all duration-300 
              ${active === i ? "scale-105 " : "opacity-58 hover:opacity-200"}`}
            >
              <div className="relative w-full h-full">
                <Image
                  src={s.logo}
                  alt={s.title}
                  fill
                  className="object-contain rounded-md"
                />
              </div>
            </button>
          ))}
        </div>
      </section>
    </>
  );
}
