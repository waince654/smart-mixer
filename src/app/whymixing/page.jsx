import React from "react";
import Section from "./Section";
import Header2 from "../component/Header2";
import Allpagefront from "../component/All-page-front";

const page = () => {
  return (
    <div>
      <Header2 />
      <Allpagefront
        heading="Why Mixing?"
        para=" A cryptocurrency mixer, also called a blender, allows you to spend, store and send cryptocurrencies anonymously without anyone knowing your identity. By using our SmartMixer service, your cryptocurrencies get mixed in a pool full of other coins. By doing so, we ensure whatever you send cannot be traced back to you."
      />

      <Section />
    </div>
  );
};

export default page;
