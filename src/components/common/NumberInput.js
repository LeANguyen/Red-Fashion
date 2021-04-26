import React, { useState } from "react";
import Button from "./Button";
import styles from "./NumberInput.module.scss";
const NumberInput = ({
  _placeholder,
  _onChange,
  _iconName,
  _width,
  _onKeyPress,
  _maxLength,
  _value,
  _wrapperClass = styles["input"],
  _iconClass = "bg-white",
  _inputClass = "bg-white"
}) => {
  const [value, setValue] = useState(_value);
  return (
    <div className="d-flex">
      <Button
        _className={`btn-green ${styles["plus-btn"]}`}
        _iconName="plus"
        _onClick={() => {
          const newValue = value;
          setValue(newValue + 1);
        }}
      ></Button>
      <div className={[_width ? "w-" + _width : "", _wrapperClass].join(" ")}>
        <div className="input-group">
          {/* icon */}
          {_iconName && (
            <span
              className={[
                "input-group-text border-0 rounded-pill",
                _iconClass
              ].join(" ")}
            >
              <i className={"fa fa-" + _iconName}></i>
            </span>
          )}

          {/* input */}
          <input
            className={[
              "form-control shadow-none border-0 rounded-pill",
              _inputClass
            ].join(" ")}
            min="0"
            maxLength={_maxLength}
            type="number"
            placeholder={_placeholder}
            onChange={_onChange}
            onKeyPress={_onKeyPress}
            onInput={event => {
              if (event.target.value.length > _maxLength) {
                event.target.value = event.target.value.slice(0, _maxLength);
                event.target.value = Math.abs(event.target.value);
              }
            }}
            value={value}
          ></input>
        </div>
      </div>
      <Button
        _className={`btn-red ${styles["minus-btn"]}`}
        _iconName="minus"
        _onClick={() => {
          const newValue = value;
          setValue(newValue - 1);
        }}
      ></Button>
    </div>
  );
};

export default NumberInput;
