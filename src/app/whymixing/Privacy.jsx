import React from "react";
import Threesection from "./Threesection";

const Privacy = () => {
  return (
    <div className="bg-blue-50 h-auto p-20">
      <Threesection heading="Do I really need to mix to protect my privacy?" />
      <div className="md:max-w-6xl h-auto mx-auto">
        <p className="mt-2 max-w-4xl text-center mx-auto p-2 text-gray-500 text-sm  md:text-lg leading-relaxed">
          If you value your privacy, then there is no better way to use
          cryptocurrencies anonymously than to mix them. People who are able to
          connect your identity to your wallet can see all your transactions and
          balance. These people could be friends you are sending funds to or
          third parties that you pay for services and goods. By mixing your
          coins, all this information ceases to exist and you can send, spend
          and store cryptocurrencies.
        </p>
      </div>
      <div className="md:max-w-4xl bg-white mt-8  p-6 h-auto mx-auto">
        <h5 className="text-blue-400 font-bold text-xl mt-4 mb-4  "  >Did you know ?</h5>
        <ul className="text-blue-900  text-sm   md:text-[16px] leading-loose  ">
          <li>
            - The many governments employ special agents whose only assignment
            is to analyse the Blockchain and gather information about Bitcoin
            transactions of their citizens
          </li>
          <li>
            - Your spending habits and all other Bitcoin activities can be
            tracked by anyone who knows you and your wallet address
          </li>
          <li>
            - Blockchain analysis makes it easier for hackers, kidnappers and
            other criminals to find wealthy target who they can scam.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Privacy;
