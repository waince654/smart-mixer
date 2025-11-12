import React from "react";

const Feesfile = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 bg-white rounded-2xl shadow-sm mt-10">
      {/* Top Paragraphs */}
      <p className="text-gray-400 text-lg leading-relaxed mb-4">
        We value your privacy; it is the reason why we aggravate any analysis on
        the blockchain by using a basic charge on miners' fee instead of using
        the minimal fee amounts.
      </p>
      <p className="text-gray-400 text-lg   leading-relaxed mb-6">
        On your first mixing operation, the platform will assign you a unique
        code called 'Smart Code'. The code prevents you from receiving the same
        coins you have mixed before at Smartmixer and gives you the possibility
        to profit from a membership discount on future mixing operations. This
        discount will be automatically calculated depending on the total amount
        on each currency you have mixed through the service. There are multiple
        discount levels. These can be viewed in following table:
      </p>

      {/* Responsive Table */}
      <div className="overflow-x-auto">
        <table className="w-full border border-gray-300 rounded-lg overflow-hidden text-sm sm:text-base">
          <thead>
            <tr className="bg-blue-100 text-blue-400 text-left">
              <th className="p-4 border border-gray-300 w-[25%]">Currency</th>
              <th className="p-4 border border-gray-300 w-[25%]">
                Min. Service Fee
              </th>
              <th className="p-4 border border-gray-300 w-[50%]">
                Miners' Fee per receiving address *
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-blue-50">
              <td className="p-4">	Bitcoin</td>
              <td className="p-4 ">1%</td>
              <td className="p-4 ">0.00023225 BTC</td>
            </tr>
            <tr >
              <td className="p-4 ">Litecoin</td>
              <td className="p-4 ">1%</td>
              <td className="p-4 ">	0.035 LTC</td>
            </tr>
            <tr className="bg-blue-50">
              <td className="p-4">Bitcoin Cash</td>
              <td className="p-4 ">1%</td>
              <td className="p-4">	0.00523225 BCH</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Bottom Paragraphs */}
      <p className="text-gray-400 text-lg  leading-relaxed mt-6">
        * What is a miner's fee? - Miners are responsible for confirming
        transactions in the cryptocurrency network. For confirming transactions,
        the miner will be credited a financial reward (miner's fee) depending on
        the network congestion. Without the miners, the cryptocurrency network
        wouldn't function, since the miners secure the network and make
        transactions even possible. This concept enables the network to attain
        financial autonomy.
      </p>
      <p className="text-gray-400 text-lg leading-relaxed mt-3">
        * Note! - The miner's fee isn't charged by SmartMixer, but by the
        cryptocurrency network.
      </p>
    </div>
  );
};

export default Feesfile;
