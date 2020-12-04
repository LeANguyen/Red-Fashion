import React from "react";
import ad from "../assets/ad.mp4";

const Video = () => {
  return (
    <video width="100%" height="100%" controls>
      <source src={ad} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default Video;
