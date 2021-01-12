import React from "react";
import Loader from "react-loader-spinner";

const FormLoader = () => {
  return (
    <Loader
      className="text-center text-info"
      color="rgb(73, 160, 181)"
      type="ThreeDots"
      height="100"
      width="100"
    />
  );
};

export default FormLoader;
