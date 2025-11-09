"use client";

import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white text-center pb-16 shadow-none border-none ">
      <nav className="max-w-7xl mx-auto flex items-center justify-between p-4 lg:px-8 mt-4 font-17px color-black-750">
        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-8 font-medium mt-4 text-gray-700">
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
              href="#"
              className="inline-block hover:text-indigo-600 hover:-translate-y-1 transition"
            >
              Referral
            </a>
          </li>
          <li>
            <a
              href="#"
              className="inline-block hover:text-indigo-600 hover:-translate-y-1 transition"
            >
              Fees
            </a>
          </li>
          <li>
            <a
              href="#"
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
        {/* Logo */}
        <div className="flex items-center space-x-4 font-weight-bold">
          <a
            href="#"
            className="flex items-center gap-2 rounded-full bg-gray-36 p-2 shadow-sm hover:shadow-xl hover:-translate-y-0.5 transition-shadow duration-300"
          >
            <img
              src="/telegram.svg"
              alt="Logo"
              className="h-8 w-auto"
            />
          </a>

          {/* Desktop Button */}
          <div className="hidden lg:block  font-weight-bold" >
            <a
              href="#"
              className=" flex items-center gap-2 rounded-3xl font-sans bg-gray-36 p-3 shadow-sm hover:shadow-xl hover:-translate-y-0.5 transition-shadow duration-300"
            >
              Support
            </a>
          </div>
        </div>

        {/* Mobile Button */}
        <button
          className="lg:hidden p-2 text-gray-700 rounded-md hover:bg-gray-100"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <XMarkIcon className="w-6 h-6" />
          ) : (
            <Bars3Icon className="w-6 h-6" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <ul className="flex flex-col space-y-2 p-4 font-medium text-gray-700">
            <li>
              <a href="#" className="block hover:text-indigo-600">
                Why Mixing
              </a>
            </li>
            <li>
              <a href="#" className="block hover:text-indigo-600">
                Referral
              </a>
            </li>
            <li>
              <a href="#" className="block hover:text-indigo-600">
                Fees
              </a>
            </li>
            <li>
              <a href="#" className="block hover:text-indigo-600">
                FAQ
              </a>
            </li>
            <li>
              <a href="#" className="block hover:text-indigo-600">
                Blog
              </a>
            </li>
          </ul>
          <div className="flex justify-center lg:justify-start">
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full font-sans bg-gray-30 px-4 py-2 text-sm shadow-sm hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
            >
              Support
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
