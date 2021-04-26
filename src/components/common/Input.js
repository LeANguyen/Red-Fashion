import React from "react";

const Input = ({
  _placeholder,
  _onChange,
  _inputType = "text",
  _iconName,
  _width,
  _onKeyPress,
  _maxLength,
  _value,
  _wrapperClass = "border p-1 rounded bg-white",
  _iconClass = "bg-white",
  _inputClass = "bg-white"
}) => {
  return (
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
          type={_inputType}
          placeholder={_placeholder}
          onChange={_onChange}
          onKeyPress={_onKeyPress}
          onInput={event => {
            if (event.target.value.length > _maxLength) {
              event.target.value = event.target.value.slice(0, _maxLength);
              if (_inputType === "number") {
                event.target.value = Math.abs(event.target.value);
              }
            }
          }}
          value={_value}
        ></input>
      </div>
    </div>
  );
};

export default Input;
