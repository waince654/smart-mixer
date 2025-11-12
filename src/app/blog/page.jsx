import React from "react";
import Header2 from "../component/Header2";
import Bloggrid from "./Blog-grid";
import Belowfaq from "../component/hero/Below-faq";
import Footer from "../component/Footer";
import Allpagefront from "../component/All-page-front";

const page = () => {
  return (
    <>
      <div className=" relative w-full ">
        <Header2 />
      </div>
      <Allpagefront heading="Blog"    />
      <Bloggrid />
      <Belowfaq />
      <Footer />
    </>
  );
};

export default page;
