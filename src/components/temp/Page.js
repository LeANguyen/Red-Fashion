import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Page = ({ children, _variant, _custom }) => {
  return (
    <div
      className={
        "app-page" +
        (_variant ? " bg-" + _variant : " bg-light") +
        (_custom ? " " + _custom : "")
      }
    >
      <Header></Header>
      {children}
      <Footer></Footer>
    </div>
  );
};

export default Page;
