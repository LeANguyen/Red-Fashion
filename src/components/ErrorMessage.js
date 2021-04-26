import React from "react";
import Button from "./common/Button";

const ErrorMessage = ({
  _text = "There is a connection error!!!",
  _onClick
}) => {
  // this is just a template
  return (
    <div className="text-center">
      <strong className="text-pink">
        <i className="fa fa-exclamation-triangle fa-5x"></i>
        {_text}
      </strong>

      <Button _iconName="refresh" _onClick={_onClick} _className="btn-yellow">
        Refresh
      </Button>
    </div>
  );
};

export default ErrorMessage;
