import React, { useState, useEffect } from "react";
import Page from "../components/Page";

import itemApi from "../APIs/itemApi";
import useApi from "../hooks/useApi";

// import carousel1 from "../assets/1.jpg";
// import carousel2 from "../assets/2.jpeg";
// import carousel3 from "../assets/3.jpg";
// import colors from "../../configs/colors";
import AboutUs from "../components/page/HomePage/AboutUs";
import Loader from "../components/common/Loader";
import ItemCardList from "../components/page/HomePage/ItemCardList";
import ItemSearch from "../components/page/HomePage/ItemSearch";

const HomePage = () => {
  return (
    <Page>
      <div className="bg-3">
        <div className="container py-5">
          <ItemSearch></ItemSearch>
        </div>
      </div>

      {/* item card list */}
      <div className="bg-1">
        <div className="container">
          <br></br>
          <ItemCardList></ItemCardList>
          <br></br>
        </div>
      </div>

      {/* About us section */}
      <div className="bg-2">
        <div className="container">
          <br></br>
          <br></br>
          <AboutUs></AboutUs>
          <br></br>
          <br></br>
        </div>
      </div>
    </Page>
  );
};

export default HomePage;
