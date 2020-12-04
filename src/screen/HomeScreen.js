import React from "react";
import Screen from "../components/Screen";
import Video from "../components/Video";
import Carousel from "../components/Carousel";
import CardList from "../components/CardList";

const HomeScreen = () => {
  return (
    <div>
      <Screen>
        <div className="row">
          <div className="col-md-12">
            <Carousel></Carousel>
          </div>
        </div>

        <div className="row">
          <div className="col-12 bg-dark py-5">
            <h1 className="bg-dark text-center">LATEST PRODUCT</h1>
            <CardList></CardList>
          </div>
        </div>

        <div className="row m-5">
          <div className="col-lg-8">
            <Video></Video>
          </div>
          <div className="col-lg-4 bg-dark shadow-lg rounded text-white">
            <div className="bg-light rounded-bottom">
              <h1 className="text-center" style={{ color: "palevioletred" }}>
                About Us
              </h1>
            </div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
        </div>
      </Screen>
    </div>
  );
};

export default HomeScreen;
