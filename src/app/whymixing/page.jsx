import React from "react";
import Section from "./Section";
import Header2 from "../component/Header2";
import Allpagefront from "../component/All-page-front";
import Threesection from "./Threesection";
import Step1 from "./Step1";
import Step2 from "./Step2"
import Step3 from "./Step3";
import Smartcode from "./Smart-code";
import Howtomix from "./Howtomix"

const page = () => {
  return (
    <>
    <div className="w-full overflow-x-hidden px-4 sm:px-6 lg:px-0">
      <Header2 />
      <Allpagefront
        heading="Why Mixing?"
        para=" A cryptocurrency mixer, also called a blender, allows you to spend, store and send cryptocurrencies anonymously without anyone knowing your identity. By using our SmartMixer service, your cryptocurrencies get mixed in a pool full of other coins. By doing so, we ensure whatever you send cannot be traced back to you."
      />
      <Section />
      <Threesection heading="Your Cryptos will go through a process with 3 Steps" />
      <Step1/>
      <Step2/>
      <Step3/>
      <Smartcode/>
     <Howtomix/>
      </div>
    </>
  );
};

export default page;
