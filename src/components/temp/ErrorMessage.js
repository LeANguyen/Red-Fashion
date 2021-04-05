import React from "react";
import AppButton from "../common/AppButton";

const ErrorMessage = ({
  _text = "There is a connection error!!!",
  _onClick
}) => {
  // this is just a template
  return (
    <div className="text-center">
      <p className="text-danger">{_text}</p>
      <AppButton
        _text="Reload"
        _variant="outline-info"
        _iconName="refresh"
        _iconLeft
        _onClick={_onClick}
      ></AppButton>
    </div>
  );
};

export default ErrorMessage;
