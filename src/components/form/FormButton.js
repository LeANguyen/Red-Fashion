import React from "react";

const FormButton = ({ _text, _onClick, _variant = "info" }) => {
  return (
    <div>
      <button
        className={"btn btn-" + _variant + " rounded-pill py-2 my-4 btn-block"}
        onClick={_onClick}
      >
        {_text}
      </button>
    </div>
  );
};

export default FormButton;
