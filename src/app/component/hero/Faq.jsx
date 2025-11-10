"use client";
import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Link as LinkIcon } from "lucide-react";
import Belowfaq from "./Below-faq";


const faqData = [
  {
    question: "What is your return policy?",
    answer:
      "Smartmixer is a mixing service that enables cryptocurrency holders/users to afford complete anonymity. It is impossible for anyone to trace the connection between your old and new wallets.",
  },
  {
    question: "How long does delivery take?",
    answer: [
      "1. Choose the desired currency you wish to mix.",
      "2. Enter the destination address to receive the clean coins.",
      "Smart Advice: Use more addresses for more anonymity.",
      "3. Set the percentage fee.",
      "Smart Advice: The higher the fee, the more anonymous you are.",
      "4. Set the delay duration.",
      "Smart Advice: The longer the delay duration, the more anonymous the transaction.",
      "5. Download the Letter of Guarantee.",
      "6. Send the coins to the generated address.",
      "7. Receive clean coins.",
    ],
  },
  {
    question: "Do you offer international shipping?",
    answer:
      " A Smart Code is a unique hash that is generated with your first mixing operation. This link is very important, because only with this, we can ensure that a person never receives his ever owned cryptocurrencies. Additionally, this link allows you to benefit from our Smart Loyalty Program. The more you mix with this link, the bigger the discounts on the fees. Just make sure to enter your Smart Code before every Mixing Operation.",
  },
  {
    question: "How can I contact customer support?",
    answer:
      "The transaction will be approved after only 3 confirmations on the blockchain.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-6xl mx-auto px-2 py-12">
      {/* smart mixer works section */}
      <div className=" mt-20 sm:mt-16 lg:mt-0">
        <div className="px-4 sm:px-8 lg:px-16 py-8 md:py-12">
          <div className="relative mt-5 flex justify-center items-center gap-2">
            <div className="mt-5">
              <Image
                src="/lines.svg"
                alt="lines"
                width={300}
                height={300}
                className="w-auto h-auto"
              />
            </div>
            <p className="text-blue-400 mt-6 font-sans-serif-9px text-xl sm:text-2xl md:text-3xl lg:text-[25px] font-bold ">
              FAQ's
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-blue-950 mt-6 font-sans-serif-25px text-md sm:text-xl md:text-2xl lg:text-[25px] font-bold ">
              Frequently Asked Questions
            </h3>
          </div>
        </div>
      </div>

      {/*  Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className="flex items-start bg-white shadow-sm rounded-2xl p-5 sm:p-6 border border-gray-100 hover:shadow-md transition-shadow duration-300"
          >
            {/* Left: Circle + Icon */}
            <button
              onClick={() => toggleFaq(index)}
              className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-transform duration-300"
            >
              <motion.span
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="text-5xl text-gray-200 font-light leading-relaxed"
              >
                {openIndex === index ? "−" : "+"}
              </motion.span>
            </button>

            {/* Right: Question + Answer */}
            <div className="ml-4 flex-1">
              <h6
                onClick={() => toggleFaq(index)}
                className="text-lg  font-semibold cursor-pointer text-blue-400 hover:text-blue-900"
              >
                {faq.question}
              </h6>

              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={
                  openIndex === index
                    ? { height: "auto", opacity: 1 }
                    : { height: 0, opacity: 0 }
                }
                transition={{ duration: 0.9 }}
                className="overflow-hidden text-gray-500 leading-relaxed text-sm sm:text-base md:text-md lg:text-lg font-sans-serif-10px mt-2 space-y-2"
              >
                {Array.isArray(faq.answer) ? (
                  faq.answer.map((line, i) => (
                    <p key={i} className="leading-relaxed">
                      {line}
                    </p>
                  ))
                ) : (
                  <p>{faq.answer}</p>
                )}
              </motion.div>
            </div>
          </div>
        ))}
      </div>
      {/* Read full FAQ button */}
      <div className="flex justify-center mt-8 items-center min-h-[18vh]">
        <button className="px-10 py-1 lg:py-3 text-lg font-semibold text-white bg-blue-300 rounded-4xl hover:bg-gray-500 transition-all duration-300 shadow-md active:scale-95 sm:px-10 sm:py-4">
          Read Full FAQ
        </button>
       
      </div>
      <Belowfaq />
    </section>
  );
}
