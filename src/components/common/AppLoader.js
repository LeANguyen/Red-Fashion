import React from "react";
import Loader from "react-loader-spinner";
import colors from "../../config/colors";

const AppLoader = ({
  _width = 100,
  _height = 100,
  _color = colors.light,
  _type = "ThreeDots"
}) => {
  return (
    <Loader
      className="text-center"
      color={_color}
      type={_type}
      height={_height}
      width={_width}
    />
  );
};

export default AppLoader;
