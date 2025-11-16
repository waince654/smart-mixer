import React from "react";

const Step2 = () => {
  return (
    <>
        {/* SVG Wave */}
      <div className="-mb-16 left-0 w-full overflow-hidden leading-none">
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
    <div className="w-full mx-auto flex flex-col items-center px-6 mt-10 py-10 bg-gray-50 rounded-2xl shadow-md">
      <div className="max-w-6xl mx-auto   flex flex-col md:flex-row items-center md:items-start justify-between gap-8 md:gap-12 p-4  mt-10  ">
        {/* LEFT SIDE */}
        <div className="flex flex-col md:w-2/3 bg-blue-50 p-6      ">
          {/* Circle + Heading Horizontal */}
          <div className="flex items-center    gap-6 mt-6 -ml-14  ">
            {/* Small Circle */}
                <div className="w-16 h-16 bg-gray-300 rounded-full   flex items-center justify-center text-white text-4xl font-bold mb-6">
          2
        </div>
            {/* Heading */}
            <h5 className="text-xl md:text-2xl font-semibold text-gray-300  mb-4">
              Mixing in the Pool
            </h5>
          </div>

          {/* Paragraph */}
          <p className="mt-4  bg-white   p-6 px-10     w-full text-gray-400 text-md md:text-lg leading-relaxed">
            After your cryptocurrencies have been assigned to a pool, they will
            be mixed with other cryptocurrencies from the sources mentioned
            above. In doing so, the SmartMixer breaks all connections between
            the real sender and the receiver. In the end, you get coins that are
            not traceable to you.
          </p>
        </div>

        {/* RIGHT SIDE – IMAGE */}
        <div className="md:w-1/3 flex justify-center md:justify-end">
          <img
            src="/step2.png"
            alt="Right Side"
            className="w-40 sm:w-50 md:w-58 lg:w-69 h-auto object-contain"
          />
        </div>
      </div>
    </div>
    </>
  );
};

export default Step2;
