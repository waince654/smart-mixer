import React from "react";
import Faqsection from "./Faq-part";
import Header2 from "../component/Header2";
import Allpagefront from "../component/All-page-front";
import Belowfaq from "../component/hero/Below-faq";
import Footer from "../component/Footer";

const page = () => {
  return (
    <div>
      <Header2 />
      <Allpagefront />
      <Faqsection />
      <Belowfaq />
      <Footer />
    </div>
  );
};

export default page;
