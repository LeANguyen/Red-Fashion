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
  _inputClass = "bg-white",
  _disabled
}) => {
  return (
    <div className={[_width ? "w-100" : "", _wrapperClass].join(" ")}>
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
          onKeyDown={e => {
            if (
              !(
                (
                  (e.keyCode > 95 && e.keyCode < 106) || // numpad numbers
                  (e.keyCode > 47 && e.keyCode < 58) || // numbers
                  [8, 9, 35, 36, 37, 39].indexOf(e.keyCode) >= 0 || // backspace, tab, home, end, left arrow, right arrow
                  (e.keyCode == 65 &&
                    (e.ctrlKey === true || e.metaKey === true)) || // Ctrl/Cmd + A
                  (e.keyCode == 67 &&
                    (e.ctrlKey === true || e.metaKey === true)) || // Ctrl/Cmd + C
                  (e.keyCode == 88 &&
                    (e.ctrlKey === true || e.metaKey === true)) || // Ctrl/Cmd + X
                  (e.keyCode == 86 &&
                    (e.ctrlKey === true || e.metaKey === true))
                ) // Ctrl/Cmd + V
              )
            ) {
              return false;
            }
          }}
          onInput={event => {
            if (event.target.value.length > _maxLength) {
              event.target.value = event.target.value.slice(0, _maxLength);
              if (_inputType === "number") {
                // event.target.value = Math.abs(event.target.value);
                if (event.target.value === "-") return;
                // event.target.value = event.target.value.replace("-", "");
              }
            }
          }}
          value={_value}
          disabled={_disabled}
        ></input>
      </div>
    </div>
  );
};

export default Input;
