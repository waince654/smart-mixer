"use client";

import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { IoMdArrowDropdown } from "react-icons/io";

export default function Header2() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="flex items-center justify-between w-full">
      <div className="hidden md:flex items-center justify-center pl-4 pr-58 ml-6 mt-6">
        <Image
          src="/mainIcon.gif"
          alt="Smart Mixer Logo"
          width={250}
          height={145}
          className="rounded-3xl font-extra-bold"
          priority
        />
      </div>
      <div className="w-full">
        <nav className="max-w-full mx-auto flex items-center justify-between p-4 lg:px-8 font-17px color-black-750">
          {/*  Mobile Telegram  + Menu Icon  */}
          <div className="flex w-full items-center justify-between lg:hidden">
            {/* Telegram*/}
            <a
              href="#"
              className="flex items-center gap-2 rounded-full bg-gray-36 p-2 shadow-sm hover:shadow-xl hover:-translate-y-0.5 transition-shadow duration-300"
            >
              <img src="/telegram.svg" alt="Logo" className="h-8 w-auto" />
            </a>

            {/* Hamburger / Cross  */}
            <button
              className="p-2 text-gray-700 rounded-md hover:bg-gray-100"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? (
                <XMarkIcon className="w-6 h-6" />
              ) : (
                <Bars3Icon className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex  space-x-8 text-lg font-medium pl-25  mt-4 text-gray-700">
            <li>
              <a
                href="/"
                className="inline-block hover:text-indigo-600 hover:-translate-y-1 transition"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="inline-block hover:text-indigo-600 hover:-translate-y-1 transition"
              >
                Why Mixing
              </a>
            </li>
            <li>
              <a
                href="referral"
                className="inline-block hover:text-indigo-600 hover:-translate-y-1 transition"
              >
                Referral
              </a>
            </li>
            <li>
              <a
                href="/fees"
                className="inline-block hover:text-indigo-600 hover:-translate-y-1 transition"
              >
                Fees
              </a>
            </li>
            <li>
              <a
                href="/faq"
                className="inline-block hover:text-indigo-600 hover:-translate-y-1 transition"
              >
                FAQ
              </a>
            </li>
            <li>
              <a
                href="/blog"
                className="inline-block hover:text-indigo-600 hover:-translate-y-1 transition"
              >
                Blog
              </a>
            </li>
          </ul>

          {/* Desktop Right Icons */}
          <div className="hidden lg:flex justify-end space-x-4 font-weight-bold ml-2">
            <a
              href="#"
              className="flex items-center gap-2 rounded-full bg-gray-36 p-2 shadow-sm hover:shadow-xl hover:-translate-y-0.5 transition-shadow duration-300"
            >
              <img src="/telegram.svg" alt="Logo" className="h-8 w-auto" />
            </a>

            <div className="font-weight-bold">
              <a
                href="#"
                className="flex items-center gap-2 rounded-3xl font-sans bg-gray-36 p-3 shadow-sm hover:shadow-xl hover:-translate-y-0.5 transition-shadow duration-300"
              >
                Support
              </a>
            </div>
            <div className="font-weight-bold">
              <a
                href="#"
                className="flex items-center gap-2 rounded-3xl font-sans bg-gray-36 p-3 shadow-sm hover:shadow-xl hover:-translate-y-0.5 transition-shadow duration-300"
              >
                <Image
                  src="/en-flag.svg"
                  alt="en-flag"
                  width={20}
                  height={20}
                  className="rounded-full font-bold"
                  priority
                />
                EN
                <IoMdArrowDropdown />
              </a>
            </div>
          </div>
        </nav>

        {/*  Mobile Menu  */}
        {menuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200">
            <ul className="flex flex-col items-center space-y-3 p-4 font-medium text-gray-700 text-center">
              <li>
                <a href="/" className="hover:text-indigo-600 transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-600 transition">
                  Why Mixing
                </a>
              </li>
              <li>
                <a href="/referral" className="hover:text-indigo-600 transition">
                  Referral
                </a>
              </li>
              <li>
                <a href="/fees" className="hover:text-indigo-600 transition">
                  Fees
                </a>
              </li>
              <li>
                <a href="/faq" className="hover:text-indigo-600 transition">
                  FAQ
                </a>
              </li>
              <li>
                <a href="/blog" className="hover:text-indigo-600 transition">
                  Blog
                </a>
              </li>
            </ul>

            {/* Buttons below menu */}
            <div className="flex flex-col items-center space-y-3 pb-4">
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-full font-sans bg-gray-30 px-4 py-2 text-sm shadow-sm hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
              >
                Support
              </a>
              <a
                href="#"
                className="flex items-center gap-2 rounded-3xl font-sans bg-gray-36 px-4 py-2 shadow-sm hover:shadow-xl hover:-translate-y-0.5 transition-shadow duration-300"
              >
                <Image
                  src="/en-flag.svg"
                  alt="en-flag"
                  width={20}
                  height={20}
                  className="rounded-full font-bold"
                  priority
                />
                EN
                <IoMdArrowDropdown />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
