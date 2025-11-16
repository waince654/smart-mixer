import Image from "next/image";
import Threesection from "./Threesection";

export default function Protect() {
  return (
    <>
      {/* what is smart mixer */}

      <Threesection heading="How does Mixing protect me ?" />
      <div className="md:max-w-6xl h-auto mx-auto">
        <p className="mt-2  mx-auto   bg-white max-w-5xl text-center p-2 text-gray-600 text-sm  md:text-lg leading-relaxed">
          Choosing not to use a mixer to enforce your privacy is one of the most
          thoughtless decisions you can ever make. Many people forget that
          cryptocurrencies are not wholly anonymous as they would want to
          believe. Rather, they are pseudonymous. Meaning, if one person is able
          to connect your wallet to your identity, he will know everything about
          your finances.
        </p>
        <p className="mt-2 mx-auto bg-white max-w-5xl text-center p-2 text-gray-600 text-sm  md:text-lg leading-relaxed">
          <span className="text-gray-300">Now ask yourself:</span> Would you be
          happy about letting random people know your statement of account and
          its actual balance?
        </p>
        <h5 className="mt-2 mx-auto bg-white max-w-5xl font-bold  text-center p-2 text-blue-900 text-xl  md:text-lg leading-relaxed">
          Mixing protects your identity when you…
        </h5>
      </div>
      {/* 5 items grid */}
      <div className="max-w-5xl mx-auto py-10">
        {/* PARENT GRID */}
        <div className="grid grid-cols-1   justify-center sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* 5 ITEMS */}
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition">
            <Image
              src="/protect1.svg"
              alt="Logo"
              width={70}
              height={70}
              className="mx-auto"
            />
            <p className="mt-4 w-[60%] text-blue-950 font-medium text-lg">
              Automatic Payouts
            </p>
          </div>

          <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition">
            <Image src="/protect2.svg" alt="Logo" width={70} height={70} />
            <p className="mt-4 w-[60%] text-blue-950 font-medium text-lg">
              Purchase Goods /Services online
            </p>
          </div>

          <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition">
            <Image src="/protect3.svg" alt="Logo" width={70} height={70} />
            <p className="mt-4 w-[60%] text-blue-950 font-medium text-lg">
              Store Cryptos in a Wallet
            </p>
          </div>

          <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition">
            <Image src="/protect4.svg" alt="Logo" width={70} height={70} />
            <p className="mt-4 w-[60%] text-blue-950 font-medium text-lg">
              Invest in Crypto in restricted Countries
            </p>
          </div>

          <div className="w-auto h-auto flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition">
            <Image src="/protect5.svg" alt="Logo" width={70} height={70} />
            <p className="mt-4 w-[60%] text-blue-950 font-medium text-lg">
              Manage Company Wallets
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
