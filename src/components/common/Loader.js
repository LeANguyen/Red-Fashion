import React from "react";
import LoaderMod from "react-loader-spinner";
import colors from "../../configs/colors";

const Loader = ({
  _width = 100,
  _height = 100,
  _color = colors.light,
  _type = "ThreeDots"
}) => {
  return (
    <LoaderMod
      className="text-center"
      color={_color}
      type={_type}
      height={_height}
      width={_width}
    />
  );
};

export default Loader;
