import React from "react";
import Threesection from "./Threesection";

const Privacy = () => {
  return (
    <>
      {/* SVG Wave */}
      <div className="-mb-26 left-0 w-full overflow-hidden leading-none">
        <svg
          width="100%"
          height="254"
          viewBox="0 0 1000 254"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,254 L0,127 L10,124.86406838268728 L20,122.73024467200669 L30,120.60063469434103 L40,118.4773401176273 L50,116.3624563772643 L60,114.25807060817073 L70,112.1662595850351 L80,110.08908767278987 L90,108.0286047893324 L100,105.98684438250358 L110,103.9658214233202 L120,101.9675304174419 L130,99.99394343683491 L140,98.04700817357505 L150,96.12864601771082 L160,94.24075016108335 L170,92.38518372897475 L180,90.56377794142823 L190,88.77833030605512 L200,87.03060284411183 L210,85.3223203515976 L220,83.6551686970891 L230,82.03079315799167 L240,80.45079679684918 L250,78.91673887931478 L260,77.43013333534401 L270,75.99244726512875 L280,74.60509949124634 L290,73.26945915845306 L300,71.98684438250358 L310,70.75852094932979 L320,69.58570106586298 L330,68.46954216373183 L340,67.41114575701727 L350,66.41155635519098 L360,65.47176043231067 L370,64.59268545348928 L380,63.77519895959891 L390,63.02010771111267 L400,62.32815689192957 L410,61.70002937396788 L420,61.13634504325309 L430,60.637660188165185 L440,60.204466950449174 L450,59.83719283953063 L460,59.5362003106155 L470,59.30178640699056 L480,59.13418246687753 L490,59.033553895130254 L500,59 L510,59.033553895130254 L520,59.13418246687753 L530,59.30178640699056 L540,59.53620031061551 L550,59.837192839530644 L560,60.204466950449174 L570,60.63766018816517 L580,61.13634504325307 L590,61.700029373967865 L600,62.32815689192955 L610,63.02010771111267 L620,63.77519895959891 L630,64.59268545348928 L640,65.47176043231067 L650,66.41155635519098 L660,67.41114575701728 L670,68.46954216373183 L680,69.58570106586299 L690,70.75852094932978 L700,71.98684438250358 L710,73.26945915845305 L720,74.60509949124634 L730,75.99244726512873 L740,77.43013333534402 L750,78.91673887931476 L760,80.45079679684916 L770,82.03079315799167 L780,83.6551686970891 L790,85.3223203515976 L800,87.03060284411183 L810,88.77833030605512 L820,90.56377794142821 L830,92.38518372897474 L840,94.24075016108334 L850,96.12864601771082 L860,98.04700817357505 L870,99.99394343683491 L880,101.96753041744188 L890,103.9658214233202 L900,105.98684438250356 L910,108.02860478933242 L920,110.08908767278987 L930,112.16625958503512 L940,114.2580706081707 L950,116.3624563772643 L960,118.47734011762729 L970,120.60063469434103 L980,122.73024467200668 L990,124.86406838268728 L1000,126.99999999999999 L1000,254 Z"
            fill="#F9FAFB"
          />
        </svg>
      </div>
      <div className="bg-gray-50 h-auto p-20">
        <Threesection heading="Do I really need to mix to protect my privacy?" />
        <div className="md:max-w-6xl h-auto mx-auto">
          <p className="mt-2 max-w-4xl text-center mx-auto p-2 text-gray-500 text-sm  md:text-lg leading-relaxed">
            If you value your privacy, then there is no better way to use
            cryptocurrencies anonymously than to mix them. People who are able
            to connect your identity to your wallet can see all your
            transactions and balance. These people could be friends you are
            sending funds to or third parties that you pay for services and
            goods. By mixing your coins, all this information ceases to exist
            and you can send, spend and store cryptocurrencies.
          </p>
        </div>
        <div className="md:max-w-4xl bg-white mt-8  p-6 h-auto mx-auto">
          <h5 className="text-blue-400 font-bold text-xl mt-4 mb-4  ">
            Did you know ?
          </h5>
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
    </>
  );
};

export default Privacy;
