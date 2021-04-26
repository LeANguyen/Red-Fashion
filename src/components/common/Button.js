import React from "react";
import Loader from "./Loader";
import Space from "./Space";
import colors from "../../configs/colors";

const Button = ({
  children,
  _onClick,
  _loading,
  _disabled,
  _hidden,
  _iconName,
  _className = "btn btn-info btn-block"
}) => {
  return (
    <>
      {!_loading && (
        <button
          className={_className}
          disabled={_disabled}
          hidden={_hidden}
          onClick={_onClick}
        >
          {_iconName && <i className={"fa fa-" + _iconName}></i>}
          {_iconName && children && (
            <>
              <Space></Space>
              <Space></Space>
            </>
          )}
          {children}
        </button>
      )}
      {_loading && (
        <button className={_className} disabled={true}>
          <Loader _height={15}></Loader>
        </button>
      )}
    </>
  );
};

export default Button;
