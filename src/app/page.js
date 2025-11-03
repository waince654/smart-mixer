import React from "react";
import Header from "./component/Header";
import Herointro from "./component/hero/Hero-intro";
import Logoarea from "./component/hero/Logo-area";
import Utubelink from "./component/hero/Utubelink";
import Section from "./component/hero/Section";
import Benefitsection from "./component/hero/Benefit-section";
import Sceneriosection from "./component/hero/Scenerio-section";
import Uptodate from "./component/hero/Up-todate";

const Page = () => {
  return (
    <>
    <div className=" min-h-screen   w-[95%] mx-auto ">
      <Header />
      <Herointro />
      <Logoarea />
      <Utubelink />
      <br />
      <Section />
      <Benefitsection />
      <Sceneriosection />
      <Uptodate />
    </div>
      <div className="mt-3">my name is waince</div>
    </>
  );
};

export default Page;
