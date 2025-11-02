import React from "react";
import Header from "./component/Header";
import Herointro from "./component/hero/Hero-intro";
import Logoarea from "./component/hero/Logo-area";
import Utubelink from "./component/hero/Utubelink";
import Section from "./component/hero/Section";
import Benefitsection from "./component/hero/Benefit-section";

const Page = () => {
  return (
    <>
      <Header />
      <Herointro />
      <Logoarea />
      <Utubelink />
      <br />
      <Section />
      <Benefitsection />
      <div className="mt-3">my name is waince</div>
    </>
  );
};

export default Page;
