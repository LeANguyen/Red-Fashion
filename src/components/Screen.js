import React from "react";
import Header from "./Header";
import Footer from "./Footer";
const Screen = ({ children }) => {
  return (
    <div>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      ></link>
      <Header></Header>
      {children}
      <Footer></Footer>
    </div>
  );
};

export default Screen;
