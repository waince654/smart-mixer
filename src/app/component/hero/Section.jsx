import Image from "next/image";

const Section = () => {
  return (
    <>
      <>
        <div className="bg-gradient-to-b from-blue-50 to-blue-0 min-h-screen">
          <div className="px-4 sm:px-8 lg:px-16 py-8 md:py-12">
            <div className="relative mt-9 flex justify-center">
              <Image
                src="/lines.svg"
                alt="lines"
                width={300}
                height={300}
                className="w-auto h-auto"
              />
            </div>

            <h3 className="text-blue-950 mt-6 font-sans-serif-32px text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center md:text-left">
              What is SmartMixer?
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-6">
              {/* LEFT: Video */}
              <div className="p-2 md:p-4">
                <section className="flex justify-center items-start">
                  <div className="w-full max-w-3xl">
                    {/* Responsive embed: 16:9 on small screens, taller on md+ */}
                    <div className="relative pt-[56.25%] md:pt-[102%] overflow-hidden rounded-2xl shadow-2xl">
                      <iframe
                        className="absolute inset-0 w-full h-full"
                        src="https://www.youtube.com/embed/1RZSbFXUVdw?si=m53tttlO42OYC7PI"
                        title="YouTube Video"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                </section>
              </div>

              {/* RIGHT: Text column */}
              <div className="relative w-full md:aspect-[477/703] max-w-full md:max-w-[477px]   ">
                <div className="absolute inset-0 flex flex-col p-6 md:p-8">
                  <p className="text-blue-900 font-sans-serif-18px text-justify leading-relaxed tracking-wider mt-2 text-sm sm:text-base md:text-base">
                    Bitcoin and other Cryptocurrencies are an excellent way to
                    stay anonymous when you do online purchases, peer-to-Peer
                    payments and more. However, cryptocurrencies do not afford
                    you complete anonymity since all activities and transactions
                    are recorded in the open-source software, called the
                    blockchain. Meaning, people can check your past transactions
                    and trace your funds by just entering your Bitcoin address.
                  </p>

                  <p className="text-blue-900 font-sans-serif-18px text-justify leading-relaxed tracking-wider mt-4 text-sm sm:text-base md:text-base">
                    When you use cryptocurrencies to buy products online, third
                    parties can track your transactions and relate it to your
                    identity, as you need to provide your address and personal
                    information.
                  </p>

                  <p className="text-blue-900 font-sans-serif-18px text-justify leading-relaxed tracking-wider mt-4 text-sm sm:text-base md:text-base">
                    However, you can leave no trace and assume complete
                    anonymity using Smartmixer. The program allows you to mix
                    your coins with help of the platform’s pools. This means,
                    your Cryptocurrencies will be mixed with hundreds of
                    Bitcoins and other Cryptocurrencies, leading to a guaranteed
                    confusion of the trail back to the funds' original source.
                    As a result, you end up with clean, untraceable coins.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* smart mixer works section */}
        <div className="bg-gradient-to-b from-blue-50 to-blue-0 mt-20 sm:mt-16 lg:mt-0">
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
                How SmartMixer Works?
              </h3>
              <p className="text-lg font-light text-blue-500 mt-4 sm:mt-6 font-sans-serif-15px">
                Receive clean and untraceable Cryptos in 3 simple steps!
              </p>
            </div>
          </div>
        </div>
      </>

      {/*boxes step 1,2,3*/}

      <div className="flex justify-center items-center  py-10 ">
        <div className="flex flex-wrap justify-center gap-7">
          {/* Box 1 */}
          <div className="w-70 bg-white rounded-2xl p-8 flex flex-col items-center">
            {/* Center Logo */}
            <div className="flex justify-center">
              <Image
                src="/step-1.svg"
                alt="step 1 logo"
                width={135}
                height={135}
                className="object-contain w-auto h-auto"
              />
            </div>

            {/* Word + Small Logo */}
            <div className="w-full mt-4 flex items-center justify-center gap-4  ">
              <span className="text-4xl font-bold text-blue-950">Step</span>
              <Image src="/one.svg" alt="Small Logo 1" width={42} height={42} />
            </div>

            {/* Paragraph */}
            <p className="mt-6 text-center text-lg w-70 text-blue-950 font-sans-serif-10px">
              Enter Address and Send Coins
            </p>
          </div>

          {/* Box 2 */}
          <div className="w-70 bg-white rounded-2xl  p-8 flex flex-col items-center">
            <div className="flex justify-center">
              <Image
                src="/step-2.gif"
                alt="step 2 logo"
                width={135}
                height={135}
                className="object-contain w-auto h-auto"
              />
            </div>

            {/* Word + Small Logo */}
            <div className="w-full mt-4 flex items-center justify-center gap-4 ">
              <span className="text-4xl font-bold text-blue-950">Step</span>
              <Image src="/two.svg" alt="Small Logo 2" width={45} height={45} />
            </div>

            <p className="mt-6 text-center text-lg w-70 text-blue-950 font-sans-serif-10px">
              We Mix Your Coins
            </p>
          </div>

          {/* Box 3 */}
          <div className="w-70 bg-white rounded-2xl  p-8 flex flex-col items-center">
            <div className="flex justify-center">
              <Image
                src="/step-3.svg"
                alt="step 3 logo"
                width={180}
                height={180}
                className="object-contain w-auto h-auto"
              />
            </div>

            {/* Word + Small Logo */}
            <div className="w-full mt-4 flex items-center justify-center gap-4 ">
              <span className="text-4xl font-bold text-blue-950">Step</span>
              <Image
                src="/three.svg"
                alt="Small Logo 3"
                width={42}
                height={42}
              />
            </div>

            <p className="mt-6 text-center text-lg w-70 text-blue-950 font-sans-serif-10px">
              Receive Untraceable Coins
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center min-h-[18vh]">
        <button className="px-10 py-1 lg:py-3 text-lg font-semibold text-white bg-blue-300 rounded-4xl hover:bg-gray-500 transition-all duration-300 shadow-md active:scale-95 sm:px-10 sm:py-4">
          Read more
        </button>
      </div>
    </>
  );
};

export default Section;
