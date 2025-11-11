"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is Smartmixer?",
    answer:
      "Smartmixer is a cryptocurrency mixing service that increases the privacy and anonymity of your crypto transactions by breaking the connection between sender and receiver addresses.",
  },
  {
    question: "How do I use Smartmixer?",
    answer:
      "Using Smartmixer is easy: choose your crypto, enter your receiving address, select delay and distribution, and start mixing securely.",
  },
  {
    question: "What is a Smart Code?",
    answer:
      "A Smart Code helps you ensure you don’t receive your own previously mixed coins again in future transactions.",
  },
  {
    question: "How many Confirmations are needed?",
    answer:
      "The required confirmations depend on the cryptocurrency, usually 1–6 confirmations are enough before processing your mix.",
  },
  {
    question: "How does it work?",
    answer:
      "Smartmixer takes incoming transactions, breaks them into smaller parts, mixes them with others, and sends them to your destination addresses—ensuring unlinkable transactions.",
  },
  {
    question: "How anonymous am I when using Smartmixer?",
    answer:
      "Smartmixer doesn’t log or store any data, ensuring full anonymity. No records of IPs, wallet addresses, or transactions are kept.",
  },
  {
    question: "What other possibilities do I have with Smartmixer?",
    answer:
      "You can customize distribution, delay times, and select multiple receiving addresses to enhance privacy further.",
  },
  {
    question: "Can I support/promote you?",
    answer:
      "Yes! You can support us by sharing Smartmixer with your community or becoming an affiliate partner.",
  },
  {
    question: "Can I use Smartmixer with Tor-Browser?",
    answer:
      "Absolutely. Smartmixer supports Tor for maximum privacy and protection against tracking.",
  },
  {
    question:
      "How can you avoid a return of same coins when no data is saved?",
    answer:
      "Smartmixer uses Smart Codes to ensure your old coins are never sent back to you, even without storing any data.",
  },
  {
    question: "Can I contact you?",
    answer:
      "Yes, you can reach out to our support team via the contact form on our website or by email anytime.",
  },
];

export default function Faqsection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className=" py-16 px-4 sm:px-8 lg:px-16">
      

      <div className="space-y-4 max-w-4xl mx-auto ">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-blue-200 rounded-2xl shadow-lg hover:shadow-md transition-shadow duration-300 bg-white"
          >
            <button
              onClick={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
              className="w-full flex justify-between items-center p-4 sm:p-5 text-left"
            >
              <span className="font-medium text-gray-800 text-sm sm:text-base lg:text-xl">
                {faq.question}
              </span>
              <ChevronDown
                className={`w-5 h-5 text-blue-800 transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>

            {openIndex === index && (
              <div className="px-4 sm:px-5 pb-4 sm:pb-5 text-blue-900 text-sm sm:text-base  lg:text-lg  leading-relaxed border-t border-blue-100 animate-fadeIn">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
