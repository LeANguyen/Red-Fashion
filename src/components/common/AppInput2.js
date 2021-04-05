import React from "react";

const AppInput2 = ({
  _placeholder,
  _onChange,
  _inputType = "text",
  _iconName,
  _width,
  _onKeyPress,
  _maxLength,
  _value,
  _className
}) => {
  // global properties
  const variant = "bg-white";
  const textVariant = "text-dark";

  return (
    <div
      className={[
        "border-bottom",
        _width ? "w-" + _width : "",
        variant,
        textVariant,
        _className
      ].join(" ")}
    >
      <div className="input-group">
        {/* icon */}
        {_iconName && (
          <span
            className={[
              "input-group-text border-0 rounded-pill",
              variant,
              textVariant
            ].join(" ")}
          >
            <i className={"fa fa-" + _iconName}></i>
          </span>
        )}

        {/* input */}
        <input
          maxLength={_maxLength}
          type={_inputType}
          className={[
            "form-control shadow-none border-0 rounded-pill",
            variant,
            textVariant
          ].join(" ")}
          placeholder={_placeholder}
          onChange={_onChange}
          onKeyPress={_onKeyPress}
          onInput={event => {
            if (event.target.value.length > _maxLength)
              event.target.value = event.target.value.slice(0, _maxLength);
          }}
          value={_value}
        ></input>
      </div>
    </div>
  );
};

export default AppInput2;
