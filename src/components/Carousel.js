import React from "react";
import carousel1 from "../assets/1.jpg";
// import carousel2 from "../assets/2.jpeg";
// import carousel3 from "../assets/3.jpg";

const Carousel = () => {
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-ride="carousel"
      style={
        {
          // borderWidth: "thick",
          // borderColor: "black",
          // borderStyle: "solid"
        }
      }
    >
      <ol className="carousel-indicators">
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="0"
          className="active"
        ></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>

      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            className="d-block w-100"
            src={carousel1}
            alt="First slide"
            width="100vw"
          />
        </div>
        <div className="carousel-item">
          <img
            className="d-block w-100"
            src={carousel1}
            alt="Second slide"
            width="100vw"
          />
        </div>
        <div className="carousel-item">
          <img
            className="d-block w-100"
            src={carousel1}
            alt="Third slide"
            width="100vw"
          />
        </div>
      </div>

      <a
        className="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
};

export default Carousel;
