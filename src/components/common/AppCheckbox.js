import React from "react";
import Space from "../common/Space";

const AppCheckbox = ({ _text, _textVariant, _onChange }) => {
  // global properties
  const textFontWeight = "font-weight-bold";

  return (
    <label
      className={[
        _textVariant ? "text" + _textVariant : "",
        textFontWeight
      ].join(" ")}
    >
      <input type="checkbox" onChange={_onChange}></input>
      <Space></Space>
      <Space></Space>
      {_text}
    </label>
  );
};

export default AppCheckbox;
