import React from "react";
import Header from "./common/Header";
import Footer from "./Footer";

const Screen = ({ children }) => {
  return (
    <div>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      ></link>
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdn.datatables.net/1.10.22/css/jquery.dataTables.css"
      ></link>
      <script
        type="text/javascript"
        charset="utf8"
        src="https://cdn.datatables.net/1.10.22/js/jquery.dataTables.js"
      ></script>{" "}
      <Header></Header>
      {children}
      <Footer></Footer>
    </div>
  );
};

export default Screen;
