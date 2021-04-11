import React from "react";
import AppLoader from "./AppLoader";
import Space from "./Space";
import colors from "../../config/colors";
import "./Button.css";

const Button = ({
  children,
  _onClick,
  _loading,
  _disabled,
  _hidden,
  _iconName,
  _className
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
        <button className={["app-btn", _className].join(" ")} disabled={true}>
          <AppLoader _height={15}></AppLoader>
        </button>
      )}
    </>
  );
};

export default Button;
