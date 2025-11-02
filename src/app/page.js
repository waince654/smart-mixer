import React from "react";
import Header from "./component/Header";
import Herointro from "./component/hero/Hero-intro";
import Logoarea from "./component/hero/Logo-area";
import Utubelink from "./component/hero/Utubelink";
import Section from "./component/hero/Section";

const Page = () => {
  return (
    <>
      <Header />
      <Herointro />
      <Logoarea />
      <Utubelink />
      <br />
      <Section />
      <div className="mt-3">my name is waince</div>
    </>
  );
};

export default Page;
