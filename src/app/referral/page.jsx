import React from "react";
import Header2 from "../component/Header2";
import Referralsection from "./Referral-section";
import Allpagefront from "../component/All-page-front";
import Footer from "../component/Footer";

const page = () => {
  return (
    <div>
      <Header2 />
      <Allpagefront heading="Become an Affiliate" />
      <Referralsection />
      <Footer />
    </div>
  );
};

export default page;
