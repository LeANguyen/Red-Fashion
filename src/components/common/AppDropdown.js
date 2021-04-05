import React from "react";
import Space from "./Space";

const AppDropdown = ({
  _text,
  _variant,
  _textVariant,
  _iconName,
  _block,
  _displayToggle,
  _border,
  _className,
  _roundedPill,
  children
}) => {
  // global properties
  const rounded = "rounded-pill";
  const textFontWeight = "font-weight-bold";

  return (
    <>
      <button
        className={[
          "btn shadow-none py-2",
          _border ? "border" : "",
          _variant ? "btn-" + _variant : "btn-default",
          _textVariant ? "text-" + _textVariant : "",
          _block ? "btn-block" : "",
          _displayToggle ? "dropdown-toggle" : "",
          rounded,
          textFontWeight,
          _className
        ].join(" ")}
        data-toggle="dropdown"
      >
        <i className={"fa fa-" + _iconName}></i>
        <Space></Space>
        <Space></Space>
        {_text}
      </button>
      <div className="dropdown-menu">{children}</div>
    </>
  );
};

export default AppDropdown;
