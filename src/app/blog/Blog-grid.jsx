"use client";
import React from "react";
import { MdRemoveRedEye } from "react-icons/md";

const blogData = [
  {
    id: 1,
    title: "Cryptocurrency Mixing and Crypto Mergers and Acquisitions",
    date: "January 17, 2020",
    views: "329",
    img: "/b1.jpg",
    desc: "Crypto mergers and acquisition is defining how crypto companies are doing business in the post ICO era. However, how are other factors in the space important is seeing a success in such ventures? Read here for more.",
  },
  {
    id: 2,
    title: "The Best Cryptocurrency Tumblers in the Market",
    date: "January 10, 2020",
    views: "3039",
    img: "/b2.jpg",
    desc: "Cryptocurrency mixers help crypto users to attain privacy while transacting online. Everyone should use them and this article tells you of the three leading tumblers. Read on for more info",
  },
  {
    id: 3,
    title: "Buy Bitcoin Anonymously",
    date: "January 03, 2020",
    views: "4759",
    img: "/b3.jpg",
    desc: "How to buy Bitcoin anonymously must be one of the issues that post-novice cryptocurrency enthusiasts grapple with. Well, this narrative explains how, so, read on.",
  },
  {
    id: 4,
    title: "Setting up a Bitcoin Wallet",
    date: "December 27, 2019",
    views: "5191",
    img: "/b4.jpg",
    desc: "If you want to hold or trade in Bitcoin, you first have to familiarize yourself with the process of setting up a Bitcoin wallet. The process is not complicated as it sounds, but if you find it so, here are some",
  },
  {
    id: 5,
    title: "Using the Tor Browser to Enter the Darknet",
    date: "December 20, 2019",
    views: "5840",
    img: "/b5.jpg",
    desc: "Getting information of buying products and services in the darknet is cumbersome. However, using the Tor browser can make it easy and anonymous. Read here to find out more.",
  },
  {
    id: 6,
    title: "How to Delete Your Digital Footprint",
    date: "December 13, 2019",
    views: "7887",
    img: "/b6.jpg",
    desc: "The information you put online can come to haunt you. However, if you know how to delete your digital footprint, then you have nothing to worry about. Read more here to learn how to be safe.",
  },
  {
    id: 7,
    title: "Encrypting Disks and USB",
    date: "December 06, 2019",
    views: "10302",
    img: "/b7.jpg",
    desc: "Encrypting disks is an essential part of prudent computer use. In this era of privacy breaches, you have to know how to do it right. Read here on how to.",
  },
  {
    id: 8,
    title: "All You Need to Know About Virtual Private Servers",
    date: "November 30, 2019",
    views: "10261",
    img: "/b8.jpg",
    desc: "Virtual Private Servers help users create networks that foster safe and secure communication that are cost effective. Read here to learn more.",
  },
  {
    id: 9,
    title: "Facts About Virtual Private Networks that You Should Know",

    date: "November 22, 2019",
    views: "15383",
    img: "/b9.jpg",
    desc: "Virtual Private Networks (VPN) help users to wade through the net privately and securely. They have other uses that are spelled in this narrative. Read here to learn more.",
  },
  {
    id: 10,
    title: "Messenger Apps that Offer Whole Anonymity?",
    date: "November 17, 2019",
    views: "15765",
    img: "/b10.jpg",
    desc: "Messenger apps bring convenience to communication. However, privacy is a problem. These apps discussed here provide whole anonymity. Read on for more.",
  },
  {
    id: 11,
    title: "Cryptocurrencies offering whole anonymity",
    date: "November 09, 2019",
    views: "15926",
    img: "/b1.jpg",
    desc: "Most digital coins are pseudonymous. However, there are a few cryptocurrencies offering whole anonymity. Read here about the technology that makes them unique.",
  },
  {
    id: 12,
    title: "Is Bitcoin Anonymous?",
    date: "November 01, 2019",
    views: "12191",
    img: "/b12.jpg",
    desc: "Bitcoin attracted many users who thought it offers wholesome privacy. However, is Bitcoin anonymous? Many say it is, a good many do not agree? You want to find out? Read on.",
  },
  {
    id: 13,
    title: "What is a Hardware Wallet?",
    date: "Octuber 27, 2019",
    views: "12430",
    img: "/b2.jpg",
    desc: "If you have been in the cryptocurrency scene for a while, then it is highly likely that you have come across the brands TREZOR, Ledger Nano, and KeepKey. Read on and learn more about these as they are some of the available Bitcoin hardware wallets",
  },
  {
    id: 14,
    title: "Are Cryptocurrencies Anonymous?",
    date: "Octuber 19, 2019",
    views: "12596",
    img: "/b14.png",
    desc: "Ten years ago, the question “are cryptocurrencies anonymous?” raged, it still does. Do you have the right answer? Why not read on and find out?",
  },
  {
    id: 15,
    title: "Why Mixing Cryptocurrencies Is Important",
    date: "Octuber 13, 2019",
    views: "15373",
    img: "/b15.png",
    desc: "Have you ever attempted cryptocurrency mixing? Why did you do it, and do you know why it is so important? Read on to find out.",
  },
  {
    id: 16,
    title: "How Do You Achieve the Most Anonymous Mixing?",
    date: "Octuber 08, 2019",
    views: "12013",
    img: "/b16.png",
    desc: "In every way there is nothing in anything that you can anonymize completely. However, we'll show you how to make tracking your transactions as difficult as possible.",
  },
  {
    id: 17,
    title: "What is a Cryptocurrency Mixer?",
    date: "September 24, 2019",
    views: "16256",
    img: "/b17.png",
    desc: "A cryptocurrency mixer or tumbler is an online platform that allows users to obscure their cryptocurrency transactions. It does this by putting the user’s coins among a pool of crypto and then sending it to...",
  },
  {
    id: 18,
    title: "Purchase Goods and Services Anonymously",
    date: "September 04, 2019",
    views: "15253",
    img: "/b18.png",
    desc: "Cryptocurrency users think purchasing goods and services is anonymous. Learn how to enhance your privacy when purchasing with Bitcoin.",
  },
];

const Bloggrid = () => {
  return (
    <div className="px-4 sm:px-8 md:px-16 py-12 min-h-screen">
      

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogData.map((item) => (
          <div
            key={item.id}
            className="flex-1 bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 pb-8"
          >
            <div className="relative">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-56 object-cover"
              />
              {/* wave design */}
              <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
                <svg
                  viewBox="0 0 500 50"
                  preserveAspectRatio="none"
                  className="w-full h-10"
                >
                  <path
                    d="M0,30 C150,70 350,0 500,30 L500,50 L0,50 Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>

            <div className="p-4 text-center">
              <h6 className="text-lg font-semibold text-blue-950 mb-4">
                {item.title}
              </h6>

              <div className="flex justify-between items-center text-blue-600 text-[11px] sm:text-sm mt-8">
                <div className="flex items-center gap-2">
                  <img
                    src="/dateimg.svg"
                    alt="date"
                    className="w-8 h-6 opacity-600"
                  />
                  <span>{item.date}</span>
                </div>

                <div className="flex items-center gap-1">
                  <MdRemoveRedEye className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="font-medium">{item.views}</span>
                </div>
              </div>

              <p className="text-gray-500 text-md leading-relaxed mt-8">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bloggrid;
