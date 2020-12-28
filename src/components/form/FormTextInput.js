import React from "react";

const FormTextInput = ({
  _placeHolder,
  _onChange,
  _inputType = "text",
  _iconName
}) => {
  return (
    <div className="form-group">
      <strong className="text-muted">{_placeHolder + ":"}</strong>
      <div className="input-group">
        <div className="input-group-append">
          <span className="input-group-text rounded-left">
            <i className={"fa fa-" + _iconName}></i>
          </span>
        </div>
        {_inputType !== "number" && (
          <input
            type={_inputType}
            className="form-control"
            placeholder={_placeHolder}
            onChange={_onChange}
          ></input>
        )}
        {_inputType === "number" && (
          <input
            type="number"
            className="form-control"
            step="1"
            max="9999"
            min="1"
            onChange={_onChange}
          ></input>
        )}
      </div>
    </div>
  );
};

export default FormTextInput;
