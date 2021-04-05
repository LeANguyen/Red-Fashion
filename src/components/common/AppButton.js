import React from "react";
import AppLoader from "./AppLoader";
import Space from "./Space";
import colors from "../../config/colors";

const AppButton = ({
  _text,
  _variant,
  _textVariant,
  _block,
  _onClick,
  _loading,
  _disabled,
  _hidden,
  _iconName,
  _className
}) => {
  // global properties
  const rounded = "rounded-pill";
  const textFontWeight = "font-weight-bold";

  return (
    <>
      {!_loading && (
        <button
          className={[
            "btn py-2",
            _variant ? "btn-" + _variant : "btn-default",
            _textVariant ? "text-" + _textVariant : "",
            _block ? "btn-block" : "",
            rounded,
            textFontWeight,
            _className
          ].join(" ")}
          disabled={_disabled}
          hidden={_hidden}
          onClick={_onClick}
          target="_blank"
        >
          {_iconName && (
            <>
              <i className={"fa fa-" + _iconName}></i>
              <Space></Space>
              <Space></Space>
            </>
          )}
          {_text}
        </button>
      )}
      {_loading && (
        <button
          className={[
            "btn py-2",
            _variant ? "btn-" + _variant : "btn-default",
            _textVariant ? "text-" + _textVariant : "",
            _block ? "btn-block" : "",
            rounded,
            _className
          ].join(" ")}
          disabled={true}
        >
          <AppLoader
            _height={15}
            _color={
              !_variant.includes("outline")
                ? colors.light
                : colors[_variant.replace("outline-", "")]
            }
          ></AppLoader>
        </button>
      )}
    </>
  );
};

export default AppButton;
