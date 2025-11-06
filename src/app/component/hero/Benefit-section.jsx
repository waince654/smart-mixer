import React from "react";
import Image from "next/image";

const Benefitsection = () => {
  const data = [
    {
      id: 1,
      img: "/how1.svg",

      desc: "Smartly Anonymous – No Logs",
      detail:
        "Smartmixer gives you 100% anonymity. All details of transactions will be deleted immediately after a successful mixing. The link to check the status of the mixing process will be deleted 24 hours after or can be manually deleted by the user.",
    },
    {
      id: 2,
      img: "/how2.svg",

      desc: "Smart Interface - No Sign-Up",
      detail:
        "You don't need to share with us any personal information such as email. Additionally, we don't ask you to create an account in order to use our service. Smartmixer has no account system.",
    },
    {
      id: 3,
      img: "/how3.svg",

      desc: "Smart Referral Program - 70% Commission",
      detail:
        "Earn cryptocurrencies by recommending people to use our program to enhance their privacy. Simply send your referral link to the user and earn up to 70% commission on the fees for every mining operation they make!",
    },
    {
      id: 4,
      img: "/how2.svg",

      desc: "Smart and Reliable",
      detail:
        "You can count on us anytime! Our smart development team always delivers on its promise! If you still have problems or questions, we are always available for you. We often respond within 24 hours.",
    },
    {
      id: 5,
      img: "/how3.svg",

      desc: "Smart and Easy to Use",
      detail:
        "Smartmixer is as simple as ABC! Simply enter the destination address, specify the amount of fee, the preferred delay duration and send the coins to be mixed. You will receive clean coins at the destination address.",
    },
    {
      id: 6,
      img: "/how1.svg",

      desc: "Smart Accesses – Mix with Tor Browser",
      detail:
        "Do you want even more privacy and security? Smartmixer is also available through the Tor-Browser. You can access it with this link.",
    },
  ];

  return (
    <>
      <div>
        {/* smart mixer works section */}
        <div className=" mt-20 sm:mt-16 lg:mt-0">
          <div className="px-4 sm:px-8 lg:px-16 py-8 md:py-12">
            <div className="relative mt-5 flex justify-center items-center">
              <Image
                src="/lines.svg"
                alt="lines"
                width={300}
                height={300}
                className="w-auto h-auto"
              />
            </div>

            <div className="text-center">
              <h3 className="text-blue-950 mt-6 font-sans-serif-25px text-xl sm:text-2xl md:text-3xl lg:text-[42px] font-bold ">
                Our Smart Benefits
              </h3>
            </div>
          </div>
        </div>
      </div>

      {/* benefit section cards   */}

      <div className="  py-10 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {data.map((item) => (
            <div key={item.id} className="bg-white  rounded-2xl p-5 ">
              {/* Header Section */}
              <div className="flex items-center justify-between mb-3 py-6 gap-3">
                <div className="flex items-center   gap-3">
                  <Image
                    src={item.img}
                    alt="benefit icon"
                    width={42}
                    height={42}
                    className="object-contain   w-auto h-auto"
                  />
                </div>
                <p className="text-lg  text-blue-950  font-medium text-center  ">
                  {item.desc}
                </p>
              </div>

              {/* Detail Paragraph */}
              <p className="text-gray-500 leading-relaxed text-sm sm:text-base md:text-md lg:text-lg font-sans-serif-10px opacity-80 ">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
      {/* read me button */}
      <div className="flex justify-center items-center min-h-[18vh]">
        <button className="px-10 py-1 lg:py-3 text-lg font-semibold text-white bg-blue-300 rounded-4xl hover:bg-gray-500 transition-all duration-300 shadow-md active:scale-95 sm:px-10 sm:py-4">
          Read more
        </button>
      </div>
    </>
  );
};

export default Benefitsection;
