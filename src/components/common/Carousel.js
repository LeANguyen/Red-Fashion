import React from "react";

const Carousel = ({ _id, _images }) => {
  // global properties
  const height = "500px";

  return (
    <div id={_id} className="carousel slide bg-dark" data-ride="carousel">
      <ol className="carousel-indicators">
        {_images.map((image, i) => {
          if (i === 0) {
            return (
              <li
                data-target={"#" + _id}
                data-slide-to={i}
                className="active"
              ></li>
            );
          } else {
            return <li data-target={"#" + _id} data-slide-to={i}></li>;
          }
        })}
      </ol>
      <div className="carousel-inner">
        {_images.map((image, i) => {
          if (i === 0) {
            return (
              <div className="carousel-item active">
                <div className="d-flex justify-content-center">
                  <img
                    className="d-block"
                    src={image}
                    alt=""
                    height={height}
                  ></img>
                </div>
              </div>
            );
          } else {
            return (
              <div className="carousel-item">
                <div className="d-flex justify-content-center">
                  <img
                    className="d-block"
                    src={image}
                    alt=""
                    height={height}
                  ></img>
                </div>
              </div>
            );
          }
        })}
      </div>
      <a
        className="carousel-control-prev"
        href={"#" + _id}
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href={"#" + _id}
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
};

export default Carousel;
